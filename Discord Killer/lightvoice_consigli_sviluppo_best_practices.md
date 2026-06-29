# LightVoice — Consigli di Sviluppo, Programmazione, Rete e Buone Prassi

> Guida pratica per sviluppare un software leggero di chat vocale/testuale simile a TeamSpeak o Discord, usando un approccio ingegneristico, modulare e misurabile.

---

## 1. Principio fondamentale

Non progettare subito “un Discord completo”.

Progetta prima un prodotto molto più piccolo:

```text
voice chat leggera + chat testuale + canali + utenti online
```

Il progetto deve essere costruito per fasi:

```text
prima corretto
poi stabile
poi sicuro
poi misurabile
poi ottimizzato
poi scalabile
```

Errore comune:

```text
iniziare da feature complesse come screen sharing, bot, ruoli avanzati, overlay, plugin
```

Approccio corretto:

```text
MVP piccolo, core solido, metriche chiare
```

---

## 2. Obiettivo tecnico del progetto

Il tuo software deve puntare a essere:

- leggero;
- veloce all'avvio;
- stabile in sessioni lunghe;
- efficiente in RAM e CPU;
- buono nella voce a bassa latenza;
- semplice da usare;
- facile da mantenere;
- sicuro lato server;
- misurabile con benchmark ripetibili.

Non dire genericamente:

```text
“voglio fare meglio di Discord”
```

Dì invece:

```text
“voglio fare una voice chat essenziale che usa meno risorse di Discord negli scenari voice + text”
```

Questa frase è molto più progettuale.

---

## 3. Stack consigliato

### Client desktop

```text
Tauri + Svelte + TypeScript + Rust
```

Motivo:

- Tauri è adatto ad app desktop leggere;
- Svelte è semplice e snello;
- TypeScript aiuta a evitare errori nei messaggi client/server;
- Rust permette di scrivere logica nativa efficiente.

### Backend

```text
Rust + Tokio + Axum
```

Motivo:

- Rust è performante e memory-safe;
- Tokio è adatto a server asincroni;
- Axum si integra bene con Tokio e WebSocket.

### Database

```text
PostgreSQL + SQLx
```

Motivo:

- PostgreSQL è solido;
- SQLx permette query asincrone;
- con le migration hai evoluzione controllata del database.

### Realtime

```text
WebSocket
```

Uso:

- chat testuale;
- presenza;
- eventi realtime;
- signaling WebRTC.

### Voce

```text
WebRTC + Opus
```

Motivo:

- WebRTC gestisce molte complessità di rete;
- Opus è adatto alla voce a bassa latenza;
- ti evita di scrivere subito un protocollo UDP custom.

### Cache futura

```text
Redis
```

Uso futuro:

- utenti online;
- presenza;
- rate limiting;
- pub/sub tra più istanze backend;
- stato dei canali vocali.

---

## 4. Architettura consigliata

Separare sempre:

```text
Control plane
Media plane
Data plane
```

### Control plane

Gestisce:

- login;
- creazione server;
- creazione canali;
- permessi;
- join/leave;
- presenza;
- signaling.

Tecnologie:

```text
HTTP REST + WebSocket
```

### Media plane

Gestisce:

- audio realtime;
- stream WebRTC;
- codec;
- jitter;
- packet loss;
- qualità voce.

Tecnologie:

```text
WebRTC + Opus
```

### Data plane

Gestisce:

- utenti;
- messaggi;
- server;
- canali;
- ruoli;
- permessi.

Tecnologie:

```text
PostgreSQL
```

---

## 5. Struttura mentale corretta

Ogni feature deve rispondere a queste domande:

```text
1. A cosa serve?
2. Chi può usarla?
3. Quali dati modifica?
4. Deve essere persistente o temporanea?
5. Passa via HTTP, WebSocket o WebRTC?
6. Quali permessi servono?
7. Cosa succede se fallisce?
8. Come la testo?
9. Come la misuro?
10. Come la disattivo o rimuovo se crea problemi?
```

Se non sai rispondere a queste domande, la feature non è ancora pronta per essere implementata.

---

## 6. Buone prassi di architettura software

### 6.1 Moduli piccoli

Evita un backend con tutto dentro `main.rs`.

Struttura consigliata:

```text
services/api/src/
  main.rs
  config.rs
  state.rs
  error.rs

  auth/
    routes.rs
    service.rs
    repository.rs
    dto.rs

  users/
    routes.rs
    service.rs
    repository.rs
    dto.rs

  servers/
    routes.rs
    service.rs
    repository.rs
    dto.rs

  channels/
    routes.rs
    service.rs
    repository.rs
    dto.rs

  messages/
    routes.rs
    service.rs
    repository.rs
    dto.rs

  websocket/
    gateway.rs
    protocol.rs
    presence.rs

  voice/
    signaling.rs
    rooms.rs

  permissions/
    service.rs
```

Regola pratica:

```text
routes     = riceve richieste
service    = logica applicativa
repository = accesso database
dto        = input/output serializzabili
```

---

### 6.2 Separare dominio e trasporto

Non mischiare la logica del programma con HTTP/WebSocket.

Errore:

```rust
async fn create_channel_handler(...) {
    // validazione
    // controllo permessi
    // query database
    // broadcast websocket
    // costruzione risposta
}
```

Meglio:

```text
handler HTTP
  → chiama ChannelService
    → chiama PermissionService
    → chiama ChannelRepository
    → emette evento
```

In questo modo puoi testare la logica senza avere per forza un server HTTP attivo.

---

### 6.3 Una feature = un flusso chiaro

Esempio: invio messaggio.

```text
client invia evento WebSocket
server autentica connessione
server valida payload
server controlla permessi
server salva messaggio su DB
server invia evento agli utenti corretti
client aggiorna UI
```

Non saltare passaggi.

---

## 7. Buone prassi Rust

### 7.1 Evita `unwrap()` nel codice applicativo

Va bene nei test o nei prototipi veloci, ma nel backend reale evita:

```rust
let user = result.unwrap();
```

Preferisci:

```rust
let user = result.map_err(AppError::Database)?;
```

Oppure:

```rust
let user = result.ok_or(AppError::NotFound)?;
```

Regola:

```text
unwrap nel backend = possibile crash
```

---

### 7.2 Definisci un errore applicativo unico

Crea un tipo errore centrale:

```rust
pub enum AppError {
    Unauthorized,
    Forbidden,
    NotFound,
    Validation(String),
    Database(sqlx::Error),
    Internal(anyhow::Error),
}
```

Poi converti l'errore in risposta HTTP o WebSocket.

Vantaggi:

- meno codice duplicato;
- errori più leggibili;
- risposte coerenti;
- logging più semplice.

---

### 7.3 Usa tipi forti

Evita di passare UUID come stringhe ovunque.

Meglio:

```rust
pub struct UserId(pub Uuid);
pub struct ChannelId(pub Uuid);
pub struct ServerId(pub Uuid);
```

Questo evita errori come passare un `channel_id` dove serve un `server_id`.

---

### 7.4 Non abusare di `Arc<Mutex<...>>`

Nel backend realtime userai stato condiviso.

Esempio:

```rust
Arc<RwLock<AppPresence>>
```

Va bene, ma attenzione:

- non tenere lock mentre fai `.await`;
- non fare query al DB dentro un lock;
- non tenere lock durante broadcast lunghi;
- non bloccare il runtime async.

Errore da evitare:

```rust
let mut state = shared.lock().await;
database_call().await;
state.update();
```

Meglio:

```rust
let data = database_call().await?;

{
    let mut state = shared.lock().await;
    state.update(data);
}
```

---

### 7.5 Usa `tracing`, non `println!`

Per debug serio usa:

```text
tracing
tracing-subscriber
```

Esempi di eventi utili:

```text
user_logged_in
websocket_connected
message_sent
voice_joined
voice_left
webrtc_offer_received
database_query_failed
permission_denied
```

Un log buono deve rispondere a:

```text
cosa è successo?
a chi?
quando?
in quale canale/server?
con quale risultato?
```

---

### 7.6 Formatta e controlla il codice sempre

Comandi da usare spesso:

```bash
cargo fmt
cargo clippy
cargo test
cargo check
```

Prima di ogni commit:

```bash
cargo fmt --check
cargo clippy -- -D warnings
cargo test
```

---

### 7.7 Evita `unsafe`

Nel progetto iniziale non hai bisogno di `unsafe`.

Regola:

```text
se pensi di aver bisogno di unsafe, probabilmente stai anticipando troppo l'ottimizzazione
```

Usalo solo se:

- sai esattamente perché serve;
- hai isolato il codice;
- hai test seri;
- hai documentato l'invariante di sicurezza.

---

## 8. Buone prassi TypeScript/Svelte

### 8.1 Tipizza il protocollo

Non mandare eventi WebSocket “a caso”.

Crea tipi condivisi:

```typescript
type ClientEvent =
  | { type: "send_message"; channel_id: string; content: string }
  | { type: "join_voice"; channel_id: string }
  | { type: "leave_voice"; channel_id: string }
  | { type: "set_mute"; muted: boolean };

type ServerEvent =
  | { type: "message_created"; channel_id: string; message: Message }
  | { type: "user_online"; user_id: string }
  | { type: "user_offline"; user_id: string }
  | { type: "user_joined_voice"; channel_id: string; user_id: string }
  | { type: "user_left_voice"; channel_id: string; user_id: string };
```

Meglio ancora: genera tipi TypeScript da tipi Rust usando una crate dedicata oppure mantieni uno schema condiviso.

---

### 8.2 Stato UI separato dallo stato server

Non confondere:

```text
stato locale UI
stato ricevuto dal server
stato temporaneo di connessione
```

Esempi:

```text
selectedChannelId        = UI locale
messages[channelId]      = stato server sincronizzato
websocketStatus          = stato connessione
voiceConnectionStatus    = stato media/WebRTC
```

---

### 8.3 Gestisci sempre disconnessioni e reconnect

La rete cade.

Devi prevedere:

- WebSocket chiuso;
- server riavviato;
- token scaduto;
- utente cambia rete;
- computer va in sospensione;
- microfono scollegato;
- WebRTC fallisce.

La UI deve mostrare stati chiari:

```text
connesso
riconnessione
offline
errore
voice disconnected
```

---

## 9. Buone prassi WebSocket

### 9.1 Autenticare la connessione

Non accettare WebSocket anonimi se non è previsto.

Flusso:

```text
client apre WebSocket
server verifica sessione/token
server associa user_id alla connessione
server registra presenza
```

---

### 9.2 Validare ogni messaggio

Non fidarti mai del client.

Ogni evento deve essere validato:

```text
type valido?
campi presenti?
UUID validi?
contenuto entro lunghezza massima?
utente ha permesso?
canale esiste?
utente appartiene al server?
```

---

### 9.3 Rate limiting

Serve almeno per:

```text
messaggi chat
join/leave ripetuti
eventi signaling
cambio stato mute
creazione canali
login
registrazione
```

Esempio:

```text
max 5 messaggi ogni 5 secondi
max 10 eventi signaling ogni 10 secondi
max 3 login falliti ogni minuto
```

---

### 9.4 Heartbeat

Implementa ping/pong o heartbeat applicativo.

Serve per capire se:

- la connessione è viva;
- l'utente è ancora online;
- devi pulire risorse;
- devi rimuovere l'utente dai canali vocali.

---

### 9.5 Cleanup alla disconnessione

Quando un utente perde connessione:

```text
rimuovi connessione WebSocket
rimuovi stato online se non ha altre connessioni
rimuovi dal canale vocale
chiudi peer connection correlate
notifica gli altri utenti
libera risorse
```

---

## 10. Buone prassi WebRTC e audio

### 10.1 Parti semplice

Prima versione:

```text
2 utenti nello stesso canale vocale
```

Poi:

```text
3-5 utenti
```

Solo dopo:

```text
SFU vera
```

Non iniziare direttamente da una SFU complessa.

---

### 10.2 Logga le statistiche WebRTC

Dal client raccogli periodicamente:

```text
roundTripTime
jitter
packetsLost
packetsReceived
bytesSent
bytesReceived
concealedSamples
availableOutgoingBitrate
availableIncomingBitrate
```

Queste statistiche ti dicono se l'audio va bene davvero.

---

### 10.3 Mute locale vs server mute

Distingui:

```text
local mute
server mute
deafen
```

- `local mute`: l'utente decide di non inviare audio;
- `server mute`: un moderatore impedisce all'utente di parlare;
- `deafen`: l'utente non riceve audio.

Questi stati devono essere separati.

---

### 10.4 Evita audio processing prematuro

All'inizio non implementare manualmente:

- noise suppression;
- echo cancellation;
- automatic gain control;
- jitter buffer custom;
- codec tuning avanzato.

Usa quello che WebRTC già offre.

Ottimizza dopo, quando hai metriche.

---

### 10.5 Gestisci bene i dispositivi audio

Il client deve gestire:

- microfono non disponibile;
- permesso negato;
- cambio dispositivo;
- cuffie scollegate;
- input troppo basso;
- input troppo alto;
- nessun output disponibile.

La UI deve mostrare errori comprensibili.

---

## 11. Buone prassi di rete

### 11.1 Non usare TCP per audio custom realtime

Se in futuro farai protocollo custom:

```text
audio realtime → UDP
chat/eventi    → TCP/WebSocket
API            → HTTP
```

La voce non deve dipendere da ritrasmissioni lente.

---

### 11.2 Misura latenza, jitter e packet loss

Non basta dire “va fluido”.

Misura:

```text
RTT
jitter
packet loss
bitrate
tempo di join voice
tempo di reconnect
```

---

### 11.3 Simula reti brutte

Devi testare con:

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

Se il software funziona solo sulla tua fibra di casa, non è ancora robusto.

---

### 11.4 Progetta per reti mobili e NAT difficili

Prevedi:

- CGNAT;
- router domestici;
- firewall universitari;
- Wi-Fi instabile;
- hotspot telefono;
- cambio rete durante la sessione.

WebRTC aiuta, ma devi comunque gestire fallimenti e riconnessioni.

---

## 12. Sicurezza

### 12.1 Regola base

Il client non decide mai cosa è permesso.

Il client può chiedere:

```text
voglio entrare nel canale
voglio mandare un messaggio
voglio creare un canale
```

Il server decide:

```text
puoi farlo?
```

---

### 12.2 Password

Non salvare password in chiaro.

Usa:

```text
Argon2
```

oppure:

```text
bcrypt
```

Salva solo:

```text
password_hash
```

Mai:

```text
password
```

---

### 12.3 Sessioni

Le sessioni devono:

- scadere;
- essere revocabili;
- non essere loggate;
- non essere salvate in localStorage se puoi evitarlo;
- non essere inviate su connessioni non cifrate.

In produzione:

```text
HTTPS + WSS
```

---

### 12.4 WebSocket sicuri

In produzione usa:

```text
wss://
```

Non:

```text
ws://
```

Controlla:

- origin;
- autenticazione;
- payload size;
- rate limit;
- permessi;
- heartbeat;
- cleanup.

---

### 12.5 Validazione input

Valida sempre:

- username;
- email;
- nome server;
- nome canale;
- contenuto messaggio;
- UUID;
- tipo evento;
- dimensione payload;
- stato mute/deafen.

---

### 12.6 Protezione anti-abuso

Prevedi:

- rate limit messaggi;
- rate limit login;
- rate limit creazione canali;
- kick/ban;
- server mute;
- blocco spam;
- limite lunghezza messaggi;
- limite numero canali;
- limite utenti per canale nel primo MVP.

---

## 13. Database e migrazioni

### 13.1 Usa migration sempre

Non modificare il database manualmente senza migration.

Struttura:

```text
infra/migrations/
  001_create_users.sql
  002_create_servers.sql
  003_create_channels.sql
  004_create_messages.sql
```

Ogni modifica al database deve essere versionata.

---

### 13.2 Usa vincoli nel database

Non affidarti solo al codice.

Esempi:

```sql
email TEXT NOT NULL UNIQUE
type TEXT NOT NULL CHECK (type IN ('text', 'voice'))
PRIMARY KEY (server_id, user_id)
```

---

### 13.3 Indici

Aggiungi indici dove servono.

Esempi:

```sql
CREATE INDEX idx_messages_channel_created_at
ON messages(channel_id, created_at);

CREATE INDEX idx_channels_server_id
ON channels(server_id);

CREATE INDEX idx_server_members_user_id
ON server_members(user_id);
```

---

### 13.4 Non salvare stato volatile nel database

Non mettere in PostgreSQL cose come:

- utente online;
- utente sta scrivendo;
- utente attualmente in vocale;
- stato temporaneo WebRTC;
- heartbeat.

Queste cose stanno in memoria o in Redis.

---

## 14. Testing

### 14.1 Tipi di test

Devi avere almeno:

```text
unit test
integration test
WebSocket test
database test
client test minimo
manual test checklist
benchmark test
```

---

### 14.2 Test unitari

Esempi:

- validazione username;
- controllo permessi;
- parsing eventi WebSocket;
- creazione messaggi;
- gestione errori.

---

### 14.3 Test di integrazione

Esempio:

```text
registrazione → login → crea server → crea canale → manda messaggio
```

Questo test vale più di 20 test piccoli scollegati.

---

### 14.4 Test WebSocket

Casi da testare:

- connessione con token valido;
- connessione senza token;
- invio messaggio valido;
- invio messaggio troppo lungo;
- invio evento sconosciuto;
- join voice senza permesso;
- disconnessione improvvisa.

---

### 14.5 Test manuale audio

Checklist:

```text
[ ] due utenti si sentono
[ ] mute blocca invio audio
[ ] deafen blocca ricezione audio
[ ] uscita dal canale pulisce audio
[ ] chiusura app pulisce stato vocale
[ ] cambio microfono non rompe tutto
[ ] riconnessione dopo rete persa
[ ] qualità stabile per 10 minuti
```

---

## 15. Benchmark e misurazioni

### 15.1 Non ottimizzare senza misurare

Prima misura:

```text
RAM
CPU
startup time
network usage
latenza voce
jitter
packet loss
stabilità dopo ore
```

Poi ottimizza.

---

### 15.2 Benchmark minimi

Crea questi scenari:

```text
Startup benchmark
Idle 10 minuti
Chat 10 minuti
Voice 1-to-1 10 minuti
Voice 5 utenti 10 minuti
Long run 2 ore
Rete disturbata
```

---

### 15.3 Confronto con Discord

Confronta solo scenari equivalenti:

```text
Discord aperto, loggato, idle
LightVoice aperto, loggato, idle

Discord in canale vocale con 5 utenti
LightVoice in canale vocale con 5 utenti
```

Non confrontare:

```text
Discord con 50 feature attive
LightVoice con 3 feature
```

senza specificarlo chiaramente.

---

### 15.4 Metriche client

Raccogli:

```text
CPU media
CPU p95
RAM media
RAM picco
tempo di avvio
upload medio
download medio
WebRTC RTT
jitter
packet loss
crash
reconnect
```

---

### 15.5 Metriche server

Raccogli:

```text
active_websocket_connections
active_voice_rooms
active_voice_users
messages_sent_total
http_requests_total
http_request_duration_seconds
websocket_events_total
process_cpu_usage
process_memory_bytes
database_query_duration
```

---

## 16. Observability

### 16.1 Logging

Ogni evento importante deve essere loggato.

Esempi:

```text
login_success
login_failed
websocket_connected
websocket_disconnected
message_created
voice_joined
voice_left
permission_denied
webrtc_signal_sent
webrtc_signal_failed
```

Non loggare:

- password;
- token;
- contenuti sensibili;
- dati personali inutili.

---

### 16.2 Metrics

Aggiungi endpoint:

```http
GET /metrics
```

Formato consigliato:

```text
Prometheus/OpenMetrics
```

Metriche utili:

```text
process_cpu_seconds_total
process_resident_memory_bytes
active_sessions
active_ws_connections
active_voice_users
messages_total
voice_join_total
websocket_errors_total
```

---

### 16.3 Tracing

Per richieste complesse usa trace/span.

Esempio:

```text
HTTP request
  → auth middleware
  → permission check
  → database query
  → websocket broadcast
```

Con tracing puoi capire dove perdi tempo.

---

## 17. Performance client

### 17.1 UI leggera

Evita:

- liste messaggi renderizzate tutte insieme;
- animazioni pesanti;
- polling continuo;
- store globali enormi;
- aggiornamenti UI inutili ogni secondo.

Usa:

- virtualizzazione lista messaggi;
- componenti piccoli;
- aggiornamenti mirati;
- lazy loading messaggi vecchi.

---

### 17.2 Non salvare troppi messaggi in memoria

Per ogni canale tieni in memoria solo una finestra ragionevole.

Esempio:

```text
ultimi 100-300 messaggi
```

I messaggi vecchi li carichi su richiesta.

---

### 17.3 Evita polling se hai WebSocket

Errore:

```text
ogni 2 secondi chiedo al server se ci sono nuovi messaggi
```

Meglio:

```text
server manda evento WebSocket quando arriva un messaggio
```

---

### 17.4 Misura il process tree

Su desktop misura tutta l'app:

```text
processo Tauri principale
webview
eventuali processi figli
```

Non misurare solo un processo se l'app ne crea più di uno.

---

## 18. Performance server

### 18.1 Non fare broadcast globale

Errore:

```text
ogni messaggio viene mandato a tutti gli utenti online
```

Corretto:

```text
messaggio canale X → solo utenti che possono vedere canale X
```

---

### 18.2 Usa strutture dati per stanze

Esempio:

```rust
HashMap<ChannelId, HashSet<UserId>>
HashMap<UserId, Vec<ConnectionId>>
HashMap<ConnectionId, Sender<ServerEvent>>
```

Devi poter rispondere velocemente:

```text
chi è nel canale?
quali connessioni ha questo utente?
a chi devo inviare questo evento?
```

---

### 18.3 Backpressure

Se un client è lento, non deve bloccare tutti.

Ogni connessione WebSocket dovrebbe avere una coda limitata.

Esempio:

```text
max 100 eventi in coda
se supera il limite → disconnetti o droppa eventi non critici
```

---

### 18.4 Non bloccare il runtime async

Evita operazioni bloccanti dentro task async:

- file pesanti;
- CPU intensive;
- compressione grossa;
- sleep bloccanti;
- lock lunghi.

Se serve, usa task dedicati.

---

## 19. UX e comportamento prodotto

### 19.1 Stati chiari

La UI deve sempre dire cosa sta succedendo:

```text
Connesso
Riconnessione...
Offline
Microfono non disponibile
Permesso microfono negato
Connessione vocale fallita
```

---

### 19.2 Feedback immediato

Quando l'utente manda un messaggio:

- puoi mostrarlo subito come “pending”;
- poi confermare quando il server risponde;
- se fallisce, mostri errore.

---

### 19.3 Errori leggibili

Errore brutto:

```text
Error code 403
```

Errore buono:

```text
Non hai il permesso di scrivere in questo canale.
```

---

### 19.4 Impostazioni audio minime

Da avere presto:

- selezione microfono;
- selezione output;
- volume input;
- volume output;
- mute;
- deafen;
- test microfono.

---

## 20. Sicurezza del client Tauri

### 20.1 Non esporre API native inutili

In Tauri, ogni comando esposto al frontend deve essere necessario.

Evita:

```text
comandi generici tipo execute_command
accesso file system troppo ampio
lettura/scrittura arbitraria
```

Meglio:

```text
comandi piccoli e specifici
permessi minimi
validazione input
```

---

### 20.2 Attenzione alle dipendenze frontend

Non installare pacchetti npm a caso.

Prima di aggiungere una dipendenza chiediti:

```text
serve davvero?
è mantenuta?
quanti download ha?
ha vulnerabilità note?
posso farlo con poche righe mie?
```

---

## 21. Gestione dipendenze

### 21.1 Aggiorna con criterio

Non aggiornare tutto casualmente prima di una release.

Usa:

```bash
cargo outdated
cargo audit
npm audit
```

Prima:

```text
test
benchmark
backup
branch separato
```

Poi aggiorni.

---

### 21.2 Lockfile versionato

Versiona:

```text
Cargo.lock
package-lock.json / pnpm-lock.yaml
```

Così tutti usano le stesse versioni.

---

## 22. Git e workflow

### 22.1 Branch

Struttura semplice:

```text
main
develop
feature/auth
feature/websocket-chat
feature/voice-signaling
fix/reconnect-bug
```

---

### 22.2 Commit piccoli

Commit buono:

```text
feat(auth): add login endpoint
```

Commit brutto:

```text
update
```

Formato consigliato:

```text
feat:
fix:
refactor:
test:
docs:
perf:
chore:
```

---

### 22.3 Pull request anche se lavori da solo

Anche da solo, fai una mini-review:

```text
cosa cambia?
come testarlo?
rischi?
screenshot?
benchmark?
```

---

## 23. CI/CD

Pipeline minima:

```text
cargo fmt --check
cargo clippy -- -D warnings
cargo test
npm run check
npm run build
```

Pipeline futura:

```text
test integrazione PostgreSQL
test WebSocket
security audit
build Tauri
benchmark smoke test
```

---

## 24. Release

### 24.1 Versioning

Usa semantic versioning:

```text
0.1.0 MVP chat
0.2.0 voice 1-to-1
0.3.0 voice multiutente
0.4.0 Redis/presenza scalabile
1.0.0 prima versione stabile
```

---

### 24.2 Changelog

Ogni release deve avere:

```text
Added
Changed
Fixed
Security
Known Issues
```

---

### 24.3 Feature flag

Per feature rischiose:

```text
voice_enabled
redis_presence_enabled
experimental_sfu_enabled
```

Così puoi disattivarle senza rompere tutta l'app.

---

## 25. Scalabilità

### 25.1 Non scalare prima del necessario

Prima devi far funzionare:

```text
10 utenti
```

Poi:

```text
100 utenti
```

Poi:

```text
1000 utenti
```

Non progettare subito per milioni di utenti.

---

### 25.2 Primo limite: stato in memoria

All'inizio va bene:

```text
presenza in memoria
voice rooms in memoria
connessioni WebSocket in memoria
```

Ma con più istanze server devi usare:

```text
Redis Pub/Sub
message broker
load balancer con sticky sessions o architettura event-driven
```

---

### 25.3 Separazione futura dei servizi

All'inizio:

```text
un solo backend monolitico modulare
```

Futuro:

```text
api service
gateway websocket
voice service
presence service
```

Non fare microservizi subito.

---

## 26. Anti-pattern da evitare

### 26.1 Fare tutto in un unico file

Se `main.rs` supera troppo presto centinaia di righe, stai sbagliando struttura.

---

### 26.2 Ottimizzare prima di avere metriche

Frase pericolosa:

```text
secondo me questa parte consuma troppo
```

Frase corretta:

```text
il benchmark mostra che questa parte usa il 35% della CPU
```

---

### 26.3 Fidarsi del client

Mai.

Il client può essere modificato.

Il server deve sempre validare permessi e input.

---

### 26.4 Aggiungere feature prima di stabilizzare

Non aggiungere bot, screen sharing o plugin se:

- reconnect non funziona;
- audio cade;
- RAM cresce nel tempo;
- permessi sono incompleti;
- non hai benchmark.

---

### 26.5 Ignorare cleanup

Ogni connessione deve avere una fine pulita.

Quando un utente esce:

```text
chiudi WebSocket
chiudi peer connection
rimuovi presenza
rimuovi voice state
notifica gli altri
libera buffer
```

---

## 27. Definition of Done

Una feature è finita solo se:

```text
[ ] funziona nel caso normale
[ ] gestisce errori prevedibili
[ ] valida input
[ ] controlla permessi lato server
[ ] ha test minimi
[ ] ha log utili
[ ] non rompe benchmark principali
[ ] è documentata nel protocollo/API
[ ] ha UI comprensibile
[ ] pulisce risorse quando termina
```

Se manca una di queste cose, la feature è “funzionante”, ma non ancora “finita”.

---

## 28. Checklist per ogni modulo

### Auth

```text
[ ] password hashata
[ ] login rate limited
[ ] sessione/token scade
[ ] logout invalida sessione/token
[ ] errori non rivelano troppo
[ ] endpoint protetti
```

### Chat

```text
[ ] messaggi validati
[ ] messaggi salvati
[ ] broadcast solo agli utenti autorizzati
[ ] lunghezza massima
[ ] rate limit
[ ] cronologia paginata
```

### WebSocket

```text
[ ] auth su connessione
[ ] heartbeat
[ ] cleanup su disconnect
[ ] payload limit
[ ] evento sconosciuto gestito
[ ] code limitate per client lento
```

### Voice

```text
[ ] join autorizzato
[ ] leave pulisce stato
[ ] mute locale
[ ] server mute separato
[ ] stats WebRTC raccolte
[ ] reconnect gestito
[ ] microfono assente gestito
```

### Database

```text
[ ] migration
[ ] vincoli
[ ] indici
[ ] query testate
[ ] niente stato volatile persistito inutilmente
```

### Client

```text
[ ] stato connessione visibile
[ ] errori leggibili
[ ] niente polling inutile
[ ] UI non renderizza liste enormi
[ ] impostazioni audio minime
```

---

## 29. Roadmap consigliata

### Fase 1 — Core backend

```text
auth
users
servers
channels
database migrations
```

### Fase 2 — Client base

```text
login
register
sidebar server
lista canali
stato sessione
```

### Fase 3 — Chat realtime

```text
WebSocket
messaggi
cronologia
presenza online
```

### Fase 4 — Voice state

```text
canali vocali senza audio
join/leave
mute/deafen stato
lista utenti in voice
```

### Fase 5 — Audio base

```text
WebRTC signaling
audio 1-to-1
stats WebRTC
reconnect base
```

### Fase 6 — Multiutente

```text
3-5 utenti in voice
cleanup connessioni
benchmark voice
```

### Fase 7 — Stabilizzazione

```text
test
benchmark
security hardening
logging
metrics
long run test
```

### Fase 8 — Scalabilità

```text
Redis
Prometheus
load test
separazione voice/gateway
SFU futura
```

---

## 30. Fonti e documentazione utile

### Rust e API design

- Rust API Guidelines: https://rust-lang.github.io/api-guidelines/
- Rust API Guidelines Checklist: https://rust-lang.github.io/api-guidelines/checklist.html
- Tokio: https://tokio.rs/
- Axum: https://docs.rs/axum/
- SQLx: https://docs.rs/sqlx/

### Tauri

- Tauri v2 documentation: https://v2.tauri.app/
- Tauri security: https://v2.tauri.app/security/

### Sicurezza

- OWASP ASVS: https://owasp.org/www-project-application-security-verification-standard/
- OWASP WebSocket Security Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/WebSocket_Security_Cheat_Sheet.html
- OWASP Session Management Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- OWASP WebSocket Testing Guide: https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/11-Client-side_Testing/10-Testing_WebSockets

### WebRTC e audio

- MDN RTCPeerConnection: https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection
- MDN RTCPeerConnection.getStats(): https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats
- Opus codec: https://opus-codec.org/

### Observability e benchmark

- Prometheus client libraries: https://prometheus.io/docs/instrumenting/clientlibs/
- Prometheus Rust client: https://github.com/prometheus/client_rust
- OpenTelemetry Rust: https://opentelemetry.io/docs/languages/rust/
- k6 WebSocket testing: https://grafana.com/docs/k6/latest/using-k6/protocols/websockets/

---

## 31. Regola finale

Costruisci il progetto come se ogni parte dovesse essere:

```text
misurata
testata
sostituita
debuggata
mantenuta
```

Non scrivere codice solo perché “funziona sul tuo PC”.

Per un software realtime, la vera qualità si vede quando:

```text
la rete peggiora
gli utenti aumentano
la sessione dura ore
il client si disconnette
il server riceve input malformato
il database rallenta
l'audio deve recuperare da jitter e packet loss
```

Se il programma resta stabile in questi casi, allora stai costruendo qualcosa di serio.
