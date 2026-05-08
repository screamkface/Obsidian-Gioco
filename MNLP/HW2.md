Perfetto: partiamo in modo molto operativo. Dal materiale che vedo, il vostro HW1 è già un’ottima base: **Maleventum** ha una pipeline **bi-encoder DistilBERT + Attention Pooling + MNRL + cross-encoder reranking** e nel report avete già dichiarato come sistema finale il reranking con **BAAI/bge-reranker-v2-m3**, con **Hit@1 0.6890** e **MRR 0.7907** sul test. Nella leaderboard pubblica siete **rank 11** con **MRR 0.768** sul blind, quindi appena sotto la fascia “CINECA Access” indicata sopra i primi 10 gruppi.

## Strategia consigliata per HW2

HW2 richiede di trasformare il retrieval di HW1 in un sistema **RAG completo**: prendere i chunk recuperati, inserirli nel prompt, generare la risposta con small LMs open-weight, e valutare le risposte. Le slide dicono esplicitamente che HW2 usa i passaggi retrieved da HW1 per aumentare i prompt con conoscenza non-parametrica, cioè il classico RAG.

Io organizzerei così:

### 1. Retriever: riusiamo il vostro sistema HW1

Per HW2 non perderei tempo a rifare retrieval. Usiamo come retriever principale:

**DistilBERT Attention + MNRL → top-30 → BAAI/bge-reranker-v2-m3 → top-3 finale**

Questo è coerente con il vostro report e con HW2, perché le slide dicono di usare preferibilmente il retriever/reranker allenato in HW1, oppure all-MiniLM-L6-v2 come fallback.

Output intermedio da produrre subito:

```text
retrieval_outputs/
  test_top3_maleventum.jsonl
  blind_top3_maleventum.jsonl
```

Ogni riga dovrebbe contenere almeno:

```json
{
  "query_id": "...",
  "query": "...",
  "top_chunks": ["...", "...", "..."],
  "top_chunk_indices": [12, 4, 7],
  "scores": [0.91, 0.86, 0.82]
}
```

Per il test possiamo anche salvare `answer`, `answer_pos`, `short_answer`; per il blind no, perché mancano le risposte corrette.

### 2. Dataset: attenzione a `short_answer`

In HW2 la target non è più il chunk lungo `answer`, ma la **short_answer**, cioè quello che il modello dovrebbe effettivamente rispondere. Le slide distinguono chiaramente: `answer` è il chunk che contiene l’informazione, mentre `short_answer` è la risposta breve attesa.

Quindi tutte le metriche di generazione vanno calcolate rispetto a:

```python
example["short_answer"]
```

non rispetto a `answer`.

### 3. Small LMs: scegliamone due, semplici e difendibili

Requisito base B1: almeno **due small LMs <= 3B parametri**, in tre setting: **Baseline**, **RAG**, **Oracle**. Inoltre RAG e Oracle devono usare almeno `top_k=3`.

Scelta consigliata:

|Modello|Perché|
|---|---|
|`Qwen/Qwen3-0.6B`|molto leggero, utile come modello piccolo|
|`HuggingFaceTB/SmolLM2-1.7B-Instruct`|più grande ma ancora gestibile, buon confronto|

Le slide citano proprio Qwen3-0.6B e SmolLM2 360M/1.7B come esempi Colab-friendly.

Se Colab è instabile, facciamo una prima run su **200 esempi** per debug, poi l’intero test set.

## I tre setting da implementare

### Baseline

Prompt solo con la domanda:

```text
Answer the following question with a short factual answer.

Question: {query}
Answer:
```

Serve a misurare quanto il modello sa rispondere con sola conoscenza parametrica.

### RAG

Prompt con i tre chunk recuperati dal vostro sistema HW1:

```text
Answer the question using only the information provided in the context.
Give a short factual answer. Do not explain.

Context:
1. {chunk_1}
2. {chunk_2}
3. {chunk_3}

Question: {query}
Answer:
```

### Oracle

Come RAG, ma il chunk corretto deve stare sempre in prima posizione. Le slide specificano che se il correct chunk è già nella top-k va spostato al primo posto; se non è presente, bisogna scartare il k-esimo chunk e inserire il correct chunk in cima.

```text
Context:
1. {correct_chunk}
2. {retrieved_chunk_1_or_2}
3. {retrieved_chunk_2_or_3}
```

Oracle serve come **best-case scenario**: se Oracle è basso, il problema è il generatore/prompt; se Oracle è alto ma RAG è basso, il problema è il retrieval o il rumore nei chunk.

## Matrice esperimenti minima

Questa è la tabella che dobbiamo riempire nel report:

|Model|Setting|top_k|EM|subEM|METEOR|Notes|
|---|--:|--:|--:|--:|--:|---|
|Qwen3-0.6B|Baseline|0||||no context|
|Qwen3-0.6B|RAG|3||||HW1 retriever|
|Qwen3-0.6B|Oracle|3||||correct chunk first|
|SmolLM2-1.7B|Baseline|0||||no context|
|SmolLM2-1.7B|RAG|3||||HW1 retriever|
|SmolLM2-1.7B|Oracle|3||||correct chunk first|

Le metriche base richieste sono **Exact Match**, **subEM** e **METEOR** su tutte le risposte generate.

## Additional requirement: cosa conviene scegliere

Dato che probabilmente non avete CINECA access dalla leaderboard, **A4 non sembra obbligatorio** per voi. L’opzione più furba è:

**A1 – Different Prompting Strategies**

Facile da implementare, molto commentabile nel report, poco rischiosa. Le slide propongono strategie come Chain-of-Thought, Context Compression, Corrective RAG e Few-shot.

Io farei una cosa pulita:

1. Prompt base RAG, quello sopra.
    
2. Prompt “context-aware strict”, cioè più vincolato:
    
    ```text
    Use only the context. If the answer is not explicitly stated, answer "I don't know".
    Return only the shortest possible answer.
    ```
    
3. Prompt “compressed answer”, dove chiediamo di ignorare dettagli irrilevanti:
    
    ```text
    Identify the span in the context that answers the question and return only that span.
    ```
    

Così possiamo discutere se prompt più restrittivi riducono hallucination ma magari peggiorano recall.

## Valutazione manuale e LLM-as-a-Judge

B2 richiede:

1. metriche automatiche su tutto il test;
    
2. LLM-as-a-Judge su almeno **200 esempi**;
    
3. validazione manuale sugli stessi 200 esempi;
    
4. Cohen’s Kappa tra annotatori umani e tra ciascun umano e judge.
    

Qui io sceglierei **il miglior sistema RAG** dopo le metriche automatiche, per esempio SmolLM2-RAG con prompt migliore, e su quello facciamo i 200 esempi.

File da creare:

```text
annotation/
  sample_200_for_annotation.csv
  annotator_1.csv
  annotator_2.csv
  llm_judge.csv
  agreement_results.json
```

Colonne utili:

```text
query_id, query, context_1, context_2, context_3,
generated_answer, short_answer, annotator_label
```

Label binaria:

```text
1 = risposta corretta o accettabile
0 = risposta errata o non accettabile
```

Lo stesso criterio è quello indicato nelle slide: 1 se la short answer corretta è presente in una forma valida, 0 se non è presente.

## Divisione del lavoro

Io farei così:

**Persona A**

- sistema di retrieval da HW1;
    
- generazione top-3 test/blind;
    
- implementazione prompt Baseline/RAG/Oracle;
    
- run dei due small LMs.
    

**Persona B**

- metriche EM/subEM/METEOR;
    
- campionamento 200 esempi;
    
- LLM-as-a-Judge;
    
- setup annotation + Cohen’s Kappa;
    
- failure analysis.
    

Poi insieme:

- tabelle finali;
    
- report ACL;
    
- discussione qualitativa;
    
- file di submission.
    

## Roadmap pratica

**Fase 1 — setup**

- recuperare notebook/codice HW1;
    
- generare `test_top3` e `blind_top3`;
    
- verificare che per il test l’Oracle metta davvero il correct chunk in prima posizione.
    

**Fase 2 — generation**

- implementare wrapper unico per modelli HuggingFace;
    
- run su 20 esempi;
    
- controllo manuale output;
    
- run su tutto test;
    
- run su blind.
    

**Fase 3 — evaluation**

- normalizzazione risposte;
    
- EM;
    
- subEM;
    
- METEOR;
    
- tabella comparativa per modello e setting.
    

**Fase 4 — LLM judge + manual**

- scegliere miglior RAG;
    
- campionare 200 esempi;
    
- fare judge automatico;
    
- annotazione separata dei due membri;
    
- Cohen’s Kappa;
    
- analisi errori.
    

**Fase 5 — report**  
Struttura consigliata:

```text
1 Introduction
2 Methodology
  2.1 HW1 Retriever and Reranker
  2.2 Prompting Settings: Baseline, RAG, Oracle
  2.3 Small Language Models
  2.4 Additional Prompting Strategy
3 Experimental Setup
  3.1 Dataset
  3.2 Generation Setup
  3.3 Evaluation Metrics
  3.4 Manual and LLM-based Validation
4 Results
  4.1 Automatic Metrics
  4.2 LLM-as-a-Judge and Human Agreement
  4.3 Failure Analysis
5 Discussion
6 Conclusion
```

## Prima cosa da fare adesso

Io partirei da un notebook unico chiamato:

```text
hw2_00_build_retrieval_inputs.ipynb
```

Obiettivo: caricare dataset, caricare output/modello HW1, produrre per ogni esempio del test:

```json
{
  "query_id": "...",
  "query": "...",
  "short_answer": "...",
  "answer": "...",
  "rag_chunks": ["top1", "top2", "top3"],
  "oracle_chunks": ["correct", "other1", "other2"]
}
```

Appena questo file è pronto, tutto il resto diventa molto più lineare: generation, evaluation, manual annotation e report.