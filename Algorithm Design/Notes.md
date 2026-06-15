# **NP and Computational Intractability**

We'll see the **Reductions**, as part of the algorithm design patterns. And we'll cover **NP-completeness** as algorithm design anti-patterns

## **8.1 Polynomial-Time Reductions**

We are going to classify problems according to computational requirements. 
**Q.** Which problems will we be able to solve in pratice? *Those with polynomial-time algorithms*

| Yes                    | Probably No    |
| ---------------------- | -------------- |
| Shortest path          | Longest path   |
| Matching               | 3D-matching    |
| Min cut                | Max cut        |
| 2-SAT                  | 3-SAT          |
| Planar 4-color         | Planar 3-color |
| Bipartite vertex cover | Vertex cover   |
| Primality testing      | Factoring      |
### **Polynomial-Time Reduction**

A polynomial-time reduction compares the difficulty of two problems.

We say that problem polynomially reduces to problem , written $X \leq_p Y.$

**Reduction**. Problem $X$ **polynomial reduces** to problem $Y$ if arbitrary instances of problem $X$ can be solved using:

1. a polynomial number of normal computational steps;
    
2. a polynomial number of calls to a black-box algorithm, or oracle, that solves .
    

The intuition is:

> If I can solve efficiently, and I can transform or use to solve efficiently, then is no harder than .

This gives three main uses.

**Reduction.**


**Purpose**. Classify problems according to relative difficulty.

**Design algorithms**. If $X \leq_p Y$ and $Y$ can be solved in polynomial-time, then $X$ *can also be solved in polynomial time*.

**Establish intractability**. If $X \leq_p Y$ and $X$ cannot be solved in polynomial-time, then $Y$ cannot be solved in polynomial time.

**Establish equivalence**. If $X \leq_p Y$ and $Y \leq_p X$, we use notation $X =_p Y$.

### **Reduction by simple equivalence**



**INDEPENDENT SET**: Given a graph $G = (V, E)$ and an integer $k$, is there a subset of vertices $S \subseteq V$ such that $|S| \geq k$, and for each edge at most one of its endpoints is in $S$?

Ex. Is there an independent set of size $\geq 6$? Yes.
Ex. Is there an independent set of size $\geq 7$? No.

![](../Pasted%20image%2020260508152947.png |300)



**VERTEX COVER**: Given a graph $G = (V, E)$ and an integer $k$, is there a subset of vertices $S \subseteq V$ such that $|S| \leq k$, and for each edge, at least one of its endpoints is in $S$?

Ex. Is there a vertex cover of size $\leq 4$? Yes.
Ex. Is there a vertex cover of size $\leq 3$? No.

**Vertex Cover and Independent Set**

**claim**.$\text{VERTEX-COVER} \equiv_{p} \text{INDEPENDENT-SET}$ 

### Pf.

Sia $G = (V, E)$ un grafo. Dimostriamo che $S$ è un **Independent Set** $\iff V \setminus S$ è un **Vertex Cover**.

- $(\Rightarrow)$ Se $S$ è un **Independent Set**, allora per ogni arco $(u, v) \in E$ non possono esserci entrambi i nodi in $S$. Quindi almeno uno tra $u$ o $v$ deve essere in $V \setminus S$, rendendo $V \setminus S$ un **Vertex Cover**.
    
- $(\Leftarrow)$ Se $V \setminus S$ è un **Vertex Cover**, allora ogni arco $(u, v) \in E$ ha almeno un estremo in $V \setminus S$. Di conseguenza, non esiste alcun arco che abbia entrambi gli estremi in $S$, rendendo $S$ un **Independent Set**.

---
Il **Set Cover** è un problema in cui hai:

- un insieme di elementi da coprire, chiamato **universo** (U);
    
- una collezione di sottoinsiemi ($S_1, S_2, \dots, S_m$), ognuno dei quali copre alcuni elementi di (U);
    
- un numero (k).
    

La domanda è:

> Posso scegliere al massimo (k) sottoinsiemi in modo che, unendoli, coprano tutto (U)?

Formalmente:


$$
S_{i_1} \cup S_{i_2} \cup \dots \cup S_{i_k} = U  
$$

con al massimo (k) insiemi scelti.

Nelle slide viene fatto l’esempio dei software: hai un insieme (U) di funzionalità che vuoi avere, e ogni software (S_i) fornisce alcune funzionalità. Vuoi ottenere tutte le funzionalità usando il minor numero possibile di software.

### Esempio semplice

Supponiamo:


$$
U = {1,2,3,4,5,6,7}  
$$


e abbiamo questi sottoinsiemi:


$S_1 = {3,7}$  
$S_2 = {3,4,5,6}$  
$S_3 = {1}$  
$S_4 = {2,4}$  
$S_5 = {5}$  
$S_6 = {1,2,6,7}$  

Se (k = 2), ci chiediamo:

> Esistono 2 insiemi che coprono tutti gli elementi da 1 a 7?

Sì. Possiamo scegliere:


$S_2 = {3,4,5,6}$  


e

 
$S_6 = {1,2,6,7}$  


La loro unione è:

  
$S_2 \cup S_6 = {1,2,3,4,5,6,7}$  


quindi coprono tutto (U).

### Intuizione

Il nome “Set Cover” significa proprio:

> coprire tutti gli elementi usando pochi insiemi.

“Cover” non vuol dire coprire fisicamente, ma fare in modo che ogni elemento dell’universo compaia in almeno uno degli insiemi scelti.

### Perché è importante nella lezione?

Perché Set Cover è un problema molto generale. Infatti, nelle slide viene mostrato che **Vertex Cover si riduce a Set Cover**:


$$
\text{VERTEX-COVER} \leq_P \text{SET-COVER}  
$$


L’idea è questa:

- in Vertex Cover vuoi coprire tutti gli archi scegliendo vertici;
    
- in Set Cover vuoi coprire tutti gli elementi scegliendo insiemi.
    

Quindi trasformi ogni **arco** in un elemento dell’universo (U), e ogni **vertice** in un insieme che contiene gli archi incidenti a quel vertice.

In pratica:

  
$$
U = E  
$$


cioè l’universo è l’insieme degli archi.

Per ogni vertice (v), crei:

 
$$
S_v = {e \in E : e \text{ è incidente a } v}  
$$


Scegliere un insieme (S_v) equivale a scegliere il vertice (v). Se scegli insiemi che coprono tutti gli archi, stai scegliendo vertici che toccano tutti gli archi: esattamente un vertex cover.

**Quindi Set Cover è almeno difficile quanto Vertex Cover.**

![](../Pasted%20image%2020260508154731.png)

---

# Riduzioni tramite Gadget

Le **riduzioni tramite gadget** sono riduzioni in cui trasformiamo un problema in un altro costruendo dei "pezzi" artificiali della nuova istanza, chiamati _gadget_. Un gadget è una piccola struttura progettata apposta per simulare un vincolo del problema originale.

**In pratica:**

Prendo un problema $X$, per esempio **3-SAT**, e costruisco un'istanza di un problema $Y$, per esempio **Independent Set**, usando piccoli blocchi che obbligano la soluzione di $Y$ a comportarsi come una soluzione di $X$.

Le slide li presentano come una delle strategie base di riduzione, insieme alla semplice equivalenza e alla riduzione da caso speciale a caso generale.

---

## Intuizione semplice

Immagina di voler tradurre una formula logica in un grafo. La formula ha vincoli del tipo:

$$x_1 \lor \neg x_2 \lor x_3$$

cioè: _almeno uno di questi tre letterali deve essere vero_.

Il problema è: un grafo non "capisce" variabili vere o false. Allora costruisci un **gadget**, cioè un pezzo di grafo, che forza lo stesso comportamento.

Per esempio nella riduzione:

$$\text{3-SAT} \leq_P \text{INDEPENDENT-SET}$$

ogni clausola diventa un triangolo di tre vertici, uno per ogni letterale. Il triangolo è un gadget: siccome in un Independent Set non puoi prendere due vertici adiacenti, da quel triangolo puoi scegliere al massimo un vertice. Quindi il triangolo simula il vincolo: _scegli un letterale dalla clausola_.

Poi si aggiungono archi tra letterali contraddittori, tipo $x$ e $\neg x$. Anche questi archi sono parte del gadget globale, perché impediscono di scegliere contemporaneamente due scelte logicamente incompatibili. Le slide descrivono proprio questa costruzione: tre vertici per clausola, triangolo nella clausola, e archi tra un letterale e le sue negazioni.

---

## Perché si chiamano gadget?

Perché sono "meccanismi" costruiti ad hoc. Non sono parti naturali del problema originale, ma strumenti che inseriamo nella nuova istanza per far rispettare certe regole.

Un gadget può servire a rappresentare:

- Una variabile
    
- Una clausola
    
- Una scelta tra vero/falso
    
- Un vincolo "almeno uno"
    
- Un vincolo "non entrambi"
    
- Un passaggio obbligato in un cammino
    
- Una scelta di colore in un grafo
    

---

## Esempio: 3-SAT $\to$ Independent Set

Supponiamo di avere:

$$C_1 = (x_1 \lor \neg x_2 \lor x_3)$$

Creo tre vertici:

$$x_1, \neg x_2, x_3$$

e li collego a triangolo. Questo significa: nell'Independent Set posso prenderne **al massimo uno**.

Faccio questo per ogni clausola. Se la formula ha $k$ clausole, chiedo un Independent Set di grandezza $k$. A quel punto, per avere $k$ vertici, devo sceglierne **esattamente uno** da ogni clausola.

Poi aggiungo archi tra contraddizioni:

$$x_i \leftrightarrow \neg x_i$$

Così non posso scegliere contemporaneamente un letterale e la sua negazione.

Alla fine:

$$\Phi \text{ è soddisfacibile}$$

se e solo se:

$$G \text{ ha un independent set di dimensione } k$$

Questa è una riduzione tramite gadget perché il grafo è costruito con piccoli pezzi che simulano la logica della formula.

---

## Schema mentale da ricordare

Quando vedi una riduzione tramite gadget, chiediti sempre:

- **Cosa rappresenta il gadget?** Variabile, clausola, scelta, vincolo?
    
- **Quale comportamento forza?** Per esempio: "scegli esattamente uno", "non scegliere entrambi", "almeno uno deve essere vero".
    
- **Perché la soluzione del nuovo problema corrisponde alla soluzione del vecchio?** Devi dimostrare entrambe le direzioni:
    
    $$X \text{ ha soluzione} \implies Y \text{ ha soluzione}$$
    
    e
    
    $$Y \text{ ha soluzione} \implies X \text{ ha soluzione}$$
    

> **Detto terra terra:** una riduzione tramite gadget è una traduzione intelligente. Costruisci pezzi del nuovo problema che si comportano come i vincoli del problema originale.

---
Il problema del **Ciclo Hamiltoniano (HAM-CYCLE)** è un altro pilastro fondamentale della teoria della complessità. È il "padre" del famoso Problema del Commesso Viaggiatore (TSP).

Ecco la spiegazione di come funziona, seguita da una delle riduzioni più eleganti dell'informatica: trasformare un problema con le frecce (diretto) in uno senza frecce (non diretto).

---

### 1. Cos'è il Ciclo Hamiltoniano?

Immagina una mappa di città (i _nodi_) collegate da strade (gli _archi_).

Un **Ciclo Hamiltoniano** è un percorso che obbedisce a due regole ferree:

1. **Visita ogni singola città esattamente una volta.** (Non puoi saltarne nessuna, non puoi ripassare due volte per la stessa).
    
2. **Torna al punto di partenza** (formando, appunto, un ciclo chiuso).
    

Esistono due varianti di questo problema:

- **HAM-CYCLE (Non Diretto):** Le strade sono a doppio senso. Se c'è una strada tra A e B, puoi andare da A a B o da B ad A.
    
- **DIR-HAM-CYCLE (Diretto):** Le strade sono a senso unico (vengono disegnate con delle frecce). Puoi andare da A a B solo se la freccia punta verso B.
    

Entrambi i problemi sono NP-Completi. Ma come facciamo a dimostrarlo?

---

### 2. La Riduzione: $DIR\text{-}HAM\text{-}CYCLE \leq_p HAM\text{-}CYCLE$

Il nostro obiettivo è dimostrare che se hai una "scatola magica" (un algoritmo) in grado di risolvere il problema _senza frecce_ (HAM-CYCLE), puoi usarla per risolvere anche il problema _con le frecce_ (DIR-HAM-CYCLE).

Per farlo, dobbiamo inventare un **"Traduttore" (la riduzione)**. Dobbiamo prendere un grafo con strade a senso unico e trasformarlo in un grafo con strade a doppio senso, **senza però permettere alle auto di andare contromano!**

Come si fa a simulare un senso unico usando solo strade a doppio senso? Si usa un trucco geniale chiamato **Node Splitting (Sdoppiamento dei Nodi)**.

#### Il "Gadget" dei 3 Nodi

Prendiamo il nostro grafo diretto originale. Per ogni singolo nodo $u$ (es. la città di Roma), nel nuovo grafo non diretto creiamo **3 nodi separati**, messi in fila:

1. $u_{in}$ (La porta di ingresso)
    
2. $u_{mid}$ (Il centro della città)
    
3. $u_{out}$ (La porta di uscita)
    

Colleghiamo questi tre nodi internamente con strade a doppio senso:

**$u_{in}$ --- $u_{mid}$ --- $u_{out}$**

_Perché questo è geniale?_ Guarda il nodo $u_{mid}$. È collegato **solo** a $u_{in}$ e $u_{out}$. Poiché un Ciclo Hamiltoniano _deve_ visitare tutti i nodi esattamente una volta, quando entra in questa città, l'algoritmo è costretto ad attraversare i nodi in sequenza: o fa $in \rightarrow mid \rightarrow out$, oppure fa $out \rightarrow mid \rightarrow in$. Non ha altre scelte. Abbiamo appena creato un "tubo"!

#### Le Regole di Traduzione

Ora che abbiamo sdoppiato le città, colleghiamo le strade esterne:

- Se nel grafo originale c'era una freccia (senso unico) dal nodo $u$ al nodo $v$ ($u \rightarrow v$)...
    
- Nel nuovo grafo disegniamo una strada a doppio senso che collega la **porta di uscita di $u$** alla **porta di ingresso di $v$**: **$u_{out}$ --- $v_{in}$**.
    

#### Perché la Riduzione funziona? (La Dimostrazione)

Se diamo questo nuovo grafo enorme (con 3 volte i nodi originali) al nostro risolutore di HAM-CYCLE, cercherà un ciclo chiuso.

A causa di come abbiamo collegato le porte di uscita con quelle di ingresso, l'unico modo per completare il ciclo senza rimanere bloccati è attraversare ogni triade nel senso $in \rightarrow mid \rightarrow out$, per poi saltare al nodo $in$ della città successiva.

Abbiamo magicamente forzato un grafo senza frecce a comportarsi esattamente come se le avesse! Se il risolutore trova un ciclo in questo nuovo grafo, ci basta leggere la sequenza delle città per avere la soluzione esatta per il grafo diretto originale.

Per visualizzare questa trasformazione e capire perché il nodo "mid" costringe la direzione, ho creato questo strumento interattivo. Prova a trasformare il grafo!

![](../Pasted%20image%2020260508160710.png)
![](../Pasted%20image%2020260508160734.png)


---
### **Numerical Problems**
 
 I **Problemi Numerici** formano una categoria a sé stante nella teoria della complessità.

La loro caratteristica principale è che l'input non è fatto di nodi o archi, ma di **numeri interi codificati in binario**. Questo significa che la "dimensione" del problema può crescere in modo esponenziale molto rapidamente rispetto ai dati di partenza.

Le tue slide presentano tre problemi numerici fondamentali e mostrano come siano tutti collegati tra loro. Eccoli spiegati in modo semplice.

### 1. Il Capostipite: SUBSET-SUM (Somma di Sottoinsiemi)

Come abbiamo visto poco fa con il trucco dello "scontrino", questo è il problema da cui derivano tutti gli altri problemi numerici complessi.

- **Il Problema:** Ti vengono dati dei numeri interi naturali ($w_1, w_2, \dots, w_n$) e un numero bersaglio $W$. Esiste un sottoinsieme di questi numeri che, sommati tra loro, dia _esattamente_ $W$?
    
- **Esempio:** Hai i numeri {1, 4, 16, 64, 256, 1040, 1041, 1093, 1284, 1344} e vuoi raggiungere $W = 3754$. La risposta è sì (1 + 16 + 64 + 256 + 1040 + 1093 + 1284 = 3754).
    
- **La Difficoltà:** Non puoi semplicemente prendere i numeri più grandi, devi provare combinazioni precise. È il classico problema dello zaino (Knapsack) nella sua forma più pura.
    

---

### 2. PARTITION (La Bilancia Perfetta)

Dato che il Subset Sum è NP-Completo, il professore lo usa per dimostrare che un altro problema simile è altrettanto difficile: il problema della Partizione.

- **Il Problema:** Hai un mucchio di numeri naturali ($v_1, \dots, v_m$). Puoi dividerli in due gruppi separati in modo che la somma del Gruppo A sia _identica_ alla somma del Gruppo B?
    

**La Riduzione ($SUBSET\text{-}SUM \le_p PARTITION$):** Come trasformi il problema "trova una somma $W$" nel problema "dividi tutto a metà"? Con un trucco geniale che usa dei "pesi fittizi" per truccare la bilancia. Se la somma di tutti i tuoi numeri originali è $\Sigma$, aggiungi al mucchio due nuovi blocchi giganteschi:

1. Un blocco che pesa $v_{n+1} = 2\Sigma - W$.
    
2. Un blocco che pesa $v_{n+2} = \Sigma + W$.
    

Questi due blocchi sono talmente grandi che non potranno mai stare sullo stesso piatto della bilancia (altrimenti peserebbe troppo). Devono per forza separarsi. Per far sì che la bilancia torni in perfetto equilibrio, il piatto che ha ricevuto il blocco più leggero avrà un "buco" che misura _esattamente_ $W$. L'unico modo per pareggiare i conti è riempire quel buco con una combinazione dei tuoi numeri originali che dia esattamente $W$ (risolvendo di fatto il Subset Sum!).

---

### 3. SCHEDULE-RELEASE-TIMES (Il Tetris del Tempo)

I problemi numerici non servono solo a fare addizioni, ma sono alla base di tutti i software di pianificazione (come assegnare i turni o ottimizzare i server).

- **Il Problema:** Hai $n$ lavori (jobs). Ognuno richiede un tempo di esecuzione $t_i$, non può iniziare prima di un certo orario (release time $r_i$) e deve finire entro una certa scadenza (deadline $d_i$). Puoi programmarli tutti su una singola macchina senza farli accavallare e senza interruzioni?
    

**La Riduzione ($SUBSET\text{-}SUM \le_p SCHEDULE\text{-}RELEASE\text{-}TIMES$):** Questa riduzione trasforma il calcolo matematico in un incastro temporale.

1. I numeri del tuo Subset Sum ($w_1, \dots, w_n$) diventano lavori che durano esattamente quel numero di ore ($t_i = w_i$). Possono iniziare quando vogliono ($r_i = 0$) e finire quando vogliono ($d_i$ è enorme).
    
2. **La Trappola:** Crei un lavoro "Dittatore" (Job 0) che dura 1 ora ($t_0 = 1$). Questo lavoro _deve_ iniziare esattamente all'ora $W$ e finire all'ora $W+1$.
    

Questo Job 0 spacca la tua giornata lavorativa in due blocchi: prima di $W$ e dopo $W+1$. Se riesci a incastrare i lavori rimanenti in modo che non ci sia nemmeno un minuto vuoto prima che inizi il Job 0, significa che hai trovato un gruppo di lavori la cui durata somma _esattamente_ $W$!

Per farti capire quanto sia intuitivo questo incastro temporale, ho preparato una timeline interattiva della riduzione.



Le slide mostrano in modo eccellente come tutti questi problemi numerici non siano altro che lo stesso "gioco a incastri" visto da angolazioni diverse. Quale di queste due trasformazioni (la bilancia di Partition o la timeline di Scheduling) ti affascina di più e vorresti approfondire matematicamente?

---

**SUBSET-SUM**. Given natural numbers $w_{1}, \dots, w_{n}$ and an integer W, is there a subset that adds up to exactly W?

Ex: { 1, 4, 16, 64, 256, 1040, 1041, 1093, 1284, 1344 }, $W=3754.$
Yes. $1+16+64+256+1040+1093+1284=3754.$
**Remark**. With arithmetic problems, input integers are encoded in binary. Polynomial reduction must be polynomial in binary encoding.

**Claim**. $3-SAT \leq_{P} SUBSET-SUM.$
Pf. Given an instance $\Phi$ of 3-SAT, we construct an instance of SUBSET-SUM that has solution iff $\Phi$ is satisfiable.


![](../Pasted%20image%2020260509161338.png)

# Riduzione da 3-SAT a Subset Sum

Questa è la riduzione classica per dimostrare che **Subset Sum** è NP-hard. L'idea è costruire dei numeri in modo che la scelta di un sottoinsieme corrisponda a una valutazione booleana che soddisfa tutte le clausole.

## 1. Definizione dell'Istanza
Consideriamo un esempio con $n=3$ variabili e $k=3$ clausole:
*   $C_1 = \bar{x} \lor y \lor z$
*   $C_2 = x \lor \bar{y} \lor z$
*   $C_3 = \bar{x} \lor \bar{y} \lor \bar{z}$

La riduzione crea numeri con $n + k = 6$ cifre. Ogni numero è diviso in due parti:
1.  **Parte Variabili:** (prime $n$ cifre) per forzare la scelta di un valore di verità.
2.  **Parte Clausole:** (ultime $k$ cifre) per verificare la soddisfazione delle clausole.

### Obiettivo
Vogliamo che la formula $\Phi$ sia soddisfacibile se e solo se esiste un sottoinsieme che somma al target $W$:
$$W = 111,444$$
Questo significa ottenere $1$ per ogni colonna variabile e $4$ per ogni colonna clausola.

---

## 2. Costruzione dei Numeri

### I Numeri delle Variabili
Per ogni variabile $x_i$, creiamo due numeri: uno per il letterale positivo ($x_i$) e uno per il letterale negato ($\bar{x}_i$). 

| Letterale | $x$ | $y$ | $z$ | $C_1$ | $C_2$ | $C_3$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $x$ | 1 | 0 | 0 | 0 | 1 | 0 |
| $\bar{x}$ | 1 | 0 | 0 | 1 | 0 | 1 |
| $y$ | 0 | 1 | 0 | 1 | 0 | 0 |
| $\bar{y}$ | 0 | 1 | 0 | 0 | 1 | 1 |
| $z$ | 0 | 0 | 1 | 1 | 1 | 0 |
| $\bar{z}$ | 0 | 0 | 1 | 0 | 0 | 1 |

> [!IMPORTANT]
> Nelle colonne variabili ($x, y, z$), il target è **1**. Poiché sia $x$ che $\bar{x}$ hanno un 1 in quella posizione, siamo obbligati a sceglierne **esattamente uno**. Questa scelta definisce l'assegnazione di verità.

### I Numeri "Dummy" (Riempitivi)
Per ogni clausola, aggiungiamo due numeri per permettere alla somma di raggiungere il target 4, indipendentemente dal fatto che la clausola sia soddisfatta da 1, 2 o 3 letterali.

| Dummy | $x$ | $y$ | $z$ | $C_1$ | $C_2$ | $C_3$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $D_{1,a}$ | 0 | 0 | 0 | 1 | 0 | 0 |
| $D_{1,b}$ | 0 | 0 | 0 | 2 | 0 | 0 |
| $D_{2,a}$ | 0 | 0 | 0 | 0 | 1 | 0 |
| $D_{2,b}$ | 0 | 0 | 0 | 0 | 2 | 0 |
| $D_{3,a}$ | 0 | 0 | 0 | 0 | 0 | 1 |
| $D_{3,b}$ | 0 | 0 | 0 | 0 | 0 | 2 |

---

## 3. Perché il Target delle Clausole è 4?

I dummy di una clausola (valori 1 e 2) possono sommare al massimo $1 + 2 = 3$. 
Se una clausola è soddisfatta, riceve dai letterali scelti un contributo di 1, 2 o 3. 

| Letterali veri | Dummy da scegliere | Somma Finale |
| :---: | :---: | :---: |
| **1** | 1 e 2 | $1 + 3 = 4$ |
| **2** | 2 | $2 + 2 = 4$ |
| **3** | 1 | $3 + 1 = 4$ |
| **0** | Max 3 dai dummy | **Impossibile arrivare a 4** |

**Conclusione:** Una clausola può raggiungere il valore 4 solo se almeno un letterale al suo interno è vero.

---

## 4. Assenza di Riporti (No Carries)
La riduzione funziona perché la somma si comporta in modo "indipendente" per ogni colonna:
*   **Colonne variabili:** Somma massima $= 1+1=2$ (ma il target è 1).
*   **Colonne clausole:** Somma massima $= 3 \text{ (letterali)} + 1 + 2 \text{ (dummy)} = 6$.

Poiché nessuna colonna supera mai il valore 9, **non ci sono riporti**. Questo garantisce che la soddisfazione di una clausola non influenzi "matematicamente" la colonna vicina.

---

## 5. Sintesi della Dimostrazione
*   **Soddisfacibilità $\implies$ Subset Sum:** Se la formula è vera, scegliamo i letterali corrispondenti. Le colonne variabili sommano a 1. Ogni clausola ha somma $\ge 1$, quindi usiamo i dummy per arrivare a 4.
*   **Subset Sum $\implies$ Soddisfacibilità:** Se esiste un sottoinsieme, la parte "variabili" del target (111) ci costringe a una scelta coerente di letterali. La parte "clausole" (444) ci garantisce che ogni clausola sia soddisfatta da almeno un letterale, poiché i dummy non bastano da soli a raggiungere 4.

$$\Phi \text{ è soddisfacibile} \iff \exists S' \subseteq S \text{ tale che } \sum_{a \in S'} a = W$$

---


![](../Pasted%20image%2020260509163450.png)

# Riduzione: SUBSET-SUM $\leq_P$ Scheduling con Release Times

Questa riduzione mostra come trasformare un'istanza del problema **Subset Sum** in un'istanza di **Scheduling** (con $r_i$ e $d_i$). L'idea centrale è l'uso di un "job barriera" per forzare la partizione del tempo.

---

## 1. Definizione dei Problemi

### SUBSET-SUM (Partenza)
Dati $n$ numeri e un target $W$:
*   **Input:** $w_1, w_2, \dots, w_n$ e $W$.
*   **Domanda:** $\exists A \subseteq \{1, \dots, n\}$ tale che $\sum_{i \in A} w_i = W$?

### Scheduling con Release Times (Arrivo)
Ogni job $i$ è definito da una tripla $(t_i, r_i, d_i)$:
*   $t_i$: Processing time (durata).
*   $r_i$: Release time (inizio minimo).
*   $d_i$: Deadline (fine massima).
*   **Vincolo:** I job non possono essere interrotti (no preemption) e la macchina esegue un job alla volta.

---

## 2. La Costruzione della Riduzione

Sia $S = \sum_{j=1}^{n} w_j$ la somma totale di tutti i pesi. Costruiamo $n+1$ job:

### I Job Variabile ($i = 1 \dots n$)
Per ogni peso $w_i$, creiamo un job corrispondente:
*   $t_i = w_i$
*   $r_i = 0$
*   $d_i = S + 1$

### Il Job Speciale (Job 0)
Creiamo un job "muro" che agisce come barriera temporale:
*   $t_0 = 1$
*   $r_0 = W$
*   $d_0 = W + 1$

> [!NOTE] Analisi dello Spazio
> Il **Job 0** è forzato a occupare l'intervallo $[W, W+1]$ perché la sua durata è pari alla finestra temporale disponibile ($d_0 - r_0 = 1$).

---

## 3. Visualizzazione della Timeline

La presenza del Job 0 divide il tempo totale $[0, S+1]$ in due slot distinti:

| Slot | Intervallo | Lunghezza | Destinazione |
| :--- | :--- | :--- | :--- |
| **Prima** | $[0, W]$ | $W$ | Sottoinsieme $A$ |
| **Muro** | $[W, W+1]$ | $1$ | **Job 0** |
| **Dopo** | $[W+1, S+1]$ | $S-W$ | Sottoinsieme complementare |

**Schema grafico:**
`0 [--- Spazio W ---] W [Job 0] W+1 [--- Spazio S-W ---] S+1`

---

## 4. Dimostrazione della Correttezza

### Direzione ($\implies$): Se SUBSET-SUM ha soluzione
Se esiste un insieme $A$ tale che $\sum_{i \in A} w_i = W$:
1.  Scheduliamo i job in $A$ nell'intervallo $[0, W]$. Poiché la loro durata totale è esattamente $W$, riempiono lo spazio perfettamente.
2.  Il **Job 0** occupa $[W, W+1]$.
3.  Tutti i restanti job (che sommano a $S-W$) vengono schedulati in $[W+1, S+1]$.
4.  **Risultato:** Esiste una schedulazione valida senza sovrapposizioni.

### Direzione ($\impliedby$): Se esiste lo Scheduling
Se esiste una schedulazione valida:
1.  Il **Job 0** deve trovarsi necessariamente in $[W, W+1]$.
2.  Poiché la durata totale di tutti i job è $S+1$ e il tempo totale disponibile è $S+1$, **non possono esserci buchi** (idle time).
3.  Sia $A$ l'insieme dei job eseguiti prima del Job 0.
4.  Poiché devono riempire esattamente l'intervallo $[0, W]$, la loro somma deve essere:
    $$\sum_{i \in A} t_i = W \implies \sum_{i \in A} w_i = W$$
5.  **Risultato:** $A$ è una soluzione per SUBSET-SUM.

---

## 5. Complessità e Conclusione
La riduzione è **polinomiale** poiché:
*   Creiamo $n+1$ job partendo da $n$ numeri.
*   Il calcolo di $S$ e la definizione dei parametri $(t, r, d)$ richiedono tempo lineare rispetto all'input.

$$ \text{SUBSET-SUM} \leq_P \text{SCHEDULE-RELEASE-TIMES} $$

Questo dimostra che il problema di scheduling con release times e deadline è **NP-completo**.

---
