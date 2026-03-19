# Megaquiz di Machine Learning

> In Obsidian, per le domande a scelta multipla e vero/falso, barra **una sola casella per domanda**.

---

## Parte A — Scelta multipla

### 1. Nel framework dell’apprendimento statistico, il dominio `X` rappresenta:
- [ ] A. l’insieme dei modelli possibili
- [ ] B. l’insieme delle etichette possibili
- [x] C. l’insieme degli oggetti/input possibili
- [ ] D. la distribuzione dei dati

### 2. Nel caso di classificazione binaria, l’insieme delle etichette può essere:
- [ ] A. `Y = ℝ^d`
- [x] B. `Y = {0,1}`
- [ ] C. `Y = X`
- [ ] D. `Y = D`

### 3. L’assunzione i.i.d. significa che i campioni del training set sono:
- [ ] A. identici ma non indipendenti
- [x] B. indipendenti e identicamente distribuiti
- [ ] C. dipendenti e uniformi
- [ ] D. scelti dall’algoritmo

### 4. La funzione `f` nel framework statistico è:
- [ ] A. la loss empirica
- [x] B. la vera funzione di labeling
- [ ] C. il classificatore appreso
- [ ] D. il learning rate

### 5. Il predittore prodotto dal learner è tipicamente indicato con:
- [ ] A. `D`
- [ ] B. `f`
- [x] C. `h`
- [ ] D. `S`

### 6. L’errore di generalizzazione misura:
- [ ] A. l’errore sul training set
- [x] B. l’errore atteso su nuovi dati estratti da `D`
- [ ] C. il numero di parametri del modello
- [ ] D. la complessità computazionale

### 7. L’ERM sceglie l’ipotesi che:
- [ ] A. massimizza la VC-dimension
- [x] B. minimizza l’errore empirico
- [ ] C. minimizza sempre l’errore vero
- [ ] D. aumenta il margine

### 8. Il principale rischio dell’ERM senza vincoli è:
- [x] A. underfitting garantito
- [ ] B. overfitting
- [ ] C. impossibilità di ottimizzazione
- [ ] D. assenza di training error

### 9. L’inductive bias è:
- [ ] A. un errore numerico
- [ ] B. il rumore nei dati
- [x] C. l’insieme di assunzioni che restringe la ricerca del learner
- [ ] D. una procedura di test

### 10. Il No-Free-Lunch Theorem suggerisce che:
- [ ] A. esiste un algoritmo migliore di tutti in assoluto
- [x] B. senza assunzioni nessun learner è universalmente superiore
- [ ] C. ERM è sempre ottimo
- [ ] D. i modelli lineari vincono sempre

### 11. L’approximation error dipende soprattutto da:
- [ ] A. dimensione del dataset
- [x] B. capacità della classe di ipotesi di rappresentare la funzione target
- [ ] C. learning rate
- [ ] D. random seed

### 12. L’estimation error dipende soprattutto da:
- [x] A. quantità di dati disponibili rispetto alla complessità del modello
- [ ] B. forma della sigmoid
- [ ] C. scelta della GPU
- [ ] D. codifica one-hot

### 13. Una classe infinita può essere ancora learnable se:
- [ ] A. ha training error nullo
- [x] B. ha VC-dimension finita
- [ ] C. usa gradient descent
- [ ] D. contiene solo funzioni lineari

### 14. “Shattering” di un insieme di punti significa:
- [ ] A. classificare tutti i punti nello stesso modo
- [x] B. rappresentare ogni possibile labeling di quei punti
- [ ] C. ridurre la dimensionalità
- [ ] D. eliminare il rumore

### 15. La VC-dimension di una classe è:
- [ ] A. il numero di parametri del modello
- [x] B. il massimo numero di punti che la classe può shattered
- [ ] C. il numero di feature del dataset
- [ ] D. il numero di classi

### 16. Il Perceptron è usato per apprendere:
- [ ] A. alberi decisionali
- [x] B. halfspaces/classificatori lineari
- [ ] C. cluster gerarchici
- [ ] D. autoencoder

### 17. Il Perceptron converge sotto quale ipotesi classica?
- [ ] A. dati rumorosi e non separabili
- [x] B. dati linearmente separabili
- [ ] C. loss quadratica minima
- [ ] D. kernel RBF

### 18. Nella regressione lineare, la loss standard è:
- [ ] A. hinge loss
- [ ] B. cross-entropy
- [x] C. squared error
- [ ] D. zero-one loss

### 19. L’equazione normale nella least squares coinvolge:
- [x] A. `XᵀX`
- [ ] B. solo la matrice identità
- [ ] C. solo il vettore target
- [ ] D. la matrice di confusione

### 20. Ridge regression aggiunge una penalizzazione:
- [ ] A. `L0`
- [ ] B. `L1`
- [x] C. `L2`
- [ ] D. entropica

### 21. Lasso regression è nota perché tende a:
- [ ] A. aumentare tutti i coefficienti
- [ ] B. produrre soluzioni sparse
- [ ] C. eliminare il bias
- [ ] D. rendere inutile la normalizzazione

### 22. Nella logistic regression, l’output del modello è ottenuto tramite:
- [ ] A. ReLU
- [x] B. sigmoid
- [ ] C. tanh
- [ ] D. softplus

### 23. La logistic regression è strettamente collegata a:
- [x] A. maximum likelihood estimation
- [ ] B. k-means
- [ ] C. PCA classica
- [ ] D. bagging puro

### 24. La regularization nella logistic regression serve principalmente a:
- [ ] A. aumentare il numero di classi
- [x] B. controllare overfitting e grandezza dei pesi
- [ ] C. eliminare il dataset di validazione
- [ ] D. rendere il problema non convesso

### 25. AdaBoost combina tipicamente:
- [x] A. weak learners
- [ ] B. autoencoder profondi
- [ ] C. kernel multipli
- [ ] D. soli modelli lineari perfetti

### 26. Il bagging riduce soprattutto:
- [ ] A. bias
- [x] B. varianza
- [ ] C. dimensionalità
- [ ] D. rumore di quantizzazione

### 27. In k-fold cross-validation, il dataset viene:
- [ ] A. usato solo per training
- [x] B. suddiviso in `k` parti, alternando validation e training
- [ ] C. ordinato per etichetta
- [ ] D. ridotto con PCA

### 28. Una learning curve può aiutare a diagnosticare:
- [ ] A. bias vs variance
- [ ] B. solo underflow numerico
- [ ] C. solo costo computazionale
- [ ] D. solo class imbalance

### 29. Il gradient descent aggiorna i parametri muovendosi:
- [ ] A. nella direzione del gradiente
- [x] B. nella direzione opposta al gradiente
- [ ] C. casualmente
- [ ] D. lungo gli autovettori principali

### 30. Il subgradient è utile quando la funzione obiettivo è:
- [ ] A. lineare
- [ ] B. differenziabile ovunque
- [x] C. non differenziabile in alcuni punti
- [ ] D. sempre quadratica

### 31. In pratica, il training moderno usa più spesso:
- [ ] A. batch GD puro su tutto il dataset
- [x] B. mini-batch gradient descent
- [ ] C. exhaustive search
- [ ] D. coordinate descent soltanto

### 32. Nell’SVM, i support vectors sono:
- [ ] A. tutti i punti del training set
- [ ] B. i punti più lontani dall’iperpiano
- [x] C. i punti che determinano il margine
- [ ] D. gli outlier rimossi

### 33. Il kernel trick consente di:
- [ ] A. ridurre il dataset
- [x] B. lavorare implicitamente in spazi di feature ad alta dimensione
- [ ] C. eliminare il duale
- [ ] D. evitare la convex optimization

### 34. Un Decision Tree può usare come criterio di split:
- [x] A. entropy o Gini impurity
- [ ] B. MSE soltanto
- [ ] C. KL divergence soltanto
- [ ] D. cosine similarity soltanto

### 35. Il pruning in un albero serve a:
- [ ] A. aumentare sempre la profondità
- [x] B. ridurre overfitting
- [ ] C. trasformarlo in random forest
- [ ] D. eliminare feature numeriche

### 36. Il “random” in Random Forest deriva anche da:
- [ ] A. label casuali
- [x] B. selezione casuale delle feature negli split
- [ ] C. loss casuale
- [ ] D. architettura neurale casuale

### 37. In KNN, scegliere `k = 1` tende spesso a:
- [ ] A. underfitting
- [ ] B. overfitting
- [ ] C. convexificazione
- [ ] D. sparsity

### 38. In KNN, il feature scaling è importante perché:
- [ ] A. cambia il numero di classi
- [ ] B. le distanze sono sensibili alla scala delle feature
- [ ] C. elimina la curse of dimensionality
- [ ] D. rende inutile validare `k`

### 39. K-means ottimizza tipicamente:
- [ ] A. margine massimo
- [ ] B. inertia / somma delle distanze quadratiche intra-cluster
- [ ] C. likelihood binaria
- [ ] D. Gini impurity

### 40. PCA cerca direzioni che:
- [ ] A. minimizzano la varianza
- [ ] B. massimizzano la varianza proiettata
- [ ] C. massimizzano l’accuracy supervisionata
- [ ] D. corrispondono alle label

### 41. Un autoencoder con bottleneck forza il modello a:
- [ ] A. memorizzare le etichette
- [ ] B. comprimere l’informazione
- [ ] C. usare kernel non lineari
- [ ] D. fare clustering gerarchico

### 42. Una CNN rispetto a una FNN è particolarmente adatta alle immagini perché sfrutta:
- [ ] A. solo layer fully connected
- [ ] B. località spaziale e condivisione dei pesi
- [ ] C. solo PCA
- [ ] D. solo sigmoid

### 43. ReLU è molto usata perché:
- [ ] A. è sempre limitata tra 0 e 1
- [ ] B. riduce alcuni problemi di vanishing gradient rispetto a sigmoid/tanh
- [ ] C. è lineare ovunque
- [ ] D. non ha mai problemi

### 44. Softmax viene usata tipicamente in output per:
- [ ] A. regressione lineare
- [ ] B. classificazione multiclasse
- [ ] C. clustering
- [ ] D. pruning

### 45. Un linear autoencoder è concettualmente legato a:
- [ ] A. random forest
- [ ] B. PCA
- [ ] C. bagging
- [ ] D. KNN

---

## Parte B — Vero o Falso

### 46. L’errore empirico e l’errore di generalizzazione coincidono sempre.
- [ ] Vero
- [ ] Falso

### 47. Una hypothesis class più complessa riduce spesso approximation error ma può aumentare estimation error.
- [ ] Vero
- [ ] Falso

### 48. Il Perceptron è garantito convergere anche con dati non linearmente separabili.
- [ ] Vero
- [ ] Falso

### 49. `L1` regularization tende più di `L2` a produrre coefficienti esattamente nulli.
- [ ] Vero
- [ ] Falso

### 50. Il bagging costruisce i modelli in sequenza dando più peso agli errori precedenti.
- [ ] Vero
- [ ] Falso

### 51. In cross-validation ogni esempio può finire sia nel training sia nel validation, ma in fold diversi.
- [ ] Vero
- [ ] Falso

### 52. SGD usa un solo esempio alla volta per aggiornare i parametri.
- [ ] Vero
- [ ] Falso

### 53. Un hard-margin SVM tollera violazioni del margine.
- [ ] Vero
- [ ] Falso

### 54. Random Forest è un ensemble di alberi decisionali.
- [ ] Vero
- [ ] Falso

### 55. K-means è un algoritmo supervisionato.
- [ ] Vero
- [ ] Falso

### 56. PCA è un metodo supervisionato classico.
- [ ] Vero
- [ ] Falso

### 57. Le CNN usano filtri/kernel convoluzionali.
- [ ] Vero
- [ ] Falso

### 58. La sigmoid è comunemente usata come funzione di output per probabilità binarie.
- [ ] Vero
- [ ] Falso

### 59. Il bottleneck in un autoencoder serve a evitare una copia banale dell’input.
- [ ] Vero
- [ ] Falso

### 60. La curse of dimensionality può rendere KNN meno efficace.
- [ ] Vero
- [ ] Falso

---

## Parte C — Risposta breve

### 61. Definisci formalmente training set `S`, distribuzione `D`, target function `f` e ipotesi `h`.
**Risposta:**

### 62. Spiega la differenza tra empirical risk e true risk.
**Risposta:**

### 63. Perché l’ERM puro può overfittare?
**Risposta:**

### 64. Che cos’è l’inductive bias e perché è inevitabile?
**Risposta:**

### 65. Riassumi il senso del No-Free-Lunch Theorem.
**Risposta:**

### 66. Spiega la differenza tra approximation error ed estimation error.
**Risposta:**

### 67. Che cosa significa che una classe shattered un insieme di punti?
**Risposta:**

### 68. Dai l’idea intuitiva di VC-dimension.
**Risposta:**

### 69. Spiega l’update del Perceptron e l’intuizione geometrica.
**Risposta:**

### 70. Deriva a parole il significato geometrico della regressione lineare come proiezione.
**Risposta:**

### 71. Confronta Ridge e Lasso.
**Risposta:**

### 72. Perché la normalizzazione delle feature è cruciale nelle regressioni regolarizzate?
**Risposta:**

### 73. Spiega il collegamento tra logistic regression e MLE.
**Risposta:**

### 74. Qual è la differenza concettuale tra boosting e bagging?
**Risposta:**

### 75. Quando preferire hold-out e quando k-fold cross-validation?
**Risposta:**

### 76. Come si leggono le learning curves per riconoscere alto bias o alta variance?
**Risposta:**

### 77. Perché il learning rate è importante nel gradient descent?
**Risposta:**

### 78. Quando serve il subgradient invece del gradiente?
**Risposta:**

### 79. Differenza tra batch GD, SGD e mini-batch GD.
**Risposta:**

### 80. Che cosa massimizza davvero un SVM?
**Risposta:**

### 81. Spiega il kernel trick senza formule troppo lunghe.
**Risposta:**

### 82. Confronta entropy e Gini impurity negli alberi decisionali.
**Risposta:**

### 83. Perché Random Forest riduce la varianza rispetto a un singolo albero?
**Risposta:**

### 84. Perché in KNN è importante scegliere bene `k`?
**Risposta:**

### 85. Spiega la differenza tra KNN e K-means.
**Risposta:**

### 86. Qual è l’obiettivo di PCA?
**Risposta:**

### 87. In che senso un autoencoder può essere visto come metodo di representation learning?
**Risposta:**

### 88. Perché una FNN pura è poco adatta a immagini grandi?
**Risposta:**

### 89. Confronta sigmoid, tanh e ReLU.
**Risposta:**

### 90. Perché softmax è adatta alla classificazione multiclasse?
**Risposta:**

---

## Parte D — Domande da esame orale

### 91. Descrivi l’intero Statistical Learning Framework e spiega in che senso il learner è “cieco”.
**Risposta:**

### 92. Parti da ERM e costruisci il ragionamento che porta alla necessità di hypothesis class controllate.
**Risposta:**

### 93. Spiega il trade-off bias/complexity collegandolo a approximation ed estimation error.
**Risposta:**

### 94. Illustra il concetto di VC-dimension con almeno un esempio intuitivo.
**Risposta:**

### 95. Presenta Perceptron, ipotesi di separabilità e teorema di convergenza a livello intuitivo.
**Risposta:**

### 96. Deriva la linear regression da ERM fino alla normal equation.
**Risposta:**

### 97. Presenta logistic regression, loss, interpretazione probabilistica e regolarizzazione.
**Risposta:**

### 98. Confronta boosting, bagging e random forest.
**Risposta:**

### 99. Spiega SVM lineare, margine, support vectors, hard vs soft margin.
**Risposta:**

### 100. Spiega PCA e confrontala con autoencoder lineari e non lineari.
**Risposta:**

---

## Stato avanzamento

- [ ] Parte A completata
- [ ] Parte B completata
- [ ] Parte C completata
- [ ] Parte D completata
- [ ] Megaquiz completato