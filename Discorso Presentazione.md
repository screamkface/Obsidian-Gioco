**Copione pronto (15 minuti) – slide per slide**

1. **Cover (40-50s)**  
“Buongiorno, siamo Nicola Moscufo e Antonio Rubino. Vi presentiamo *Mars![architecture](architecture.md) Habitat Automation Platform*, il nostro progetto per il laboratorio di Advanced Programming. L’obiettivo è automatizzare un habitat simulato su Marte con un’architettura distribuita, event-driven e con dashboard realtime. Lo stack è FastAPI, RabbitMQ, SQLite, React/Vite/Tailwind, orchestrato con Docker Compose.”

2. **Agenda (20s)**  
“In questa presentazione mostriamo: problema e vincoli, architettura, motore di regole, dashboard, copertura user stories e piano demo live.”

3. **Problem and Team Scope (50-60s)**  
“La traccia richiede gestione di sensori e attuatori eterogenei. Noi, come team da 2 persone, abbiamo implementato lo scope previsto: polling REST dei sensori, normalizzazione eventi, broker interno, rule engine e dashboard realtime. La parte stream telemetry è esclusa dal perimetro del team da 2, come da specifica.”

4. **Baseline Requirements Coverage (50-60s)**  
“Qui vedete il check dei requisiti obbligatori: architettura event-driven, backend separati, schema evento unificato, latest state in memoria, persistenza regole, dashboard realtime e riproducibilità con Docker Compose. Tutti risultano completati e verificabili in demo.”

5. **Architecture Overview (60s)**  
“L’architettura è disaccoppiata: il simulatore espone API sensori/attuatori; l’ingestion-service legge i sensori e pubblica eventi su RabbitMQ; l’engine-service consuma eventi, applica regole e comanda attuatori; il frontend riceve stato via REST e aggiornamenti via WebSocket. Questo riduce dipendenze dirette e migliora robustezza.”

6. **Containers and Responsibilities (60s)**  
“Ogni container ha responsabilità chiara: simulator su 8080, ingestion su 8001, RabbitMQ su 5672 con management 15672, engine su 8002, frontend su 3000. Questa separazione rispetta il modello ingestion-processing-presentation richiesto dalla traccia.”

7. **Unified Event Contract (55s)**  
“Per rendere omogenei payload diversi, convertiamo tutto in un `UnifiedEvent` con `event_id`, `timestamp`, `sensor_name`, `value`, `unit` e `schema_family`. L’evento viene pubblicato su `mars.events` con routing key `sensor.reading`. Il `raw_payload` resta disponibile per tracciabilità.”

8. **End-to-End Processing Flow (70s)**  
“Flusso completo: discovery e polling sensori REST, normalizzazione, publish su RabbitMQ, consume nell’engine, update della cache `latest_state`, valutazione regole abilitate, comando attuatori e push realtime al frontend via WebSocket. Quindi la pipeline è asincrona e reattiva.”

9. **Rule Engine and Persistence (70-80s)**  
“Il formato regola è: IF sensore-operatore-soglia-unità THEN set attuatore ON/OFF. Supportiamo `<`, `<=`, `=`, `>`, `>=`. Le regole sono persistite su SQLite in `/data/rules.db`, con volume Docker `engine_data` per sopravvivere ai restart. Ottimizzazione implementata: deduplicazione comandi, quindi se l’attuatore è già nello stato target non inviamo chiamate inutili.”

10. **Dashboard: Monitoring and Control (55-60s)**  
“La dashboard aggrega monitoraggio operativo: valori sensori correnti, timestamp ultimo update, stato attuatori e controllo manuale ON/OFF. L’idea è dare in un’unica schermata la situazione dell’habitat.”

11. **Dashboard: Rule Management (55-60s)**  
“Da interfaccia è possibile creare, modificare, abilitare/disabilitare e cancellare regole. Questo permette di testare e cambiare logiche di automazione senza toccare codice backend.”

12. **Dashboard: Realtime Updates (45-50s)**  
“Gli aggiornamenti arrivano via WebSocket: niente refresh pagina, feedback immediato quando cambia un sensore o quando una regola attiva un attuatore.”

13. **User Stories Coverage (55-60s)**  
“Copriamo 10 user stories su 10: monitoraggio sensori, visibilità e controllo attuatori, CRUD regole con toggle, aggiornamenti realtime. La copertura è completa per il perimetro richiesto dal team da 2.”

14. **Demo Plan (Live) (2-3 min durante demo)**  
“Ora eseguiamo la demo live:  
15) `docker compose ps` per mostrare stack up.  
16) Apertura dashboard su localhost:3000 con update sensori.  
17) Creazione regola e verifica trigger attuatore.  
18) Disabilitazione regola e verifica cambio comportamento.  
19) Restart engine e verifica persistenza regole.  
20) Apertura Swagger simulatore su localhost:8080/docs.”

21. **Final Checklist + Q&A (30-40s)**  
“In conclusione, tutti i requisiti obbligatori nel nostro scope sono implementati e dimostrabili end-to-end. Grazie per l’attenzione, siamo disponibili per domande.”

---

Se vuoi, ti preparo anche una versione “orale naturale” più colloquiale (meno formale) da memorizzare facilmente.