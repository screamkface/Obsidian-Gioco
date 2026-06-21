
Questi appunti coprono la definizione del problema **CLIQUE** e due delle sue riduzioni più importanti: quella verso l'**Independent Set** (basata sulla complementarità) e quella proveniente da **3-SAT** (la riduzione originale di Karp).

Ecco gli appunti riordinati, corretti e completati con una struttura logica.

---

## 1. Il Problema CLIQUE: Definizione

Il problema CLIQUE consiste nel trovare, all'interno di un grafo, un gruppo di nodi in cui ogni nodo è connesso direttamente a tutti gli altri.

- **Input:** Un grafo non orientato $G = (V, E)$ e un intero $k > 0$.
    
- **Domanda:** Esiste un sottoinsieme di vertici $S \subseteq V$ tale che $|S| [cite_start]\geq k$ e per ogni coppia di nodi $u, v \in S$, esiste l'arco $(u, v) \in E$?.
    
    - In termini semplici: $S$ è un sottografo completo.
        

---

## 2. Riduzione: CLIQUE $\leq_P$ INDEPENDENT SET

Questa riduzione dimostra che i due problemi sono speculari. Se sai risolvere l'uno, sai risolvere l'altro invertendo il grafo.

**La logica della riduzione:**

1. **Costruzione del Grafo Complemento ($\bar{G}$):** Dato un grafo $G$, si crea un grafo $G'$ che ha gli stessi nodi, ma gli archi sono invertiti: se un arco $(u, v)$ esiste in $G$, non deve esistere in $G'$, e viceversa.
    
2. **L'algoritmo:**
    
    - Prendi il Grafo $A$ (istanza di Clique).
        
    - **Inverti gli archi:** Crea il Grafo $B$ (complemento di $A$).
        
    - **Esecuzione:** Dai il Grafo $B$ in pasto a un risolutore per Independent Set cercando un insieme di dimensione $k$.
        
3. **Conclusione:** Se il risolutore trova un Independent Set in $B$, quegli stessi identici nodi formano una **Clique** nel grafo originale $A$.
    

---

## 3. Riduzione: 3-SAT $\leq_P$ CLIQUE (Karp, 1972)

Questa riduzione dimostra che CLIQUE è NP-completo trasformando una formula logica in un grafo.

### Costruzione del Grafo

Data una formula 3-SAT con $k$ clausole (ogni clausola ha 3 letterali):

- **Nodi:** Si crea un nodo per ogni letterale di ogni clausola. Se ci sono $k$ clausole, il grafo avrà $3k$ nodi.
    
- **Archi (Regole di compatibilità):** Si collegano due nodi $Z_i$ e $Z_j$ se e solo se:
    
    1. Appartengono a **clausole diverse** ($i \neq a$ nei tuoi appunti).
        
    2. I letterali **non sono contraddittori** (es. non colleghiamo mai $x_1$ con $\neg x_1$).
        

### Dimostrazione (La logica "iff")

- **($\Rightarrow$) Se la formula è soddisfacibile:** Esiste un'assegnazione di verità $x^*$ tale che ogni clausola ha almeno un letterale vero. Scegliendo uno di questi letterali "veri" per ogni clausola, otteniamo $k$ nodi che sono tutti collegati tra loro, formando una **Clique di dimensione $k$**.
    
- **($\Leftarrow$) Se esiste una Clique $S$ di dimensione $k$:** Poiché non ci sono archi tra nodi della stessa clausola, la clique deve contenere esattamente un nodo per ogni clausola. Poiché non ci sono archi tra letterali opposti, possiamo impostare questi letterali a TRUE senza creare contraddizioni, soddisfacendo la formula.
    

---

### Note di correzione sui tuoi appunti:

- **Nomenclatura:** Nei tuoi appunti avevi scritto $S \subseteq U$. Solitamente si usa $V$ (Vertici).
    
- **Indipendent Set:** Hai scritto "invert of the edges". Matematicamente si dice "Grafo Complemento" $\bar{G} = (V, \bar{E})$ dove $\bar{E} = \{(u,v) \mid u,v \in V, u \neq v, (u,v) \notin E\}$.
    
- **Forma dei nodi:** $Z_j = X_j / \bar{x}_j$ indica che il nodo può rappresentare la variabile o la sua negazione, ma la clique garantisce che la scelta sia coerente.

---

