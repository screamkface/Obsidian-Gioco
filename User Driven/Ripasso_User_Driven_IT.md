# User-Driven Software Engineering — Ripasso in Italiano

> File pensato per ripetere velocemente: **definizioni**, **tabelle**, **differenze** e **tanti esempi**.  
> Ho evitato spiegazioni troppo discorsive: ogni concetto è scritto in forma da ripasso/esame.

---

# 0. Metodo di ripasso

| Passata | Cosa fare |
|---|---|
| 1 | Leggi solo le definizioni in grassetto. |
| 2 | Copri gli esempi e prova a inventarne uno tuo. |
| 3 | Ripeti le tabelle “differenza tra...”. |
| 4 | Allenati con le frasi pronte da esame. |

## Mappa del corso

| Area | Domanda centrale |
|---|---|
| HCI | Come interagiscono esseri umani e sistemi? |
| UCD / Usabilità | Come progetto sistemi adatti agli utenti reali? |
| User Requirements | Come raccolgo bisogni e requisiti degli utenti? |
| Task / Cognitive / Dialog Models | Come modello azioni, pensiero e flusso dell'interazione? |
| Evaluation | Come capisco se l'interfaccia funziona? |
| Processi software | Come organizzo lo sviluppo? |
| Standard e qualità | Come controllo processi e qualità? |
| Function Points / COCOMO II | Come stimo dimensione, effort e tempo? |
| Scrum / User Stories | Come sviluppo in modo iterativo e orientato al valore? |
| Architecture / DDD / Microservices / DevOps | Come strutturo, rilascio e gestisco software complesso? |

---

# 1. HCI Foundations

## Definizioni fondamentali

| Concetto | Definizione | Esempio |
|---|---|---|
| **HCI** | Disciplina che studia progettazione, valutazione e implementazione di sistemi interattivi per uso umano. | Progettare un'app universitaria facile da usare. |
| **Interazione** | Dialogo tra utente e sistema: l'utente compie azioni e il sistema risponde. | Clicco “Prenota esame”, il sistema conferma. |
| **Dominio** | Area di attività o lavoro. | Università, sanità, e-commerce. |
| **Goal** | Risultato che l'utente vuole ottenere. | Prenotare un esame. |
| **Task** | Procedura concreta per raggiungere il goal. | Apri app → scegli esame → clicca prenota. |
| **Mental model** | Modello mentale dell'utente su come funziona il sistema. | L'utente pensa che “Archive” elimini definitivamente una mail. |

## Percezione, cognizione, azione

| Elemento | Significato | Implicazione di design |
|---|---|---|
| Percezione | Input visivi, uditivi, tattili. | Feedback visibile e immediato. |
| Cognizione | Memoria, ragionamento, decisione. | Ridurre il carico mentale. |
| Azione | Click, digitazione, voce, movimento. | Pulsanti chiari e facili da premere. |
| Emozione | Stato emotivo che influenza il comportamento. | Evitare stress, messaggi aggressivi, confusione. |

## Memoria e interfacce

| Tipo di memoria | Definizione | Problema tipico | Soluzione |
|---|---|---|---|
| Sensoriale | Mantiene input per pochissimo tempo. | Feedback che sparisce subito. | Messaggi persistenti o animazioni chiare. |
| Breve termine | Mantiene poche informazioni temporanee. | Ricordare codici tra schermate. | Riepiloghi, auto-compilazione, visibilità. |
| Lungo termine | Conoscenze stabili e abilità. | Metafore sconosciute. | Convenzioni familiari. |

## Errori umani

| Tipo | Definizione | Esempio | Soluzione |
|---|---|---|---|
| **Slip** | Intenzione corretta, azione sbagliata. | Voglio cancellare una foto, tocco quella accanto. | Spaziatura, undo, conferma. |
| **Mistake** | Intenzione sbagliata per modello mentale errato. | Penso che “archive” significhi “delete”. | Label chiare, spiegazioni, preview. |
| **Lapse** | Dimenticanza o perdita di attenzione. | Dimentico di applicare un coupon. | Promemoria, checklist, riepilogo. |

## Norman: 7 stages of action

| Fase | Significato | Esempio: prenotare esame |
|---|---|---|
| 1. Goal | Cosa voglio ottenere. | Voglio prenotare l'esame. |
| 2. Intention | Decido azione generale. | Userò l'app universitaria. |
| 3. Specify action | Traduco intenzione in azioni UI. | Apro lista appelli. |
| 4. Execute | Eseguo l'azione. | Clicco “Prenota”. |
| 5. Perceive | Percepisco stato sistema. | Vedo messaggio di conferma. |
| 6. Interpret | Capisco cosa significa. | Capisco che la prenotazione è riuscita. |
| 7. Evaluate | Confronto risultato e goal. | Sono prenotato? Sì. |

## Gulf of execution vs Gulf of evaluation

| Concetto | Definizione | Esempio | Soluzione |
|---|---|---|---|
| **Gulf of execution** | Distanza tra ciò che l'utente vuole fare e le azioni disponibili. | Voglio cancellare prenotazione ma non trovo comando. | Azioni visibili, label chiare. |
| **Gulf of evaluation** | Distanza tra stato del sistema e capacità dell'utente di capirlo. | Clicco “Invia” e non so se è partito. | Feedback, conferme, stato visibile. |

## Abowd and Beale Interaction Framework

| Componente | Linguaggio | Esempio ATM |
|---|---|---|
| User | Task language | Voglio prelevare 50€. |
| Input | Input language | Inserisco carta, PIN, importo. |
| System | Core language | Verifica saldo e aggiorna conto. |
| Output | Output language | Eroga contanti e mostra ricevuta. |

---

# 2. User Centered Design e Usability

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **User Centered Design** | Processo iterativo che coinvolge utenti reali per progettare sistemi usabili. | Testare un prototipo con studenti prima dello sviluppo finale. |
| **Human-centered design** | Approccio che considera capacità, limiti, bisogni e contesto umano. | Font leggibili per utenti anziani. |
| **Usability** | Grado in cui utenti specifici raggiungono obiettivi specifici con efficacia, efficienza e soddisfazione in un contesto specifico. | Studenti prenotano un esame in meno di 2 minuti senza errori. |

## Caratteristiche UCD

| Caratteristica | Significato | Esempio |
|---|---|---|
| Know your users | Capire utenti, contesto, bisogni. | Intervistare studenti e segreteria. |
| Involve users early | Utenti coinvolti fin dall'inizio. | Test su sketch cartacei. |
| Iterate frequently | Progettare, testare, correggere. | Prototipo 1 → test → prototipo 2. |
| Multidisciplinary team | Competenze diverse collaborano. | Designer, dev, domain expert, utenti. |

## Attività UCD

| Attività | Output |
|---|---|
| Specificare contesto d'uso | Utenti, obiettivi, ambiente. |
| Specificare requisiti utente e organizzativi | Requisiti funzionali e di usabilità. |
| Produrre soluzioni di design | Sketch, prototipi, storyboard. |
| Valutare il design | Test, walkthrough, heuristic evaluation. |

## Effectiveness, efficiency, satisfaction

| Dimensione | Definizione | Metriche | Esempio |
|---|---|---|---|
| **Effectiveness** | Accuratezza e completezza nel raggiungere goal. | Task completion rate, errori. | 90% utenti prenota correttamente. |
| **Efficiency** | Risorse usate per raggiungere goal. | Tempo, click, passi. | Prenotazione in meno di 90 sec. |
| **Satisfaction** | Comfort e atteggiamento positivo. | Likert, preferenze. | Valutazione media ≥ 4/5. |

## Nielsen: 5 quality components

| Componente | Domanda | Esempio |
|---|---|---|
| Learnability | È facile imparare? | Primo uso senza tutorial. |
| Efficiency | Dopo aver imparato, è veloce? | Utente esperto prenota in pochi click. |
| Memorability | Si ricorda dopo tempo? | Dopo un mese l'utente sa usarla. |
| Errors | Quanti errori, quanto gravi, quanto recuperabili? | Errore annullabile. |
| Satisfaction | È piacevole da usare? | Utente non frustrato. |

## Da requisito vago a requisito misurabile

| Requisito vago | Requisito misurabile |
|---|---|
| L'app deve essere intuitiva. | L'85% degli studenti al primo utilizzo deve prenotare un esame senza aiuto in meno di 2 minuti. |
| Il checkout deve essere veloce. | Il 90% degli utenti deve completare pagamento in massimo 3 minuti. |
| Gli utenti devono essere soddisfatti. | Il punteggio medio di soddisfazione deve essere almeno 4/5. |

---

# 3. User Requirements

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **User requirement** | Bisogno o vincolo dal punto di vista utente. | Voglio vedere gli appelli disponibili. |
| **User profile** | Descrizione generale di utenti, competenze, bisogni e contesto. | Studenti 18–25, uso mobile, poco tempo. |
| **Persona** | Utente fittizio ma basato su ricerca reale. | Marco, 22 anni, studente lavoratore. |
| **Scenario** | Storia contestuale di uso del sistema. | Marco sul bus prenota un appello prima della scadenza. |
| **Storyboard** | Scenario rappresentato con immagini/schermate. | 1 apre app; 2 cerca esame; 3 prenota. |
| **Research protocol** | Piano operativo della ricerca utenti. | Obiettivo, partecipanti, metodo, domande, dati raccolti. |

## Processo di raccolta requisiti

| Fase | Cosa fare | Esempio |
|---|---|---|
| 1 | Capire prodotto e dominio. | Analizzare app universitarie. |
| 2 | Capire utenti. | Intervistare studenti. |
| 3 | Preparare metodi. | Protocollo per survey/interviste. |
| 4 | Raccogliere dati. | Field study, survey, interview. |
| 5 | Analizzare dati. | Affinity diagram e requisiti. |

## Metodi di raccolta

| Metodo | Quando usarlo | Vantaggio | Limite |
|---|---|---|---|
| Interview | Vuoi dettaglio qualitativo. | Risposte profonde. | Pochi utenti, tempo alto. |
| Survey | Vuoi molti dati rapidamente. | Scalabile. | Meno profondità. |
| Card sorting | Vuoi progettare categorie/menu. | Utile per information architecture. | Serve campione adeguato. |
| Focus group | Vuoi opinioni e confronto. | Rapido. | Alcuni possono dominare. |
| Field study | Vuoi capire contesto reale. | Alta validità ecologica. | Costoso e complesso. |
| Group task analysis | Vuoi capire passi di un task. | Fa emergere varianti. | Può diventare caotico. |

## Esempio persona

| Campo | Esempio |
|---|---|
| Nome | Giulia |
| Età | 21 |
| Ruolo | Studentessa universitaria |
| Goal | Prenotare esami e controllare carriera |
| Pain point | Si dimentica scadenze |
| Contesto | Usa smartphone tra lezioni e mezzi pubblici |
| Bisogno | Notifiche chiare e procedura breve |

## Esempio scenario

> Giulia è in metro e riceve una notifica che l'appello di Basi di Dati chiude oggi. Apre l'app universitaria, cerca l'esame, controlla data e aula, clicca “Prenota”. Il sistema mostra una conferma e aggiunge l'appello al calendario.

---

# 4. Questionnaires

## Tipi di domande

| Tipo | Definizione | Esempio |
|---|---|---|
| Open question | Risposta libera. | Qual è il problema principale dell'app? |
| Multiple choice | Scelta tra opzioni. | Quale funzione usi di più? |
| Scaled question | Risposta su scala. | Da 1 a 5 quanto sei soddisfatto? |
| Ranked question | Ordinare opzioni. | Ordina notifiche, calendario, carriera. |
| Screening question | Filtra partecipanti. | Sei uno studente universitario? |

## Errori comuni

| Errore | Domanda sbagliata | Correzione |
|---|---|---|
| Leading | Quanto è fastidiosa l'app? | Come valuti l'esperienza con l'app? |
| Double-barreled | Ti piace design e velocità? | Separare design e velocità. |
| Termine poco chiaro | Usi tablet PC? | Usi un tablet come iPad o Android tablet? |
| Assoluto | Guardi sempre film con amici? | Quante volte al mese guardi film con amici? |
| Range sovrapposti | 18–25, 25–30 | 18–24, 25–30. |
| Doppia negazione | Non sei in disaccordo? | Sei d'accordo? |
| Scale incoerenti | 1 positivo in una domanda e negativo nell'altra. | Usare sempre stessa direzione. |

## Da risposte a requisiti

| Risultato survey | Requisito derivato |
|---|---|
| 70% dimentica scadenze. | Il sistema deve inviare reminder prima della chiusura prenotazioni. |
| Molti utenti non trovano appelli. | La home deve avere ricerca appelli visibile. |
| Utenti vogliono riepilogo. | Dopo prenotazione deve essere mostrata conferma. |

---
# 5. Interaction Design Basics

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Design** | Processo di raggiungere obiettivi entro vincoli. | App semplice nonostante schermo piccolo. |
| **Navigation design** | Progettare come l'utente si muove nel sistema. | Menu Home, Cerca, Preferiti, Profilo. |
| **Layout** | Organizzazione visiva degli elementi. | Campi raggruppati per dati personali e pagamento. |
| **Affordance** | Proprietà che suggerisce come usare un oggetto. | Bottone che sembra cliccabile. |
| **Signifier** | Indizio percepibile che comunica l'azione. | Label, icona, sottolineatura, forma di bottone. |
| **Prototype** | Versione iniziale per esplorare/testare design. | Wireframe Figma o sketch su carta. |
| **Localization** | Adattamento a lingua/cultura specifica. | Date, valuta, testi, simboli. |
| **Internationalization** | Preparare sistema alla localizzazione. | Layout che supporta testi più lunghi. |

## Regole d'oro della navigazione

| Regola | Domanda utente | Soluzione |
|---|---|---|
| Dove sono? | In quale schermata/sezione mi trovo? | Titolo pagina, breadcrumb, tab attivo. |
| Cosa posso fare? | Quali azioni sono disponibili? | Pulsanti visibili e coerenti. |
| Dove sto andando? | Cosa succede se clicco? | Label chiare, preview, conferme. |
| Dove sono stato? | Cosa ho già fatto? | Stepper, cronologia, riepilogo. |

## Layout: strumenti principali

| Strumento | Definizione | Esempio |
|---|---|---|
| Grouping | Mettere vicini elementi correlati. | Nome, cognome, email nello stesso blocco. |
| Ordering | Ordinare secondo il task naturale. | Prima indirizzo, poi pagamento. |
| Decoration | Usare elementi visivi per chiarire struttura. | Box per separare sezioni. |
| Alignment | Allineare per facilitare scansione. | Label e campi allineati. |
| White space | Spazio vuoto usato come struttura. | Distanza tra sezioni diverse. |

## Affordance vs signifier

| Concetto | Significato | Esempio |
|---|---|---|
| Affordance | Possibilità d'azione suggerita dall'oggetto. | Una maniglia suggerisce di tirare. |
| Signifier | Segnale che comunica l'azione possibile. | Scritta “Pull” sulla porta. |

## Esempi di problemi di design

| Problema | Violazione | Redesign |
|---|---|---|
| Pulsante primario poco visibile. | Scarsa visibilità dell'azione. | Colore/posizione coerente, label chiara. |
| Form tutto mischiato. | Mancato grouping. | Separare dati personali, pagamento, conferma. |
| Solo rosso/verde per stato. | Accessibilità debole. | Aggiungere icone, testo, pattern. |
| “Delete” vicino a “Save”. | Dangerous state. | Separare, colore diverso, conferma, undo. |

---

# 6. Task Models e Cognitive Models

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Task analysis** | Studio di cosa fanno gli utenti, oggetti usati e conoscenze necessarie. | Analizzare come uno studente prenota un'aula studio. |
| **HTA** | Hierarchical Task Analysis: scompone task in sottotask e piani. | 0 Prenotare esame → login → cerca → prenota. |
| **Plan** | Specifica ordine, condizioni o alternative dei sottotask. | Fare 1, poi 2, poi 3; se errore, tornare a 2. |
| **Cognitive model** | Modello di conoscenza, intenzioni e processamento mentale. | GOMS, KLM. |
| **GOMS** | Goals, Operators, Methods, Selection rules. | Chiudere finestra con click X o Ctrl+W. |
| **KLM** | Keystroke Level Model: stima tempo tramite operatori elementari. | K, P, B, H, M, R. |

## Task analysis vs cognitive model

| Aspetto | Task Analysis / HTA | Cognitive Model |
|---|---|---|
| Focus | Cosa fa l'utente. | Come pensa e decide l'utente. |
| Rappresenta | Task e sottotask. | Goal, regole, effort cognitivo. |
| Utile per | Capire lavoro e procedure. | Stimare difficoltà, errori, tempo. |
| Esempio | Prenotare visita medica. | Confrontare mouse vs shortcut. |

## HTA: esempio prenotare esame

```text
0. Prenotare un esame
   1. Effettuare login
   2. Cercare l'esame
   3. Visualizzare appelli disponibili
   4. Selezionare appello
   5. Confermare prenotazione
   6. Controllare conferma

Plan 0: fare 1, 2, 3, 4, 5, 6 in ordine.
Se non ci sono appelli disponibili, tornare a 2 o uscire.
```

## Tipi di plan

| Tipo | Significato | Esempio |
|---|---|---|
| Fixed sequence | Ordine fisso. | Login → cerca → prenota. |
| Optional task | Solo se condizione vera. | Se appello pieno, scegli altro. |
| Cycle | Ripeti finché condizione. | Ripeti ricerca finché trovi esame. |
| Waiting event | Aspetta evento. | Aspetta conferma pagamento. |
| Discretionary order | Ordine libero. | Compila telefono e indirizzo in qualsiasi ordine. |
| Parallel / time-sharing | Task simultanei. | Guardare calendario mentre confronti date. |

## Errori comuni in HTA

| Errore | Esempio | Correzione |
|---|---|---|
| Scrivere schermate invece di task. | “Pagina login”. | “Effettuare login”. |
| Dimenticare plan. | Lista senza ordine. | Aggiungere “Plan 0: do 1 then 2...”. |
| Troppo astratto. | “Usare app”. | Specificare sottotask rilevanti. |
| Troppo dettagliato. | “Muovere dito di 2 cm”. | Dettagliare solo se utile per design. |
| Ignorare eccezioni. | Nessun caso errore. | Inserire alternative e recovery. |

## GOMS

| Componente | Definizione | Esempio |
|---|---|---|
| Goals | Obiettivi. | Chiudere finestra. |
| Operators | Azioni elementari. | Muovere mouse, cliccare, premere tasti. |
| Methods | Procedure per raggiungere goal. | Click X oppure Alt+F4. |
| Selection rules | Regole per scegliere metodo. | Se conosce shortcut, usa tastiera. |

## Esempio GOMS

| Elemento | Esempio |
|---|---|
| Goal | Salvare documento. |
| Method 1 | File → Save. |
| Method 2 | Ctrl+S. |
| Selection rule | Usa Ctrl+S se l'utente conosce shortcut; altrimenti usa menu. |

## KLM operators

| Operatore | Significato | Esempio |
|---|---|---|
| K | Keystroke. | Premere un tasto. |
| P | Pointing. | Muovere puntatore. |
| B | Button press/release. | Click mouse. |
| H | Homing. | Mano tra tastiera e mouse. |
| D | Drawing. | Disegnare linea. |
| M | Mental preparation. | Decidere/progettare azione. |
| R | Response time. | Attesa risposta sistema. |

---

# 7. Dialog Design

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Dialogue** | Struttura dello scambio tra utente e sistema. | Sequenza schermate checkout. |
| **Lexical level** | Forma concreta: click, tasti, icone, label. | Bottone blu “Invia”. |
| **Syntactic level** | Ordine ammesso di input/output. | Dopo login posso aprire home. |
| **Semantic level** | Effetto sullo stato applicativo. | Prenotazione salvata. |
| **STN** | State Transition Network: stati collegati da transizioni. | Home → Form → Conferma. |
| **Dangerous state** | Stato in cui errore piccolo può causare danno. | Delete project vicino a Save. |

## STN: elementi

| Elemento | Significato | Esempio |
|---|---|---|
| State | Stato dell'interazione. | Form prenotazione aperto. |
| Transition | Azione/evento che cambia stato. | Click su “Conferma”. |
| Start state | Stato iniziale. | Home. |
| Final state | Stato finale. | Prenotazione confermata. |

## Esempio STN testuale

```text
Home
  -- click "Book exam" -->
Exam list
  -- select exam -->
Exam details
  -- click "Confirm" -->
Booking confirmation
  -- click "Back to home" -->
Home
```

## Proprietà del dialogo

| Proprietà | Domanda | Esempio problema |
|---|---|---|
| Completeness | Tutte le azioni rilevanti sono definite? | Da pagina errore non posso tornare al form. |
| Determinism | Stessa azione nello stesso stato produce risultato chiaro? | OK a volte salva, a volte cancella. |
| Consistency | Azioni simili funzionano in modo simile? | Back torna indietro in una pagina ma cancella dati in un'altra. |
| Reachability | Posso raggiungere stati importanti? | Non c'è percorso per modificare profilo. |
| Reversibility | Posso tornare indietro? | Nessun cancel/undo. |
| Dangerous states | Ci sono stati dannosi facili da raggiungere? | Delete senza conferma. |

## HTA vs STN

| Aspetto | HTA | STN |
|---|---|---|
| Focus | Task dell'utente. | Stati e transizioni del sistema. |
| Struttura | Gerarchia + plan. | Stati + archi. |
| Utile per | Capire cosa fa l'utente. | Verificare comportamento interfaccia. |
| Esempio | Prenotare esame diviso in sottotask. | Home → lista esami → conferma. |

## Petri Nets e Statecharts

| Notazione | Utile per | Esempio |
|---|---|---|
| Petri Nets | Concorrenza e stati paralleli. | Toggle Wi-Fi, Bluetooth e Dark Mode indipendenti. |
| Statecharts | STN con gerarchia, concorrenza, history, escape. | Sistema complesso con sottomenu. |

---

# 8. Design Rules ed Evaluation Techniques

## Design rules

| Livello | Definizione | Esempio |
|---|---|---|
| Principle | Regola astratta e generale. | Rendere sistema facile da imparare. |
| Guideline | Consiglio più concreto. | Usare breadcrumb per navigazione profonda. |
| Standard | Prescrizione precisa e autorevole. | Requisito ISO su accessibilità/ergonomia. |

## Dix: Learnability, Flexibility, Robustness

### Learnability

| Principio | Definizione | Esempio |
|---|---|---|
| Predictability | Capire effetto di azioni future. | Se clicco Salva, mi aspetto salvataggio. |
| Synthesizability | Capire effetto di azioni passate. | Messaggio “Profilo aggiornato”. |
| Familiarity | Usare conoscenze già note. | Icona cestino per eliminare. |
| Generalizability | Trasferire conoscenza a casi simili. | Stesso pattern di ricerca in più sezioni. |
| Consistency | Comportamento uniforme. | Stesso bottone Annulla in tutti i form. |

### Flexibility

| Principio | Definizione | Esempio |
|---|---|---|
| Dialogue initiative | Utente può decidere cosa fare. | Menu libero invece di wizard obbligato. |
| Multithreading | Più task contemporanei. | Scrivere mail e allegare file. |
| Task migratability | Task passa da utente a sistema. | Correzione automatica o manuale. |
| Substitutivity | Input/output equivalenti. | Data manuale o calendario. |
| Customizability | Interfaccia adattabile. | Tema scuro, shortcut personalizzate. |

### Robustness

| Principio | Definizione | Esempio |
|---|---|---|
| Observability | Utente valuta stato sistema. | Stato ordine: in preparazione. |
| Recoverability | Recuperare dopo errore. | Undo, ripristino, annulla. |
| Responsiveness | Feedback tempestivo. | Spinner durante caricamento. |
| Task conformance | Sistema supporta task reali. | App permette cancellare prenotazione. |

## Nielsen: 10 heuristics

| # | Euristica | Esempio violazione | Redesign |
|---|---|---|---|
| 1 | Visibility of system status | Nessun feedback dopo click. | Loading, conferma. |
| 2 | Match with real world | Termini tecnici incomprensibili. | Linguaggio utente. |
| 3 | User control and freedom | Nessun annulla. | Back, cancel, undo. |
| 4 | Consistency and standards | Icone diverse per stessa azione. | Stesso pattern. |
| 5 | Error prevention | Password rules mostrate dopo errore. | Mostrare regole prima. |
| 6 | Recognition rather than recall | Utente deve ricordare codice. | Mostrare informazioni. |
| 7 | Flexibility and efficiency | Nessuna shortcut. | Shortcut, preferiti. |
| 8 | Aesthetic and minimalist design | Troppi bottoni inutili. | Rimuovere rumore. |
| 9 | Help recover from errors | Errore “Invalid input”. | Messaggio preciso. |
| 10 | Help and documentation | Nessuna guida. | Help cercabile e contestuale. |

## Cognitive Walkthrough

| Elemento | Definizione |
|---|---|
| Metodo | Valutazione esperta action-by-action. |
| Focus | Se un utente riesce a capire cosa fare e apprendere l'interazione. |
| Input | Prototipo, task, sequenza azioni, profilo utenti. |

### 4 domande

| # | Domanda |
|---|---|
| 1 | L'effetto dell'azione corrisponde al goal dell'utente? |
| 2 | L'utente vede che l'azione è disponibile? |
| 3 | L'utente capisce che è l'azione giusta? |
| 4 | Dopo l'azione, capisce il feedback? |

## Heuristic Evaluation

| Campo | Cosa scrivere |
|---|---|
| Page / Interface | Dove c'è il problema. |
| Violated heuristic | Quale euristica è violata. |
| Severity | 0–4. |
| Problem | Descrizione concreta. |
| Redesign | Soluzione proposta. |

| Score | Significato |
|---|---|
| 0 | Non è un problema di usabilità. |
| 1 | Problema cosmetico. |
| 2 | Problema minore. |
| 3 | Problema maggiore. |
| 4 | Catastrofe di usabilità. |

## User-based evaluation

| Metodo | Definizione | Esempio |
|---|---|---|
| Think aloud | Utente verbalizza mentre svolge task. | “Non capisco dove cliccare”. |
| Cooperative evaluation | Utente collabora e può fare domande. | Utente suggerisce miglioramenti. |
| Post-task walkthrough | Si rivede sessione dopo il task. | Utente spiega perché ha sbagliato. |
| Protocol analysis | Analisi di registrazioni, log, note. | Video + click log. |

## Controlled experiments

| Concetto | Definizione | Esempio |
|---|---|---|
| Independent variable | Fattore manipolato. | Tipo di menu: A vs B. |
| Dependent variable | Risultato misurato. | Tempo, errori, successo. |
| H0 | Nessuna differenza significativa. | Menu A e B hanno stesso tempo medio. |
| H1 | Differenza prevista. | Menu B è più veloce. |
| Within-subjects | Ogni utente prova tutte le condizioni. | Tutti provano A e B. |
| Between-subjects | Ogni utente prova una sola condizione. | Gruppo 1 A, gruppo 2 B. |
| Counterbalancing | Alternare ordine per ridurre learning effect. | Metà A-B, metà B-A. |

---
# 9. Software Process Models

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Software process model** | Modello che descrive attività, ordine e documenti dello sviluppo software. | Waterfall, incremental, spiral. |
| **Specification** | Definire servizi richiesti e vincoli. | Requisiti per app universitaria. |
| **Design and implementation** | Convertire requisiti in struttura e codice. | Architettura + implementazione. |
| **Verification** | Controllare conformità alla specifica. | Il requisito dice login con email: il sistema lo fa? |
| **Validation** | Controllare che il sistema soddisfi bisogni reali. | Gli studenti riescono davvero a prenotare facilmente? |
| **Evolution** | Modificare software nel tempo. | Aggiungere modulo tasse universitarie. |

## Modelli di processo

| Modello | Definizione | Quando usarlo | Limite |
|---|---|---|---|
| Waterfall | Fasi sequenziali. | Requisiti stabili, documentazione forte. | Poco flessibile ai cambiamenti. |
| Prototypal | Prototipo per chiarire requisiti. | Requisiti incerti. | Prototipo può essere confuso con prodotto finale. |
| Incremental | Rilasci successivi funzionanti. | Vuoi valore presto e ridurre rischio. | Richiede architettura iniziale solida. |
| Spiral | Iterazioni guidate dal rischio. | Progetti grandi e rischiosi. | Più complesso da gestire. |
| Formal methods | Specifiche matematiche. | Sistemi critici. | Difficili e costosi. |
| Agile / XP | Piccoli incrementi e feedback continuo. | Requisiti variabili. | Richiede collaborazione forte. |

## Waterfall phases

| Fase | Output tipico |
|---|---|
| Requirements analysis | Documento requisiti. |
| System/software design | Architettura e design. |
| Implementation/unit testing | Componenti implementati e testati. |
| Integration/system testing | Sistema integrato. |
| Operation/maintenance | Sistema in uso e modifiche. |

## Incremental development

| Vantaggio | Esempio |
|---|---|
| Valore consegnato presto. | Prima release: login e ricerca. |
| Riduce rischio. | Funzioni principali testate prima. |
| Chiarisce requisiti. | Feedback sul primo incremento. |
| Priorità alte più testate. | Booking sviluppato prima dei certificati. |

## Spiral model

| Settore | Significato |
|---|---|
| Objective setting | Definire obiettivi, alternative, vincoli. |
| Risk assessment and reduction | Identificare e ridurre rischi. |
| Development and validation | Sviluppare e validare soluzione. |
| Planning | Pianificare ciclo successivo. |

## Esempi di scelta del processo

| Progetto | Modello adatto | Perché |
|---|---|---|
| Sistema ferroviario safety-critical con requisiti stabili. | Waterfall / Formal methods. | Serve rigore e verifica forte. |
| Startup app con bisogni incerti. | Prototypal / Agile. | Serve feedback rapido dagli utenti. |
| Sistema grande con rischi tecnici elevati. | Spiral. | Il rischio guida le iterazioni. |
| Prodotto che deve rilasciare valore ogni mese. | Incremental / Scrum. | Incrementi funzionanti e feedback. |

---

# 10. Software Process Standardization

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Process standardization** | Uso di modelli/standard per rendere processi stabili, misurabili e migliorabili. | ISO 12207, CMMI. |
| **CMMI** | Framework di miglioramento dei processi basato su best practices. | Migliorare Project Planning. |
| **Process Area** | Area specifica di processo con obiettivi e pratiche. | Requirements Management. |
| **Capability level** | Capacità di una specifica process area. | Requirements Management a livello 2. |
| **Maturity level** | Maturità globale dell'organizzazione. | Azienda livello 3 Defined. |
| **ISO 12207** | Standard per processi del ciclo di vita software. | Acquisition, development, maintenance. |
| **ISO 9001** | Requisiti per sistema gestione qualità certificabile. | Quality Management System. |

## CMMI Capability Levels — Continuous Representation

| Livello | Nome | Definizione | Esempio |
|---|---|---|---|
| 0 | Incomplete | Processo non svolto o parziale. Non è un vero livello CMMI. | Nessuna gestione requisiti. |
| 1 | Performed | Processo soddisfa obiettivi specifici. | Il team produce requisiti ma senza gestione stabile. |
| 2 | Managed | Processo pianificato, monitorato, controllato. | Requisiti gestiti con responsabilità e review. |
| 3 | Defined | Processo standardizzato e adattato dall'organizzazione. | Tutti i progetti usano processo aziendale adattato. |
| 4 | Quantitatively Managed | Processo controllato con tecniche quantitative/statistiche. | Metriche e obiettivi numerici. |
| 5 | Optimizing | Miglioramento continuo basato su cause di variazione. | Innovazione e miglioramento sistematico. |

## Continuous vs Staged CMMI

| Aspetto | Continuous | Staged |
|---|---|---|
| Domanda | Quanto è capace una specifica area di processo? | Quanto è matura l'organizzazione nel complesso? |
| Unità | Process areas selezionate. | Organizzazione complessiva. |
| Livelli | Capability 0–5. | Maturity 1–5. |
| Flessibilità | Alta. | Percorso più predefinito. |
| Esempio | Testing livello 3, Requirements livello 2. | Azienda livello 3. |

## CMMI staged maturity levels

| Livello | Nome | Significato |
|---|---|---|
| 1 | Initial | Processi imprevedibili e reattivi. |
| 2 | Managed | Project management di base. |
| 3 | Defined | Processi standardizzati. |
| 4 | Quantitatively Managed | Processi misurati quantitativamente. |
| 5 | Optimizing | Miglioramento continuo. |

## ISO 12207 process groups

| Gruppo | Processi | Esempio |
|---|---|---|
| Primary lifecycle processes | Acquisition, supply, development, operation, maintenance | Sviluppare e mantenere software. |
| Support processes | Documentation, configuration management, QA, verification, validation, review, audit, problem solving | Gestire documenti, test e qualità. |
| Organizational processes | Management, infrastructure, improvement, training | Formare team e migliorare processi. |

## ISO 9000 family

| Standard | Ruolo |
|---|---|
| ISO 9000 | Fondamenti e vocabolario. |
| ISO 9001 | Requisiti per QMS certificabile. |
| ISO 9004 | Linee guida per miglioramento. |
| ISO 19011 | Linee guida per audit. |

## Quality Manual vs Quality Policy

| Documento | Definizione | Esempio |
|---|---|---|
| Quality Manual | Politica qualità generale dell'organizzazione. | Processo standard di review e test. |
| Quality Policy | Adattamento al progetto specifico. | Progetto bancario: più focus su security e audit. |

---

# 11. Software Quality e ISO/IEC 25010

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Software product** | Programmi, procedure, documentazione e dati associati. | Codice + manuali + configurazioni. |
| **Error** | Azione umana sbagliata che introduce problema. | Developer interpreta male requisito. |
| **Fault / defect** | Problema latente in artefatto software. | `x < 10` invece di `x <= 10`. |
| **Failure** | Comportamento errato visibile durante l'uso. | Utente riceve prezzo sbagliato. |
| **SQA** | Funzione che assicura standard, processi e procedure adatti e applicati. | Audit, review, QA process. |
| **Cost of quality** | Costi per ottenere qualità + costi dovuti a non qualità. | Test + bug in produzione. |

## Error / Fault / Failure

| Caso | Error | Fault | Failure |
|---|---|---|---|
| Sconto sbagliato | Analista capisce male requisito. | Regola sconto implementata male. | Cliente paga prezzo errato. |
| Off-by-one | Programmatore usa `<` invece di `<=`. | Ultimo elemento non processato. | Lista mostrata incompleta. |
| Unità sbagliata | Manuale riporta unità errata. | Operatore inserisce quantità sbagliata. | Sistema produce risultato pericoloso. |

## Cost of quality

| Categoria | Definizione | Esempio |
|---|---|---|
| Prevention cost | Costi per prevenire difetti. | Training, standard, progettazione qualità. |
| Appraisal cost | Costi per controllare qualità. | Test, review, ispezioni. |
| Internal failure cost | Difetti trovati prima del rilascio. | Fix bug in testing. |
| External failure cost | Difetti trovati dopo rilascio. | Warranty, perdita clienti, incidenti. |

## ISO/IEC 25010: due modelli

| Modello | Focus | Esempio |
|---|---|---|
| Quality in use | Qualità percepita nell'uso reale. | Utenti completano task in sicurezza e soddisfazione. |
| Product quality | Proprietà statiche/dinamiche del prodotto. | Sicurezza, affidabilità, manutenibilità. |

## Quality in Use — 5 caratteristiche

| Caratteristica | Definizione | Esempio metrica |
|---|---|---|
| Effectiveness | Utenti raggiungono obiettivi correttamente. | % task completati. |
| Efficiency | Risorse usate rispetto al risultato. | Tempo medio per task. |
| Satisfaction | Bisogni soddisfatti, comfort, fiducia, piacere. | Likert 1–5. |
| Freedom from risk | Riduzione rischi economici, salute, sicurezza, ambiente. | Numero incidenti. |
| Context coverage | Funziona nei contesti specificati e oltre. | % contesti testati con successo. |

## Product Quality — 8 caratteristiche

| Caratteristica | Definizione | Sub-caratteristiche |
|---|---|---|
| Functional suitability | Funzioni soddisfano bisogni. | Completeness, correctness, appropriateness. |
| Performance efficiency | Prestazioni rispetto a risorse. | Time behavior, resource utilization, capacity. |
| Compatibility | Coesistenza e scambio informazioni. | Co-existence, interoperability. |
| Usability | Utenti raggiungono goal con efficacia/efficienza/soddisfazione. | Learnability, operability, accessibility, UI aesthetics. |
| Reliability | Funziona sotto condizioni specificate per tempo specificato. | Maturity, availability, fault tolerance, recoverability. |
| Security | Protegge informazioni e dati. | Confidentiality, integrity, non-repudiation, accountability, authenticity. |
| Maintainability | Può essere modificato efficacemente. | Modularity, reusability, analysability, modifiability, testability. |
| Portability | Può essere trasferito in altro ambiente. | Adaptability, installability, replaceability. |

## Esempi di metriche

| Area | Metrica |
|---|---|
| Functional suitability | Funzioni disponibili / funzioni richieste. |
| Performance | Tempo medio risposta, CPU, memoria. |
| Usability | Tempo per imparare funzione principale, satisfaction score. |
| Reliability | Availability = uptime / total time; MTBF. |
| Security | Accessi non autorizzati riusciti / tentativi. |
| Maintainability | Complessità ciclomatica, difetti introdotti dopo modifica. |
| Portability | Tempo installazione, problemi installazione / installazioni. |

## Direct, non-direct, indicator

| Tipo | Definizione | Esempio |
|---|---|---|
| Direct measure | Misurabile direttamente senza forte influenza esterna. | Numero LOC. |
| Non-direct measure | Derivata o influenzata dal contesto. | Response time su server specifico. |
| Indicator | Stima indiretta di una proprietà. | LOC come indicatore di complessità futura. |

## Template requisito qualità

| Campo | Cosa scrivere | Esempio |
|---|---|---|
| Characteristic | ISO/IEC 25010 area | Usability |
| Subcharacteristic | Sotto-area | Learnability |
| Metric | Formula/misura | Tempo medio per completare task |
| Procedure | Come misuro | Usability test con 20 studenti |
| Scale | Tipo scala | Ratio scale, secondi |
| Threshold | Valore accettabile | Media < 120 sec |
| Type | Direct/non-direct/indicator | Indicator |
| Context | Internal/external/in-use | In-use |

## Esempio requisito completo

| Campo | Valore |
|---|---|
| Characteristic | Usability |
| Subcharacteristic | Learnability |
| Metric | Tempo medio per prenotare un esame al primo uso |
| Procedure | Test con 20 studenti, nessun aiuto |
| Scale | Secondi |
| Threshold | Media ≤ 2 minuti |
| Type | Indicator |
| Context | Quality in use |

---
# 12. Function Points Analysis

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Function Point Analysis** | Metodo per misurare dimensione funzionale dal punto di vista utente. | Stimare app biblioteca prima del codice. |
| **Function Point** | Unità di misura della funzionalità fornita dal sistema. | Funzioni di input, output, dati. |
| **Application boundary** | Confine tra sistema contato e sistemi esterni. | App universitaria vs sistema pagamento esterno. |
| **UFP** | Unadjusted Function Points, somma dei pesi non aggiustata. | 63 UFP. |
| **VAF** | Value Adjustment Factor. | AFP = UFP × VAF. |

## Famiglie Function Points

| Famiglia | Include | Significato |
|---|---|---|
| Data Functions | ILF, EIF | Dati logici mantenuti o referenziati. |
| Transactional Functions | EI, EO, EQ | Processi utente che attraversano boundary. |

## ILF, EIF, EI, EO, EQ

| Tipo | Nome | Definizione | Esempio |
|---|---|---|---|
| **ILF** | Internal Logical File | Gruppo logico di dati mantenuto dall'app. | Student, Booking, Career gestiti dall'app. |
| **EIF** | External Interface File | Gruppo logico di dati usato dall'app ma mantenuto da altro sistema. | Registry pagamenti esterno. |
| **EI** | External Input | Dati/controllo entrano e aggiornano ILF. | Registrare studente, prenotare esame. |
| **EO** | External Output | Dati escono con elaborazione, calcoli o derivati. | Report con totali, certificato PDF. |
| **EQ** | External Inquiry | Semplice ricerca/visualizzazione senza elaborazione significativa. | Visualizzare carriera, cercare appelli. |

## Regola pratica di classificazione

| Se nel testo trovi... | Probabile tipo |
|---|---|
| Nome di archivio/dato: Student, Exam, Booking | ILF / EIF |
| Azione create/update/delete/register/book/cancel | EI |
| Azione generate/report/calculate/export with totals | EO |
| Azione search/view/display simple data | EQ |

## Esempi di classificazione

| Elemento | Tipo | Perché |
|---|---|---|
| Student profile maintained by system | ILF | Dati interni mantenuti. |
| External payment registry | EIF | Dati esterni solo consultati. |
| Book an exam | EI | Input che crea prenotazione. |
| Cancel booking | EI | Input che modifica/cancella ILF. |
| View available exam dates | EQ | Recupero semplice dati. |
| Generate report with totals | EO | Output con calcoli/derivati. |
| Export PDF with statistics | EO | Output elaborato e formattato. |
| View career | EQ | Visualizzazione semplice. |
| Career data | ILF | Archivio logico interno. |

## DET, RET, FTR

| Termine | Nome | Definizione | Usato per |
|---|---|---|---|
| **DET** | Data Element Type | Campo unico riconoscibile dall'utente. | Tutti i tipi. |
| **RET** | Record Element Type | Sottogruppo riconoscibile dentro ILF/EIF. | ILF/EIF. |
| **FTR** | File Type Referenced | ILF o EIF letto/mantenuto da transazione. | EI/EO/EQ. |

## Esempi DET / RET / FTR

| Concetto | Esempio |
|---|---|
| DET | nome, cognome, matricola, data, voto, importo. |
| RET | In Student: dati anagrafici, dati contatto. |
| FTR | Transaction “Book exam” usa Student, Exam, Booking. |

## Matrice ILF/EIF — DET + RET

| RET \ DET | 1–19 DET | 20–50 DET | 51+ DET |
|---|---|---|---|
| 1 RET | Low | Low | Average |
| 2–5 RET | Low | Average | High |
| 6+ RET | Average | High | High |

## Matrice EI — DET + FTR

| FTR \ DET | 1–4 DET | 5–15 DET | 16+ DET |
|---|---|---|---|
| 0–1 FTR | Low | Low | Average |
| 2 FTR | Low | Average | High |
| 3+ FTR | Average | High | High |

## Matrice EO/EQ — DET + FTR

| FTR \ DET | 1–5 DET | 6–19 DET | 20+ DET |
|---|---|---|---|
| 0–1 FTR | Low | Low | Average |
| 2–3 FTR | Low | Average | High |
| 4+ FTR | Average | High | High |

## Pesi standard

| Function Type | Low | Average | High |
|---|---:|---:|---:|
| EI | 3 | 4 | 6 |
| EO | 4 | 5 | 7 |
| EQ | 3 | 4 | 6 |
| ILF | 7 | 10 | 15 |
| EIF | 5 | 7 | 10 |

## Procedura di calcolo UFP

| Step | Cosa fare |
|---|---|
| 1 | Definire application boundary. |
| 2 | Identificare ILF ed EIF. |
| 3 | Identificare EI, EO, EQ. |
| 4 | Contare DET, RET, FTR. |
| 5 | Usare matrici per Low/Average/High. |
| 6 | Applicare pesi. |
| 7 | Sommare tutto: UFP. |

## Esempio 1 — Calcolo diretto

| Dato | Calcolo | Totale |
|---|---:|---:|
| 2 low ILF | 2 × 7 | 14 |
| 1 average ILF | 1 × 10 | 10 |
| 1 low EIF | 1 × 5 | 5 |
| 4 low EI | 4 × 3 | 12 |
| 2 average EI | 2 × 4 | 8 |
| 1 average EO | 1 × 5 | 5 |
| 3 low EQ | 3 × 3 | 9 |
| **UFP** |  | **63** |

## Esempio 2 — Data Functions

| Logical File | Type | DET | RET | Complexity | Weight |
|---|---|---:|---:|---|---:|
| Student | ILF | 16 | 2 | Low | 7 |
| Exam | ILF | 20 | 1 | Low | 7 |
| Booking | ILF | 14 | 2 | Low | 7 |
| Career | ILF | 28 | 3 | Average | 10 |
| External Payment System | EIF | 10 | 1 | Low | 5 |
| **Total** |  |  |  |  | **36** |

## Esempio 3 — Transaction Functions

| Function | Type | DET | FTR | Complexity | Weight |
|---|---|---:|---:|---|---:|
| Register student | EI | 12 | 1 | Low | 3 |
| Update profile | EI | 10 | 1 | Low | 3 |
| Search exams | EQ | 8 | 1 | Low | 3 |
| Book exam | EI | 6 | 4 | High | 6 |
| Cancel booking | EI | 4 | 2 | Low | 3 |
| View career | EQ | 15 | 2 | Average | 4 |
| Generate certificate | EO | 25 | 2 | High | 7 |
| Pay fees | EI | 7 | 3 | High | 6 |
| **Total** |  |  |  |  | **35** |

## Esempio completo

| Blocco | FP |
|---|---:|
| Data Functions | 36 |
| Transactional Functions | 35 |
| **Total UFP** | **71** |

## VAF opzionale

| Formula | Significato |
|---|---|
| VAF = 0.65 + 0.01 × TDI | Adjustment factor. |
| AFP = UFP × VAF | Adjusted Function Points. |

---

# 13. COCOMO II

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **COCOMO II** | Modello algoritmico di stima costi software. | Stimare effort e schedule. |
| **PM** | Person-months, effort richiesto. | 20 PM = effort equivalente a 20 mesi-persona. |
| **TDEV** | Development time, durata calendario stimata. | 8 mesi. |
| **KSLOC** | Thousands of Source Lines of Code. | 12.5 KSLOC. |
| **Scale Factors** | Fattori che influenzano esponente E. | Team cohesion, process maturity. |
| **Effort Multipliers** | Cost drivers che moltiplicano effort. | Required reliability, execution time constraints. |

## Submodels COCOMO II

| Submodel | Quando usarlo | Esempio |
|---|---|---|
| Application Composition | Molto presto, prototipi, GUI-intensive. | Mockup app con componenti visuali. |
| Early Design | Architettura non definita completamente. | Stima iniziale progetto. |
| Post-Architecture | Architettura nota, stima dettagliata. | Dopo design architetturale. |

## Formula effort

| Formula | Significato |
|---|---|
| PM = A × Size^E × ΠEM | Effort in person-months. |
| E = B + 0.01 × ΣSF | Esponente basato su scale factors. |

## Componenti formula

| Simbolo | Significato |
|---|---|
| PM | Person-months. |
| A | Costante di calibrazione, spesso 2.94. |
| Size | Dimensione in KSLOC. |
| E | Esponente influenzato da scale factors. |
| ΠEM | Prodotto degli effort multipliers. |

## Scale Factors

| Scale Factor | Significato | Effetto se negativo |
|---|---|---|
| PREC | Esperienza con progetti simili. | Effort aumenta. |
| FLEX | Flessibilità sviluppo/vincoli. | Effort aumenta se vincoli rigidi. |
| RESL | Risoluzione architettura/rischi. | Effort aumenta se rischi non risolti. |
| TEAM | Coesione team. | Effort aumenta se team poco coeso. |
| PMAT | Maturità processo. | Effort aumenta se processo immaturo. |

## Effort Multipliers

| Categoria | Esempi | Effetto |
|---|---|---|
| Product | Reliability, complexity, database size. | Maggiore complessità → effort maggiore. |
| Platform | Execution time, storage constraints. | Vincoli stretti → effort maggiore. |
| Personnel | Analyst/programmer capability, experience. | Team esperto → effort minore. |
| Project | Tools, multisite, schedule pressure. | Tool migliori → effort minore. |

## Function Points → COCOMO II

| Step | Formula | Esempio |
|---|---|---|
| FP → LOC | LOC = FP × LOC/FP | 120 FP × 50 = 6000 LOC |
| LOC → KSLOC | KSLOC = LOC / 1000 | 6000 / 1000 = 6 KSLOC |
| KSLOC → PM | PM = A × Size^E × ΠEM | COCOMO II |
| PM → TDEV | TDEV = C × PM^F | Schedule |

## Function Points vs COCOMO II

| Aspetto | Function Points | COCOMO II |
|---|---|---|
| Misura | Dimensione funzionale. | Effort, schedule, staff, cost. |
| Input | Requisiti e funzionalità utente. | KSLOC + fattori progetto. |
| Output | UFP / AFP. | PM / TDEV. |
| Dipendenza da linguaggio | Indipendente. | Usa KSLOC, quindi dipende dalla conversione. |

## Esempio ragionamento da esame

| Situazione | Effetto su COCOMO II |
|---|---|
| Stesso KSLOC ma team meno coeso. | TEAM peggiora, E aumenta, effort aumenta. |
| Maggiore reliability richiesta. | Effort multiplier > 1, effort aumenta. |
| Vincoli execution time più severi. | Effort multiplier > 1, effort aumenta. |
| Tool migliori. | Effort multiplier < 1, effort diminuisce. |

---

# 14. Agile, Scrum e User Stories

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Agile** | Approccio che valorizza collaborazione, software funzionante, feedback e adattamento. | Rilasci frequenti con feedback cliente. |
| **Scrum** | Framework agile basato su sprint brevi, backlog e team auto-organizzato. | Sprint di 2 settimane. |
| **Sprint** | Iterazione breve che produce incremento potenzialmente rilasciabile. | Sprint 1: login e ricerca. |
| **Product Backlog** | Lista ordinata di tutto il lavoro desiderato. | Login, prenotazione, notifiche. |
| **Sprint Backlog** | Lavoro selezionato per sprint corrente. | Task dello sprint. |
| **Burndown chart** | Grafico del lavoro rimanente nel tempo. | Ore rimanenti ogni giorno. |
| **User Story** | Descrizione breve di funzionalità dal punto di vista utente. | As a student, I want to book an exam... |
| **Acceptance Criteria** | Condizioni verificabili per accettare storia. | Given/When/Then. |
| **Story Points** | Stima relativa di effort. | 1, 2, 3, 5, 8. |
| **Velocity** | Media story points completati per sprint. | 20 points/sprint. |
| **Spike** | Investigazione time-boxed per ridurre incertezza. | Valutare API esterna per 1 giorno. |

## Scrum roles

| Ruolo | Responsabilità |
|---|---|
| Product Owner | Prioritizza backlog, massimizza valore, accetta/rifiuta risultati. |
| ScrumMaster | Facilita Scrum, rimuove impedimenti, protegge team. |
| Team | Cross-functional, self-organizing, sviluppa incremento. |

## Scrum ceremonies

| Cerimonia | Scopo | Esempio |
|---|---|---|
| Sprint Planning | Definire sprint goal e sprint backlog. | Scegliere storie per sprint. |
| Daily Scrum | Coordinamento quotidiano 15 minuti. | Ieri/oggi/impedimenti. |
| Sprint Review | Mostrare incremento agli stakeholder. | Demo feature completate. |
| Sprint Retrospective | Migliorare processo del team. | Start/Stop/Continue. |

## Scrum artifacts

| Artefatto | Definizione |
|---|---|
| Product Backlog | Lista ordinata di feature, bug, miglioramenti. |
| Sprint Backlog | Elementi selezionati + task per sprint. |
| Increment | Prodotto potenzialmente rilasciabile. |
| Burndown Chart | Lavoro rimanente nel tempo. |

## User story format

```text
As a [type of user],
I want to [do something],
so that [benefit].
```

## Esempi user stories

| Dominio | User story |
|---|---|
| Università | As a student, I want to book an exam, so that I can reserve my place. |
| Biblioteca | As a librarian, I want to register a new book, so that it can be borrowed. |
| Food delivery | As a customer, I want to track my order, so that I know when it arrives. |
| Movie app | As a user, I want to save movies to a watchlist, so that I can watch them later. |

## Acceptance Criteria — Given/When/Then

| Parte | Significato | Esempio |
|---|---|---|
| Given | Condizione iniziale. | Given the student is logged in. |
| When | Azione. | When the student confirms an available exam. |
| Then | Risultato atteso. | Then the system creates the booking. |

### Esempio completo

```text
User story:
As a student,
I want to book an exam,
so that I can reserve my place.

Acceptance criteria:
Given that the student is logged in,
When the student selects an available exam date and confirms,
Then the system creates the booking and shows a confirmation message.

Given that the exam session is full,
When the student tries to book it,
Then the system prevents the booking and displays an error message.
```

## SMART user stories

| Lettera | Significato | Esempio |
|---|---|---|
| S | Specific | Prenotare un esame, non “gestire università”. |
| M | Measurable | Ha acceptance criteria. |
| A | Achievable | Fattibile in sprint. |
| R | Relevant | Porta valore utente/business. |
| T | Timeboxed | Se troppo grande, si splitta. |

## Story points vs Function Points

| Aspetto | Story Points | Function Points |
|---|---|---|
| Scopo | Pianificazione sprint. | Stima dimensione funzionale. |
| Natura | Relativa al team. | Più standardizzata. |
| Comparabilità | Non confrontare team diversi. | Utile per confronti/produttività. |
| Quando usarli | Agile backlog. | Stime progetto/contratti. |

---
# 15. Software Architecture

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Software Architecture** | Insieme di strutture per ragionare sul sistema: elementi, relazioni, proprietà. | Servizi, dipendenze, deployment. |
| **Element** | Parte del sistema. | Classe, modulo, servizio, processo. |
| **Relation** | Connessione tra elementi. | Dependency, call, data flow. |
| **Property** | Responsabilità, tecnologia, vincolo o qualità dell'elemento. | API REST, database PostgreSQL. |
| **View** | Prospettiva specifica sull'architettura. | Logical, deployment. |
| **Architectural style** | Vocabolario di componenti/connettori e vincoli. | Layered, microservices. |

## Elementi, relazioni, proprietà

| Tipo | Esempio |
|---|---|
| Elementi | User Service, Order Service, database, UI. |
| Relazioni | UI chiama API, Order Service pubblica evento. |
| Proprietà | Responsabilità, protocollo REST, deploy su container. |

## Kruchten 4+1 view model

| View | Focus | Esempio food delivery |
|---|---|---|
| Logical view | Concetti/classi/domain objects. | Customer, Order, Restaurant. |
| Implementation view | Moduli/componenti/codice. | package order, package payment. |
| Process view | Processi runtime/comunicazione. | Order service chiama Payment service. |
| Deployment view | Dove gira il software. | Container su cloud, database separati. |
| Scenarios (+1) | Use case che collega le viste. | Place order flow. |

## Architectural styles

| Stile | Definizione | Esempio |
|---|---|---|
| Layered | Sistema diviso in layer con dipendenze controllate. | UI → Application → Domain → Infrastructure. |
| Monolith | Un'unica unità deployable. | App unica Java Spring. |
| Microservices | Servizi indipendenti per business capabilities. | Order Service, Payment Service. |

## Non-functional requirements e architettura

| NFR | Impatto architetturale |
|---|---|
| Maintainability | Modularità, separazione responsabilità. |
| Testability | Componenti isolabili, automazione test. |
| Deployability | Pipeline, deployment indipendente. |
| Scalability | Servizi scalabili separatamente. |
| Reliability | Fault tolerance, monitoring, recovery. |
| Security | Autenticazione, autorizzazione, isolamento dati. |

---

# 16. Domain-Driven Design

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **DDD** | Approccio che progetta software concentrandosi sul modello del dominio. | Shipping con Cargo, Voyage, Route. |
| **Domain** | Area di business/problema. | Prenotazioni esami universitari. |
| **Domain model** | Modello dei concetti, regole e comportamenti del dominio. | Student, Exam, Booking, Career. |
| **Model-driven design** | Codice e modello del dominio si riflettono a vicenda. | Classi con nomi del dominio. |
| **Ubiquitous Language** | Linguaggio condiviso tra sviluppatori e domain experts. | “Exam Session”, “Booking”, “Career”. |
| **Knowledge-rich model** | Modello con regole, vincoli e comportamento, non solo dati. | Policy che impedisce doppia prenotazione. |
| **Smart UI** | Logica vicino alla UI, adatta a domini semplici. | Prototipo CRUD semplice. |

## DDD layers

| Layer | Responsabilità | Esempio |
|---|---|---|
| User Interface | Mostra info e interpreta comandi. | Schermata prenotazione. |
| Application | Orchestra use case, no business rules. | BookExamUseCase. |
| Domain | Regole, stato, concetti business. | BookingPolicy, ExamSession. |
| Infrastructure | Persistenza, messaging, framework. | Database repository implementation. |

## DDD building blocks

| Pattern | Definizione | Esempio |
|---|---|---|
| Entity | Oggetto definito da identità e continuità. | Student con matricola. |
| Value Object | Oggetto immutabile senza identità, definito dai valori. | Money, Address, DateRange. |
| Service | Operazione stateless che non appartiene naturalmente a una entity. | CalculateRoute, TransferMoney. |
| Module | Organizza concetti correlati. | Booking module. |
| Aggregate | Cluster di oggetti trattati come unità di modifica. | Order con OrderItems. |
| Aggregate Root | Entity principale che controlla aggregate. | Order. |
| Factory | Incapsula creazione complessa di oggetti. | BookingFactory. |
| Repository | Incapsula salvataggio e recupero oggetti dominio. | BookingRepository. |

## Entity vs Value Object

| Aspetto | Entity | Value Object |
|---|---|---|
| Identità | Sì. | No. |
| Cambia nel tempo | Può cambiare mantenendo identità. | Di solito immutabile. |
| Uguaglianza | Per ID. | Per valori. |
| Esempio | Student, Order, Cargo. | Address, Money, DateRange. |

## Smart UI vs Model-Driven Design

| Aspetto | Smart UI | Model-Driven Design |
|---|---|---|
| Quando | Dominio semplice, prototipo, deadline breve. | Dominio complesso e longevo. |
| Logica | Vicina alla UI. | Nel domain model. |
| Vantaggio | Rapido. | Manutenibile ed evolvibile. |
| Limite | Difficile evolvere con regole complesse. | Richiede modeling skill e tempo. |

## Esempio DDD università

| Concetto | Tipo DDD |
|---|---|
| Student | Entity |
| ExamSession | Entity |
| Booking | Aggregate |
| BookingId | Value Object |
| BookingPolicy | Domain Service / Policy |
| BookingRepository | Repository |
| CreateBookingUseCase | Application Service |

---

# 17. Microservices

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Monolith** | Applicazione come singola unità deployable. | Un unico backend con tutto. |
| **Microservice architecture** | Sistema come servizi loosely coupled organizzati intorno a business capabilities. | Order, Payment, Delivery. |
| **Service** | Unità indipendente con business functionality, API e dati propri. | Customer Service. |
| **Business capability** | Cosa il business fa per creare valore. | Gestione ordini, pagamenti, consegne. |
| **Database per Service** | Ogni servizio possiede il proprio database. | Order DB separato da Customer DB. |
| **Saga** | Sequenza di transazioni locali con compensazioni. | Ordine → pagamento → consegna. |
| **Domain Event** | Evento significativo nel dominio. | OrderCreated. |
| **Event Sourcing** | Stato persistito come sequenza di eventi. | Account debited/credited events. |
| **API Composition** | Aggregare dati chiamando più servizi. | Order page chiama Customer e Restaurant. |
| **CQRS** | Separazione command model e query model. | Read model per dashboard ordini. |
| **Command-side Replica** | Replica locale read-only di dati esterni usata nei comandi. | Order Service mantiene credit status del Customer. |

## Monolith vs Microservices

| Aspetto | Monolith | Microservices |
|---|---|---|
| Deploy | Unico deploy. | Deploy indipendenti. |
| Complessità operativa | Minore. | Maggiore. |
| Team | Tutti lavorano su una codebase. | Team possiedono servizi. |
| Database | Spesso condiviso. | Database per service. |
| Adatto a | App piccole/iniziali. | Sistemi grandi con molti team. |
| Rischio | Monolithic hell se cresce troppo. | Distributed system complexity. |

## Quando scegliere microservices?

| Situazione | Scelta consigliata |
|---|---|
| Startup con 3 dev e MVP piccolo. | Monolith. |
| Sistema grande con molti team e release frequenti. | Microservices. |
| Dominio semplice CRUD. | Monolith / Smart UI. |
| Business complesso con confini chiari. | DDD + possibile microservices. |

## Proprietà di un buon service

| Proprietà | Esempio |
|---|---|
| Business capability chiara. | Payment Service gestisce pagamenti. |
| Team piccolo proprietario. | Team Payment lo sviluppa e opera. |
| Deploy indipendente. | Rilasciabile senza deploy globale. |
| Owns its data. | Payment DB privato. |
| API chiara. | REST/gRPC/events. |

## Database per Service

| Vantaggi | Svantaggi |
|---|---|
| Loose coupling. | Query cross-service difficili. |
| Deploy indipendente. | Transazioni distribuite difficili. |
| Tecnologia dati adatta al servizio. | Consistenza eventuale. |

## Shared Database anti-pattern

| Perché sembra utile | Perché è problematico |
|---|---|
| Join facili. | Accoppiamento forte. |
| Transazioni ACID semplici. | Schema changes bloccano più servizi. |
| Meno database da gestire. | Riduce deploy indipendente. |

## Saga

| Tipo | Definizione | Pro | Contro |
|---|---|---|---|
| Choreography | Servizi reagiscono a eventi. | Nessun coordinatore centrale. | Flusso difficile da capire. |
| Orchestration | Orchestratore manda comandi. | Flusso chiaro. | Componente centrale extra. |

### Esempio Saga ordine

| Step | Azione |
|---|---|
| 1 | Order Service crea ordine pending. |
| 2 | Payment Service autorizza pagamento. |
| 3 | Restaurant Service accetta ordine. |
| 4 | Delivery Service assegna rider. |
| Failure | Se pagamento fallisce, ordine viene cancellato/compensato. |

## API Composition vs CQRS

| Pattern | Quando usarlo | Esempio |
|---|---|---|
| API Composition | Query semplici, pochi servizi, piccoli risultati. | Pagina dettagli ordine chiama 3 servizi. |
| CQRS | Query complesse, molti dati, alte performance lettura. | Dashboard con ordini, clienti, ristoranti. |

## Domain Events

| Evento | Significato |
|---|---|
| OrderCreated | Ordine creato. |
| PaymentAuthorized | Pagamento autorizzato. |
| OrderCancelled | Ordine annullato. |
| CustomerUpdated | Dati cliente aggiornati. |
| RestaurantAddressChanged | Indirizzo ristorante cambiato. |

---

# 18. DevOps

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **DevOps** | Modello culturale e operativo che unisce sviluppo e operations per consegnare valore continuamente. | Dev + Ops condividono deploy e monitoring. |
| **Operations** | Gestione produzione: server, deploy, configurazioni, monitoraggio, incidenti. | Risolvere downtime in produzione. |
| **CI** | Continuous Integration: integrare codice spesso con build/test automatici. | Ogni commit lancia test. |
| **Continuous Delivery** | Software sempre pronto al rilascio, deploy manuale possibile. | Click per rilasciare build valida. |
| **Continuous Deployment** | Ogni change che passa test va automaticamente in produzione. | Merge → test → production deploy. |
| **CI/CD pipeline** | Sequenza automatica build-test-release-deploy-monitor. | Git → Jenkins → test → staging → prod. |
| **IaC** | Infrastructure as Code: infrastruttura definita come codice. | Terraform, Ansible. |
| **Monitoring** | Osservare sistema in produzione. | Log, metriche, tracing, alert. |

## DevOps risolve

| Problema tradizionale | Soluzione DevOps |
|---|---|
| “Works on my machine”. | Ambienti ripetibili, IaC, container. |
| Deploy manuali lenti. | Pipeline automatizzate. |
| Errori configurazione. | Configuration management. |
| Feedback lento. | CI e test automatici. |
| Silos Dev/Ops. | Responsabilità condivisa. |
| Downtime non visibile. | Monitoring e alerting. |

## DevOps non è

| Mito | Correzione |
|---|---|
| DevOps = tools. | È cultura + collaborazione + automazione. |
| DevOps = solo automation. | Serve responsabilità condivisa. |
| DevOps = team separato. | È modo di lavorare trasversale. |
| DevOps = licenziare ops. | Non è riduzione staff. |
| DevOps = solo startup. | Utile anche in aziende grandi. |

## CI pipeline

| Step | Cosa succede |
|---|---|
| 1 | Developer committa su repository. |
| 2 | Build automatica. |
| 3 | Test automatici. |
| 4 | Code quality / coverage. |
| 5 | Artifact generato. |
| 6 | Feedback immediato. |

## Continuous Delivery vs Continuous Deployment

| Aspetto | Continuous Delivery | Continuous Deployment |
|---|---|---|
| Produzione automatica? | Non necessariamente. | Sì. |
| Decisione business manuale? | Sì, possibile. | No, se pipeline passa. |
| Stato software | Sempre rilasciabile. | Ogni change valida rilasciata. |
| Relazione | Delivery non implica Deployment. | Deployment implica Delivery. |

## Tool categories

| Categoria | Scopo | Esempi |
|---|---|---|
| Collaboration | Comunicazione team. | Slack. |
| Planning | Pianificazione e trasparenza. | Asana, Jira. |
| Source control | Versionamento codice. | Git. |
| Issue tracking | Gestione problemi e richieste. | Jira, Zendesk. |
| Configuration management | Configurazioni ripetibili. | Puppet, Chef, Salt. |
| CI | Build/test automatici. | Jenkins, Bamboo, TeamCity. |
| Automated testing | Verifica automatica. | Unit tests, TestComplete. |
| Deployment tools | Rilasci prevedibili. | Release automation tools. |
| Monitoring/APM | Performance e problemi produzione. | Logs, metrics, tracing. |

---

# 19. Interoperability

## Definizioni

| Concetto | Definizione | Esempio |
|---|---|---|
| **Interoperability** | Capacità di sistemi diversi di scambiare informazioni e usare correttamente le informazioni scambiate. | Sistema ospedale invia dati a sistema laboratorio. |
| **Technical interoperability** | Capacità tecnica di comunicare. | HTTP, TCP/IP, Bluetooth. |
| **Syntactic interoperability** | Compatibilità di formato e struttura dati. | JSON, XML, CSV, schema. |
| **Semantic interoperability** | Stesso significato attribuito ai dati. | “date” significa exam date, non booking date. |
| **Organizational interoperability** | Processi e responsabilità allineati tra organizzazioni. | Ospedale e laboratorio concordano workflow. |
| **Data interoperability** | Scambio, trasformazione, mapping e integrazione di dati eterogenei. | student_id ↔ matricola. |

## Layered classification

| Layer | Domanda | Esempio |
|---|---|---|
| Technical | I sistemi riescono a connettersi? | API REST raggiungibile via HTTPS. |
| Syntactic | Parlano lo stesso formato? | Entrambi usano JSON con schema noto. |
| Semantic | I dati hanno lo stesso significato? | “grade” è voto su 30, non percentuale. |
| Organizational | Il processo complessivo funziona? | Chi aggiorna dati? Chi risponde a errori? |

## Data interoperability: problemi tipici

| Problema | Esempio | Soluzione |
|---|---|---|
| Nomi diversi, stesso concetto | student_id vs matricola | Mapping schema. |
| Stesso nome, significato diverso | date = booking date o exam date | Metadata, ontologie. |
| Formati diversi | XML vs JSON | Transformation. |
| Unità diverse | Celsius vs Fahrenheit | Conversione unità. |
| Identificativi diversi | ID locale vs codice fiscale | Master data / matching. |
| Duplicati | Stesso studente in due sistemi. | Data cleaning. |
| Dati mancanti | Campo email assente. | Validation rules. |

## Esempio data interoperability

| Sistema A | Sistema B | Mapping |
|---|---|---|
| student_id | matricola | stesso concetto. |
| first_name + last_name | fullName | concatenazione/splitting. |
| birth_date YYYY-MM-DD | dateOfBirth DD/MM/YYYY | conversione formato. |
| grade 0–30 | mark percentage | conversione scala. |

---

# 20. Tabelle pronte per esercizi

## Function Points — Direct UFP Count

| Function Type | Complexity | Quantity | Weight | Total |
|---|---:|---:|---:|---:|
| ILF | Low |  | 7 |  |
| ILF | Average |  | 10 |  |
| ILF | High |  | 15 |  |
| EIF | Low |  | 5 |  |
| EIF | Average |  | 7 |  |
| EIF | High |  | 10 |  |
| EI | Low |  | 3 |  |
| EI | Average |  | 4 |  |
| EI | High |  | 6 |  |
| EO | Low |  | 4 |  |
| EO | Average |  | 5 |  |
| EO | High |  | 7 |  |
| EQ | Low |  | 3 |  |
| EQ | Average |  | 4 |  |
| EQ | High |  | 6 |  |
| **Total UFP** |  |  |  |  |

## Data Functions — ILF / EIF

| Logical File | Type | DET | RET | Complexity | Weight | Total FP |
|---|---|---:|---:|---|---:|---:|
|  | ILF / EIF |  |  | Low / Average / High |  |  |
|  | ILF / EIF |  |  | Low / Average / High |  |  |
|  | ILF / EIF |  |  | Low / Average / High |  |  |
|  | ILF / EIF |  |  | Low / Average / High |  |  |
| **Data Functions Total** |  |  |  |  |  |  |

## Transactional Functions — EI / EO / EQ

| Function | Type | DET | FTR | Complexity | Weight | Total FP |
|---|---|---:|---:|---|---:|---:|
|  | EI / EO / EQ |  |  | Low / Average / High |  |  |
|  | EI / EO / EQ |  |  | Low / Average / High |  |  |
|  | EI / EO / EQ |  |  | Low / Average / High |  |  |
|  | EI / EO / EQ |  |  | Low / Average / High |  |  |
| **Transactional Functions Total** |  |  |  |  |  |  |

## Heuristic Evaluation Table

| Interface | Violated heuristic | Severity 0–4 | Problem | Redesign |
|---|---|---:|---|---|
|  |  |  |  |  |
|  |  |  |  |  |

## Cognitive Walkthrough Table

| Action | User goal? | Action visible? | Action understandable? | Feedback understandable? | Problem | Redesign |
|---|---|---|---|---|---|---|
|  | Yes/No | Yes/No | Yes/No | Yes/No |  |  |
|  | Yes/No | Yes/No | Yes/No | Yes/No |  |  |

## ISO/IEC 25010 Quality Requirement Table

| Characteristic | Subcharacteristic | Metric | Procedure | Scale | Threshold | Type | Context |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  | Direct / Non-direct / Indicator | Internal / External / In-use |

## User Story Table

| ID | User Story | Acceptance Criteria |
|---|---|---|
| US1 | As a..., I want..., so that... | Given..., When..., Then... |
| US2 | As a..., I want..., so that... | Given..., When..., Then... |

---

# 21. Frasi pronte da esame

## HCI

> HCI studies the design, evaluation and implementation of interactive systems for human use. It considers the human, the computer and the interaction between them.

## Usability

> Usability is the extent to which specified users can achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use.

## UCD

> User Centered Design is an iterative process that involves users early and continuously in order to design systems that satisfy real user needs and context of use.

## HTA

> HTA decomposes a user task into subtasks and uses plans to specify the order, alternatives and conditions under which subtasks are performed.

## STN

> A State Transition Network represents dialogue as states connected by transitions. It is useful to check reachability, reversibility, completeness and dangerous states.

## Cognitive Walkthrough

> Cognitive walkthrough evaluates an interface action by action, asking whether users can form the correct goal, find the correct action, understand it and interpret the feedback.

## Heuristic Evaluation

> Heuristic evaluation is an expert inspection method where evaluators compare an interface against usability heuristics, record problems, assign severity and propose redesigns.

## CMMI

> CMMI is a process improvement framework that provides best practices for improving the capability and maturity of software processes.

## ISO/IEC 25010

> ISO/IEC 25010 defines two quality models: quality in use, focused on real usage outcomes, and product quality, focused on software/system properties.

## Function Points

> Function Points measure the functional size of a system from the user's point of view, independently of the programming language, by counting ILF, EIF, EI, EO and EQ.

## COCOMO II

> COCOMO II estimates software effort and schedule from project size in KSLOC together with scale factors and effort multipliers.

## Scrum

> Scrum is an agile framework based on short sprints, prioritized backlog, self-organizing teams and frequent inspection and adaptation.

## User Story

> A user story is a short description of functionality from the stakeholder's point of view, usually written as: As a user, I want to do something, so that I get a benefit.

## Architecture

> Software architecture is the set of structures needed to reason about a system, including software elements, relations among them and their properties.

## DDD

> Domain-Driven Design focuses on building a model of the business domain and using a ubiquitous language shared by developers and domain experts.

## Microservices

> Microservice architecture structures an application as a set of loosely coupled, independently deployable services organized around business capabilities.

## DevOps

> DevOps combines development and operations through culture, collaboration and automation to deliver software faster and more reliably.

---

# 22. Mini-esempi rapidi per orale

## Slip, mistake, lapse

| Caso | Risposta |
|---|---|
| Clicco il pulsante vicino per errore. | Slip. |
| Credo che archive significhi delete. | Mistake. |
| Dimentico di salvare prima di uscire. | Lapse. |

## EI, EO, EQ

| Caso | Risposta |
|---|---|
| Registrare nuovo utente. | EI. |
| Generare report con totali. | EO. |
| Cercare libro per titolo. | EQ. |

## ILF vs EIF

| Caso | Risposta |
|---|---|
| Dati studenti gestiti dall'app. | ILF. |
| Registro pagamenti esterno solo consultato. | EIF. |

## Verification vs Validation

| Caso | Risposta |
|---|---|
| Testare se funzione segue requisito scritto. | Verification. |
| Verificare se sistema risolve bisogno reale utente. | Validation. |

## Continuous Delivery vs Deployment

| Caso | Risposta |
|---|---|
| Build pronta per produzione ma rilascio manuale. | Continuous Delivery. |
| Ogni commit valido va automaticamente in produzione. | Continuous Deployment. |

## Entity vs Value Object

| Caso | Risposta |
|---|---|
| Studente con matricola. | Entity. |
| Indirizzo o intervallo date. | Value Object. |

## API Composition vs CQRS

| Caso | Risposta |
|---|---|
| Pochi dati da 2–3 servizi. | API Composition. |
| Query complesse e frequenti con molti join. | CQRS. |

---

# 23. Checklist finale prima dell'esame

| Domanda | Fatto |
|---|---|
| So definire HCI, UCD e Usability? | ☐ |
| So distinguere effectiveness, efficiency, satisfaction? | ☐ |
| So fare esempi di slip, mistake, lapse? | ☐ |
| So spiegare Norman e i gulfs? | ☐ |
| So differenziare persona, scenario, storyboard? | ☐ |
| So scegliere tra interview, survey, card sorting, field study? | ☐ |
| So correggere domande sbagliate di un questionario? | ☐ |
| So costruire HTA con plan? | ☐ |
| So distinguere HTA e STN? | ☐ |
| So fare cognitive walkthrough con 4 domande? | ☐ |
| So usare Nielsen con severity? | ☐ |
| So distinguere verification e validation? | ☐ |
| So spiegare CMMI continuous vs staged? | ☐ |
| So elencare ISO/IEC 25010 quality in use e product quality? | ☐ |
| So creare requisito qualità con metrica e threshold? | ☐ |
| So calcolare Function Points con matrici e pesi? | ☐ |
| So collegare FP → LOC → KSLOC → COCOMO II? | ☐ |
| So scrivere user story + acceptance criteria? | ☐ |
| So spiegare Scrum roles, ceremonies, artifacts? | ☐ |
| So spiegare architecture 4+1? | ☐ |
| So distinguere DDD, Smart UI, Entity, Value Object, Aggregate? | ☐ |
| So spiegare monolith vs microservices? | ☐ |
| So spiegare DevOps, CI, CD, deployment? | ☐ |
