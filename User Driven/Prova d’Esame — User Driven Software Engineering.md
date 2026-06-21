# Prova d’Esame — User Driven Software Engineering

**Durata consigliata:** 2 ore  
**Punteggio totale:** 30 punti  
**Struttura:**

- Parte A — User Driven / HCI: 15 punti
    
- Parte B — Software Engineering, Quality, Scrum, Architecture: 15 punti
    

---

# Parte A — User Driven / HCI

## Esercizio 1 — HCI Foundations e Norman’s Interaction Cycle

**Punti: 3**

Un utente vuole modificare le impostazioni di privacy di una mobile app, ma non riesce a trovare l’opzione corretta.

Rispondere ai seguenti punti:

1. Descrivere il ciclo di interazione di Norman applicato al caso:
    
    - goal
	    - User wants to find privacy settings in the mobile app in order to change them
        
    - intention
	    - User wants to open privacy section
	    
    - action specification
	    - The user write "Privacy" in the settings search bar
    - execution;
	    - He taps the search bar and writes "Privacy Settings"
    - perception;
	    - The changed setting box highlights
    - interpretation
	    - User understand that he's changing for the particular settings but many options appears
        
    - evaluation.
	    - The user cannot understand whether the setting is changed.
        
2. Identificare:
    
    - un possibile gulf of execution
	    - The user struggles to find the privacy settings because navigation is complex
        
    - un possibile gulf of evaluation.
	    - The user is stuck in the settings and cannot understand if he changed the settings properly
        
3. Proporre due miglioramenti dell’interfaccia che riducano questi gulfs.
	1. Add the settings navigation to the bottom app bar and make a clear hierarchy of the settings
	2. Add a search function in the settings
    

---

## Esercizio 2 — Usability e User Centered Design

**Punti: 2**

Definire il concetto di usability secondo la prospettiva user-centered.

Poi, per un’app di prenotazione esami universitari, proporre una metrica per ciascuna delle seguenti dimensioni:

| Dimensione    | Metrica proposta   | Come viene misurata                      |
| ------------- | ------------------ | ---------------------------------------- |
| Effectiveness | **Goals Achieved** | Conting the number of the achieved goals |
| Efficiency    | Completion time    | Time involved for a specific goal        |
| Satisfaction  | Rating             | Rating button                            |

Infine spiegare perché lo User Centered Design è un processo iterativo.

## Answers

- Usabilty is a property which users can achieve their goals with effectiveness and satisfaction while using the software.

---

## Esercizio 3 — User Requirements, Personas e Scenarios

**Punti: 2**

Si vuole progettare un’app che aiuti gli studenti a trovare gruppi di studio.

1. Definire un breve user profile.
	1. Group of students of age between 14-25 that prefer to study together 
    
2. Creare una persona.
	1. Mario Rossi, a 23 years old economy student very low socially capable that always goes to library alone but he wants to make new firends to study with. 
    
3. Scrivere uno scenario d’uso realistico.
	1. Mario opens the app in the library and look for a group of people studying the same university course in the same city
    
4. Indicare quale metodo useresti per raccogliere i requisiti tra:
    
    - interviews;
	    - Interviews are useful becasue the user directly expose the problems and the needs about the prototype
        
    - surveys
	    - Are a good way to collect many data from real students
        
    - card sorting;
        
    - field studies
	    - Understand how reals students approach to this world 
        
    - focus group.
        

Motivare la scelta.

---

## Esercizio 4 — Questionnaires

**Punti: 2**

Correggere le seguenti domande di un questionario, spiegando il problema presente in ognuna:

1. “Quanto è fastidiosa questa app?”
	1.  uso di assoluti;
    
2. “Ti piace il design e la velocità dell’app?”
	1.  uso di assoluti;
    
3. “Usi sempre l’app per studiare? Sì/No”
	1. Quanto spesso usi l'app per studiare
    
4. “Quanto è intuitiva e perfetta l’interfaccia?”
	1.  uso di assoluti;
    

Per ogni domanda indicare se il problema è:

- leading question;
    
- double-barreled question;
    
- uso di assoluti;
    
- domanda vaga o non misurabile.
    

---

## Esercizio 5 — Task Models: HTA

**Punti: 2**

Costruire una Hierarchical Task Analysis per il task:

> “Prenotare un esame universitario tramite app.”

La risposta deve includere:

1. goal principale;
    
2. almeno 5 sottotask;
    
3. almeno un piano che descriva l’ordine delle azioni;
    
4. un percorso alternativo in caso di esame non disponibile.
    

---

## Esercizio 6 — Dialog Design: STN

**Punti: 2**

Costruire una State Transition Network testuale per il task:

> “Creare un nuovo evento nel calendario.”

Indicare:

|Stato|Azione / Evento|Stato successivo|
|---|---|---|
||||

La STN deve includere almeno:

- stato iniziale;
    
- form di inserimento dati;
    
- stato di errore;
    
- conferma;
    
- possibilità di annullare o tornare indietro.
    

Poi spiegare brevemente la differenza tra HTA e STN.

---

## Esercizio 7 — Evaluation Techniques

**Punti: 2**

Un prototipo di login ha questi problemi:

- non mostra messaggi di errore chiari;
    
- non ha il link “Forgot password?”;
    
- il pulsante “Login” rimane attivo anche con campi vuoti;
    
- usa solo placeholder nei campi, senza label persistenti.
    

Effettuare una breve heuristic evaluation usando la seguente tabella:

| Problema                                                 | Euristica di Nielsen violata  | Severity 0-4 | Suggerimento di redesign       |
| -------------------------------------------------------- | ----------------------------- | -----------: | ------------------------------ |
| non mostra messaggi di errore chiari;                    | **Match with the real world** |            3 | show the errors in a clear way |
| non ha il link “Forgot password?”;                       | **Consistency and standards** |            4 | Add a forgot password function |
| il pulsante “Login” rimane attivo anche con campi vuoti; |                               |              |                                |

Poi spiegare la differenza tra heuristic evaluation e cognitive walkthrough.

---

# Parte B — Software Engineering, Quality, Scrum, Architecture

## Esercizio 8 — Software Process Models

**Punti: 2**

Confrontare Waterfall, Incremental Model e Spiral Model.

Compilare la tabella:

| Modello     | Idea principale                                                                    | Quando è adatto                                           | Limite principale                                                         |
| ----------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------- |
| Waterfall   | The model starts with requirements analysis and ends with the maintenance          | When the requirements are stable and well defined         | It's hard to go back to earlier phase                                     |
| Incremental | At every increment a new feature of the product is made and potentially deployable | When the requirements can easily change and time is less. | Since developing is the main priority teams doesn't focus on requirements |
| Spiral      | At every iteration you manage the risk                                             | When the risk is crucial                                  | Hard to manage                                                            |

Poi spiegare perché il modello Spiral è considerato risk-driven.

---

## Esercizio 9 — CMMI e ISO Standards

**Punti: 2**

Rispondere ai seguenti punti:

1. Elencare e descrivere brevemente i capability levels del CMMI nella continuous representation:
    
    - Level 0 — Incomplete;
	    - Is not CMMI level, and is partially performed
        
    - Level 1 — Performed
	    - The process is executed and produces results
        
    - Level 2 — Managed;
	    - The process is planned, controlled skilled people are involved and has resources
        
    - Level 3 — Defined
	    - The process is standardized and adopt the standards
        
    - Level 4 — Quantitatively Managed;
	    - Process is monitored with **metrics**, statistics and quantified objectives
        
    - Level 5 — Optimizing.
	    - Process is continuoly improving
        
2. Spiegare la differenza tra:
    
    - CMMI continuous representation;
	    - focuses on process areas 
        
    - CMMI staged representation.
	    - Focuses on the maturity level of the entire organization
3. Spiegare il ruolo di ISO 12207 e ISO 9001.
	1. Defines standards of Software lifecycle process
	2. 9001 is the iso familty adresses quality management
    

---

## Esercizio 10 — ISO/IEC 25010 e Software Quality

**Punti: 3**

Un sistema di pagamento online deve essere valutato dal punto di vista della qualità.

1. Distinguere tra:
    
    - error;
	    - Action of human being
        
    - fault/defect;
	    - Is the physical or logical errore that show up in the software
        
    - failure.
	    - The users cannot pay because the see an error dialog on the payment section
        
2. Elencare le 8 caratteristiche del Product Quality Model di ISO/IEC 25010.
	1. 
    
3. Scrivere due quality requirements misurabili usando questa tabella:
    

|Requirement|ISO 25010 characteristic|Sub-characteristic|Metric|Measurement procedure|Threshold|
|---|---|---|---|---|---|
|1||||||
|2||||||

---

## Esercizio 11 — Function Points

**Punti: 3**

Una piccola app universitaria permette agli studenti di:

- registrarsi;
    
- aggiornare il profilo;
    
- cercare esami disponibili;
    
- prenotare un esame;
    
- cancellare una prenotazione;
    
- visualizzare la carriera;
    
- generare un certificato.
    

Il sistema mantiene i seguenti logical files:

| Logical File              | Type | DET | RET |
| ------------------------- | ---- | --: | --: |
| Student                   | ILF  |  16 |   2 |
| Exam                      | ILF  |  20 |   1 |
| Booking                   | ILF  |  14 |   2 |
| Career                    | ILF  |  28 |   3 |
| External Payment Registry | EIF  |  10 |   1 |

Le transazioni sono:

|Function|Type|DET|FTR|
|---|---|--:|--:|
|Register student|EI|12|1|
|Update profile|EI|10|1|
|Search exams|EQ|8|1|
|Book exam|EI|6|4|
|Cancel booking|EI|4|2|
|View career|EQ|15|2|
|Generate certificate|EO|25|2|

Usare le matrici standard di complessità e calcolare gli Unadjusted Function Points.

Tabella da compilare per le Data Functions:

| Logical File              | Type | DET | RET | Complexity | Weight | Total FP |
| ------------------------- | ---- | --: | --: | ---------- | -----: | -------: |
| Student                   | ILF  |  16 |   2 | Low        |      7 |          |
| Exam                      | ILF  |  20 |   1 | Low        |      7 |          |
| Booking                   | ILF  |  14 |   2 | Low        |      7 |          |
| Career                    | ILF  |  28 |   3 | Average    |     10 |          |
| External Payment Registry | EIF  |  10 |   1 | Low        |      5 |          |
| **Data Functions Total**  |      |     |     |            |     36 |          |

Tabella da compilare per le Transactional Functions:

| Function                          | Type | DET | FTR | Complexity | Weight | Total FP |
| --------------------------------- | ---- | --: | --: | ---------- | -----: | -------: |
| Register student                  | EI   |  12 |   1 | Low        |      3 |          |
| Update profile                    | EI   |  10 |   1 | Low        |      3 |          |
| Search exams                      | EQ   |   8 |   1 | Low        |      3 |          |
| Book exam                         | EI   |   6 |   4 | High       |      6 |          |
| Cancel booking                    | EI   |   4 |   2 | Low        |      3 |          |
| View career                       | EQ   |  15 |   2 | Average    |      4 |          |
| Generate certificate              | EO   |  25 |   2 | High       |      7 |          |
| **Transactional Functions Total** |      |     |     |            |     29 |          |

Risultato finale:

| Category                      | Total FP |
| ----------------------------- | -------: |
| Data Functions Total          |       26 |
| Transactional Functions Total |       29 |
| **UFP**                       |       65 |

---

## Esercizio 12 — COCOMO II

**Punti: 2**

Un sistema è stimato in **180 Function Points**. Il linguaggio scelto ha un fattore di conversione:

> 53 LOC / FP

I parametri COCOMO II sono:

- A = 2.94;
    
- E = 1.08;
    
- ΠEM = 1.15.
    

Rispondere:

1. Convertire FP in LOC.
	1. LOC = 180 x 53 = 9540
    
2. Convertire LOC in KSLOC.
	1. 9.54
    
3. Calcolare lo sforzo:
    PM = 2.94 x 9.54^1.08 x 1.15 = 38.632 

> PM = A × Size^E × ΠEM

4. Spiegare perché, a parità di KSLOC, un progetto con team cohesion più debole, reliability richiesta più alta e execution time constraints più severi avrebbe effort maggiore. 
	1. **Same KSLOC does not imply same effort, because COCOMO II also considers project difficulty through scale factors and effort multipliers.**
	    

---

## Esercizio 13 — Scrum e User Stories

**Punti: 2**

Per un’app di gestione degli esami universitari:

1. Scrivere tre user stories nel formato:
    

> As a [stakeholder], I want [task], so that [goal].

1. As a **student**, i want to register to an exam, so that i can attend the exam
2. As s student, i want to pay the fees, so that i'm regularly registered
3. As a student, i want to export my exam career, so that i can see my exams

4. Per una delle user stories, scrivere due acceptance criteria in formato Given / When / Then.
	1. Given that the student is logged in and the exam session is available, When the student selects the exam session and confirms the booking, Then the system registers the student for the exam and shows a confirmation message.
	2. Given that the exam session is full or the booking deadline has passed, When the student tries to book the exam,Then the system prevents the booking and displays an error message explaining the reason.
    
5. Spiegare la differenza tra:
    
    - Product Backlog;
	    - Is a list of features that should be implemented 
        
    - Sprint Backlog;
	    - list of features to add in the current sprint
        
    - Increment.
	    - A potentially shippable product
        
6. Spiegare la differenza tra Sprint Review e Sprint Retrospective.
	The **Sprint Review focuses on the product increment and involves the team**, the Product Owner and stakeholders. Its goal is to inspect what has been built and collect feedback. 
	
	The Sprint Retrospective **focuses on the Scrum process and the team’s way of working**. Its goal is to identify what worked well, what did not work, and how the team can improve in the next sprint. Therefore, the review inspects the product, while the retrospective inspects the process.

---

## Esercizio 14 — Software Architecture, DDD, Microservices e DevOps (DA FARE DDD)

**Punti: 3**

Un’app di food delivery sta crescendo: inizialmente era un piccolo monolite, ora più team devono lavorare in parallelo e rilasciare frequentemente.

Rispondere ai seguenti punti:

1. Definire software architecture usando i concetti di:
    
    - elements;
        
    - relations;
        
    - properties.
        
2. Descrivere brevemente le 4+1 views di Kruchten.
    
3. Spiegare cos’è Domain-Driven Design e definire:
    
    - Entity;
        
    - Value Object;
        
    - Service;
        
    - Aggregate;
        
    - Repository.
        
4. Spiegare perché i microservices possono essere utili in questo caso.
    
5. Indicare almeno tre rischi dei microservices.
    
6. Spiegare perché DevOps, CI/CD, automated testing e monitoring diventano necessari in una microservice architecture.
    

---

# Griglia di valutazione sintetica

|Area|Punti|
|---|--:|
|User Driven / HCI|15|
|Software Process, CMMI, ISO, Quality|7|
|Function Points e COCOMO II|5|
|Scrum, Architecture, DDD, Microservices, DevOps|8|
|**Totale**|**30**|

---

# Checklist prima di consegnare

- Ho distinto chiaramente ILF/EIF da EI/EO/EQ.
    
- Ho distinto HTA da STN.
    
- Ho usato metriche misurabili per usability e quality.
    
- Ho distinto error, fault e failure.
    
- Ho distinto Continuous Delivery da Continuous Deployment.
    
- Ho spiegato che Scrum non divide lo sprint in fasi waterfall.
    
- Ho spiegato che COCOMO II non dipende solo dalla size, ma anche da scale factors ed effort multipliers.
    
- Ho collegato microservices a business capabilities, independent deployability e DevOps.