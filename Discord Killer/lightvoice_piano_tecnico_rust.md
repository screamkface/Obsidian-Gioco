# LightVoice — Piano Tecnico e Operativo

> Obiettivo: progettare un software di comunicazione vocale e testuale simile a TeamSpeak/Discord, ma più leggero, modulare e costruito principalmente in Rust.

---

## 1. Obiettivo del progetto

Il progetto deve partire come una piattaforma minimale per:

- creare server/gruppi;
- creare canali testuali;
- creare canali vocali;
- inviare messaggi in tempo reale;
- entrare in un canale vocale;
- parlare con altri utenti nello stesso canale;
- gestire mute/unmute;
- mostrare utenti online/offline.

La prima versione non deve cercare di replicare Discord interamente. L'obiettivo è costruire un core stabile:

```text
account + canali + chat realtime + voice realtime
```

Funzionalità da NON inserire subito:

- videochiamate;
- screen sharing;
- bot;
- plugin;
- marketplace;
- file upload avanzato;
- ruoli estremamente granulari;
- crittografia end-to-end;
- app mobile.

---

## 2. Stack tecnologico consigliato

### 2.1 Client desktop

Tecnologie:

```text
Tauri + Svelte + TypeScript + Rust
```

Motivazione:

- Tauri permette di creare app desktop leggere usando una UI web e un backend nativo in Rust.
- Svelte è adatto a interfacce leggere e reattive.
- TypeScript aiuta a tipizzare il protocollo client/server.
- Rust nel core Tauri può gestire funzioni native, configurazioni locali, storage locale e integrazione con il sistema operativo.

Alternative possibili:

```text
Tauri + React
Flutter Desktop
Rust nativo + egui
C++ + Qt
```

Scelta consigliata per questo progetto:

```text
Tauri + Svelte
```

---

### 2.2 Backend

Tecnologie:

```text
Rust + Tokio + Axum
```

Motivazione:

- Rust offre performance, sicurezza della memoria e assenza di garbage collector.
- Tokio è il runtime async più usato nell'ecosistema Rust.
- Axum è un framework web Rust costruito sull'ecosistema Tokio/Hyper/Tower.
- Il backend deve gestire molte connessioni WebSocket, sessioni utente e canali realtime.

Stack backend:

```text
Rust
Tokio
Axum
tower-http
serde
serde_json
tracing
thiserror / anyhow
```

---

### 2.3 Database

Tecnologia:

```text
PostgreSQL
```

Usi:

- utenti;
- server;
- membri;
- canali;
- messaggi;
- ruoli;
- permessi.

Libreria Rust:

```text
SQLx
```

Motivazione:

- SQLx è asincrono.
- Supporta PostgreSQL.
- Permette query controllate a compile-time, se configurato correttamente.
- Non obbliga a usare un ORM pesante.

---

### 2.4 Stato temporaneo e presenza

Tecnologia futura:

```text
Redis
```

Usi:

- utenti online;
- stato dei canali vocali;
- rate limiting;
- sessioni temporanee;
- pub/sub tra più istanze backend;
- stato volatile non persistente.

Per il primo MVP Redis può essere evitato. Puoi partire con stato in memoria nel backend Rust.

Prima versione:

```text
stato online in memoria
```

Versione successiva:

```text
Redis
```

---

### 2.5 Comunicazione realtime testuale

Tecnologia:

```text
WebSocket
```

Uso:

- chat testuale;
- eventi di presenza;
- join/leave canali;
- cambio stato mute;
- notifiche realtime;
- signaling WebRTC.

Possibili librerie:

```text
axum::extract::ws
tokio-tungstenite
```

Per partire, usa WebSocket integrato con Axum.

---

### 2.6 Voce realtime

Tecnologia consigliata iniziale:

```text
WebRTC + WebRTC.rs
```

Codec:

```text
Opus
```

Motivazione:

- WebRTC gestisce già molte complessità della voce su Internet.
- Aiuta con NAT traversal, ICE, STUN/TURN, sicurezza e trasporto realtime.
- Opus è il codec più adatto per voce interattiva a bassa latenza.

Da evitare all'inizio:

```text
UDP custom + protocollo audio scritto da zero
```

Quella strada è utile più avanti, ma all'inizio complica troppo il progetto.

---

### 2.7 Container e ambiente locale

Tecnologie:

```text
Docker
Docker Compose
```

Servizi locali:

```text
backend Rust
PostgreSQL
Redis opzionale
```

Obiettivo:

- avvio facile del progetto;
- ambiente replicabile;
- database locale;
- migrazioni controllate.

---

## 3. Architettura generale

```text
┌──────────────────────────────────────┐
│          Client Desktop              │
│      Tauri + Svelte + Rust           │
│                                      │
│  - UI                                │
│  - WebSocket client                  │
│  - WebRTC client                     │
│  - gestione microfono                │
│  - stato locale                      │
└──────────────────┬───────────────────┘
                   │
                   │ HTTPS / WebSocket / WebRTC signaling
                   │
┌──────────────────▼───────────────────┐
│             Backend Rust             │
│          Axum + Tokio + SQLx          │
│                                      │
│  - auth                              │
│  - utenti                            │
│  - server/gruppi                     │
│  - canali                            │
│  - messaggi                          │
│  - websocket gateway                 │
│  - voice signaling                   │
│  - permessi                          │
└──────────────────┬───────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
┌───────▼────────┐    ┌───────▼────────┐
│   PostgreSQL   │    │ Redis opzionale│
│ dati persist.  │    │ stato volatile │
└────────────────┘    └────────────────┘
```

---

## 4. Modello di rete

### 4.1 Scelta consigliata

Usa un modello:

```text
client → server centrale → altri client
```

Non usare peer-to-peer puro per la prima versione.

Motivazione:

- meno problemi con NAT/firewall;
- IP degli utenti nascosto;
- moderazione più semplice;
- permessi controllabili lato server;
- canali vocali più facili da gestire;
- esperienza utente più stabile.

---

### 4.2 Modello audio

Il server vocale dovrebbe comportarsi come una SFU/forwarder:

```text
Alice ──audio──► Server ──audio──► Bob
Bob   ──audio──► Server ──audio──► Alice
Carlo ──audio──► Server ──audio──► Alice/Bob
```

All'inizio evita il mixing audio server-side.

Forwarding/SFU:

- meno CPU sul server;
- qualità migliore;
- volume individuale gestibile lato client;
- più adatto a canali vocali.

Mixing/MCU:

- più pesante lato server;
- più latenza;
- più complessità audio;
- meno flessibile.

---

## 5. Moduli del backend

### 5.1 Auth module

Responsabilità:

- registrazione;
- login;
- logout;
- gestione sessione;
- hash password;
- validazione token/session cookie.

Endpoint iniziali:

```http
POST /auth/register
POST /auth/login
POST /auth/logout
GET  /auth/me
```

Tecnologie:

```text
argon2 oppure bcrypt
jsonwebtoken oppure cookie di sessione
serde
validator
```

Scelta consigliata:

```text
cookie di sessione httpOnly per app desktop/web
```

Oppure:

```text
JWT per semplicità iniziale
```

---

### 5.2 User module

Responsabilità:

- profilo utente;
- username;
- avatar futuro;
- stato online/offline.

Endpoint:

```http
GET /users/:id
GET /users/me
PATCH /users/me
```

---

### 5.3 Server module

Qui “server” significa gruppo/community, come su Discord.

Responsabilità:

- creare server;
- lista server dell'utente;
- membri del server;
- owner/admin/member.

Endpoint:

```http
POST /servers
GET  /servers
GET  /servers/:id
POST /servers/:id/members
DELETE /servers/:id/members/:user_id
```

---

### 5.4 Channel module

Responsabilità:

- canali testuali;
- canali vocali;
- ordinamento canali;
- permessi base.

Endpoint:

```http
POST /servers/:server_id/channels
GET  /servers/:server_id/channels
PATCH /channels/:id
DELETE /channels/:id
```

Tipi canale:

```text
text
voice
```

---

### 5.5 Message module

Responsabilità:

- invio messaggi;
- recupero cronologia;
- salvataggio su PostgreSQL;
- broadcast realtime via WebSocket.

Endpoint:

```http
GET /channels/:channel_id/messages
POST /channels/:channel_id/messages
```

Evento WebSocket:

```json
{
  "type": "message_created",
  "channel_id": "channel_uuid",
  "message": {
    "id": "message_uuid",
    "author_id": "user_uuid",
    "content": "ciao",
    "created_at": "..."
  }
}
```

---

### 5.6 WebSocket Gateway

Responsabilità:

- mantenere connessioni aperte;
- autenticare connessioni;
- ricevere eventi client;
- inviare eventi server;
- gestire presenza;
- gestire signaling WebRTC.

Eventi client → server:

```json
{
  "type": "send_message",
  "channel_id": "channel_uuid",
  "content": "ciao"
}
```

```json
{
  "type": "join_voice",
  "channel_id": "voice_channel_uuid"
}
```

```json
{
  "type": "leave_voice",
  "channel_id": "voice_channel_uuid"
}
```

```json
{
  "type": "set_mute",
  "muted": true
}
```

Eventi server → client:

```json
{
  "type": "user_online",
  "user_id": "user_uuid"
}
```

```json
{
  "type": "user_joined_voice",
  "channel_id": "voice_channel_uuid",
  "user_id": "user_uuid"
}
```

```json
{
  "type": "user_left_voice",
  "channel_id": "voice_channel_uuid",
  "user_id": "user_uuid"
}
```

---

### 5.7 Voice Signaling module

Responsabilità:

- negoziazione WebRTC;
- scambio SDP offer/answer;
- scambio ICE candidates;
- controllo accesso al canale vocale;
- aggiornamento presenza vocale.

Eventi:

```json
{
  "type": "webrtc_offer",
  "channel_id": "voice_channel_uuid",
  "sdp": "..."
}
```

```json
{
  "type": "webrtc_answer",
  "channel_id": "voice_channel_uuid",
  "sdp": "..."
}
```

```json
{
  "type": "ice_candidate",
  "channel_id": "voice_channel_uuid",
  "candidate": "..."
}
```

---

## 6. Schema database iniziale

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE servers (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    owner_id UUID NOT NULL REFERENCES users(id),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE server_members (
    server_id UUID NOT NULL REFERENCES servers(id),
    user_id UUID NOT NULL REFERENCES users(id),
    role TEXT NOT NULL DEFAULT 'member',
    joined_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (server_id, user_id)
);

CREATE TABLE channels (
    id UUID PRIMARY KEY,
    server_id UUID NOT NULL REFERENCES servers(id),
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('text', 'voice')),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE messages (
    id UUID PRIMARY KEY,
    channel_id UUID NOT NULL REFERENCES channels(id),
    author_id UUID NOT NULL REFERENCES users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

Versione futura:

```sql
CREATE TABLE roles (
    id UUID PRIMARY KEY,
    server_id UUID NOT NULL REFERENCES servers(id),
    name TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE role_permissions (
    role_id UUID NOT NULL REFERENCES roles(id),
    permission TEXT NOT NULL,
    PRIMARY KEY (role_id, permission)
);
```

---

## 7. Struttura repository consigliata

```text
lightvoice/
  apps/
    desktop/
      src/
        lib/
        routes/
        components/
        stores/
        api/
        websocket/
        voice/
      src-tauri/
        src/
        Cargo.toml
      package.json
      tauri.conf.json

  services/
    api/
      src/
        main.rs
        config.rs
        state.rs
        error.rs

        auth/
          mod.rs
          routes.rs
          service.rs
          repository.rs
          dto.rs

        users/
          mod.rs
          routes.rs
          service.rs
          repository.rs

        servers/
          mod.rs
          routes.rs
          service.rs
          repository.rs

        channels/
          mod.rs
          routes.rs
          service.rs
          repository.rs

        messages/
          mod.rs
          routes.rs
          service.rs
          repository.rs

        websocket/
          mod.rs
          gateway.rs
          protocol.rs
          presence.rs

        voice/
          mod.rs
          signaling.rs
          rooms.rs

        permissions/
          mod.rs
          service.rs

      Cargo.toml

  packages/
    shared-protocol/
      src/
        lib.rs
        events.rs
        dto.rs
      Cargo.toml

  infra/
    docker-compose.yml
    migrations/

  docs/
    architecture.md
    protocol.md
    database.md
    roadmap.md
```

---

## 8. Piano operativo

### Fase 0 — Setup progetto

Obiettivo:

- creare repository;
- impostare workspace;
- creare backend vuoto;
- creare client Tauri;
- creare Docker Compose.

Task:

```text
[ ] creare repo lightvoice
[ ] creare cartella services/api
[ ] creare progetto Rust backend
[ ] creare app Tauri + Svelte
[ ] creare docker-compose con PostgreSQL
[ ] aggiungere file .env.example
[ ] aggiungere README iniziale
```

---

### Fase 1 — Backend base

Obiettivo:

- backend Axum avviabile;
- health check;
- configurazione ambiente;
- logging.

Endpoint:

```http
GET /health
```

Task:

```text
[ ] configurare Axum
[ ] configurare Tokio
[ ] configurare tracing
[ ] configurare dotenv/config
[ ] creare AppState condiviso
[ ] connettere PostgreSQL con SQLx
[ ] creare prima migration
```

---

### Fase 2 — Auth

Obiettivo:

- registrazione;
- login;
- recupero utente corrente.

Endpoint:

```http
POST /auth/register
POST /auth/login
GET  /auth/me
```

Task:

```text
[ ] creare tabella users
[ ] creare DTO RegisterRequest
[ ] creare DTO LoginRequest
[ ] hash password con Argon2/bcrypt
[ ] salvare utente su PostgreSQL
[ ] generare sessione/token
[ ] proteggere endpoint /auth/me
[ ] testare con curl/Postman/Bruno
```

---

### Fase 3 — Client login

Obiettivo:

- UI desktop minima;
- login funzionante;
- salvataggio sessione/token.

Schermate:

```text
LoginPage
RegisterPage
HomePage
```

Task:

```text
[ ] creare form login
[ ] creare form registrazione
[ ] chiamare API backend
[ ] gestire errori
[ ] salvare sessione lato client
[ ] redirect dopo login
```

---

### Fase 4 — Server e canali

Obiettivo:

- creare un server;
- visualizzare server dell'utente;
- creare canali text/voice.

Endpoint:

```http
POST /servers
GET  /servers
POST /servers/:id/channels
GET  /servers/:id/channels
```

Task:

```text
[ ] creare tabelle servers, server_members, channels
[ ] implementare create server
[ ] owner aggiunto automaticamente a server_members
[ ] implementare lista server
[ ] implementare create channel
[ ] implementare lista canali
[ ] UI sidebar server
[ ] UI lista canali
```

---

### Fase 5 — Chat realtime

Obiettivo:

- connessione WebSocket;
- invio messaggi;
- broadcast agli utenti nel canale;
- salvataggio messaggi.

Endpoint:

```http
GET /ws
GET /channels/:id/messages
```

Eventi:

```json
{
  "type": "send_message",
  "channel_id": "...",
  "content": "..."
}
```

```json
{
  "type": "message_created",
  "channel_id": "...",
  "message": {
    "id": "...",
    "author_id": "...",
    "content": "...",
    "created_at": "..."
  }
}
```

Task:

```text
[ ] creare WebSocket gateway
[ ] autenticare WebSocket
[ ] mappare user_id -> connessione
[ ] gestire send_message
[ ] salvare messaggio su PostgreSQL
[ ] inviare message_created agli utenti nel canale/server
[ ] UI chat
[ ] recuperare cronologia messaggi
[ ] auto-scroll messaggi
```

---

### Fase 6 — Presenza online

Obiettivo:

- vedere chi è online;
- evento online/offline;
- stato temporaneo in memoria.

Eventi:

```json
{
  "type": "user_online",
  "user_id": "..."
}
```

```json
{
  "type": "user_offline",
  "user_id": "..."
}
```

Task:

```text
[ ] registrare utente alla connessione WebSocket
[ ] rimuovere utente alla disconnessione
[ ] broadcast online/offline
[ ] mostrare lista utenti online nella UI
```

---

### Fase 7 — Canali vocali senza audio

Obiettivo:

- entrare/uscire da un canale vocale;
- visualizzare utenti nel canale;
- gestire mute/unmute a livello di stato.

Eventi:

```json
{
  "type": "join_voice",
  "channel_id": "..."
}
```

```json
{
  "type": "leave_voice",
  "channel_id": "..."
}
```

```json
{
  "type": "set_mute",
  "muted": true
}
```

Task:

```text
[ ] stato voice_rooms in memoria
[ ] controllare permesso join voice
[ ] join voice channel
[ ] leave voice channel
[ ] broadcast user_joined_voice
[ ] broadcast user_left_voice
[ ] UI canale vocale
[ ] UI mute/unmute
```

---

### Fase 8 — WebRTC signaling

Obiettivo:

- preparare connessione WebRTC;
- scambiare offer/answer;
- scambiare ICE candidates.

Eventi:

```json
{
  "type": "webrtc_offer",
  "target_user_id": "...",
  "sdp": "..."
}
```

```json
{
  "type": "webrtc_answer",
  "target_user_id": "...",
  "sdp": "..."
}
```

```json
{
  "type": "ice_candidate",
  "target_user_id": "...",
  "candidate": "..."
}
```

Task:

```text
[ ] creare protocollo signaling
[ ] inoltrare offer al target
[ ] inoltrare answer al target
[ ] inoltrare ice_candidate al target
[ ] lato client creare RTCPeerConnection
[ ] testare connessione tra due client
```

Nota importante:

La prima versione può usare una topologia semplice. Prima fai funzionare due utenti. Solo dopo estendi a più utenti.

---

### Fase 9 — Audio tra due utenti

Obiettivo:

- due utenti nello stesso canale vocale si sentono.

Task:

```text
[ ] chiedere permesso microfono nel client
[ ] acquisire MediaStream audio
[ ] aggiungere traccia audio a RTCPeerConnection
[ ] ricevere traccia audio remota
[ ] riprodurre audio remoto
[ ] gestire mute locale
[ ] gestire disconnessione
```

---

### Fase 10 — Audio multiutente

Obiettivo:

- più utenti nello stesso canale vocale.

Possibili modelli:

```text
full mesh temporaneo
SFU/forwarding
```

Per un MVP puoi partire con full mesh WebRTC tra pochi utenti, ma il progetto finale dovrebbe andare verso SFU/forwarding.

Task:

```text
[ ] gestire più peer connection
[ ] creare connessione verso ogni utente nel canale
[ ] aggiornare connessioni quando entra/esce qualcuno
[ ] evitare duplicati
[ ] gestire cleanup delle connessioni
```

Nota:

Full mesh va bene solo per pochi utenti. Per una soluzione più seria, implementare o integrare una SFU Rust.

---

### Fase 11 — Permessi base

Obiettivo:

- impedire azioni non autorizzate.

Permessi iniziali:

```text
owner
admin
member
```

Regole:

```text
owner: tutto
admin: gestisce canali e kick
member: chat e voice base
```

Task:

```text
[ ] controllare permessi lato server
[ ] impedire creazione canale ai member
[ ] impedire join voice se non membro
[ ] impedire messaggi in canali non autorizzati
[ ] aggiungere errori chiari lato client
```

---

### Fase 12 — Redis

Obiettivo:

- rendere lo stato realtime scalabile.

Usi:

```text
presence
voice room state
pub/sub tra istanze backend
rate limiting
```

Task:

```text
[ ] aggiungere Redis a docker-compose
[ ] integrare crate redis
[ ] spostare presenza da memoria a Redis
[ ] usare Redis Pub/Sub per broadcast multi-istanza
[ ] implementare rate limit base
```

---

### Fase 13 — Qualità, sicurezza e stabilità

Obiettivo:

- rendere il progetto usabile davvero.

Task:

```text
[ ] validazione input
[ ] rate limiting messaggi
[ ] limite lunghezza messaggi
[ ] logging strutturato
[ ] gestione errori centralizzata
[ ] reconnect WebSocket
[ ] reconnect voice
[ ] indicatori ping/latency
[ ] gestione packet loss/jitter stats WebRTC
[ ] HTTPS/TLS in produzione
```

---

## 9. Crates Rust consigliate

### Backend

```toml
axum = "..."
tokio = { version = "...", features = ["full"] }
tower-http = "..."
serde = { version = "...", features = ["derive"] }
serde_json = "..."
sqlx = { version = "...", features = ["runtime-tokio", "postgres", "uuid", "chrono"] }
uuid = { version = "...", features = ["v4", "serde"] }
chrono = { version = "...", features = ["serde"] }
tracing = "..."
tracing-subscriber = "..."
thiserror = "..."
anyhow = "..."
argon2 = "..."
jsonwebtoken = "..."
validator = { version = "...", features = ["derive"] }
```

### WebSocket

```toml
axum = { version = "...", features = ["ws"] }
```

oppure:

```toml
tokio-tungstenite = "..."
```

### WebRTC

```toml
webrtc = "..."
```

### Redis futuro

```toml
redis = { version = "...", features = ["tokio-comp"] }
```

### Tauri

Nel client:

```toml
tauri = "..."
serde = "..."
serde_json = "..."
```

---

## 10. Competenze da studiare

### Rust

Priorità:

```text
ownership
borrowing
lifetimes base
Result / Option
trait
async/await
Tokio
Arc / Mutex / RwLock
channel async
error handling
modularizzazione progetto
```

### Backend

```text
HTTP REST
WebSocket
sessioni
auth
SQL
migrazioni database
logging
rate limiting
test integrazione
```

### Reti

```text
TCP vs UDP
WebSocket
WebRTC
STUN
TURN
ICE
NAT traversal
latenza
jitter
packet loss
RTP/SRTP
```

### Audio

```text
PCM
sample rate
frame audio
Opus
bitrate
jitter buffer
echo cancellation
noise suppression
voice activity detection
```

### Client desktop

```text
Tauri
Svelte
TypeScript
gestione stato
WebSocket client
WebRTC client
permessi microfono
gestione errori UI
```

---

## 11. Primo milestone realistico

### Milestone 1 — Chat app desktop minimale

Obiettivo:

```text
utente si registra, fa login, crea un server, crea un canale testuale e manda messaggi realtime.
```

Deve includere:

```text
backend Rust
PostgreSQL
Tauri client
WebSocket
chat realtime
```

Non deve includere ancora:

```text
voce
ruoli avanzati
Redis
WebRTC
```

---

### Milestone 2 — Voice room senza audio

Obiettivo:

```text
utente entra in un canale vocale e gli altri vedono che è dentro.
```

Deve includere:

```text
join voice
leave voice
mute/unmute stato
lista utenti in vocale
```

---

### Milestone 3 — Audio 1-to-1

Obiettivo:

```text
due utenti nello stesso canale vocale si sentono.
```

Deve includere:

```text
WebRTC signaling
microfono
riproduzione audio remoto
mute locale
gestione disconnessione
```

---

### Milestone 4 — Audio multiutente

Obiettivo:

```text
3-5 utenti nello stesso canale vocale riescono a parlare.
```

Prima soluzione:

```text
full mesh WebRTC
```

Soluzione futura:

```text
SFU/forwarding
```

---

## 12. Decisioni tecniche iniziali

| Area | Scelta |
|---|---|
| Linguaggio principale | Rust |
| Client desktop | Tauri |
| UI | Svelte + TypeScript |
| Backend | Rust + Axum |
| Runtime async | Tokio |
| Database | PostgreSQL |
| DB access | SQLx |
| Realtime text | WebSocket |
| Voce | WebRTC |
| Codec | Opus |
| Cache futura | Redis |
| Deploy locale | Docker Compose |
| Architettura rete | Server centrale |
| Audio server | Forwarding/SFU futuro |
| Primo prototipo audio | WebRTC full mesh |

---

## 13. Strategia corretta

Non iniziare dalla voce.

Ordine corretto:

```text
1. Backend HTTP
2. Auth
3. Database
4. Client login
5. Server e canali
6. Chat WebSocket
7. Presenza utenti
8. Canali vocali senza audio
9. WebRTC signaling
10. Audio tra due utenti
11. Audio multiutente
12. Redis
13. SFU/forwarding
```

La voce è la parte più difficile. Se la affronti prima, rischi di bloccarti subito. Se invece costruisci prima il sistema di account, canali e WebSocket, quando arrivi alla voce hai già tutta l'infrastruttura pronta.

---

## 14. Risultato finale atteso

Alla fine del primo ciclo di sviluppo dovresti avere:

```text
un'app desktop leggera
login/registrazione
server e canali
chat realtime
utenti online
canali vocali
mute/unmute
audio WebRTC base
backend Rust modulare
database PostgreSQL
```

Questo è già un progetto molto forte sia tecnicamente sia come portfolio.

---

## 15. Fonti tecniche da consultare

- Tauri documentation: https://v2.tauri.app/
- Tauri Rust crate: https://docs.rs/tauri
- Axum documentation: https://docs.rs/axum
- Tokio documentation: https://tokio.rs/
- SQLx documentation: https://docs.rs/sqlx
- WebRTC.rs: https://webrtc.rs/
- WebRTC.rs GitHub: https://github.com/webrtc-rs/webrtc
- Opus Codec: https://opus-codec.org/
- PostgreSQL documentation: https://www.postgresql.org/docs/
- Redis documentation: https://redis.io/docs/latest/
