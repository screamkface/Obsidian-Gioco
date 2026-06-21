
# Esercizio Scrum — Stile Esame

Un team sta sviluppando una **mobile app universitaria** che permette agli studenti di gestire esami, tasse e carriera.

Il Product Owner ha definito questo **Product Backlog**:

|ID|Product Backlog Item|Story Points|Priority|
|---|---|--:|--:|
|PBI-1|As a student, I want to login, so that I can access my personal area|3|High|
|PBI-2|As a student, I want to search available exams, so that I can choose an exam session|5|High|
|PBI-3|As a student, I want to book an exam, so that I can attend the exam session|8|High|
|PBI-4|As a student, I want to cancel an exam booking, so that I can free my place|5|Medium|
|PBI-5|As a student, I want to view my career, so that I can see passed exams and grades|8|Medium|
|PBI-6|As a student, I want to pay university fees, so that I can be regularly enrolled|13|High|
|PBI-7|As a student, I want to download a certificate, so that I can use it for administrative purposes|5|Low|

The team velocity from the last three sprints was:

|Sprint|Completed Story Points|
|---|--:|
|Sprint 1|18|
|Sprint 2|20|
|Sprint 3|22|

---

## Domande

### 1. Velocity

Calcola la **average velocity** del team.

```text
Average velocity = (18 + 20 + 22) / 3 = 20
```

Poi spiega in una frase come il team può usare questo valore nello Sprint Planning.

<font color="#00b050">The team can use the average velocity as a forecast during Sprint Planning to select a realistic amount of Product Backlog Items for the next sprint.</font>

---

### 2. Sprint Planning

Il team deve pianificare il prossimo sprint.

Usando la velocity media, scegli quali PBI inserire nello **Sprint Backlog**.

Attenzione: devi rispettare priorità e capacità del team.

Compila:

| Selected PBI                   | Story Points | Reason                                     |
| ------------------------------ | -----------: | ------------------------------------------ |
| PBI 1 -- Login                 |            3 | It is necessary to acces the personal area |
| PBI 2 --Search Available exams |            5 | It is required before booking an exam      |
| PBI 3 -- Bookj an Exam         |            8 | It is the mainbusiness value of the sprint |

Totale story points scelti:

```text
Total = 16
```

<font color="#2DC26B">With a total of 16 points we are under the average, so if a developer is on holiday or teams has less day or others impediments the real capacity would be even less of 20. </font>

---

### 3. Sprint Goal

Scrivi uno **Sprint Goal** coerente con i PBI che hai scelto.

Formato suggerito:

```text
The goal of this sprint is to allow students to accces the app, search exam sessions and book an exam
```

---

### 4. User Story + Acceptance Criteria

Scegli una user story tra quelle selezionate e scrivi **due acceptance criteria** in formato:

```text
Given that a student is logged in and the exam session is available,
When the student selects the exam session and confirm booking,
Then the system register the student for the exam session.
```


```text
Given that the exam session is full or the booking deadline has passed,
When the student tries to book the exam,
Then the system prevents the booking and displays an error message.
```
---

### 5. Sprint Review vs Sprint Retrospective

Spiega la differenza tra:

| Event                | Focus                 | Participants                            | Output                                                         |
| -------------------- | --------------------- | --------------------------------------- | -------------------------------------------------------------- |
| Sprint Review        | **Product Increment** | Scrum team, Product Owner, stakeholders | Feedback on the increment and possible Product Backlog updates |
| Sprint Retrospective | **Team Process**      | Scrum Team                              | improvement actions for the next sprint                        |

---

### 6. Burndown Chart

Durante lo sprint, il burndown chart rimane quasi piatto per i primi 6 giorni, poi scende bruscamente negli ultimi 2 giorni.

Spiega **due possibili interpretazioni** di questo comportamento.


> During the flat period the work was not progressing, since it decreased too quickly the sprint may have been **understimated** or too **easy**.

---

### 7. Scrum Roles

Nel progetto succede questo:

> Il professore/cliente continua a chiedere nuove feature durante lo sprint, anche se il team ha già scelto lo Sprint Backlog.

Rispondi:

1. Chi deve proteggere il team da queste interruzioni?
	1. The Scrum Master is responsible to remove impediments and keep the team focuses on the chosen tasks
    
2. Cosa dovrebbe fare il Product Owner con le nuove richieste?
	1. Evaluate if the new requests are really needed and in case avoid them
    
3. Perché non è corretto modificare continuamente lo Sprint Backlog durante lo sprint?
	1. Becuase the 

---

### 8. Domanda teorica finale

Spiega perché Scrum non deve essere visto come:

```text
Sprint = analysis → design → coding → testing
```

ma come un processo iterativo in cui ogni sprint produce un incremento potenzialmente rilasciabile.

>Because SCRUM is useful when requirements are not completely stable and when the team needs frequent feedback. After defined the **sprint backlog**, **sprint planning** and the **sprint backlog** the team know where to focus and think only about to the current planned sprint so that they can present the increment as planned into the **Sprint Review**. After that the team join on a **Sprint Retrospective** reflecting about areas for improvement in the process and then go back to **Product Backlog**. 

---

