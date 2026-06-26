 Esercizi **stile esame** su **BDD + DDD**, divisi per difficoltà. 

# Esercizi su BDD e DDD

## Esercizio 1 — User Story + Acceptance Criteria

Stai progettando una app universitaria per gestire gli esami.

Scrivi **3 user stories** nel formato:

**Exam Booking**
```text
As a [student],
I want [to register to an exam session],
so that [i'm correctly enrolled to the exam and i can take it].
```

**Exam Deleting Registration**
```text
As a [student],
I want [to be able to delete a registration for an exam session],
so that [i can correctly free my seat at the exam and professor will know that i won't take the exam].
```

**View Career**
```text
As a [student],
I want [to see my personal career],
so that [i can see my exams and personal informations].
```

Le storie devono riguardare:

1. prenotazione esame;
    
2. cancellazione prenotazione;
    
3. visualizzazione carriera.
    

Per **una** delle tre storie scrivi **3 acceptance criteria** in formato:

1. **Exam Booking** [CHOSEN]

```text
Given the fact that the user wants to register to an exam session,
When the user selects the exam session and receive a confirmation,
Then the user can download the exam registration receipt and can attend the exam regularly
```


```text
Given the fact that the user wants to register to an exam session but it's late,
When the user select the exam the button to book the exam becomes invisible,
Then an error shows up informing the user that the time for booking the exam is over
```


```text
Given that the user wishes to register for an exam session, but the registrar's office has not yet made it possible to make a reservation,
When the user try to find the specific exam he can't do noting,
Then the user can seee in a form when the exam will bee reservable in a date widget.
```


---

## Esercizio 2 — Correggere user stories deboli

Le seguenti user stories sono scritte male. Correggile e spiega il problema.

| User story debole                                              | Problema                | Versione corretta                                                                                                                                     |
| -------------------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| As a user, I want the app to be beautiful.                     | To generic              | As a user, i want the app interface will be very easy to navigate and well designed so that i can use the app without problems                        |
| As a developer, I want to create the database table for exams. | Goal not specified      | As a developer, I want to create the entities needed for exam booking so that the database maintain all the entities needed for booking the exams<br> |
| As a student, I want to manage my profile.                     | Goal not specified      | As a student, I want to manage my profile, so that i can change name, photo, description.<br>                                                         |
| The system must save the booking in the database.              | Stakeholder not defined | As a developer i want to make the saving logic, so that he system must save the booking in the database.                                              |
| As a user, I want to use the app easily.                       | Too generic             | As a user, I want to use the app so that i can easily learn and navigate screens.                                                                     |

Suggerimento: una buona user story deve avere **stakeholder**, **task concreto** e **valore/goal**.

---

## Esercizio 3 — BDD: Given / When / Then

Per questa user story:

```text
As a student,
I want to pay university fees online,
so that I can be regularly enrolled.
```

Scrivi acceptance criteria per questi casi:

1. pagamento riuscito;
    
2. carta rifiutata;
    
3. pagamento già effettuato;
    
4. servizio di pagamento esterno non disponibile.
    

Usa sempre il formato:

```text
Given ...
When ...
Then ...
```

---

## Esercizio 4 — Story o Spike?

Classifica ogni backlog item come **User Story** oppure **Spike**.

| Backlog item                                                                             | User Story / Spike | Motivazione                                               |
| ---------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------- |
| Investigate whether the payment API supports refunds                                     | Spike              | It doesn't add functionalities but is a research activity |
| As a student, I want to book an exam, so that I can attend the session                   | **User Story**     | It contains stakeholder, task and goal                    |
| Compare two notification systems for one day                                             | Spike              |                                                           |
| As an admin, I want to remove an exam session, so that outdated sessions are not visible | **User Story**     |                                                           |
| Test if the university SSO can be integrated with our app                                | Spike              |                                                           |

Domanda finale:

> Perché uno spike deve essere time-boxed?

> Because a spike raise when there is uncertaint and since we cannot estimate wheter a technology works we limit the time spent on doing that. 

---

# DDD

## Esercizio 5 — Identificare il dominio

Considera una piattaforma di **food delivery**.

Il sistema deve permettere a un cliente di ordinare cibo da un ristorante, pagare online e seguire lo stato della consegna.

Identifica almeno:

| Elemento                 | Risposta                                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| Main domain              | **Food ordering and delivery management**                                                                |
| 5 domain concepts        | Customer, Restaurant, Menu, Order, Payment, Delivery, Courier, Address                                   |
| 3 business rules         | The order is saved in the database.<br>The app uses REST APIs.<br>The payment is stored in a table.      |
| 2 possible domain events | OrderCreated<br>PaymentCompleted<br>OrderAccepted<br>CourierAssigned<br>OrderDelivered<br>OrderCancelled |
| 1 external system        | External payment gateway, used to authorize and process online payments.                                 |

Esempio di domain concept: `Order`, `Restaurant`, `Delivery`.

---

## Esercizio 6 — Entity vs Value Object

Classifica ogni elemento come **Entity** o **Value Object** e spiega perché.

| Elemento         | Entity / Value Object | Motivazione |
| ---------------- | --------------------- | ----------- |
| Student          | Entity                |             |
| ExamBooking      | Value Object          |             |
| Money            | Value Object          |             |
| Address          | Entity                |             |
| ExamSession      | Value Object          |             |
| DateRange        | Value Object          |             |
| Grade            | Entity                |             |
| UniversityCourse | Entity                |             |

Regola da ricordare:

```text
Entity = ha identità nel tempo.
Value Object = è definito solo dai suoi valori.
```

---

## Esercizio 7 — Service, Repository, Factory

Per un sistema universitario di prenotazione esami, scegli se ogni responsabilità appartiene a:

- Entity;
    
- Value Object;
    
- Domain Service;
    
- Repository;
    
- Factory.
    

| Responsabilità                                                                                           | Tipo DDD       | Motivazione |
| -------------------------------------------------------------------------------------------------------- | -------------- | ----------- |
| Salvare e recuperare le prenotazioni dal database                                                        | Repository     |             |
| Creare una prenotazione valida con tutti i campi iniziali                                                | Factory        |             |
| Verificare se uno studente può prenotare un esame considerando tasse, propedeuticità e posti disponibili | Domain Service |             |
| Rappresentare il voto 28/30                                                                              | Value Object   |             |
| Identificare uno studente tramite matricola                                                              | Entity         |             |

---

## Esercizio 8 — Aggregate e Aggregate Root

Considera il dominio:

```text
Order
OrderLine
Product
Customer
Payment
Delivery
```

Rispondi:

1. Quale potrebbe essere un aggregate?
    
2. Quale potrebbe essere l’aggregate root?
    
3. Quali oggetti devono essere modificati solo passando dall’aggregate root?
    
4. Quale invariante deve proteggere l’aggregate?
    

Esempio di invariante:

```text
An order cannot be confirmed if it has no order lines.
```

Scrivine almeno **3**.

---

## Esercizio 9 — Ubiquitous Language

Per un’app universitaria, crea un piccolo **Ubiquitous Language**.

Compila la tabella:

|Term in the domain|Meaning|Example in code or requirement|
|---|---|---|
|Exam Session|||
|Booking|||
|Career|||
|Fee|||
|Certificate|||
|Passed Exam|||

Poi rispondi:

> Perché in DDD è importante usare lo stesso linguaggio tra sviluppatori e domain experts?

---

## Esercizio 10 — Layered Architecture in DDD

Classifica ogni elemento nel layer corretto:

- User Interface;
    
- Application;
    
- Domain;
    
- Infrastructure.
    

|Elemento|Layer|Motivazione|
|---|---|---|
|Schermata “Book Exam”|||
|Use case “BookExamApplicationService”|||
|Regola: “uno studente non può prenotare due volte lo stesso esame”|||
|Repository che salva le prenotazioni su database|||
|Classe `ExamBooking`|||
|Controller REST `/bookings`|||
|Invio email di conferma tramite servizio esterno|||

Domanda finale:

> Perché il domain layer non dovrebbe dipendere dal database?

---

## Esercizio 11 — Smart UI o DDD?

Per ogni progetto scegli se useresti **Smart UI** oppure **Model-Driven Design / DDD**.

|Progetto|Smart UI / DDD|Motivazione|
|---|---|---|
|Piccolo prototipo per raccogliere risposte a un questionario|||
|Sistema bancario con regole complesse sui prestiti|||
|CRUD admin panel con poche regole di business|||
|Piattaforma di shipping con cargo, voyage, route, overbooking policy|||
|App temporanea per evento universitario di un giorno|||

---

## Esercizio 12 — Knowledge-rich model

Hai questo metodo:

```text
makeBooking(cargo, voyage)
```

Dentro il metodo è nascosta questa regola:

```text
The system accepts cargo until 110% of the voyage capacity,
because some bookings may be cancelled.
```

Rispondi:

1. Perché questo modello è debole dal punto di vista DDD?
    
2. Quale concetto di dominio potresti introdurre?
    
3. Come migliora il modello?
    
4. Scrivi una possibile frase da esame usando il termine **knowledge-rich model**.
    

---

# Esercizio integrato BDD + DDD

## Esercizio 13 — Dal requisito al modello di dominio

User story:

```text
As a customer,
I want to place a food order,
so that I can receive food at home.
```

### Parte A — BDD

Scrivi **4 acceptance criteria**:

1. ordine creato con successo;
    
2. ristorante chiuso;
    
3. pagamento fallito;
    
4. indirizzo fuori zona di consegna.
    

### Parte B — DDD

Identifica:

|Elemento|Risposta|
|---|---|
|Entities||
|Value Objects||
|Domain Services||
|Aggregates||
|Aggregate Root||
|Repositories||
|Domain Events||

### Parte C — Domain Events

Scrivi almeno 3 domain events, ad esempio:

```text
OrderCreated
PaymentAuthorized
DeliveryAssigned
```

Per ciascuno spiega quando viene generato.

---

# Esercizio 14 — Domanda orale da esame

Rispondi in massimo 10 righe:

> Explain the relationship between BDD and DDD.

Nella risposta devi usare questi termini:

- user story;
    
- acceptance criteria;
    
- domain model;
    
- ubiquitous language;
    
- business rules;
    
- shared understanding.
    

---

# Esercizio 15 — Mini caso completo

Una piattaforma universitaria permette agli studenti di:

- prenotare esami;
    
- pagare tasse;
    
- visualizzare la carriera;
    
- scaricare certificati;
    
- ricevere notifiche.
    

Devi produrre:

1. 3 user stories;
    
2. 2 acceptance criteria per ogni user story;
    
3. 5 domain concepts;
    
4. 2 entities;
    
5. 2 value objects;
    
6. 1 domain service;
    
7. 1 aggregate;
    
8. 1 repository;
    
9. 2 domain events;
    
10. una breve spiegazione del perché DDD è utile in questo dominio.
    

---

![](../images/Pasted%20image%2020260621161638.png)

# Exercise 1

The product owner is the one that decide the business layer and which features should be included on the software, he have the business-value control. 

Scum Master is responsible to keep the team focuses on the tasks and his goal is to facilitate the Team work and delete external impediments.

Team is a group of 4-9 people which are self organized where they develop, test and deploy the increment

# Exercise 2 - Sprint Planning

**Chosen Sprint Goal**
Enable users to initiate a movie night by creating a group and searching for movies

**Possible sprint Backlog with tasks**
- **Login**
	- Task 1: Design the UI for the Login and Sign-up screens
	- Task 2: Develop the backend auth API
	- Task 3: Implement error handling for incorrect credentials
- **Search Movies**
	- Task 1: Set up the movie api with the backend
	- Task 2: Create the search bar and movie results listing UI components
	- Task 3: Integrate the frontend with a movie database API
	- Task 4: Implement filtering logic for genres and release years
- **Create a group**
	- Task 1: Design the create group input form UI
	- Task 2: Develop backend logic to generate unique group IDs and save them to the database
	- Task 4: Create a notification and landing page for a new group

**Why tasks should be estimated and updated daily:**

Because doing it allow the team to make estiamations which help the team understand how much work they can realistically commit in a single sprint. 

**Why update daily?**
Daily updates ensure every team member knows what is finished, what is in progress and what is planned next.

# Exercise 3 - User stories and acceptance criteria

As a user i want to search movies and add them on the watchlist so that i can save my film to know which i have to see

As a group of friends we want to make a movie night so that we can decide the movie to see on the movie night

As a student i want to swap films so that the algorithm build useful recommendations.

**Acceptance Criteria**

**Generating a Join Link**
- Given: i am on the create group section
- When: The system processes the request to start a new session
- Then: The app must generate a unique invitation link and display it on the screen for the user to copy/share

**Joining a movie night**

Given: A user has received a unique invitation link from a friend
When: The user clicks on that link
Then: The app should automatically add the user to the correct movie night group and show them the waiting for friends or lobby screen.

