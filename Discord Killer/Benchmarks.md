Per capire se il tuo software è “meglio di Discord”, devi prima separare **benchmark tecnico** e **valutazione prodotto**.

Un software può essere migliore di Discord in:

```text
RAM
CPU
tempo di avvio
latenza vocale
consumo rete
consumo batteria
semplicità UI
stabilità
qualità audio
```

Ma non sarà “meglio” in assoluto solo perché usa meno RAM. Discord ha mille feature: overlay, video, screen sharing, bot, integrazioni, rich presence, aggiornamenti automatici, notifiche, ecc. Tu devi confrontarti su uno scenario preciso:

```text
“Voice chat + text chat leggera con canali”
```

Non su “tutto Discord”.

---

# 1. Prima definisci cosa stai confrontando

Devi fare benchmark tra:

```text
Il tuo client LightVoice
vs
Discord desktop
```

A parità di condizioni:

```text
stesso PC
stesso sistema operativo
stessa rete
stesso microfono
stesse cuffie
stesso numero di utenti nel canale
stessa durata del test
stesso scenario d'uso
```

Errore da evitare:

```text
apro Discord, guardo Task Manager, apro la mia app, guardo Task Manager
```

Quello ti dà solo una sensazione, non un benchmark serio.

---

# 2. Metriche principali da misurare

## RAM

Misura:

```text
RAM all'avvio
RAM dopo login
RAM in idle
RAM in canale vocale
RAM dopo 30 minuti
RAM dopo 2 ore
```

La metrica utile è la memoria del **process tree**, non del singolo processo.

Discord può avere più processi. Anche Tauri/WebView può avere più processi. Quindi devi sommare:

```text
processo principale
processi figli
webview
helper process
audio process eventuali
```

Metriche utili:

```text
Working Set / Resident Set Size
Private Bytes / memoria privata
picco RAM
crescita RAM nel tempo
```

La più importante per capire se hai memory leak è:

```text
RAM dopo 10 min
RAM dopo 30 min
RAM dopo 2 ore
```

Se continua a crescere senza stabilizzarsi, hai un problema.

---

## CPU

Misura:

```text
CPU idle
CPU mentre scrivi messaggi
CPU in voice 1-to-1
CPU in voice con 5 utenti
CPU in voice con 10 utenti
CPU con mute attivo
CPU con microfono attivo ma nessuno parla
```

Per una voice chat leggera, l’obiettivo non è solo “usare poca CPU mentre nessuno parla”, ma usare poca CPU mentre:

```text
codifichi audio
decodifichi audio
gestisci WebRTC
aggiorni la UI
ricevi eventi realtime
```

---

## Tempo di avvio

Misura:

```text
tempo da click sull'app a finestra visibile
tempo da click sull'app a login completato
tempo da login a UI utilizzabile
```

Qui probabilmente potresti battere Discord abbastanza facilmente se il tuo client resta minimale.

---

## Consumo rete

Misura:

```text
upload in idle
download in idle
upload in voice
download in voice
pacchetti al secondo
bitrate medio
bitrate massimo
```

Per la voce, controlla:

```text
kbps inviati per utente
kbps ricevuti per utente
overhead WebRTC
pacchetti persi
jitter
round-trip time
```

Per WebRTC puoi raccogliere dati direttamente con `RTCPeerConnection.getStats()`, che restituisce statistiche sulla connessione WebRTC, incluse informazioni su sender, receiver e trasporto. ([MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats?utm_source=chatgpt.com "RTCPeerConnection: getStats() method - Web APIs | MDN"))

---

## Latenza vocale

Questa è una delle metriche più importanti.

Devi misurare:

```text
mouth-to-ear latency
```

Cioè:

```text
tempo tra quando Alice parla
e quando Bob sente l'audio
```

Target indicativi:

```text
< 50 ms      ottimo in LAN
50-100 ms    molto buono
100-150 ms   accettabile
150-250 ms   percepibile
> 250 ms     fastidioso
```

Non basta misurare il ping. Il ping misura rete, ma la latenza vocale include:

```text
cattura microfono
encoding Opus
buffer
rete
jitter buffer
decoding
riproduzione audio
```

---

## Qualità audio

Misura/valuta:

```text
audio pulito
assenza di robotizzazione
assenza di scatti
volume stabile
echo cancellation
noise suppression
comportamento con packet loss
```

Puoi fare sia test soggettivi sia test tecnici.

Test soggettivo:

```text
5 persone usano Discord per 10 minuti
5 persone usano la tua app per 10 minuti
ognuno dà voto 1-5 su qualità, ritardo, stabilità
```

Test tecnico:

```text
simuli packet loss
simuli jitter
simuli banda limitata
misuri pacchetti persi e jitter
```

---

# 3. Benchmark da fare sul client

Ti consiglio questi scenari.

## Test A — Cold start

Obiettivo: misurare quanto pesa l’app appena aperta.

Procedura:

```text
1. riavvia il PC oppure chiudi completamente tutto
2. apri solo il tool di misura
3. avvia Discord
4. misura per 60 secondi
5. chiudi Discord
6. ripeti con la tua app
```

Metriche:

```text
tempo di avvio
RAM dopo 5 secondi
RAM dopo 30 secondi
CPU media nei primi 10 secondi
CPU media dopo stabilizzazione
```

---

## Test B — Idle dopo login

Scenario:

```text
app aperta
utente loggato
nessun canale vocale
nessuna chat attiva
```

Durata:

```text
10 minuti
```

Metriche:

```text
RAM media
RAM massima
CPU media
CPU massima
rete media
numero pacchetti rete
```

Questo test ti dice quanto pesa l’app “ferma”.

---

## Test C — Chat testuale

Scenario:

```text
utente in un canale testuale
messaggi inviati/ricevuti ogni secondo
scroll normale
UI aperta
```

Durata:

```text
10 minuti
```

Metriche:

```text
CPU media
RAM
frame drop UI
latenza messaggio
tempo tra invio e visualizzazione
```

Per fare load test delle API e del WebSocket puoi usare k6: la documentazione ufficiale copre test di carico, metriche, soglie e anche scenari WebSocket. ([Grafana Labs](https://grafana.com/docs/k6/latest/?utm_source=chatgpt.com "Grafana k6 documentation"))

---

## Test D — Voice 1-to-1

Scenario:

```text
2 utenti nello stesso canale vocale
microfono attivo
parlano a turno
```

Durata:

```text
10 minuti
```

Metriche:

```text
CPU media
CPU picco
RAM
upload
download
jitter
packet loss
round-trip time
latenza percepita
qualità audio
```

---

## Test E — Voice con più utenti

Fai almeno questi casi:

```text
3 utenti
5 utenti
10 utenti
```

Metriche:

```text
CPU client
RAM client
upload client
download client
CPU server
RAM server
banda server
latenza voce
qualità audio
```

Questo test è fondamentale perché una voice chat può andare benissimo con 2 utenti e crollare con 10.

---

## Test F — Rete problematica

Simula condizioni peggiori:

```text
packet loss 1%
packet loss 3%
packet loss 5%
jitter 20 ms
jitter 50 ms
latenza 100 ms
latenza 200 ms
banda limitata
```

Obiettivo: capire se la tua app regge quando la rete non è perfetta.

Metriche:

```text
audio che scatta
packet loss WebRTC
jitter WebRTC
riconnessioni
tempo di recupero
qualità percepita
```

---

## Test G — Long run

Scenario:

```text
app aperta per 2-4 ore
utente in voice
messaggi ogni tanto
```

Metriche:

```text
RAM iniziale
RAM dopo 30 minuti
RAM dopo 1 ora
RAM dopo 2 ore
CPU media
crash
riconnessioni
audio degradation
```

Questo ti serve per trovare:

```text
memory leak
connessioni non chiuse
peer connection zombie
WebSocket duplicati
buffer audio che crescono
```

---

# 4. Strumenti per misurare RAM e CPU

## Su Windows

Per una misura semplice:

```text
Task Manager
Resource Monitor
Process Explorer
```

Per una misura seria:

```text
Windows Performance Recorder
Windows Performance Analyzer
```

Windows Performance Recorder registra eventi di sistema e applicazione tramite ETW; i dati poi si analizzano con Windows Performance Analyzer. ([Microsoft Learn](https://learn.microsoft.com/en-us/windows-hardware/test/wpt/windows-performance-recorder?utm_source=chatgpt.com "Windows Performance Recorder"))

Usali per:

```text
CPU sampling
thread attivi
uso memoria
I/O disco
startup time
attività di rete
```

---

## Su Linux

Strumenti:

```text
top / htop
pidstat
time
perf
valgrind massif
heaptrack
```

`perf` è uno strumento di profiling Linux basato su performance counters, tracepoints e altri meccanismi del kernel, utile per profiling CPU e analisi low-level. ([perfwiki.github.io](https://perfwiki.github.io/main/?utm_source=chatgpt.com "perf: Linux profiling with performance counters"))

Esempi:

```bash
perf stat ./lightvoice
```

```bash
perf record ./lightvoice
perf report
```

Per memoria:

```bash
/usr/bin/time -v ./lightvoice
```

---

## Cross-platform con Python

Puoi creare uno script di misura con `psutil`, che è una libreria cross-platform per leggere CPU, memoria, processi, rete e utilizzo di sistema. ([psutil.readthedocs.io](https://psutil.readthedocs.io/?utm_source=chatgpt.com "psutil documentation — psutil 7.2.2 documentation"))

Esempio concettuale:

```python
import psutil
import time
import csv

PROCESS_NAME = "LightVoice"

def find_process_tree(name):
    roots = []
    for p in psutil.process_iter(["pid", "name"]):
        try:
            if name.lower() in p.info["name"].lower():
                roots.append(p)
        except Exception:
            pass

    processes = []
    for root in roots:
        processes.append(root)
        processes.extend(root.children(recursive=True))
    return processes

with open("benchmark.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["timestamp", "cpu_percent", "rss_mb"])

    while True:
        procs = find_process_tree(PROCESS_NAME)

        total_cpu = 0.0
        total_rss = 0

        for p in procs:
            try:
                total_cpu += p.cpu_percent(interval=None)
                total_rss += p.memory_info().rss
            except Exception:
                pass

        writer.writerow([
            time.time(),
            total_cpu,
            total_rss / 1024 / 1024
        ])

        f.flush()
        time.sleep(1)
```

Fai lo stesso per:

```text
Discord
LightVoice
```

Poi confronti i CSV.

---

# 5. Benchmark lato server

Per il server non devi confrontarti direttamente con Discord, perché non hai accesso alla loro infrastruttura. Devi misurare quanto scala il tuo.

Metriche server:

```text
utenti connessi contemporaneamente
WebSocket aperti
messaggi al secondo
canali vocali attivi
utenti vocali per canale
CPU server
RAM server
banda in upload
banda in download
latenza media API
latenza p95
latenza p99
```

La cosa importante è non guardare solo la media. Guarda anche:

```text
p95
p99
picchi
error rate
```

Esempio:

```text
latenza media: 20 ms
p95: 80 ms
p99: 500 ms
```

La media sembra buona, ma p99 brutto significa che alcuni utenti avranno lag.

---

# 6. Load test consigliati

## API HTTP

Usa:

```text
k6
```

Test:

```text
register/login
lista server
lista canali
recupero messaggi
creazione messaggio
```

Metriche:

```text
requests per second
latenza media
latenza p95
latenza p99
error rate
CPU backend
RAM backend
query PostgreSQL lente
```

---

## WebSocket

Usa sempre k6 oppure uno script custom.

Test:

```text
100 utenti connessi
500 utenti connessi
1000 utenti connessi
messaggi ogni X secondi
join/leave canali
```

k6 supporta test WebSocket con una struttura diversa dai test HTTP classici, basata su connessioni persistenti ed event loop asincrono. ([Grafana Labs](https://grafana.com/docs/k6/latest/using-k6/protocols/websockets/?utm_source=chatgpt.com "WebSockets | Grafana k6 documentation"))

---

## Voice

Qui è più complicato. Devi creare client simulati.

Possibili strategie:

```text
client bot che entra in voice
client bot che invia audio sintetico
client bot che riceve audio
misurazione getStats WebRTC
```

Per iniziare:

```text
2 client reali
poi 3
poi 5
poi 10
```

Dopo:

```text
bot WebRTC headless
```

---

# 7. Metriche WebRTC da raccogliere

Dal client raccogli periodicamente `getStats()`.

Metriche utili:

```text
packetsSent
packetsReceived
packetsLost
jitter
roundTripTime
bytesSent
bytesReceived
audioLevel
totalAudioEnergy
concealedSamples
concealmentEvents
currentRoundTripTime
availableOutgoingBitrate
availableIncomingBitrate
```

Queste ti dicono se la voce va bene davvero.

Esempio di logging:

```typescript
setInterval(async () => {
  const stats = await peerConnection.getStats();

  stats.forEach(report => {
    if (report.type === "inbound-rtp" && report.kind === "audio") {
      console.log({
        packetsReceived: report.packetsReceived,
        packetsLost: report.packetsLost,
        jitter: report.jitter,
        bytesReceived: report.bytesReceived,
        concealedSamples: report.concealedSamples
      });
    }

    if (report.type === "outbound-rtp" && report.kind === "audio") {
      console.log({
        packetsSent: report.packetsSent,
        bytesSent: report.bytesSent
      });
    }

    if (report.type === "candidate-pair" && report.state === "succeeded") {
      console.log({
        currentRoundTripTime: report.currentRoundTripTime,
        availableOutgoingBitrate: report.availableOutgoingBitrate
      });
    }
  });
}, 1000);
```

---

# 8. Come confrontare con Discord in modo corretto

Crea una tabella come questa.

|Scenario|Discord RAM|LightVoice RAM|Discord CPU|LightVoice CPU|Vincitore|
|---|--:|--:|--:|--:|---|
|Avvio||||||
|Idle 10 min||||||
|Chat 10 min||||||
|Voice 1-to-1||||||
|Voice 5 utenti||||||
|Voice 10 utenti||||||
|Long run 2h||||||

Poi una seconda tabella per la rete:

|Scenario|Upload Discord|Upload LightVoice|Download Discord|Download LightVoice|
|---|--:|--:|--:|--:|
|Idle|||||
|Voice 1-to-1|||||
|Voice 5 utenti|||||

E una terza per esperienza utente:

|Scenario|Discord|LightVoice|
|---|--:|--:|
|Tempo avvio|||
|Tempo join canale vocale|||
|Latenza voce percepita|||
|Qualità audio|||
|Stabilità dopo 2h|||

---

# 9. Soglie realistiche per dire “è leggero”

Per il tuo client, io punterei a questi obiettivi:

## Idle

```text
RAM: < 150 MB ottimo
RAM: < 250 MB buono
CPU: ~0-1%
rete: quasi zero
```

## Chat attiva

```text
RAM: stabile
CPU: < 3-5%
latenza messaggi: < 100 ms in LAN/server vicino
```

## Voice 1-to-1

```text
CPU: < 5-8%
RAM: stabile
upload: basso e costante
latenza percepita: < 150 ms
packet loss gestito bene fino a 1-3%
```

## Voice 5 utenti

```text
CPU: ancora accettabile
RAM: non deve crescere continuamente
audio: niente scatti evidenti
download: proporzionale agli stream ricevuti
```

Attenzione: questi numeri dipendono molto dal PC. Sono target pratici, non leggi assolute.

---

# 10. Come capire se il tuo software è davvero “meglio”

Io userei questa formula:

```text
LightVoice è meglio di Discord nel tuo obiettivo se:
```

```text
1. usa meno RAM in idle e in voice
2. usa meno CPU in voice
3. si avvia più velocemente
4. consuma meno rete a parità di qualità audio
5. ha latenza vocale uguale o inferiore
6. resta stabile per ore
7. fa bene le poche cose che promette
```

Non serve battere Discord su tutto. Devi batterlo nella tua nicchia:

```text
voice chat essenziale, leggera, veloce
```

---

# 11. Benchmark minimo che farei io

Per una prima versione farei questo:

```text
Benchmark 1 — Startup
Benchmark 2 — Idle 10 minuti
Benchmark 3 — Chat 10 minuti
Benchmark 4 — Voice 1-to-1 10 minuti
Benchmark 5 — Voice 5 utenti 10 minuti
Benchmark 6 — Long run 2 ore
Benchmark 7 — Rete disturbata con packet loss/jitter
```

Per ogni benchmark salvi:

```text
CPU media
CPU p95
RAM media
RAM picco
upload medio
download medio
latenza media
latenza p95
packet loss
jitter
crash/errori
```

---

# 12. Struttura cartella benchmark

Nel progetto creerei:

```text
lightvoice/
  benchmarks/
    client/
      measure_process.py
      results/
        discord_idle.csv
        lightvoice_idle.csv
        discord_voice_1to1.csv
        lightvoice_voice_1to1.csv

    server/
      k6_http_test.js
      k6_ws_test.js
      results/

    voice/
      collect_webrtc_stats.ts
      network_conditions.md
      results/

    reports/
      benchmark_report.md
      benchmark_summary.xlsx
```

---

# 13. Cosa mettere direttamente nel software

Nel tuo client aggiungerei una modalità debug:

```text
--benchmark-mode
```

Che mostra/logga:

```text
RAM corrente
CPU corrente
WebSocket ping
WebRTC RTT
jitter
packet loss
bytes sent
bytes received
utenti in voice
numero peer connection
```

Nel backend aggiungerei endpoint metriche:

```http
GET /metrics
```

Con Prometheus.

Prometheus funziona esponendo metriche da un endpoint HTTP che poi Prometheus può raccogliere periodicamente; per Rust esistono client library dedicate per esporre queste metriche. ([Prometheus](https://prometheus.io/docs/instrumenting/clientlibs/?utm_source=chatgpt.com "Client libraries"))

Metriche backend utili:

```text
active_websocket_connections
active_voice_rooms
active_voice_users
messages_sent_total
websocket_events_total
http_requests_total
http_request_duration_seconds
process_cpu_usage
process_memory_bytes
```

---

# 14. Risposta netta

Per confrontarti con Discord devi fare benchmark su scenari identici e misurare il **process tree completo**, non un singolo processo.

I benchmark più importanti sono:

```text
1. RAM idle
2. CPU idle
3. tempo di avvio
4. RAM/CPU in voice
5. consumo rete in voice
6. latenza voce
7. jitter e packet loss
8. stabilità dopo ore
9. scalabilità server
```

Il tuo obiettivo non deve essere:

```text
“fare più cose di Discord”
```

ma:

```text
“fare voice chat e text chat essenziali usando molte meno risorse”
```

Se in idle consumi meno RAM/CPU, in voice hai latenza simile o migliore, e dopo 2 ore la RAM resta stabile, allora puoi dire seriamente che il tuo software è **più leggero e più efficiente** per quello specifico caso d’uso.