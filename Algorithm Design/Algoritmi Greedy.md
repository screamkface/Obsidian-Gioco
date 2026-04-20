
### **Che cos'è un Algoritmo Greedy?**

Un algoritmo Greedy (o "goloso") costruisce una soluzione passo dopo passo, scegliendo sempre l'opzione **che sembra migliore in quel preciso momento** (ottimo locale), senza mai tornare sui propri passi, con la speranza che queste scelte portino alla soluzione migliore in assoluto (ottimo globale).

Perché un Greedy funzioni, il problema deve possedere due proprietà matematiche fondamentali:

- **Proprietà della scelta greedy:** Puoi fare la scelta localmente ottima senza dover considerare i sottoproblemi futuri.
    
- **Sottostruttura ottima:** La soluzione ottima al problema globale contiene le soluzioni ottime ai suoi sottoproblemi.
    

---

### **Il Metodo in 4 Step per Risolvere l'Esercizio**

#### **Step 1: Capire l'obiettivo e i vincoli**

Prima di scrivere qualsiasi cosa, devi avere chiaro cosa stai cercando di ottimizzare. Stai **minimizzando** il numero di camion? **Massimizzando** i profitti? Minimizzando il ritardo massimo? Identifica chiaramente l'input (es. un array di n lavori con scadenze) e l'output atteso.

#### **Step 2: Inventare la "Regola Golosa" (Criterio di Ordinamento)**

Quasi tutti gli algoritmi Greedy si basano sull'ordinare l'input secondo un criterio specifico e poi processarlo linearmente. Il tuo compito è trovare la metrica giusta. Prova a porti queste domande:

- Ha senso elaborare prima gli elementi più piccoli o più grandi?
    
- Ha senso elaborare prima quelli che finiscono prima? (Classico per i problemi di scheduling).
    
- Ha senso calcolare un rapporto? Ad esempio, $valore / peso$ (Classico per lo zaino frazionario o lavori con penalità).
    

> **Il trucco dell'ingegnere:** Se sei indeciso tra due criteri, prova a creare un piccolo controesempio (3 o 4 elementi) in cui uno dei due criteri fallisce. Se fallisce, scartalo.

#### **Step 3: Dimostrare la Correttezza (La parte che dà i punti)**

All'esame, dire "ho ordinato e funziona" non basta. Devi dimostrarlo formalmente. Esistono due tecniche standard che salvano la vita agli esami:

**Tecnica A: Greedy Stays Ahead (Il Greedy sta sempre avanti)**

Dimostri passo dopo passo che, a ogni iterazione, la soluzione che stai costruendo è almeno tanto buona (se non migliore) di qualsiasi altra soluzione ottima ipotetica.

- Confronti la tua soluzione $G = \{g_1, g_2, ..., g_k\}$ con una soluzione ottima generica $O = \{o_1, o_2, ..., o_m\}$.
    
- Dimostri per **induzione** che al passo $i$, la scelta $g_i$ è migliore o uguale a $o_i$.
    

**Tecnica B: Exchange Argument (Argomento di Scambio)**

Questa è la tecnica regina per i problemi di scheduling o ordinamento.

- Ipotizzi che esista una soluzione Ottima $O$ diversa dalla tua soluzione Greedy $G$.
    
- Dato che sono diverse, ci deve essere un punto in cui $O$ fa una scelta diversa da $G$ (un'inversione nell'ordinamento).
    
- Dimostri che "scambiando" gli elementi in $O$ per farli assomigliare alla scelta fatta in $G$, il costo della soluzione non peggiora (o addirittura migliora).
    
- Conclusione: dato che puoi trasformare qualsiasi ottima nella tua soluzione Greedy senza peggiorarla, la tua soluzione Greedy deve essere ottima!
    

#### **Step 4: Analisi della Complessità**

Questa è la parte facile per raccogliere gli ultimi punti.

- L'ordinamento iniziale costa quasi sempre $O(n \log n)$.
    
- Il ciclo per scorrere gli elementi costa $O(n)$.
    
- Complessità totale: $O(n \log n)$.
    
    Assicurati di specificare quale algoritmo di ordinamento ideale (come Merge Sort o Heap Sort) ti garantisce questo tempo nel caso peggiore.
    

---

### **Pattern Classici che devi saper riconoscere**

- **Interval Scheduling (Selezione Attività):** Hai tante attività con orari di inizio e fine, devi farne il più possibile senza sovrapposizioni.
    
    - _Regola d'oro:_ Ordina sempre per **tempo di fine crescente** (chi finisce prima, lascia spazio per gli altri).
        
- **Minimizzare il Lateness (Ritardo Massimo):** Hai lavori con durata e scadenze (deadlines).
    
    - _Regola d'oro:_ Ordina sempre per **scadenza crescente** (Earliest Deadline First).
        
- **Minimizzare le Soste (Es. Benzina/Autogrill):** Devi fare un lungo viaggio fermandoti il meno possibile.
    
    - _Regola d'oro:_ Vai sempre **il più lontano possibile** prima di fermarti.
        
- **Caricare Camion (Bin Packing sequenziale):** Inserire pacchi in contenitori di capacità $K$.
    
    - _Attenzione:_ Spesso il Greedy qui non dà l'ottimo globale, ma è un'approssimazione (come hai visto nei tuoi appunti, approssima a un fattore 2).
        

---

