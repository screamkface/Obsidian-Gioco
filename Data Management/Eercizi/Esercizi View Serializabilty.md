Perfetto, ti do una serie di esercizi **solo su view-serializability**, senza soluzioni. Per ognuno devi fare sempre:

```text
1. Individua le transazioni.
2. Calcola READS-FROM.
3. Calcola FINAL-WRITE.
4. Trasforma tutto in vincoli d’ordine.
5. Concludi se è view-serializable.
6. Se sì, scrivi un ordine seriale view-equivalente.
```

Ricorda:

```text
ri(X) legge da wj(X)  => Tj < Ti

ri(X) legge da w0(X)  => Ti < tutte le transazioni che scrivono X

wi(X) è final-write   => tutte le altre transazioni che scrivono X < Ti
```

`w0(X)` indica il valore iniziale di `X`.

---

# Esercizio V1 — base

```text
S1 = w0(X) r1(X) r2(X) w2(X)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Trova un ordine seriale view-equivalente, se esiste.
4. S1 è view-serializable?
```

---

# Esercizio V2 — base con contraddizione

```text
S2 = r1(X) w2(X) w2(Y) w1(Y)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Scrivi i vincoli d’ordine.
4. S2 è view-serializable?
```

---

# Esercizio V3 — reads-from incrociati

```text
S3 = w1(X) r2(X) w2(Y) r1(Y)
```

Domande:

```text
1. Da chi legge r2(X)?
2. Da chi legge r1(Y)?
3. Quali vincoli ottieni?
4. Esiste un ordine seriale view-equivalente?
```

---

# Esercizio V4 — solo write

```text
S4 = w1(X) w2(X) w2(Y) w1(Y) w3(X) w3(Y)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Quali vincoli impongono le final-write?
4. S4 è view-serializable?
```

Nota: qui non ci sono read, quindi devi ragionare solo sulle final-write.

---

# Esercizio V5 — intermedio

```text
S5 = w0(X) r1(X) w2(X) r3(X) w3(Y) w1(Y)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Scrivi tutti i vincoli.
4. Controlla se i vincoli sono compatibili.
5. S5 è view-serializable?
```

---

# Esercizio V6 — tre transazioni

```text
S6 = w1(X) w1(Y) r2(X) r3(Y) w2(Z) w3(Z)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Trova i vincoli tra T1, T2, T3.
4. Trova un ordine seriale view-equivalente, se esiste.
```

---

# Esercizio V7 — stile esercizio guidato

```text
S7 = w0(X) r2(X) r1(X) w2(X) w2(Z)
```

Domande:

```text
1. r2(X) da chi legge?
2. r1(X) da chi legge?
3. Quali sono le final-write su X e Z?
4. Quali ordini seriali possibili ci sono?
5. Quale ordine è view-equivalente?
```

---

# Esercizio V8 — catena di letture

```text
S8 = w1(X) r2(X) w2(X) r3(X) w3(X)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Traduci tutto in vincoli.
4. S8 è view-serializable?
5. Se sì, qual è l’ordine seriale equivalente?
```

---

# Esercizio V9 — quattro transazioni

```text
S9 = r1(X) w3(X) w3(Z) w2(X) w2(Y) r4(X) w4(Z) w1(Y)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Scrivi i vincoli tra T1, T2, T3, T4.
4. Controlla se c’è una contraddizione.
5. S9 è view-serializable?
```

---

# Esercizio V10 — più difficile

```text
S10 = r1(A) w2(A) r3(A) w3(B) r2(B) w1(B)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Trova i vincoli d’ordine.
4. Esiste un ordine seriale view-equivalente?
```

---

# Esercizio V11 — con valore iniziale su due oggetti

```text
S11 = w0(A) w0(B) r1(A) r2(B) w3(A) w1(B) w2(A)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE su A e B.
3. Scrivi i vincoli.
4. S11 è view-serializable?
```

---

# Esercizio V12 — esame style

```text
S12 = r1(X) r2(Y) w3(X) w1(Y) r4(X) w2(X) w4(Y)
```

Domande:

```text
1. Calcola READS-FROM.
2. Calcola FINAL-WRITE.
3. Trasforma READS-FROM e FINAL-WRITE in vincoli.
4. Cerca un ordinamento seriale compatibile.
5. Concludi se S12 è view-serializable.
```

---

Ti consiglio di farli in ordine. Parti da **V1** e scrivimi:

```text
READS-FROM:
FINAL-WRITE:
Vincoli:
Conclusione:
```

Così ti correggo solo la parte di ragionamento sulla view.