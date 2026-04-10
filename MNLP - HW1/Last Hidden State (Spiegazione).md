## 1. Cosa rappresenta il `last_hidden_state` del Layer Finale?

Quando esegui il forward pass su DistilBERT, l'output è un **tensore**.

- Shape: `(batch_size, sequence_length, hidden_size)`
- Esempio: Per una frase di 5 token, la dimensione è `(batch, 5, 768)`.

### I Componenti

1. Token `[CLS]` (Index 0):
    - È un token speciale aggiunto all'inizio della sequenza.
    - Funzione: *Inizialmente addestrato per rappresentare una rappresentazione globale della frase intera.*
    - Viene passato all'header di classificazione originale.
2. Token di Testo (Index 1 ... -1):
    - Rappresentano le parole della frase.
3. Token `[SEP]` e Padding:
    - Se usi right-padding, il padding viene aggiunto alla fine (es. `[SEP]` o `0`). Non è rappresentativo del contenuto.

---

## 2. Perché usiamo `[CLS]` e non l'ultimo token?

Se il tuo obiettivo è classificazione della frase (es. Sentiment Analysis):

- Scegliamo `[CLS]`: È stato progettato per aggregare informazioni da _tutta_ la sequenza durante la fase di addestramento della task di classificazione (MLM + NSP).
- Non usiamo l'ultimo token: L'ultimo token è spesso legato alla fine della frase e può includere padding o il token `[SEP]`. La sua rappresentazione è specifica per _quel_ token, non per la frase complessiva.

python

```
# Esempio Hugging Face (Standard)
# output['last_hidden_state'][0] -> È il vettore [CLS]
# output['last_hidden_state'][-1] -> È l'ultimo token (spesso padding o [SEP])

# Best Practice per Classificazione:
sentence_embedding = model.last_hidden_state[0]  # Prendi [CLS]
```

```
# Esempio Hugging Face (Standard)
# output['last_hidden_state'][0] -> È il vettore [CLS]
# output['last_hidden_state'][-1] -> È l'ultimo token (spesso padding o [SEP])

# Best Practice per Classificazione:
sentence_embedding = model.last_hidden_state[0]  # Prendi [CLS]
```

> [!NOTE] DistilBERT e la Velocità DistilBERT rimuove alcuni componenti del layer finale per la classificazione (es. alcuni meccanismi di attention), ma mantiene il token `[CLS]` per permettere l'uso diretto come vettore di classificazione. Tuttavia, non si deve confondere `last_hidden_state` (la matrice completa) con `[CLS]`.

---

## 3. Quando si usa il Mean Pooling (Embeddings SBERT)

Se l'obiettivo è fare similitudine (Retrieval/Embeddings) come in SBERT:

- Problema del `[CLS]`: Le rappresentazioni `[CLS]` sono spesso correlate male (geometria non ottimale) rispetto al significato semantico reale della frase.
- Soluzione (Mean Pooling): Calcoliamo la media dei vettori di _tutti_ i token (o escludendo padding).

```python
# Esempio Mean Pooling (più robusto per embedding)
import torch
import torch.nn.functional as F
from transformers import DistilBertModel

# ... dopo il forward pass ...
# Puliamo il padding e prendiamo la media
attention_mask = torch.tensor([1, 1, 1, 0]) # Esempio mask
tokens = model.last_hidden_state
tokens[attention_mask == 0] = 0
# (Normalizzare la somma per la lunghezza reale)
sentence_embedding = tokens[attention_mask > 0].mean() 



# Esempio Mean Pooling (più robusto per embedding)
import torch
import torch.nn.functional as F
from transformers import DistilBertModel

# ... dopo il forward pass ...
# Puliamo il padding e prendiamo la media
attention_mask = torch.tensor([1, 1, 1, 0]) # Esempio mask
tokens = model.last_hidden_state
tokens[attention_mask == 0] = 0
# (Normalizzare la somma per la lunghezza reale)
sentence_embedding = tokens[attention_mask > 0].mean() 
```

---

## 4. Riassunto delle Scelte

|Strategia|Token usato|Quando usarlo?|
|---|---|---|
|`[CLS]`|Indice 0 del `last_hidden_state`|Classificazione (Classification Head).|
|Mean Pooling|Media di tutti i token (meno padding)|Embeddings, SBERT, Semantica.|
|`[SEP]` / Ultimo Token|Ultimo elemento|Raro. Solo per task specifiche di "end-of-sequence".|

## Conclusione

1. `last_hidden_state` è l'output di tutti i token.
2. Per classificazione, usa il primo elemento (il token `[CLS]`) se DistilBERT/BERT non ha un classificatore fine aggiuntivo.
3. Per embedding, non usare `[CLS]` preferibilmente, usa il Mean Pooling per un vettore semantico più accurato.
4. In DistilBERT, la logica è simile, ma il modello è più veloce (meno strati).
