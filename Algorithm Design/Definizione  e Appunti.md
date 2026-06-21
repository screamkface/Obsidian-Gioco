
# Definizioni Formali

## Problema Decisionale

Un **problema decisionale** è formalizzato come un linguaggio $X$ definito su un alfabeto $\Sigma$:
$$X \subseteq \Sigma^*$$

### Definizioni Chiave
*   **Istanza:** Una stringa $s \in \Sigma^*$.
*   **Algoritmo di Decisione:** Un algoritmo $A$ **decide** il linguaggio $X$ se e solo se:
$$A(s) = \text{YES} \iff s \in X$$

---

### Esempio: Hamiltonian Cycle
Il problema decisionale **Hamiltonian Cycle** consiste nel determinare se un grafo dato in input contiene un ciclo Hamiltoniano (ovvero un ciclo che visita ogni vertice esattamente una volta).

---
## Tempo Polinomiale

Un algoritmo si definisce **polinomiale** se esiste un polinomio $p$ tale che, per ogni input $s$, l'algoritmo termina in al più:

$$p(|s|)$$

dove $|s|$ rappresenta la **dimensione dell'input** (ovvero la lunghezza della stringa).

---

## La Classe P

La classe **P** (*Polynomial Time*) raccoglie tutti i problemi decisionali che possono essere risolti efficientemente.

*   **Definizione:** Un problema decisionale appartiene alla classe **P** se esiste un algoritmo polinomiale in grado di risolverlo.
*   **Caratteristica:** Rappresenta l'insieme dei problemi considerati "trattabili" o computazionalmente facili da risolvere su una macchina deterministica.

---
## Certificatore

Un **certificatore** per un problema $X$ è un algoritmo $C(s,t)$, dove:
*   $s$ è l'**istanza** del problema;
*   $t$ è il **certificato** (o *witness* / prova).

Formalmente, l'algoritmo definisce il problema in questo modo:
$$s \in X \iff \exists t \text{ tale che } C(s,t) = \text{YES}$$

### Relazione con la classe NP
Per poter parlare della classe **NP**, devono essere rispettati due vincoli fondamentali:
1.  Il certificatore $C(s,t)$ deve terminare in **tempo polinomiale**.
2.  Il certificato $t$ deve avere una **lunghezza polinomiale** rispetto alla dimensione dell'input $|s|$.

> [!info] Nota
> Il certificatore *non trova* da solo la soluzione del problema, ma si limita a **controllare** (o verificare) la correttezza di una prova $t$ proposta.

---

### Esempio: Hamiltonian Cycle
Nel caso del problema *Hamiltonian Cycle*:
*   **Certificato ($t$):** Una permutazione (sequenza) dei vertici del grafo.
*   **Controllo di $C(s,t)$:** Il certificatore verifica che:
    1.  Ogni vertice del grafo compaia esattamente una volta nella sequenza.
    2.  Ogni coppia di vertici consecutivi nella sequenza (incluso il primo con l'ultimo) sia effettivamente collegata da un arco nel grafo originale.

---
## La Classe NP

La classe **NP** è definita formalmente come l'insieme dei problemi decisionali per i quali esiste un certificatore efficiente:

$$ \text{NP} = \{ X : X \text{ ha un certificatore polinomiale} \} $$

In termini pratici, un problema appartiene a **NP** se, quando l'istanza ha come risposta YES, è possibile **verificare** una soluzione candidata in tempo polinomiale.

> [!warning] Attenzione al nome
> **NP non significa "non polinomiale"**. 
> L'acronimo sta per **Nondeterministic Polynomial-time** (tempo polinomiale non deterministico), il che significa esattamente che la sua soluzione è *verificabile* in tempo polinomiale.

---
## Riduzione Polinomiale

Dati due problemi decisionali $A$ e $B$, diciamo che $A$ si riduce polinomialmente a $B$, indicato con la notazione:

$$A \le_p B$$

se esiste una funzione $f$ calcolabile in tempo polinomiale tale che, per ogni istanza $x$ di $A$:

$$x \in A \iff f(x) \in B$$

In termini pratici, questo significa che posso trasformare ogni istanza di $A$ in un'istanza di $B$ in modo efficiente, preservando la risposta YES/NO.

**Proprietà fondamentale:** Se $A \le_p B$, possiamo affermare che $B$ è *almeno tanto difficile quanto* $A$.

> [!info] Tipologie di riduzione
> Le slide fanno una distinzione tra due tipi di riduzione:
> *   **Riduzione di Cook:** Permette chiamate multiple a un "oracolo" per risolvere il problema.
> *   **Trasformazione di Karp:** Consiste in una singola trasformazione dell'input dall'istanza del problema di partenza a quella di arrivo. Negli esercizi si utilizza quasi esclusivamente questa.

---

## NP-hard

Un problema $Y$ è definito **NP-hard** (o NP-arduo) se *ogni* problema appartenente alla classe NP si riduce polinomialmente a esso:

$$\forall X \in \text{NP}, \quad X \le_p Y$$

> [!warning] Attenzione
> Un problema NP-hard:
> 1.  **Non deve per forza appartenere a NP.**
> 2.  **Non deve per forza essere un problema decisionale** (può essere, ad esempio, un problema di ottimizzazione).
> 
> Come sottolineato a lezione, il termine "hard" indica un livello minimo di difficoltà, ma non implica necessariamente l'appartenenza alla classe NP.


---
## NP-complete

Un problema $Y$ è definito **NP-completo** se soddisfa contemporaneamente due condizioni:
1.  **Appartenenza:** $Y \in \text{NP}$
2.  **Durezza:** $Y$ è **NP-hard**

In termini formali:
$$Y \in \text{NP} \quad \text{e} \quad \forall X \in \text{NP}, \ X \le_p Y$$

> [!tip] Ricetta da esame: Dimostrare la NP-completezza
> Per dimostrare che un nuovo problema $Y$ è NP-completo, segui questo schema:
> 1.  **Mostra che $Y \in \text{NP}$:** Definisci un certificatore polinomiale e la forma del certificato.
> 2.  **Scegli un problema noto:** Seleziona un problema $X$ di cui è già nota la NP-completezza (es. SAT, 3-SAT, Vertex Cover).
> 3.  **Riduci:** Dimostra che $X \le_p Y$. 
> 
> Poiché la riduzione è **transitiva**, se ogni problema in NP si riduce a $X$ e $X$ si riduce a $Y$, allora ogni problema in NP si riduce a $Y$.

---

## Riduzione: $3\text{-SAT} \le_p \text{Independent Set}$

Questa riduzione viene utilizzata per dimostrare che il problema **Independent Set** è NP-completo.

### Definizione dei Problemi

*   **3-SAT:**
    *   **Input:** Una formula in forma normale congiuntiva (CNF) in cui ogni clausola contiene esattamente 3 letterali.
    *   **Domanda:** Esiste un assegnamento di valori di verità alle variabili tale da soddisfare tutte le clausole?

*   **Independent Set:**
    *   **Input:** Un grafo $G = (V, E)$ e un intero $k$.
    *   **Domanda:** Esiste un sottoinsieme di vertici $S \subseteq V$ tale che $|S| \ge k$ e per ogni coppia di vertici in $S$ non esiste un arco che li congiunge?

### Idea della Riduzione (Karp)
Per ogni clausola della formula 3-SAT, si crea un "gadget" (solitamente un triangolo di vertici nel grafo) e si collegano i letterali tra loro per impedire assegnamenti inconsistenti. Se la formula ha $m$ clausole, si pone $k = m$. Un Independent Set di dimensione $m$ esisterà se e solo se è possibile scegliere un letterale "vero" per ogni clausola senza creare conflitti.

## Costruzione della Riduzione: $3\text{-SAT} \le_p \text{Independent Set}$

Data una formula 3-SAT $\Phi = C_1 \land C_2 \land \dots \land C_m$ in forma normale congiuntiva con $m$ clausole, costruiamo un'istanza $(G, k)$ del problema Independent Set.

### 1. Costruzione del Grafo $G$
*   **Vertici:** Per ogni clausola $C_j$, si creano **3 vertici**, uno per ciascun letterale contenuto nella clausola. Se la formula ha $m$ clausole, il grafo avrà $3m$ vertici.
*   **Archi intra-clausola (Triangoli):** All'interno di ogni clausola, si collegano i 3 vertici tra loro formando un **triangolo**. 
    *   *Scopo:* Questo vincola un *independent set* a poter scegliere al massimo un solo letterale (vertice) per ogni clausola.
*   **Archi di contraddizione:** Per ogni coppia di letterali contraddittori (es. $x$ e $\neg x$), si aggiunge un arco tra i rispettivi vertici, anche se appartengono a clausole diverse.
    *   *Scopo:* Impedisce di selezionare contemporaneamente una variabile e la sua negazione.
*   **Parametro $k$:** Si pone $k = m$.

---

### 2. Dimostrazione di Correttezza

#### $\Rightarrow$ (Soddisfacibilità $\to$ Independent Set)
Supponiamo che $\Phi$ sia **soddisfacibile**.
1. Esiste un assegnamento di verità che rende vera almeno un letterale in ogni clausola $C_j$.
2. Per ogni clausola, scegliamo esattamente un letterale vero e inseriamo il vertice corrispondente nell'insieme $S$.
3. Risultato:
    *   **Dimensione:** Poiché abbiamo scelto un vertice per ognuna delle $m$ clausole, $|S| = m = k$.
    *   **Indipendenza:** 
        *   Non ci sono archi "intra-clausola" perché abbiamo scelto un solo vertice per ogni triangolo.
        *   Non ci sono archi "di contraddizione" perché un assegnamento consistente non può rendere veri contemporaneamente $x$ e $\neg x$.
    *   **Conclusione:** $S$ è un *independent set* di dimensione $k$.

#### $\Leftarrow$ (Independent Set $\to$ Soddisfacibilità)
Supponiamo che il grafo $G$ abbia un **independent set** $S$ di dimensione $m$.
1. Poiché il grafo è composto da $m$ triangoli disgiunti e in ogni triangolo è possibile prelevare al massimo un vertice, per avere $|S| = m$ dobbiamo aver prelevato **esattamente un vertice da ogni triangolo**.
2. Poniamo a **VERO** i letterali corrispondenti ai vertici presenti in $S$.
3. Risultato:
    *   **Consistenza:** L'assegnamento è consistente. Se $S$ contenesse sia $x$ che $\neg x$, esisterebbe un arco di contraddizione tra loro, il che è impossibile per la definizione di *independent set*.
    *   **Soddisfacibilità:** Poiché ogni clausola (triangolo) ha un vertice in $S$, ogni clausola ha almeno un letterale vero.
    *   **Conclusione:** La formula $\Phi$ è soddisfatta.

---

### 3. Complessità e Rilevanza
*   **Complessità:** La costruzione richiede la creazione di $3m$ vertici e un numero di archi al più quadratico rispetto al numero di letterali. La trasformazione avviene quindi in **tempo polinomiale**.
*   **Importanza:** Questa riduzione è un pilastro della teoria della NP-completezza, stabilendo il legame tra la logica booleana (SAT) e i problemi combinatori su grafi.
---
## 3. Independent Set $\leftrightarrow$ Vertex Cover

### Problemi
*   **Vertex Cover:** Dato $G=(V,E)$ e $k$, esiste un sottoinsieme $C \subseteq V$ con $|C| \le k$ tale che ogni arco abbia almeno un estremo in $C$?
*   **Independent Set:** Dato $G=(V,E)$ e $k$, esiste un sottoinsieme $S \subseteq V$ con $|S| \ge k$ tale che nessun arco abbia entrambi gli estremi in $S$?

### Idea Chiave
Per ogni grafo:
$$S \text{ è independent set} \iff V \setminus S \text{ è vertex cover}$$

### Prova

#### $\Rightarrow$ (IS $\to$ VC)
Supponi che $S$ sia un independent set.
Prendi un arco qualsiasi $(u,v) \in E$. Poiché $S$ è indipendente, non può contenere entrambi $u$ e $v$. Quindi almeno uno tra $u$ e $v$ sta in $V \setminus S$.
Dunque $V \setminus S$ copre ogni arco, quindi è un vertex cover.

#### $\Leftarrow$ (VC $\to$ IS)
Supponi che $C = V \setminus S$ sia un vertex cover.
Se esistessero $u,v \in S$ con $(u,v) \in E$, allora quell'arco non avrebbe nessun estremo in $C$, contraddicendo il fatto che $C$ è un vertex cover.
Quindi nessun arco collega due vertici di $S$, cioè $S$ è un independent set.

### Riduzioni sui Parametri
*   **Da Independent Set a Vertex Cover:** $(G,k) \mapsto (G, |V|-k)$
*   **Da Vertex Cover a Independent Set:** $(G,k) \mapsto (G, |V|-k)$

Infatti:
$$G \text{ ha IS di size } \ge k \iff G \text{ ha VC di size } \le |V|-k$$
La riduzione è immediatamente polinomiale.

---

## 4. Vertex Cover $\le_p$ Set Cover

### Problemi
*   **Set Cover:** Dato un universo $U$, una collezione di sottoinsiemi $S_1,\dots,S_m \subseteq U$, e un intero $k$, esistono al più $k$ insiemi la cui unione copre tutto $U$?

> [!info] Nota
> Le slide definiscono Set Cover esattamente come il problema di coprire un universo con al più $k$ insiemi.

### Costruzione
Data un'istanza di Vertex Cover $G=(V,E)$ e $k$, costruisci un'istanza di Set Cover:
*   **Universo:** $U = E$ (cioè ogni elemento dell'universo è un arco del grafo).
*   **Insiemi:** Per ogni vertice $v \in V$, crea un insieme $S_v = \{e \in E : e \text{ è incidente a } v\}$.
*   **Parametro:** Mantieni lo stesso $k$.

### Prova

#### $\Rightarrow$
Supponi che $G$ abbia un vertex cover $C \subseteq V$ con $|C| \le k$.
Scegli nella Set Cover gli insiemi: $\{S_v : v \in C\}$.
Ogni arco $e=(u,v)$ è coperto da almeno un vertice di $C$, quindi $e \in S_u$ oppure $e \in S_v$ per qualche vertice scelto. Dunque tutti gli elementi di $U=E$ sono coperti.

#### $\Leftarrow$
Supponi che la Set Cover abbia una soluzione con al più $k$ insiemi: $S_{v_1},\dots,S_{v_r}$ con $r \le k$.
Prendi i vertici corrispondenti: $C=\{v_1,\dots,v_r\}$.
Poiché gli insiemi coprono tutto $U=E$, ogni arco è incidente ad almeno uno dei vertici scelti. Quindi $C$ è un vertex cover.

La costruzione crea un insieme per vertice e un elemento per arco, quindi è polinomiale.

---

## 5. Vertex Cover $\le_p$ Dominating Set

### Problemi
*   **Dominating Set:** Dato un grafo $G=(V,E)$ e $k$, esiste $D \subseteq V$, $|D| \le k$, tale che ogni vertice $v \in V$ sia in $D$ oppure sia adiacente a un vertice di $D$?

### Costruzione
Parto da Vertex Cover: $G=(V,E)$ e $k$.
Assumiamo, senza perdita di generalità, che non ci siano vertici isolati (non influenzano VC).
Costruisci $G'$ così:
1.  Mantieni tutti i vertici originali $V$ e gli archi originali $E$.
2.  Per ogni arco $e=(u,v) \in E$, aggiungi un nuovo vertice $x_e$.
3.  Collega $x_e$ a $u$ e a $v$.

Quindi i nuovi vertici sono:
$$V' = V \cup \{x_e : e \in E\}$$
Il parametro resta $k$.

### Prova

#### $\Rightarrow$
Supponi che $C \subseteq V$ sia un vertex cover di $G$,Ecco il testo ripulito dai difetti di formattazione, strutturato in modo gerarchico e pronto da inserire su Obsidian:

## 3. Independent Set $\leftrightarrow$ Vertex Cover

### Problemi
*   **Vertex Cover:** Dato $G=(V,E)$ e $k$, esiste $C \subseteq V$ con $|C| \le k$ tale che ogni arco abbia almeno un estremo in $C$?
*   **Independent Set:** Dato $G=(V,E)$ e $k$, esiste $S \subseteq V$ con $|S| \ge k$ tale che nessun arco abbia entrambi gli estremi in $S$?

> [!info] Idea chiave
> Per ogni grafo:
> $$S \text{ è independent set} \iff V \setminus S \text{ è vertex cover}$$

### Dimostrazione
#### $\Rightarrow$ (Independent Set $\to$ Vertex Cover)
Supponi che $S$ sia un independent set.
Prendi un arco qualsiasi $(u,v) \in E$. Poiché $S$ è indipendente, non può contenere entrambi $u$ e $v$. Quindi almeno uno tra $u$ e $v$ sta in $V \setminus S$.
Dunque $V \setminus S$ copre ogni arco, quindi è un vertex cover.

#### $\Leftarrow$ (Vertex Cover $\to$ Independent Set)
Supponi che $C = V \setminus S$ sia un vertex cover.
Se esistessero $u,v \in S$ con $(u,v) \in E$, allora quell'arco non avrebbe nessun estremo in $C$, contraddicendo il fatto che $C$ è vertex cover.
Quindi nessun arco collega due vertici di $S$, cioè $S$ è un independent set.

### Riduzioni sui parametri
*   **Da Independent Set a Vertex Cover:** $(G,k) \mapsto (G, |V|-k)$
*   **Da Vertex Cover a Independent Set:** $(G,k) \mapsto (G, |V|-k)$

Infatti:
$$G \text{ ha IS di size } \ge k \iff G \text{ ha VC di size } \le |V|-k$$
La riduzione è immediatamente polinomiale.

---

## 4. Vertex Cover $\le_p$ Set Cover

### Problemi
*   **Set Cover:** Dato un universo $U$, una collezione di sottoinsiemi $S_1, \dots, S_m \subseteq U$, e un intero $k$, esistono al più $k$ insiemi la cui unione copre tutto $U$?

### Costruzione
Data un'istanza di Vertex Cover $G=(V,E)$ e parametro $k$, costruisci un'istanza di Set Cover:
*   **Universo:** $U = E$ (ogni elemento dell'universo è un arco del grafo).
*   **Insiemi:** per ogni vertice $v \in V$, crea un insieme:
    $$S_v = \{e \in E : e \text{ è incidente a } v\}$$
*   **Parametro:** mantieni lo stesso $k$.

### Dimostrazione
#### $\Rightarrow$ 
Supponi che $G$ abbia un vertex cover $C \subseteq V$ con $|C| \le k$.
Scegli nella Set Cover gli insiemi: $\{S_v : v \in C\}$.
Ogni arco $e = (u,v)$ è coperto da almeno un vertice di $C$, quindi $e \in S_u$ oppure $e \in S_v$ per qualche vertice scelto. Dunque tutti gli elementi di $U = E$ sono coperti.

#### $\Leftarrow$
Supponi che la Set Cover abbia una soluzione con al più $k$ insiemi: $S_{v_1}, \dots, S_{v_r}$ con $r \le k$.
Prendi i vertici corrispondenti: $C = \{v_1, \dots, v_r\}$.
Poiché gli insiemi coprono tutto $U = E$, ogni arco è incidente ad almeno uno dei vertici scelti. Quindi $C$ è un vertex cover.
> La costruzione crea un insieme per vertice e un elemento per arco, quindi è polinomiale.

---

## 5. Vertex Cover $\le_p$ Dominating Set

### Problemi
*   **Dominating Set:** Dato un grafo $G=(V,E)$ e $k$, esiste $D \subseteq V$ con $|D| \le k$, tale che ogni vertice $v \in V$ sia in $D$ oppure sia adiacente a un vertice di $D$?

### Costruzione
Parto da Vertex Cover: $G=(V,E)$ e $k$.
Assumiamo (senza perdita di generalità) che non ci siano vertici isolati. Costruisci $G'$ così:
1.  Mantieni tutti i vertici e gli archi originali $V$ ed $E$.
2.  Per ogni arco $e = (u,v) \in E$, aggiungi un nuovo vertice $x_e$.
3.  Collega $x_e$ a $u$ e a $v$.

Quindi:
$$V' = V \cup \{x_e : e \in E\}$$
Il parametro resta $k$.

### Dimostrazione
#### $\Rightarrow$
Supponi che $C \subseteq V$ sia un vertex cover di $G$, con $|C| \le k$. Mostriamo che $C$ è dominating set in $G'$.
*   Ogni vertice nuovo $x_e$, con $e=(u,v)$, è adiacente a $u$ e $v$. Poiché $C$ copre $e$, almeno uno tra $u,v$ è in $C$. Quindi $x_e$ è dominato.
*   Ogni vertice originale $v \in V$:
    *   se $v \in C$, è dominato da sé stesso;
    *   se $v \notin C$, siccome non è isolato, ha almeno un arco incidente $(v,u)$. Poiché $C$ copre quell'arco e $v \notin C$, deve essere $u \in C$. Quindi $v$ è dominato.
Quindi $C$ domina tutto $G'$.

#### $\Leftarrow$
Supponi che $G'$ abbia un dominating set $D$ di size $\le k$. Vogliamo ottenere un vertex cover in $G$.
*   Se $D$ contiene vertici nuovi $x_e$, sostituiscili con uno dei due estremi dell'arco $e=(u,v)$, per esempio $u$. Questa sostituzione non aumenta la dimensione.
*   Dopo tutte le sostituzioni, otteniamo $D' \subseteq V$, con $|D'| \le |D| \le k$.
*   Considera un arco originale $e=(u,v)$. Nel grafo $G'$ esiste il vertice $x_e$, adiacente solo a $u$ e $v$ tra i vertici originali. Poiché $D' \subseteq V$ domina $x_e$, almeno uno tra $u,v$ deve stare in $D'$.
Quindi ogni arco originale è coperto da $D'$. Dunque $D'$ è un vertex cover.
> La costruzione aggiunge un vertice per arco, quindi è polinomiale.

---

## 6. Set Cover $\le_p$ EfficientRecruiting

### Problema EfficientRecruiting
Hai $n$ sport da coprire, $c$ candidati/counselor (ogni candidato è qualificato per un sottoinsieme di sport) e un intero $k$.
**Domanda:** è possibile scegliere al più $k$ candidati in modo che ogni sport abbia almeno un candidato qualificato?

### Costruzione da Set Cover
Data un'istanza $U = \{u_1, \dots, u_n\}$, $S_1, \dots, S_m$ e $k$. Costruisci EfficientRecruiting:
*   Uno sport per ogni elemento $u_i \in U$.
*   Un candidato $c_j$ per ogni insieme $S_j$.
*   Il candidato $c_j$ è qualificato esattamente per gli sport corrispondenti agli elementi in $S_j$.
*   Stesso parametro $k$.

### Dimostrazione
#### $\Rightarrow$
Se esiste una Set Cover con insiemi $S_{j_1}, \dots, S_{j_r}$ con $r \le k$, scegli i candidati $c_{j_1}, \dots, c_{j_r}$. Ogni elemento dell'universo è coperto, quindi ogni sport è coperto da almeno un candidato.

#### $\Leftarrow$
Se esiste un recruiting con candidati $c_{j_1}, \dots, c_{j_r}$ con $r \le k$, scegli gli insiemi $S_{j_1}, \dots, S_{j_r}$. Ogni sport è coperto, quindi ogni elemento dell'universo è coperto.
> La trasformazione è lineare nella descrizione degli insiemi.

---

## 7. Vertex Cover / Set Cover $\le_p$ Strategic Advertising

### Problema
Dato un grafo orientato $G=(V,E)$, una collezione di percorsi $P_1, \dots, P_t$, e un intero $k$, scegliere al più $k$ vertici in modo che ogni percorso contenga almeno un vertice scelto.

### Riduzione da Vertex Cover
Data un'istanza $G=(V,E)$ e $k$. Costruisci Strategic Advertising:
*   Crea un vertice $v'$ per ogni $v \in V$.
*   Per ogni arco $e = (u,v) \in E$, crea un percorso $P_e = (u',v')$.
*   Il parametro resta $k$.

**Prova:**
*   $\Rightarrow$: Se $C \subseteq V$ è un VC con $|C| \le k$, scegli i vertici $C'$. Ogni arco $e=(u,v)$ ha almeno un estremo in $C$, quindi il percorso $P_e$ contiene almeno un vertice scelto.
*   $\Leftarrow$: Se esiste un insieme $A$ di al più $k$ vertici che interseca ogni percorso $P_e$, allora per ogni arco $e=(u,v)$, almeno uno tra $u'$ e $v'$ è in $A$. Prendendo i vertici originali ottieni un VC di size $\le k$.

### Riduzione da Set Cover
Data $U = \{u_1, \dots, u_n\}$, $S_1, \dots, S_m$ e $k$.
*   Crea un vertice $s_j$ per ogni insieme $S_j$.
*   Per ogni elemento $u_i$, crea un percorso $P_i$ che passa esattamente attraverso i vertici $s_j$ tali che $u_i \in S_j$.
*   Chiedi se esistono al più $k$ vertici che intersecano tutti i percorsi.

**Prova:**
Scegliere un vertice $s_j$ significa scegliere l'insieme $S_j$. Ogni percorso $P_i$ deve essere intersecato, quindi per ogni $u_i$ bisogna scegliere almeno un insieme che lo contiene.
$$\text{Set Cover YES} \iff \text{Strategic Advertising YES}$$

---

## 8. 3D-Matching $\le_p$ Subset Sum

### Problemi
*   **3D-Matching:** Dati $X,Y,Z$ con $|X|=|Y|=|Z|=n$, e $T \subseteq X \times Y \times Z$, esiste $M \subseteq T$ di $n$ triple tale che ogni elemento di $X \cup Y \cup Z$ compaia esattamente una volta?
*   **Subset Sum:** Dati numeri $w_1, \dots, w_m$ e target $W$, esiste un sottoinsieme che somma esattamente $W$?

### Costruzione
Siano $X = \{x_1, \dots, x_n\}$, $Y = \{y_1, \dots, y_n\}$, $Z = \{z_1, \dots, z_n\}$.
Per ogni tripla $t = (x_i, y_j, z_\ell) \in T$ crea un numero $w_t$ con $3n$ cifre in base $B = m+1$ (dove $m = |T|$):
*   una cifra $1$ nella posizione $i$, per $x_i$;
*   una cifra $1$ nella posizione $n+j$, per $y_j$;
*   una cifra $1$ nella posizione $2n+\ell$, per $z_\ell$;
*   tutte le altre cifre $0$.

Il target è $W = 111\dots 111$ (con $3n$ cifre tutte uguali a $1$).

### Dimostrazione
#### $\Rightarrow$
Se esiste un 3D-matching perfetto $M$, scegli i numeri $w_t$ corrispondenti alle triple $t \in M$. Poiché ogni elemento di $X \cup Y \cup Z$ compare esattamente una volta, in ogni colonna della somma compare esattamente un $1$. Quindi la somma è $111\dots 111 = W$.

#### $\Leftarrow$
Supponi che esista un sottoinsieme di numeri che somma $W$. Poiché non ci sono riporti (base $B = m+1$), ogni colonna deve sommare esattamente $1$. Questo significa che ogni elemento di $X \cup Y \cup Z$ compare esattamente in una delle triple scelte. Quindi le triple formano un 3D-matching perfetto.

---

## 9. Subset Sum $\le_p$ Scheduling con release/deadline

### Problema
Hai job $i$ con processing time $t_i$, release time $r_i$, e deadline $d_i$. Posso schedulare tutti i job su una macchina singola (non preemptive) dentro $[r_i, d_i]$?

### Costruzione
Data un'istanza Subset Sum $w_1, \dots, w_n$ e target $W$.
Sia $S = \sum_{i=1}^n w_i$. Crea $n+1$ job:
*   Per ogni $i = 1, \dots, n$: $t_i = w_i$, $r_i = 0$, $d_i = S+1$. (Possono stare ovunque in $[0, S+1]$).
*   Job speciale $0$: $t_0 = 1$, $r_0 = W$, $d_0 = W+1$. (Deve occupare esattamente lo slot $[W, W+1]$).

### Dimostrazione
#### $\Rightarrow$
Supponi esista $A \subseteq \{1, \dots, n\}$ tale che $\sum_{i \in A} w_i = W$.
Schedula i job in $A$ prima dello slot speciale (occupano $[0, W]$).
Schedula il job speciale in $[W, W+1]$.
Schedula gli altri job dopo $W+1$ (occupano $[W+1, S+1]$). Esiste una schedule valida.

#### $\Leftarrow$
Il job speciale occupa $[W, W+1]$. Gli altri job non possono sovrapporsi. I job messi prima di $W$ devono occupare una quantità di tempo pari a $W$ (non ci sono buchi liberi in $[0, S+1]$). Quindi formano un sottoinsieme di pesi che somma a $W$. Subset Sum è YES.

---

## 10. Hamiltonian Cycle $\le_p$ Partizione in due Hamiltonian Cycles

### Problema
Dato $G=(V,E)$, esiste una partizione $V = V_1 \dot{\cup} V_2$ tale che sia $G[V_1]$ sia $G[V_2]$ contengano un ciclo Hamiltoniano?

### Appartenenza a NP
Il certificato è la partizione $(V_1, V_2)$ più i due cicli. Si verifica in tempo polinomiale che:
*   $V_1 \cup V_2 = V$ e $V_1 \cap V_2 = \emptyset$.
*   Il primo ciclo visita tutti e soli i vertici di $V_1$.
*   Il secondo ciclo visita tutti e soli i vertici di $V_2$.

### Riduzione da Hamiltonian Cycle
Data un'istanza $H=(V_H, E_H)$ di Hamiltonian Cycle, costruisci:
$$G = H \dot{\cup} K_3$$
(Prendi $H$ e aggiungi una componente disgiunta fatta da un triangolo $K_3$).

### Dimostrazione
#### $\Rightarrow$
Se $H$ ha un ciclo Hamiltoniano, poni $V_1 = V_H$ e $V_2 = V(K_3)$.
$G[V_1]$ ha un ciclo per ipotesi. $G[V_2]$ è un triangolo, quindi lo ha.

#### $\Leftarrow$
Se $G$ ha tale partizione, poiché $H$ e $K_3$ sono disgiunte, i vertici di $K_3$ devono stare tutti nella stessa parte (altrimenti inducono un grafo disconnesso senza ciclo). L'altra parte contiene tutti i vertici di $H$, che quindi deve avere un ciclo Hamiltoniano.

---

## 11. Hamiltonian Cycle $\le_p$ TSP

### Costruzione
Data un'istanza $G=(V,E)$ con $|V|=n$.
Crea una città per ogni vertice. Definisci la distanza:
$$d(u,v) = \begin{cases} 1 & \text{se } (u,v) \in E, \\ 2 & \text{se } (u,v) \notin E. \end{cases}$$
Poni la soglia $D = n$.

### Dimostrazione
*   **$\Rightarrow$**: Se $G$ ha un ciclo Hamiltoniano, usa $n$ archi del grafo. Ogni arco costa $1$, quindi il tour TSP costa $n$.
*   **$\Leftarrow$**: Se esiste un tour TSP di costo $\le n$, usando $n$ archi che costano almeno $1$, ogni arco deve costare esattamente $1$. Quindi il tour usa solo archi originali di $G$ ed è un ciclo Hamiltoniano.

---

## 12. k-Coloring $\le_p$ Class Scheduling

### Problemi
*   **k-Coloring:** Dato $G=(V,E)$, colorare i vertici con $\le k$ colori senza vertici adiacenti dello stesso colore.
*   **Class Scheduling:** Date $n$ classi (ciascuna con time-slot $S_i$) e $k$ stanze, assegnarle senza sovrapposizioni.

### Costruzione
Da $G=(V,E)$ e $k$:
*   Crea una classe $C_v$ per ogni $v \in V$.
*   Per ogni arco $e = (u,v) \in E$, crea uno slot temporale speciale $t_e$.
*   $C_v$ usa gli slot: $S_v = \{t_e : e \text{ è incidente a } v\}$.
*   Stanze = $k$.

### Dimostrazione
*   **$\Rightarrow$**: Se $G$ è k-colorabile, assegna $C_v$ alla stanza "colore di $v$". Se $C_u, C_v$ hanno slot sovrapposti, condividono un arco $(u,v)$. In colorazione valida hanno colori diversi $\to$ stanze diverse.
*   **$\Leftarrow$**: Se esiste una schedule, colora $v$ col numero della stanza. Se $(u,v) \in E$, $C_u$ e $C_v$ condividono $t_e$, quindi non sono nella stessa stanza. I vertici hanno colori diversi.

---

## 13. Dominating Set $\le_p$ k-Center

### Costruzione
Da Dominating Set $G=(V,E), k$.
Costruisci uno spazio metrico sui punti $V$:
$$d(u,v) = \begin{cases} 0 & \text{se } u=v, \\ 1 & \text{se } (u,v) \in E, \\ 2 & \text{se } (u,v) \notin E. \end{cases}$$
(Soddisfa la disuguaglianza triangolare). Poni raggio $R = 1$.

### Dimostrazione
*   **$\Rightarrow$**: Se $D \subseteq V$ è dominating set ($|D| \le k$), scegli $D$ come centri. Ogni $v$ è in $D$ (distanza $0$) o adiacente a $D$ (distanza $1$).
*   **$\Leftarrow$**: Se $\exists k$ centri che coprono con raggio $1$, per ogni $v$ esiste un centro $c$ con $d(v,c) \le 1$. Quindi $v=c$ oppure $(v,c) \in E$. I centri formano un dominating set.

---

## 14. Clique $\le_p$ Largest Common Subgraph

### Costruzione
Da Clique $G=(V,E)$ e $k$.
Crea: $G_1 = G$ e $G_2 = K_k$ (grafo completo su $k$ vertici).
Poni parametro $K = \binom{k}{2}$.

### Dimostrazione
*   **$\Rightarrow$**: Se $G$ ha una clique $C$ di size $k$, il sottografo indotto è isomorfo a $K_k$ e ha $\binom{k}{2}$ archi. $G_1$ e $G_2$ hanno un sottografo comune con $\ge K$ archi.
*   **$\Leftarrow$**: Se $G_1$ e $G_2$ hanno un sottografo comune con $\ge \binom{k}{2}$ archi, dato che un sottografo di $K_k$ con quel numero di archi è esattamente $K_k$, $G$ contiene $K_k$, cioè una clique di size $k$.

---

## 15. Max-Cut NP-hard

### Riduzione da NAE-3SAT
Data formula NAE-3SAT con variabili $x_1, \dots, x_n$ e clausole $C_1, \dots, C_m$.
*   Per ogni $x_i$, crea vertici $x_i$ e $\neg x_i$. Aggiungi arco $(x_i, \neg x_i)$.
*   Per ogni clausola $C_j = (\ell_1, \ell_2, \ell_3)$, crea un triangolo tra i letterali: $(\ell_1, \ell_2), (\ell_2, \ell_3), (\ell_1, \ell_3)$.
*   Poni soglia tagli: $K = n + 2m$.

### Dimostrazione
*   **$\Rightarrow$**: Se NAE-3SAT è soddisfacibile, metti i veri da un lato e i falsi dall'altro. Ogni arco variabile è tagliato (contributo $n$). In ogni clausola i letterali non sono tutti uguali, quindi il triangolo è tagliato esattamente su 2 archi. Totale: $n+2m = K$.
*   **$\Leftarrow$**: Se esiste un taglio con $\ge K$ archi (massimo teorico), ogni arco variabile è tagliato (assegnamento consistente) e ogni triangolo contribuisce 2 (condizione NAE rispettata). La formula è soddisfacibile.

---

## 16. Max-Cut Randomizzato

### Grafo non diretto
Algoritmo: Per ogni vertice $v$, mettilo in $S$ con probabilità $1/2$.
Per ogni arco $e=(u,v)$:
$$\Pr[e \text{ tagliato}] = \Pr[u,v \text{ su lati diversi}] = \frac{1}{2}$$
Valore atteso:
$$\mathbb{E}[\text{cut}] = \sum_{e \in E} w_e \cdot \frac{1}{2} = \frac{1}{2} \sum_{e \in E} w_e$$
Poiché $\text{OPT} \le \sum_{e \in E} w_e$, allora $\mathbb{E}[\text{cut}] \ge \frac{1}{2} \text{OPT}$. È una 1/2-approssimazione.

### Grafo diretto
Se conta solo gli archi da $S$ a $T$:
$$\Pr[u \in S, v \in T] = \frac{1}{4}$$
$$\mathbb{E}[\text{cut}] = \frac{1}{4} \sum_{e} w_e \ge \frac{1}{4} \text{OPT}$$

---

## 17. Max3SAT Randomizzato 7/8

### Algoritmo
Per ogni variabile $x_i$, scegli $x_i = \text{true}$ con probabilità $1/2$.

### Analisi
Considera $C = (\ell_1 \lor \ell_2 \lor \ell_3)$. La clausola è falsa se e solo se tutti e 3 i letterali sono falsi.
$$\Pr[C \text{ falsa}] = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$$
$$\Pr[C \text{ soddisfatta}] = 1 - \frac{1}{8} = \frac{7}{8}$$
Per $m$ clausole (linearità aspettativa):
$$\mathbb{E}[\# \text{ clausole soddisfatte}] = \frac{7}{8} m \ge \frac{7}{8} \text{OPT}$$
È una 7/8-approssimazione in valore atteso.

---

## 18. Vertex Cover 2-approx

### Algoritmo
```text
C = ∅
M = ∅
while esiste un arco (u,v) non coperto:
    aggiungi u e v a C
    aggiungi (u,v) a M
    rimuovi tutti gli archi incidenti a u o v
return C
````

### Correttezza e Fattore 2

Gli archi scelti formano un matching massimale $M$. Alla fine non restano archi scoperti, quindi $C$ è un vertex cover.

Ogni vertex cover ottimo deve coprire gli archi in $M$, e non condividendo vertici: $\text{OPT} \ge |M|$.

L'algoritmo prende due estremi per ogni arco in $M$:

$$|C| = 2|M| \le 2\text{OPT}$$

Quindi è una 2-approssimazione.

---

## 19. Set Cover LP Rounding d-approx

### LP Relaxation per Weighted Set Cover

Minimizza costo totale scegliendo frazionalmente insiemi.

$$\min \sum_{j=1}^m c_j x_j$$

soggetto a:

$$\sum_{j: e_i \in S_j} x_j \ge 1 \quad \forall e_i \in U$$

$$0 \le x_j \le 1$$

Sia $x^*$ una soluzione ottima frazionaria e $d = \max_i |\{j : e_i \in S_j\}|$ (massima frequenza di un elemento).

### Rounding

Scegli tutti gli $S_j$ tali che $x_j^* \ge \frac{1}{d}$.

### Correttezza (Copertura)

L'elemento $e_i$ appare in al più $d$ insiemi. Se tutti questi avessero $x_j^* < \frac{1}{d}$, la loro somma sarebbe $< d \cdot \frac{1}{d} = 1$, contraddicendo il vincolo LP. Quindi almeno uno ha $x_j^* \ge \frac{1}{d}$ e $e_i$ è coperto.

### Prova del fattore $d$

Per ogni insieme scelto ($j \in A$), $x_j^* \ge \frac{1}{d} \implies 1 \le d \cdot x_j^*$.

$$\sum_{j \in A} c_j \le \sum_{j \in A} d c_j x_j^* \le d \sum_{j=1}^m c_j x_j^*$$

Poiché $LP^* \le \text{OPT}$:

$$\text{costo algoritmo} \le d \cdot LP^* \le d \cdot \text{OPT}$$

È una $d$-approssimazione.