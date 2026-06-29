Sì, ho cercato: **si può fare**, ma il punto chiave è questo:

**estrarre MIDI da canzoni audio complete non è ancora una procedura perfetta.**  
Funziona molto meglio se lavori su **stems separati** o su strumenti singoli. Da un mix completo tipo brano Spotify/YouTube/master finale, la trascrizione MIDI viene spesso sporca: note false, timing impreciso, strumenti confusi, accordi sbagliati, ghost notes, drums interpretate male, ecc.

La pipeline realistica è questa:

```text
audio song
→ stem separation
→ audio-to-MIDI transcription per stem
→ cleaning/quantization
→ metadata: key, BPM, genre, instrument role
→ tokenizzazione MIDI
→ dataset per Transformer
```

## 1. Prima cosa: non partirei da canzoni commerciali a caso

Tecnicamente puoi prendere una canzone, separarla e trascriverla. Legalmente, però, per un plugin commerciale è rischioso usare brani protetti da copyright senza licenza. In Europa esistono eccezioni per text and data mining nella Direttiva Copyright 2019/790, ma ci sono condizioni e meccanismi di opt-out dei titolari dei diritti; quindi non la tratterei come “via libera” per scaricare musica commerciale e addestrarci un prodotto. ([EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A32019L0790&utm_source=chatgpt.com "L_2019130EN.01009201.xml - European Union"))

Per un dataset serio userei invece:

```text
royalty-free MIDI/audio
loop pack licenziati
brani commissionati a producer
public domain
dataset accademici
dataset MIDI già esistenti
stems acquistati/licenziati
```

Questa è la differenza tra un esperimento personale e una base solida per un prodotto.

## 2. Strada migliore: usare MIDI già esistenti, non audio

Se l’obiettivo è addestrare un Transformer che completa melodie, il formato ideale è già **symbolic music**, cioè MIDI/eventi nota. Estrarre MIDI da audio è una scorciatoia possibile, ma introduce errori.

Dataset utili:

**Lakh MIDI Dataset**: grande dataset MIDI, distribuito con licenza CC-BY 4.0. È utile perché contiene molti file MIDI multi-genere, anche se va pulito molto. ([colinraffel.com](https://colinraffel.com/projects/lmd/?utm_source=chatgpt.com "The Lakh MIDI Dataset v0.1"))

**MAESTRO**: circa 200 ore di audio e MIDI allineati di performance pianistiche, molto pulito, ottimo per piano/expressive timing; però la licenza è non-commerciale/share-alike, quindi attenzione se vuoi farne un prodotto commerciale. ([Magenta](https://magenta.withgoogle.com/datasets/maestro?utm_source=chatgpt.com "The MAESTRO Dataset"))

**Slakh2100**: dataset con audio multitraccia e MIDI allineati, sintetizzato a partire da Lakh MIDI, pensato per source separation e multi-instrument transcription. È molto interessante perché ha stems, mixture audio e MIDI. ([Zenodo](https://zenodo.org/records/4599666?utm_source=chatgpt.com "Slakh2100"))

**MusicNet**: registrazioni classiche liberamente licenziate con annotazioni nota-per-nota e strumenti, utile per esperimenti di trascrizione e symbolic learning. ([Zenodo](https://zenodo.org/records/5120004?utm_source=chatgpt.com "MusicNet"))

Per il tuo caso, partirei da **Lakh + dataset proprietario di loop MIDI**. Poi, solo dopo, aggiungerei trascrizioni da audio.

## 3. Se vuoi davvero estrarre MIDI da canzoni audio

La pipeline più sensata è questa.

### Step A — Separazione in stems

Prima separi il brano in parti tipo:

```text
vocals
drums
bass
other/instruments
```

Uno strumento molto usato è **Demucs**, di Meta/Facebook Research. Il repository ufficiale descrive modelli capaci di separare drums, bass, vocals e altri stems da una canzone. ([GitHub](https://github.com/facebookresearch/demucs?utm_source=chatgpt.com "facebookresearch/demucs: Code for the paper Hybrid ..."))

Esempio concettuale:

```bash
demucs -n htdemucs song.wav
```

Output tipico:

```text
separated/
  song/
    vocals.wav
    drums.wav
    bass.wav
    other.wav
```

Perché serve? Perché un audio-to-MIDI model lavora molto meglio su uno stem isolato rispetto a un mix completo.

### Step B — Trascrizione audio-to-MIDI

Qui hai varie opzioni.

**Basic Pitch** di Spotify è probabilmente una delle soluzioni più pratiche per iniziare. È una libreria Python per automatic music transcription, pensata per convertire audio in MIDI, con supporto a pitch bend; la versione TypeScript dichiara anche supporto polyphonic/instrument-agnostic, ma specifica che funziona meglio su uno strumento alla volta. ([GitHub](https://github.com/spotify/basic-pitch?utm_source=chatgpt.com "spotify/basic-pitch: A lightweight yet powerful audio-to-MIDI ..."))

Esempio:

```bash
pip install basic-pitch
basic-pitch output_midis bass.wav
basic-pitch output_midis other.wav
basic-pitch output_midis vocals.wav
```

**Onsets and Frames** di Magenta/Google è più specializzato sul piano. Il modello trascrive registrazioni di piano in pianoroll/MIDI e usa una logica onset/frame per migliorare la detection delle note. ([Magenta](https://magenta.withgoogle.com/onsets-frames?utm_source=chatgpt.com "Onsets and Frames: Dual-Objective Piano Transcription"))

**MT3** è più avanzato per trascrizione multi-strumento. È un modello di automatic music transcription multi-task/multitrack basato su T5X, pensato per riconoscere note e strumenti in audio complesso. ([GitHub](https://github.com/magenta/mt3?utm_source=chatgpt.com "magenta/mt3 - Multi-Task Multitrack Music Transcription"))

Quindi sceglierei così:

```text
bass stem        → Basic Pitch
lead/melody stem → Basic Pitch
piano stem       → Onsets and Frames o Basic Pitch
full mix         → MT3 / YourMT3, ma qualità variabile
drums            → drum transcription separata, non pitch MIDI classico
```

## 4. Il problema vero: cleaning del MIDI

Dopo la trascrizione, il MIDI grezzo sarà spesso sporco. Devi pulirlo.

Esempi di errori comuni:

```text
note troppo corte
note duplicate
note fuori scala
velocity casuali
accordi interpretati male
timing non quantizzato
strumenti misclassificati
melodia e accompagnamento mescolati
```

Qui userei Python con librerie come **pretty_midi** o **mido**. pretty_midi è pensato proprio per leggere, modificare e analizzare MIDI in modo comodo; Mido lavora direttamente con file, messaggi e porte MIDI. ([craffel.github.io](https://craffel.github.io/pretty-midi/?utm_source=chatgpt.com "pretty_midi 0.2.11 documentation"))

Cleaning minimo:

```python
import pretty_midi

midi = pretty_midi.PrettyMIDI("transcribed.mid")

for instrument in midi.instruments:
    cleaned_notes = []
    for note in instrument.notes:
        duration = note.end - note.start

        # rimuovi glitch
        if duration < 0.05:
            continue

        # limita range melodico realistico
        if note.pitch < 36 or note.pitch > 96:
            continue

        cleaned_notes.append(note)

    instrument.notes = cleaned_notes

midi.write("cleaned.mid")
```

Poi devi quantizzare:

```text
start_time → step ritmico
duration   → 1/16, 1/8, 1/4 ecc.
velocity   → bucket, per esempio 0-31, 32-63, 64-95, 96-127
```

Per tempo/beat tracking puoi usare librosa; la funzione `beat_track` stima tempo e beat positions usando onset strength, autocorrelazione e peak picking. ([Librosa](https://librosa.org/doc/main/generated/librosa.beat.beat_track.html?utm_source=chatgpt.com "librosa.beat.beat_track — librosa 0.11.0 documentation"))

## 5. Devi aggiungere metadata musicali

Per addestrare un modello utile al plugin, non basta avere note. Devi taggare ogni frammento.

Formato ideale:

```json
{
  "source_id": "track_001",
  "genre": "trap",
  "bpm": 140,
  "key": "F minor",
  "scale": "minor",
  "role": "top_melody",
  "bars": 4,
  "notes": [
    {"pitch": 65, "start": 0.0, "duration": 0.25, "velocity": 91},
    {"pitch": 68, "start": 0.5, "duration": 0.25, "velocity": 84}
  ]
}
```

Per il tuo plugin, i tag più importanti sarebbero:

```text
genre
key/scale
BPM
instrument role
bar length
rhythmic density
melodic range
chord progression, se disponibile
```

`music21` può aiutare per analisi musicale, key detection e manipolazione simbolica; Magenta `note-seq` può convertire MIDI in NoteSequence, quantizzare, estrarre melodie/drum tracks/chords ed esportare di nuovo in MIDI. ([music21.org](https://music21.org/?utm_source=chatgpt.com "music21 Documentation — music21 Documentation"))

## 6. Tokenizzazione per Transformer

Una volta che hai MIDI puliti, devi trasformarli in token.

Esempio semplice:

```text
BAR
POSITION_0
NOTE_ON_65
VELOCITY_90
DURATION_1/16
POSITION_2
NOTE_ON_68
VELOCITY_80
DURATION_1/8
```

Oppure con conditioning:

```text
GENRE_TRAP
KEY_F_MINOR
BPM_140
ROLE_TOP_MELODY
BAR
POSITION_0
NOTE_65
DURATION_1/16
...
```

Per questa fase esiste **MidiTok**, una libreria Python che converte MIDI in sequenze di token pronte per modelli sequenziali come Transformer e supporta tokenizzazioni musicali note, tra cui REMI. ([miditok.readthedocs.io](https://miditok.readthedocs.io/?utm_source=chatgpt.com "MidiTok's docs"))

REMI/Pop Music Transformer è interessante perché modella musica pop con struttura basata su battute, beat e sub-beat, rendendo il ritmo più controllabile rispetto a una semplice sequenza MIDI grezza. ([arXiv](https://arxiv.org/abs/2002.00212?utm_source=chatgpt.com "Pop Music Transformer: Beat-based Modeling and ..."))

## 7. Come trasformarlo in dataset per completion

Per il tuo caso non vuoi solo “generare canzoni”. Vuoi:

```text
input: prime note del producer
output: completamento plausibile
```

Quindi devi creare esempi così:

```json
{
  "task": "melody_completion",
  "conditioning": {
    "genre": "trap",
    "key": "F minor",
    "bpm": 140,
    "role": "top_melody"
  },
  "input_tokens": [
    "BAR", "POS_0", "NOTE_65", "DUR_1/8",
    "POS_2", "NOTE_68", "DUR_1/16"
  ],
  "target_tokens": [
    "POS_4", "NOTE_72", "DUR_1/8",
    "POS_6", "NOTE_70", "DUR_1/16"
  ]
}
```

Puoi generare dataset slicing così:

```text
clip di 4 battute
→ input: prima 1 battuta
→ target: battute 2-4
```

Oppure:

```text
clip di 8 battute
→ input: battute 1-2
→ target: battute 3-4
```

Oppure per plugin:

```text
input: melodia incompleta
target: note mancanti
```

Questo è molto più vicino al comportamento che vuoi nel VST.

## 8. Pipeline concreta che farei io

Per un primo prototipo serio:

```text
1. Raccogli MIDI già esistenti/licenziati
2. Normalizza tutto in 4/4, BPM noto, key stimata
3. Estrai frasi da 1/2/4/8 battute
4. Classifica track role: melody, bass, chords, drums
5. Filtra solo melody/topline/bassline
6. Tokenizza con REMI/MidiTok
7. Addestra un piccolo Transformer decoder-only
8. Genera completion condizionata da genre/key/BPM
9. Post-process musicale: scala, range, density, quantization
```

Poi, in parallelo:

```text
1. Prendi audio/stems licenziati
2. Demucs per separare
3. Basic Pitch / MT3 per trascrivere
4. Cleaning automatico
5. Review manuale a campione
6. Inserisci nel dataset solo esempi sopra una soglia di qualità
```

La parte audio-to-MIDI la userei come **augmentation**, non come fonte principale.

## 9. La verità tecnica

Per il tuo prodotto, io non farei:

```text
canzoni famose → audio-to-MIDI automatico → training diretto
```

Perché avresti tre problemi:

```text
copyright
MIDI sporchi
modello che impara errori di trascrizione
```

Farei invece:

```text
dataset MIDI pulito
+
loop proprietari commissionati
+
audio-to-MIDI solo da fonti licenziate
+
human review
```

La pipeline migliore per il tuo caso è:

```text
Lakh / Slakh / loop MIDI proprietari
→ cleaning
→ fraseggio per genere
→ tokenizzazione REMI
→ Transformer per completion
→ filtro musicale finale nel plugin
```

Quindi sì: puoi estrarre MIDI da audio, ma per addestrare un Transformer utile dentro un VST, **la qualità del dataset conta più della quantità**. Un dataset da 10.000 loop MIDI puliti, taggati bene per genere/scala/ruolo, vale molto più di 500.000 trascrizioni automatiche sporche.