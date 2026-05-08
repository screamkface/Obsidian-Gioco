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