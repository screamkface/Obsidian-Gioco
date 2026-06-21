
# Prova d’Esame 2 — User Driven Software Engineering

**Durata consigliata:** 2 ore  
**Punteggio totale:** 30 punti  
**Struttura:**

- Parte A — User Driven / HCI: 15 punti
    
- Parte B — Software Engineering, Quality, Agile, Architecture: 15 punti
    

---

# Parte A — User Driven / HCI

## Esercizio 1 — Human Factors: Memory, Cognitive Load and Errors

**Punti: 3**

Un’app universitaria richiede agli studenti di copiare un codice a 6 cifre da una schermata e inserirlo nella schermata successiva. Inoltre, il pulsante “Cancel booking” è molto vicino al pulsante “Confirm booking”.

Rispondere:

1. Spiegare perché questo design aumenta il cognitive load.
    
2. Classificare i possibili errori come:
    
    - slip;
	    - The intention is correct but the action is performed incorrectly
        
    - mistake;
	    - Intention itself is wrong
        
    - lapse.
	    - The uses forgot something or loses attention during the task
        
3. Proporre almeno tre soluzioni di redesign.
    

---

## Esercizio 2 — Abowd and Beale Interaction Framework

**Punti: 2**

Applicare il framework di Abowd and Beale al task:

> “Prelevare denaro da un ATM.”

Compilare la tabella:

|Elemento|Descrizione nel caso ATM|
|---|---|
|User||
|Task language||
|Input||
|Input language||
|System||
|Core language||
|Output||
|Output language||

Poi spiegare un possibile problema di traduzione tra due componenti del framework.

---

## Esercizio 3 — User Centered Design Activities

**Punti: 2**

Si deve progettare una nuova app per prenotare posti in biblioteca.

Descrivere un ciclo completo di User Centered Design includendo:

1. context of use;
    
2. user and organizational requirements;
    
3. design/prototype;
    
4. evaluation;
    
5. redesign iteration.
    

Spiegare perché coinvolgere gli utenti solo alla fine non è sufficiente.

---

## Esercizio 4 — Competitor Analysis and Requirement Collection

**Punti: 2**

Si vuole progettare un’app per trovare coinquilini universitari.

1. Costruire una competitor analysis minimale con almeno tre competitor generici.
    
2. Per ogni competitor indicare:
    
    - strength;
        
    - weakness;
        
    - opportunity for our product.
        

|Competitor|Strength|Weakness|Opportunity|
|---|---|---|---|
|App A||||
|App B||||
|App C||||

3. Scegliere due metodi di raccolta requisiti tra:
    
    - interview;
        
    - survey;
        
    - focus group;
        
    - field study;
        
    - card sorting.
        

Motivare la scelta.

---

## Esercizio 5 — Questionnaires: Scales, Bias and Pilot Test

**Punti: 2**

Devi costruire un questionario per valutare la soddisfazione degli studenti verso una nuova app universitaria.

1. Scrivere:
    
    - una domanda aperta;
        
    - una domanda multiple choice;
        
    - una domanda Likert scale;
        
    - una domanda ranking.
        
2. Spiegare cos’è un pilot test e perché è utile.
    
3. Correggere questa domanda:
    

> “Quanto sei d’accordo che la nuova app sia veloce, bella e facile da usare?”

Spiegare il problema.

---

## Esercizio 6 — Interaction Design: Layout, Affordances and Signifiers

**Punti: 2**

Un form di pagamento mostra dati personali, dati carta, indirizzo di fatturazione e pulsante di conferma tutti mescolati nella stessa schermata.

Rispondere:

1. Spiegare come useresti:
    
    - grouping;
        
    - ordering;
        
    - alignment;
        
    - white space;
        
    - decoration.
        
2. Spiegare la differenza tra affordance e signifier.
    
3. Fare un esempio di elemento cliccabile che ha una cattiva affordance o un cattivo signifier e proporre un redesign.
    

---

## Esercizio 7 — Cognitive Models: GOMS and KLM

**Punti: 2**

Confrontare due modi per salvare un documento:

- Metodo A: usare il menu `File > Save`;
    
- Metodo B: usare la scorciatoia `Ctrl + S`.
    

1. Modellare il task con GOMS:
    
    - Goal;
        
    - Operators;
        
    - Methods;
        
    - Selection rules.
        
2. Usare KLM in modo qualitativo, elencando gli operatori coinvolti:
    
    - K;
        
    - P;
        
    - B;
        
    - H;
        
    - M;
        
    - R.
        
3. Spiegare quale metodo è probabilmente più veloce e perché.
    

---

# Parte B — Software Engineering, Quality, Agile, Architecture

## Esercizio 8 — Design Rules and Evaluation

**Punti: 2**

Rispondere ai seguenti punti:

1. Spiegare la differenza tra:
    
    - principle;
        
    - guideline;
        
    - standard.
        
2. Scegliere tre principi tra quelli di Dix:
    
    - predictability;
        
    - synthesizability;
        
    - familiarity;
        
    - consistency;
        
    - observability;
        
    - recoverability;
        
    - responsiveness.
        

Per ciascuno dare definizione ed esempio.

3. Citare due golden rules di Shneiderman e spiegare come migliorano l’usabilità.
    

---

## Esercizio 9 — Controlled Experiments

**Punti: 3**

Si vuole confrontare due versioni di una pagina di ricerca:

- Versione A: filtri laterali;
    
- Versione B: filtri in alto.
    

Progettare un controlled experiment.

Specificare:

|Elemento|Risposta|
|---|---|
|Research question||
|Independent variable||
|Dependent variables||
|Participants||
|Null hypothesis H0||
|Alternative hypothesis H1||
|Within-subjects or between-subjects design||
|Possible order effects||
|Counterbalancing strategy||
|Possible interpretation of p = 0.03||
|Possible interpretation of p = 0.18||

Spiegare perché un risultato non significativo non dimostra automaticamente che “non c’è differenza”.

---

## Esercizio 10 — Software Process Models, Verification and Validation

**Punti: 2**

Rispondere:

1. Spiegare la differenza tra:
    
    - verification;
        
    - validation.
        
2. Spiegare la differenza tra:
    
    - black-box testing;
        
    - white-box testing.
        
3. Indicare quando conviene progettare black-box test cases e quando invece white-box test cases.
    
4. Scegliere il modello di processo più adatto per ciascun caso:
    

|Caso|Modello consigliato|Motivazione|
|---|---|---|
|Requisiti stabili e progetto piccolo|||
|Requisiti incerti e bisogno di feedback utente|||
|Sistema con forti rischi tecnici|||
|Sistema safety-critical con requisiti formali|||

---

## Esercizio 11 — ISO 12207, ISO 9001 and Process Documentation

**Punti: 2**

1. Classificare le seguenti attività secondo ISO 12207:
    

|Attività|Primary / Support / Organizational|
|---|---|
|Acquisition||
|Development||
|Operation||
|Maintenance||
|Documentation||
|Configuration management||
|Verification||
|Validation||
|Audit||
|Management||
|Training||
|Improvement||

2. Spiegare la differenza tra ISO 9000 e ISO 9001.
    
3. Spiegare la differenza tra Quality Manual e Quality Policy.
    

---

## Esercizio 12 — Software Quality: Cost of Quality and Metrics

**Punti: 2**

Classificare i seguenti costi:

|Caso|Prevention / Appraisal / Internal Failure / External Failure|
|---|---|
|Training degli sviluppatori su secure coding||
|Code inspection prima del rilascio||
|Correzione di un difetto trovato durante il testing interno||
|Rimborso a un cliente dopo un failure in produzione||
|Esecuzione di test automatici||
|Fix urgente dopo una release difettosa||

Poi spiegare perché aumentare prevention e appraisal può ridurre il costo totale della qualità.

---

## Esercizio 13 — ISO/IEC 25010: Quality in Use, Product Quality and SQuaRE

**Punti: 2**

1. Elencare le 5 caratteristiche del Quality in Use Model.
    
2. Elencare le 8 caratteristiche del Product Quality Model.
    
3. Spiegare la differenza tra quality in use e product quality.
    
4. Completare una quality requirement:
    

|Field|Answer|
|---|---|
|System|Online ticket machine|
|Quality characteristic||
|Sub-characteristic||
|Metric||
|Measurement procedure||
|Scale||
|Direct / Non-direct / Indicator||
|Threshold||

---

## Esercizio 14 — Agile, Story Points, Velocity and Burndown

**Punti: 2**

Un team completa i seguenti story points in quattro sprint:

|Sprint|Completed Story Points|
|---|--:|
|Sprint 1|18|
|Sprint 2|22|
|Sprint 3|20|
|Sprint 4|24|

1. Calcolare la velocity media.
    
2. Spiegare come può essere usata per pianificare una release da 84 story points.
    
3. Spiegare perché la velocity non va confrontata direttamente tra team diversi.
    
4. Un burndown chart rimane piatto per metà sprint e poi scende bruscamente alla fine. Dare due possibili interpretazioni.
    

---

## Esercizio 15 — Spikes, Backlog and Story Splitting

**Punti: 1.5**

Classificare ogni item come user story o spike:

|Backlog item|User Story / Spike|Motivazione|
|---|---|---|
|Investigate whether an external payment API supports refunds|||
|As a student, I want to cancel an exam booking, so that I can free my place|||
|Compare two recommendation algorithms for one day|||
|As an admin, I want to remove inappropriate content|||

Poi dividere questa storia troppo grande in almeno tre storie più piccole:

> As a user, I want to manage my profile, so that my account is personalized.

---

## Esercizio 16 — Function Points: Classification Only

**Punti: 1.5**

Per un sistema di gestione biblioteca, classificare ogni elemento come ILF, EIF, EI, EO o EQ.

|Elemento|Tipo|Motivazione|
|---|---|---|
|Book catalog maintained by the system|||
|External university registry only read by the system|||
|Add a new book|||
|Update book metadata|||
|Search a book by title and display simple results|||
|Generate monthly report with number of loans per category|||
|Display one user profile without calculations|||
|Export borrowing history as PDF with totals|||

---

## Esercizio 17 — Microservice Data Patterns

**Punti: 2**

In una microservice architecture, `Order Service`, `Customer Service` e `Restaurant Service` possiedono database separati.

Una pagina deve mostrare:

- order details;
    
- customer name;
    
- restaurant address;
    
- payment status.
    

Rispondere:

1. Perché usare uno shared database sarebbe problematico?
    
2. Quando API Composition è sufficiente?
    
3. Quando CQRS è più appropriato?
    
4. Quali Domain Events potrebbero aggiornare una read model?
    
5. Come una Saga può aiutare nel processo di creazione ordine?
    

---

## Esercizio 18 — DevOps: CI, Delivery, Deployment and Monitoring

**Punti: 2**

Un team rilascia manualmente ogni due mesi. Ogni release causa spesso problemi perché gli ambienti di test e produzione sono diversi.

Rispondere:

1. Quali problemi DevOps cerca di risolvere in questo caso?
    
2. Disegnare testualmente una pipeline CI/CD.
    
3. Spiegare la differenza tra:
    
    - Continuous Integration;
        
    - Continuous Delivery;
        
    - Continuous Deployment.
        
4. Elencare almeno quattro informazioni da monitorare dopo il deploy.
    

---

# Griglia di valutazione sintetica

|Area|Punti|
|---|--:|
|Human factors, UCD, requirements, interaction design|9|
|Task/cognitive models and evaluation|6|
|Process models, ISO, quality|8|
|Agile, Function Points, Microservices, DevOps|7|
|**Totale**|**30**|

---

# Checklist prima di consegnare

- Ho distinto memory/cognitive load da usability generica.
    
- Ho distinto slip, mistake e lapse.
    
- Ho applicato correttamente Abowd and Beale.
    
- Ho distinto affordance e signifier.
    
- Ho distinto GOMS da KLM.
    
- Ho distinto principles, guidelines e standards.
    
- Ho definito H0 e H1 negli esperimenti.
    
- Ho spiegato p-value senza dire automaticamente “H1 è vera”.
    
- Ho distinto verification da validation.
    
- Ho classificato correttamente ISO 12207.
    
- Ho distinto Quality Manual da Quality Policy.
    
- Ho distinto quality in use da product quality.
    
- Ho distinto user story da spike.
    
- Ho distinto API Composition, CQRS, Saga e Domain Events.
    
- Ho distinto Continuous Integration, Continuous Delivery e Continuous Deployment.