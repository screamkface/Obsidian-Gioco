# tanh in attention pooling
Questa è la classica domanda da **discussione orale da 30 e lode**. Se un professore ti chiede di giustificare un iperparametro o una funzione d'attivazione in un layer custom e tu sai rispondere, dimostri di non aver fatto "copia-incolla", ma di padroneggiare la matematica dietro al Deep Learning.

Abbiamo scelto la **Tangente Iperbolica (`Tanh`)** al posto della **`ReLU`** per tre motivi fondamentali legati a come funziona l'Attention nel NLP (Naturale Language Processing).

Ecco la spiegazione tecnica:

### 1. Zero-Centering e Segnali Negativi (Il problema della ReLU)

- **Come funziona la ReLU:** Se il valore è positivo, lo fa passare. Se è negativo, lo trasforma in **zero** assoluto.
    
- **Perché qui è un problema:** Nei Transformer (come DistilBERT), gli embedding delle parole contengono valori sia positivi che negativi che rappresentano direzioni nello spazio semantico. Se usassimo la ReLU, tutti i segnali negativi verrebbero "spenti" (il famoso problema dei _Dead Neurons_). Questo significa che il modello perderebbe un sacco di sfumature semantiche prima ancora di calcolare il "voto" finale della parola.
    
- **Il vantaggio della Tanh:** La Tanh schiaccia i valori in un intervallo tra **-1 e +1**. È _zero-centered_ (centrata sullo zero). Questo permette alla rete di esprimere concetti come "fortemente in disaccordo" (-1) o "fortemente in accordo" (+1), mantenendo vivi i gradienti per _tutti_ i valori, positivi o negativi.
    

### 2. Stabilità del Softmax

Subito dopo i layer `Linear`, applichiamo un `Softmax` per calcolare le percentuali (i pesi dell'attention).

- La `ReLU` non ha un limite superiore (può produrre valori enormi come 100, 500, 1000). Se un valore diventa troppo grande, il Softmax collassa: assegnerà il **100%** dell'attenzione a una singola parola e lo **0%** a tutte le altre, smettendo di imparare (_Gradient Saturation_).
    
- La `Tanh`, limitando l'output tra -1 e 1, garantisce che i numeri passati all'ultimo layer lineare siano sempre "calmi" e ben scalati. Questo produce un Softmax molto più dolce, che all'inizio distribuisce l'attenzione su tutta la frase in modo equo e, col tempo, impara dolcemente a preferire le parole chiave.
    

### 3. La Letteratura Scientifica (Bahdanau Attention)

Questa specifica struttura a due layer lineari con in mezzo una non-linearità è conosciuta in letteratura come **Additive Attention** (o _Bahdanau Attention_, dal nome del ricercatore che l'ha inventata nel 2014 per la traduzione automatica). Nel paper originale e in tutte le implementazioni standard PyTorch, la funzione usata è storicamente la Tanh. Sceglierla significa allinearsi allo _State-of-the-Art_ consolidato.

---

### ✍️ Come scriverlo nel Report

Se vuoi fare un figurone, puoi aggiungere questa breve frase nella sezione in cui spieghi la tua architettura Custom:

> _"For the custom Attention Pooling mechanism, an Additive Attention (Bahdanau-style) network was implemented. We explicitly selected **Tanh** as the non-linear activation function between the linear projections rather than ReLU. Tanh provides zero-centered bounding (-1, 1), which preserves negative semantic features from the token embeddings and prevents extreme logit values that could prematurely saturate the subsequent Softmax layer, thereby ensuring stable gradient flow during fine-tuning."_

Con questa giustificazione, il tuo layer custom diventa un capolavoro di ingegneria inattaccabile.

