Perfetto. Ti preparo esercizi **stile esame**, come quelli in cui ti chiedono di dire se uno schedule è **conflict-serializable**, **view-serializable**, oppure di riconoscere anomalie. Nelle prove passate questo tipo di domanda compare spesso dentro il “Problem 4”, con schedule da analizzare per view-serializability, 2PL, timestamp, strict/rigorous ecc.

Per ora **non ti metto le soluzioni**, così ti eserciti davvero. Tu prova il primo e mandami il ragionamento, poi te lo correggo.


# Recap Conflict-Serializable e View-Serializable



---

## Metodo da usare per ogni esercizio

Per ogni schedule devi scrivere:

```text
1. Transazioni coinvolte
2. Conflitti
3. Archi del grafo di precedenza
4. Presenza o assenza di cicli
5. Conclusione:
   - conflict-serializable sì/no
   - ordine seriale equivalente, se esiste
```

Ricordati: due operazioni sono in conflitto se sono di **transazioni diverse**, sullo **stesso dato**, e almeno una è una **write**.

---

# Esercizio 1 — base

```text
S1 = r1(A) r2(A) w1(A) w2(A)
```

Domande:

```text
1. Trova tutti i conflitti.
2. Costruisci il grafo di precedenza.
3. S1 è conflict-serializable?
4. Che anomalia ti sembra?
```


# Soluzione


---

# Esercizio 2 — base/intermedio

```text
S2 = r1(A) w1(A) r2(A) r1(B) w2(A) w1(B)
```

Domande:

```text
1. Trova i conflitti.
2. Costruisci il grafo.
3. È conflict-serializable?
4. Se sì, trova un ordine seriale equivalente.
```

---

# Esercizio 3 — ghost update

```text
S3 = w1(A) w2(B) w1(B) w2(A)
```

Domande:

```text
1. Trova i conflitti.
2. Costruisci il grafo.
3. È conflict-serializable?
4. Che anomalia rappresenta?
```

---

# Esercizio 4 — unrepeatable read (FATTO )

```text
S4 = r1(A) w2(A) c2 r1(A) c1
```

Domande:

```text
1. Ignorando i commit, trova i conflitti.
2. Costruisci il grafo.
3. È conflict-serializable?
4. Che anomalia rappresenta?
```

---

# Esercizio 5 — intermedio

```text
S5 = r1(X) w2(X) r3(Y) w1(Y) w3(X) w2(Y)
```

Domande:

```text
1. Trova tutti i conflitti.
2. Costruisci il grafo di precedenza.
3. È conflict-serializable?
4. Se sì, trova almeno un ordine seriale equivalente.
```

---

# Esercizio 6 — stile esame con tre transazioni

```text
S6 = r1(X) w3(X) r2(X) r1(Y) w1(X) r2(Y) w2(Y) w3(Y)
```

Domande:

```text
1. Mostra il grafo di precedenza.
2. S6 è conflict-serializable?
3. Prova anche a ragionare se può essere view-serializable.
```

Questo è più simile a quelli veri d’esame: qui non basta “sentire” che c’è casino, devi proprio costruire il grafo.

---

# Esercizio 7 — view-serializability

```text
S7 = w0(X) r2(X) r1(X) w2(X) w2(Z)
```

Domande:

```text
1. Calcola il READS-FROM.
2. Calcola il FINAL-WRITE.
3. Cerca uno schedule seriale view-equivalente.
4. S7 è view-serializable?
```

Qui `w0(X)` indica la scrittura iniziale del database, cioè il valore iniziale di `X`.

---

# Esercizio 8 — più difficile

```text
S8 = r1(X) w3(X) w3(Z) w2(X) w2(Y) r4(X) w4(Z) w1(Y)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Traduci questi vincoli in un possibile ordine tra T1, T2, T3, T4.
4. È view-serializable?
```

---

