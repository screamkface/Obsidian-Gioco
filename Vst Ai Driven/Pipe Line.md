Sì. La pipeline la devi pensare come una **factory automatizzata di dataset**, non come “uno script che converte canzoni in MIDI”.

La forma giusta secondo me è questa:

```text
canzoni licenziate / dataset audio
→ normalizzazione audio
→ metadata: genere, BPM, tonalità
→ separazione in stems
→ trascrizione audio-to-MIDI
→ cleaning MIDI
→ quantizzazione
→ segmentazione in frasi
→ tagging: melody / bass / chords / drums
→ quality filter
→ tokenizzazione
→ dataset finale per Transformer
```

La parte importante: **non usare direttamente canzoni commerciali prese da Spotify/YouTube senza licenza**, soprattutto se vuoi addestrare qualcosa che poi diventa prodotto. L’uso di opere protette per training/TDM in UE è una zona giuridica delicata, con eccezioni ma anche opt-out dei titolari dei diritti. Per un progetto commerciale conviene partire da audio/MIDI licenziati, loop pack acquistati con diritti chiari, dataset open, oppure materiale commissionato a producer. ([EUR-Lex](https://eur-lex.europa.eu/eli/dir/2019/790/oj/eng?utm_source=chatgpt.com "Directive - 2019/790 - EN - dsm - EUR-Lex - European Union"))

## Architettura generale

Io la farei così:

```text
dataset-builder/
  data/
    raw_audio/
      trap/
      house/
      techno/
      drill/
      rnb/
    stems/
    midi_raw/
    midi_clean/
    clips/
    tokens/
  metadata/
    manifest.csv
    tracks.db
  pipeline/
    01_ingest.py
    02_analyze_audio.py
    03_separate_stems.py
    04_transcribe_midi.py
    05_clean_midi.py
    06_segment_phrases.py
    07_quality_filter.py
    08_tokenize.py
  configs/
    pipeline.yaml
```

Il cuore è un file `manifest.csv` dove tracci ogni brano:

```csv
track_id,filepath,genre,source,license,bpm,key,status
track_0001,data/raw_audio/trap/song1.wav,trap,internal,owned,,,
track_0002,data/raw_audio/house/song2.wav,house,loop_pack,licensed,,,
```

Questo file è fondamentale perché dopo vuoi sapere **da dove arriva ogni dato**, che genere ha, che licenza ha e se è utilizzabile per training commerciale.

## Step 1 — Ingestion e normalizzazione audio

Prendi tutti i brani e li converti in un formato standard:

```text
WAV
44.1 kHz o 48 kHz
stereo
loudness normalizzata opzionalmente
nome file stabile
```

Esempio:

```bash
ffmpeg -i input.mp3 -ar 44100 -ac 2 data/processed/audio/track_0001.wav
```

Non fare training direttamente su file random `.mp3`, `.wav`, `.flac`, ecc. Prima li normalizzi.

## Step 2 — Analisi metadata: BPM, tonalità, genere

Per ogni brano estrai:

```text
BPM
beat grid
key / scale
genre
mood opzionale
energy opzionale
vocal / instrumental
```

Per BPM/beat tracking puoi usare `librosa`, che ha funzioni di beat tracking basate su onset strength, stima del tempo e peak picking coerente col tempo stimato. ([Librosa](https://librosa.org/doc/main/generated/librosa.beat.beat_track.html?utm_source=chatgpt.com "librosa.beat.beat_track — librosa 0.11.0 documentation"))

Il genere lo puoi gestire in due modi.

Il modo migliore all’inizio:

```text
genre = nome della cartella o tag manuale nel manifest
```

Esempio:

```text
data/raw_audio/trap/*.wav  → genre = trap
data/raw_audio/house/*.wav → genre = house
```

Il modo più automatico:

```text
audio classifier → genre prediction
```

Per questo puoi usare Essentia, che è una libreria open-source per audio analysis e music information retrieval, con modelli pre-addestrati per analisi, classificazione e auto-tagging musicale. ([essentia.upf.edu](https://essentia.upf.edu/models.html?utm_source=chatgpt.com "Essentia models — Essentia 2.1-beta6-dev documentation"))

Però io non mi fiderei ciecamente del genere predetto. Lo userei così:

```text
genre_manual se disponibile
altrimenti genre_predicted
```

## Step 3 — Separazione in stems

Questa è una delle parti più importanti. Prima di convertire audio in MIDI, separi il brano in parti:

```text
vocals.wav
drums.wav
bass.wav
other.wav
```

Per questo userei **Demucs**. Demucs è un modello di music source separation capace di separare drums, bass, vocals e resto dell’accompagnamento; la versione Hybrid Transformer Demucs usa componenti waveform/spectrogram e Transformer. ([GitHub](https://github.com/facebookresearch/demucs?utm_source=chatgpt.com "facebookresearch/demucs: Code for the paper Hybrid ..."))

Comando tipico:

```bash
demucs -n htdemucs data/processed/audio/track_0001.wav \
  -o data/stems/
```

Output:

```text
data/stems/htdemucs/track_0001/
  vocals.wav
  drums.wav
  bass.wav
  other.wav
```

Perché serve? Perché la trascrizione audio-to-MIDI funziona molto meglio su materiale isolato. Convertire direttamente un master completo in MIDI produce spesso sporcizia.

## Step 4 — Audio-to-MIDI transcription

Qui scegli il trascrittore in base allo stem.

### Per bass, vocals, lead, other

Puoi usare **Basic Pitch** di Spotify. È una libreria Python per automatic music transcription/audio-to-MIDI, leggera e installabile via pip. La documentazione specifica anche che funziona meglio quando l’audio contiene uno strumento alla volta, quindi è perfetta dopo la separazione in stems. ([GitHub](https://github.com/spotify/basic-pitch?utm_source=chatgpt.com "spotify/basic-pitch: A lightweight yet powerful audio-to-MIDI ..."))

Esempio:

```bash
basic-pitch data/midi_raw/track_0001/bass \
  data/stems/htdemucs/track_0001/bass.wav

basic-pitch data/midi_raw/track_0001/other \
  data/stems/htdemucs/track_0001/other.wav
```

### Per trascrizione multi-strumento

Puoi valutare **MT3**, un modello di multi-instrument automatic music transcription basato su T5X. È più ambizioso di Basic Pitch, ma anche più complesso da integrare. ([GitHub](https://github.com/magenta/mt3?utm_source=chatgpt.com "magenta/mt3 - Multi-Task Multitrack Music Transcription"))

C’è anche ricerca più recente tipo YourMT3+, che lavora su multi-instrument transcription e stem augmentation, ma io la considererei più da fase avanzata. ([arXiv](https://arxiv.org/abs/2407.04822?utm_source=chatgpt.com "YourMT3+: Multi-instrument Music Transcription with Enhanced Transformer Architectures and Cross-dataset Stem Augmentation"))

### Per drums

Non trattare la batteria come una melodia normale.

Per drums ti serve una rappresentazione diversa:

```text
KICK
SNARE
HIHAT_CLOSED
HIHAT_OPEN
CLAP
RIM
TOM
CRASH
```

Per il tuo plugin di melodic completion, puoi anche ignorare i drums nella prima versione. Però puoi usare le drums per estrarre groove e densità ritmica.

## Step 5 — Cleaning del MIDI

Questa è la parte che decide se il dataset vale qualcosa.

Dopo Basic Pitch/MT3 otterrai MIDI grezzi. Devi pulirli con regole automatiche.

Usa `pretty_midi`, che è fatto per leggere, modificare, analizzare e riscrivere MIDI in Python. ([craffel.github.io](https://craffel.github.io/pretty-midi/?utm_source=chatgpt.com "pretty_midi 0.2.11 documentation"))

Cleaning minimo:

```python
import pretty_midi

def clean_midi(input_path, output_path):
    midi = pretty_midi.PrettyMIDI(input_path)

    for inst in midi.instruments:
        cleaned = []

        for note in inst.notes:
            duration = note.end - note.start

            # Rimuove glitch troppo corti
            if duration < 0.05:
                continue

            # Range melodico/bass realistico
            if note.pitch < 24 or note.pitch > 108:
                continue

            cleaned.append(note)

        # Ordina e sostituisce
        inst.notes = sorted(cleaned, key=lambda n: n.start)

    midi.write(output_path)
```

Poi devi fare altri passaggi:

```text
merge note duplicate
rimuovi note sovrapposte uguali
limita polifonia per melody tracks
quantizza start e duration
normalizza velocity
rimuovi file troppo vuoti
rimuovi file troppo densi
```

## Step 6 — Quantizzazione sulla beat grid

Per addestrare un Transformer utile dentro un VST, devi convertire il timing continuo in una griglia musicale.

Esempio:

```text
1 bar = 16 step se lavori a sedicesimi
start = step 0, 1, 2, ...
duration = 1, 2, 4, 8 step
```

Se il BPM è stabile:

```text
seconds → beats → bars → steps
```

Esempio logico:

```python
def seconds_to_steps(time_seconds, bpm, steps_per_beat=4):
    beats = time_seconds / (60.0 / bpm)
    return round(beats * steps_per_beat)
```

Output ideale:

```json
{
  "pitch": 65,
  "start_step": 12,
  "duration_steps": 2,
  "velocity": 91
}
```

Questa rappresentazione è molto più facile da usare per un Transformer rispetto ai secondi floating point.

## Step 7 — Segmentazione in frasi

Non addestrare il modello su brani interi subito. Crea frasi corte.

Per il tuo plugin servono esempi tipo:

```text
1 battuta input → 1 battuta continuation
2 battute input → 2 battute continuation
4 battute input → 4 battute continuation
```

Quindi da una canzone generi tante clip:

```text
track_0001_bar_000_004
track_0001_bar_004_008
track_0001_bar_008_012
...
```

Ogni clip diventa:

```json
{
  "clip_id": "track_0001_bars_008_012",
  "genre": "trap",
  "bpm": 140,
  "key": "F minor",
  "role": "melody",
  "bars": 4,
  "notes": [
    {"pitch": 65, "start_step": 0, "duration_steps": 2, "velocity": 88},
    {"pitch": 68, "start_step": 4, "duration_steps": 1, "velocity": 82}
  ]
}
```

## Step 8 — Classificare il ruolo musicale

Per ogni MIDI/stem devi capire se è:

```text
melody
bass
chords
drums
noise / discard
```

All’inizio puoi farlo con euristiche:

```text
bass stem → bass
drums stem → drums
vocals stem trascritto → vocal melody
other stem:
  se monofonico → melody
  se polifonico e note lunghe → chords
  se troppo denso → discard
```

Euristiche utili:

```text
pitch medio basso → bass
molte note simultanee → chords
una nota alla volta → melody
troppa densità → discard
troppo poche note → discard
```

Per il tuo caso, il dataset più prezioso è:

```text
melody
vocal_melody
topline
bassline
countermelody
```

Non butterei tutto nel modello insieme. Separerei i ruoli.

## Step 9 — Quality filter

Qui devi essere severo.

Ogni clip riceve uno score:

```text
numero note valido?
durata minima?
range sensato?
densità sensata?
troppe note fuori scala?
troppi overlap?
troppa polifonia?
trascrizione troppo caotica?
```

Esempio:

```python
def score_clip(notes, bars, role):
    if len(notes) < 4:
        return 0.0

    pitches = [n["pitch"] for n in notes]
    pitch_range = max(pitches) - min(pitches)

    if role == "melody" and pitch_range > 36:
        return 0.3

    density = len(notes) / bars

    if density > 32:
        return 0.2

    return 1.0
```

Salvi solo clip sopra una soglia:

```text
score >= 0.75
```

Questa parte è fondamentale: meglio pochi dati puliti che tantissimi dati rumorosi.

## Step 10 — Tokenizzazione per Transformer

A questo punto converti le clip in token.

Userei **MidiTok**, che è una libreria Python per tokenizzare MIDI/symbolic music e supporta tokenizzazioni note come REMI, usate per modelli sequenziali e Transformer. ([miditok.readthedocs.io](https://miditok.readthedocs.io/?utm_source=chatgpt.com "MidiTok's docs"))

Una rappresentazione utile:

```text
GENRE_TRAP
KEY_F_MINOR
BPM_140
ROLE_MELODY
BAR
POS_0
NOTE_65
DUR_2
VEL_88
POS_4
NOTE_68
DUR_1
VEL_82
```

Per completion:

```json
{
  "input": [
    "GENRE_TRAP",
    "KEY_F_MINOR",
    "BPM_140",
    "ROLE_MELODY",
    "BAR",
    "POS_0",
    "NOTE_65",
    "DUR_2"
  ],
  "target": [
    "POS_4",
    "NOTE_68",
    "DUR_1",
    "POS_8",
    "NOTE_72",
    "DUR_2"
  ]
}
```

Questo è molto vicino a ciò che poi userai nel plugin.

## Step 11 — Split corretto train/validation/test

Non fare lo split a livello di clip. Fallo a livello di canzone.

Sbagliato:

```text
clip 1 della stessa song → train
clip 2 della stessa song → validation
clip 3 della stessa song → test
```

Così il modello vede quasi lo stesso materiale in train e test.

Corretto:

```text
song A, B, C → train
song D → validation
song E → test
```

Quindi nel manifest tieni:

```csv
track_id,genre,split
track_0001,trap,train
track_0002,trap,train
track_0003,trap,val
track_0004,trap,test
```

## Pipeline automatizzata: versione pratica

La farei con uno script orchestratore che processa ogni track e salva ogni output intermedio.

Pseudo-codice:

```python
from pathlib import Path
import subprocess
import json

RAW_DIR = Path("data/raw_audio")
STEMS_DIR = Path("data/stems")
MIDI_RAW_DIR = Path("data/midi_raw")
MIDI_CLEAN_DIR = Path("data/midi_clean")
CLIPS_DIR = Path("data/clips")
TOKENS_DIR = Path("data/tokens")

def run(cmd):
    print("Running:", " ".join(map(str, cmd)))
    subprocess.run(cmd, check=True)

def separate_stems(track_path, track_id):
    out_dir = STEMS_DIR / track_id
    if out_dir.exists():
        return out_dir

    run([
        "demucs",
        "-n", "htdemucs",
        "-o", str(STEMS_DIR),
        str(track_path)
    ])

    return out_dir

def transcribe_stem(stem_path, out_dir):
    out_dir.mkdir(parents=True, exist_ok=True)

    run([
        "basic-pitch",
        str(out_dir),
        str(stem_path)
    ])

def process_track(track):
    track_id = track["track_id"]
    audio_path = Path(track["filepath"])

    # 1. Stem separation
    separate_stems(audio_path, track_id)

    stem_base = STEMS_DIR / "htdemucs" / audio_path.stem

    stems = {
        "bass": stem_base / "bass.wav",
        "vocals": stem_base / "vocals.wav",
        "other": stem_base / "other.wav"
    }

    # 2. Audio-to-MIDI
    for role, stem_path in stems.items():
        if stem_path.exists():
            transcribe_stem(
                stem_path,
                MIDI_RAW_DIR / track_id / role
            )

    # 3. Cleaning MIDI
    # clean_all_midis(track_id)

    # 4. Segmentazione
    # segment_into_clips(track_id)

    # 5. Tokenizzazione
    # tokenize_clips(track_id)

def main():
    manifest = json.load(open("metadata/manifest.json"))

    for track in manifest:
        try:
            process_track(track)
            track["status"] = "done"
        except Exception as e:
            track["status"] = "failed"
            track["error"] = str(e)

    json.dump(manifest, open("metadata/manifest_updated.json", "w"), indent=2)

if __name__ == "__main__":
    main()
```

Per un progetto serio, dopo il prototipo sposterei l’orchestrazione su **Prefect**, **Airflow** o **Snakemake**, perché vuoi caching, retry, logging e ripartenza da step intermedi.

## Configurazione consigliata

Un file `pipeline.yaml`:

```yaml
audio:
  sample_rate: 44100
  channels: 2

source_separation:
  model: htdemucs
  stems:
    - bass
    - vocals
    - other
    - drums

transcription:
  default_model: basic_pitch
  use_mt3_for_full_mix: false

quantization:
  steps_per_beat: 4
  beats_per_bar: 4

segmentation:
  clip_bars: [1, 2, 4, 8]
  min_notes_per_clip: 4
  max_notes_per_bar_melody: 32

quality:
  min_score: 0.75
  max_pitch_range_melody: 36
  min_duration_seconds: 0.05

tokenization:
  tokenizer: REMI
  include_genre: true
  include_key: true
  include_bpm: true
  include_role: true
```

Questo ti permette di cambiare comportamento senza toccare codice.

## Dataset finale

Io farei uscire due formati.

### Formato pulito leggibile

```json
{
  "clip_id": "track_0001_bars_004_008_melody",
  "track_id": "track_0001",
  "genre": "trap",
  "bpm": 140,
  "key": "F minor",
  "role": "melody",
  "source_stem": "vocals",
  "bars": 4,
  "quality_score": 0.87,
  "notes": [
    {
      "pitch": 65,
      "start_step": 0,
      "duration_steps": 2,
      "velocity": 88
    },
    {
      "pitch": 68,
      "start_step": 4,
      "duration_steps": 1,
      "velocity": 82
    }
  ]
}
```

### Formato training

```json
{
  "clip_id": "track_0001_bars_004_008_melody",
  "input_tokens": [
    "GENRE_TRAP",
    "KEY_F_MINOR",
    "BPM_140",
    "ROLE_MELODY",
    "BAR",
    "POS_0",
    "NOTE_65",
    "DUR_2"
  ],
  "target_tokens": [
    "POS_4",
    "NOTE_68",
    "DUR_1",
    "POS_8",
    "NOTE_72",
    "DUR_2"
  ]
}
```

Salvalo come:

```text
train.jsonl
val.jsonl
test.jsonl
```

## Quality control semi-automatico

Io aggiungerei una piccola interfaccia interna.

Per ogni clip puoi generare:

```text
MIDI preview
piano roll PNG
audio render
quality score
metadata
```

Poi una persona può marcare:

```text
accept
reject
wrong_genre
bad_transcription
wrong_role
too_noisy
```

Questo è preziosissimo. Anche solo revisionare il 5-10% dei dati ti aiuta a capire se la pipeline sta producendo spazzatura.

## Pipeline reale consigliata per il tuo caso

Per il tuo VST AI-driven, farei così:

```text
Fase 1 — Dataset base
input: MIDI/loop già licenziati
output: dataset melody/bass/chords pulito

Fase 2 — Audio licenziato
input: stems o brani royalty-free
Demucs → Basic Pitch → cleaning → clips

Fase 3 — Dataset misto
unisci MIDI nativi + MIDI trascritti
assegna quality score più basso ai trascritti automatici

Fase 4 — Training Transformer
tokenizzazione REMI/MidiTok
training per melody completion

Fase 5 — Feedback loop dal plugin
salva input, suggestion scelta, edit dell’utente
usa quei dati per fine-tuning futuro
```

La cosa importante è questa: **non fare il modello dipendente solo da audio-to-MIDI automatico**. Usalo come fonte secondaria. Il core del dataset dovrebbe essere MIDI pulito, licenziato e ben taggato.

La versione “production-grade” della pipeline è:

```text
manifest con licenze
+
stems separati
+
trascrizione per stem
+
cleaning aggressivo
+
quality score
+
human review a campione
+
tokenizzazione stabile
+
split per track
```

Così crei un dataset realmente utilizzabile per addestrare un Transformer per completion melodiche, invece di accumulare milioni di note rumorose che poi insegnano al modello a generare caos.