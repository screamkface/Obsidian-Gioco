
## 📘 Modulo 1: Pensare a Grafo e Basi di Cypher (Giorno 1)

Il primo passo è smettere di pensare in termini di tabelle relazionali (SQL) e iniziare a pensare in termini di **Nodi**, **Relazioni** e **Proprietà**. 



### 1.1 Concetti Chiave da Studiare
*   **Nodi (Nodes):** Le entità del tuo dominio (es. `User`, `Movie`, `Group`, `Genre`).
*   **Relazioni (Relationships):** I verbi che collegano i nodi. Hanno sempre una direzione e un tipo (es. `[:LIKES]`, `[:HAS_MEMBER]`).
*   **Proprietà (Properties):** Coppie chiave-valore memorizzate sia sui nodi che sulle relazioni (es. `runtimeMinutes` su un film, o `rating` su una relazione `[:VOTED]`).
*   **Sintassi Cypher (ASCII Art):** Cypher usa la punteggiatura per disegnare visivamente il grafo. `()` per i nodi, `[]` per le relazioni, `->` per la direzione.

### 1.2 Fonti e Risorse
*   **Corso gratuito (Obbligatorio):** [Neo4j GraphAcademy - Neo4j Fundamentals](https://graphacademy.neo4j.com/courses/neo4j-fundamentals/) (Teoria sui grafi, ~1 ora).
*   **Corso gratuito (Obbligatorio):** [Neo4j GraphAcademy - Cypher Fundamentals](https://graphacademy.neo4j.com/courses/cypher-fundamentals/) (~2 ore).
*   **Strumento:** Scarica **Neo4j Desktop** (locale) o crea un'istanza gratuita su **Neo4j AuraDB** per testare le query.

### 1.3 Esempio Pratico: Creazione e Lettura Base
Invece di leggere solo, scrivi questo nel tuo database vuoto per creare un mini-scenario:
```cypher
// 1. Creiamo due utenti, un film e un gruppo
CREATE (u1:User {id: "user_1", name: "Marco"}),
       (u2:User {id: "user_2", name: "Giulia"}),
       (m1:Movie {id: "mov_1", title: "Inception", runtimeMinutes: 148}),
       (g1:Group {id: "group_1", name: "Cinefili"})

// 2. Creiamo le relazioni (Marco ama Inception, Marco e Giulia sono nel gruppo)
CREATE (u1)-[:LIKES]->(m1)
CREATE (g1)-[:HAS_MEMBER]->(u1)
CREATE (g1)-[:HAS_MEMBER]->(u2);
````

**Query di Test (Lettura):** Trova tutti i film che piacciono ai membri del gruppo "Cinefili".

Cypher

```
MATCH (g:Group {name: "Cinefili"})-[:HAS_MEMBER]->(u:User)-[:LIKES]->(m:Movie)
RETURN u.name, m.title
```

---

## 📊 Modulo 2: Pattern per Motori di Raccomandazione (Giorno 2)

Questa è la fase cruciale per Agreeo. I database a grafo eccellono nelle raccomandazioni perché calcolano i percorsi (paths) in tempo reale senza costosi `JOIN`.

### 2.1 Concetti Chiave da Studiare

- **Collaborative Filtering:** Trovare pattern di comportamento simili tra utenti ("Agli utenti che hanno i tuoi stessi gusti è piaciuto anche...").
    
- **Content-Based Filtering:** Raccomandare item simili in base alle loro caratteristiche ("Visto che ti piace la Fantascienza, ecco altri film di Fantascienza").
    
- **Aggregazioni in Cypher:** L'uso di `count()`, `collect()` (per creare liste), e l'istruzione `WITH` (che concatena le query passando i risultati intermedi alla riga successiva).
    

### 2.2 Fonti e Risorse

- **Corso gratuito (Core per il tuo progetto):** [GraphAcademy - Build a Recommendation Engine with Neo4j](https://www.google.com/search?q=https://graphacademy.neo4j.com/courses/app-nodejs-recommendations/) (~3 ore). C'è sia in Python che Node.js.
    
- **Video YouTube:** Cerca _"Neo4j Recommendation Systems"_ per vedere esempi live di architetture simili a Netflix.
    

### 2.3 Esempio Pratico: Analisi del Collaborative Filtering

Riprendiamo la query del tuo piano e analizziamola riga per riga:

Cypher

```
// STEP 1: Trova i film che piacciono a me
MATCH (me:User {userId: "my_id"})-[:LIKES]->(m1:Movie)

// STEP 2: Trova altri utenti a cui piace lo STESSO film (Utenti simili a me)
MATCH (other:User)-[:LIKES]->(m1)

// STEP 3: Trova ALTRI film che piacciono a questi utenti simili
MATCH (other)-[:LIKES]->(m2:Movie)

// STEP 4: Assicurati che io non abbia già visto o votato negativamente questo nuovo film
WHERE NOT (me)-[:LIKES|DISLIKE|SEEN]->(m2)

// STEP 5: Conta quante volte questo nuovo film viene raccomandato dagli utenti simili e ordinalo
RETURN m2.title, count(other) as raccomandazioni
ORDER BY raccomandazioni DESC
LIMIT 10;
```

---

## 🚀 Modulo 3: Logica di Gruppo, Performance e Limiti (Giorno 3)

Ora che hai le basi delle raccomandazioni singole, bisogna ottimizzare per i gruppi e per le performance in produzione.

### 3.1 Concetti Chiave da Studiare

- **List Comprehension e Predicati:** Funzioni come `any()`, `all()`, `single()` per filtrare rapidamente gli array all'interno di una query (essenziali per confrontare i servizi di streaming).
    
- **Indici e Vincoli (Indexes & Constraints):** Senza indici, Neo4j deve scansionare ogni singolo nodo (Full Scan). Con gli indici, trova il nodo di partenza istantaneamente.
    
- **Profiling delle Query:** L'uso dei comandi `EXPLAIN` (vede il piano senza eseguirlo) e `PROFILE` (esegue e mostra i costi reali) per trovare i colli di bottiglia.
    
- **Il problema del Cold Start:** Cosa mostrare a un gruppo appena creato in cui nessuno ha votato nulla? (Risposta: Classifiche globali o filtri basati solo su generi condivisi).
    

### 3.2 Fonti e Risorse

- **Documentazione Ufficiale:** [Neo4j Cypher Manual - Indexes](https://gemini.google.com/app/7489a917682e90ef)
    
- **Documentazione Ufficiale:** [Neo4j Cypher Manual - List Functions](https://gemini.google.com/app/7489a917682e90ef)
    

### 3.3 Esempio Pratico: Ottimizzazione e Cold Start

Prima di eseguire query complesse, crea gli indici sui campi con cui cerchi più spesso:

Cypher

```
// Crea un vincolo di unicità (crea automaticamente anche un indice veloce)
CREATE CONSTRAINT FOR (m:Movie) REQUIRE m.id IS UNIQUE;
CREATE CONSTRAINT FOR (u:User) REQUIRE u.userId IS UNIQUE;
```

**Esempio di Fallback per Cold Start:** Se il gruppo non ha abbastanza dati, raccomandiamo i film più popolari in base ai servizi di streaming che tutti hanno in comune:

Cypher

```
// Trova il gruppo e tutti i suoi membri
MATCH (g:Group {id: "gruppo_1"})-[:HAS_MEMBER]->(u:User)
// Raccogli i servizi di ogni utente e trova l'intersezione (servizi in comune)
WITH g, collect(u.streamingServices) as serviziUtenti
// (Qui la logica assume che tu abbia calcolato i 'sharedServices' in precedenza o nel backend per semplicità)
MATCH (m:Movie)
// Controlla che il film sia disponibile in almeno uno dei servizi condivisi
WHERE any(service IN m.streamingServices WHERE service IN ["Netflix", "PrimeVideo"])
// Calcola un punteggio globale basato su tutti gli utenti del database (non solo del gruppo)
MATCH (allUsers:User)-[:LIKES]->(m)
RETURN m.title, count(allUsers) as globalPopularity
ORDER BY globalPopularity DESC
LIMIT 10;
```

---
