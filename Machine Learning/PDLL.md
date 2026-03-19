
# 🧠 Algoritmo DPLL: Analisi dello "Scheletro" Logico

L'immagine del codice mostra come un computer trasforma la logica proposizionale in un processo sistematico di **tentativi ed errori**.

---

## 1. La Fase di Obbligo: `UnitPropagation`

La prima istruzione operativa nel riquadro è:

$$(\psi, \mathcal{I}) := \text{UNITPROPAGATION}(\phi, \mathcal{I}')$$

> [!ABSTRACT] **Regola 1: La Scelta Forzata**
> In questa fase, il computer cerca le **clausole unitarie** (composte da un solo letterale).
> * Se trova $\{ \lambda \}$, imposta $\lambda = \text{Vero}$.
> * Se trova $\{ \neg \lambda \}$, imposta $\lambda = \text{Falso}$.
> 
> Qui non c'è scelta: la logica è "forzata" per evitare contraddizioni immediate.

---

## 2. La Fase di Scelta: `Splitting Rule`

Quando non ci sono più clausole unitarie ma la formula non è ancora risolta, il programma arriva alla riga:

`else select a literal` $\lambda \in C \in \psi$

Questo è il **bivio decisionale** (Regola 2). Il computer gestisce il "Vero" e il "Not" (Falso) in modo sequenziale:

### 🟢 Il Primo Tentativo: "Vero"

$$\text{if DPLL}(\psi \cup \{\{\lambda\}\}, \mathcal{I}) = \dots$$

Il codice aggiunge la clausola unitaria $\{\lambda\}$ (forzando $\lambda$ a **Vero**) e richiama se stesso.
* **Significato:** "Ipotizziamo che $\lambda$ sia Vero e vediamo se la formula si risolve."

### 🔴 Il Piano B: "Not" (Backtracking)

$$\text{else return DPLL}(\psi \cup \{\{\neg \lambda\}\}, \mathcal{I})$$

Se il primo `if` fallisce (restituendo un errore o una clausola vuota $\emptyset$), scatta l'alternativa.
* **Significato:** "Se l'ipotesi $\lambda = \text{Vero}$ ha portato a un disastro, allora l'unica strada rimasta è provare con $\neg \lambda$ (ovvero $\lambda = \text{Falso}$)."

---

## 📋 Sintesi delle Decisioni

| Situazione | Azione | Logica |
| :--- | :--- | :--- |
| **Clausola Unitaria** | $\{s\}$ oppure $\{\neg q\}$ | **Decisione Forzata:** Segui il segno scritto. |
| **Bivio (Split)** | Scegli $\lambda$ | **Decisione Arbitraria:** Prova prima $\lambda$, poi $\neg \lambda$. |
| **Contraddizione** | $\emptyset$ (Clausola vuota) | **Backtrack:** Torna all'ultimo bivio e cambia strada. |

---