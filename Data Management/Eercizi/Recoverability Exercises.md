Perfetto. Questa sessione falla così: **non guardare le soluzioni**, per ogni schedule scrivi sempre:

```text
READS-FROM:
Recoverable:
ACR:
Strict:
Rigorous:
Motivazione:
```

Tempo consigliato: **40-60 minuti**.

---

# Blocco A — Riscaldamento, 15 minuti

## Esercizio R1

```text
S1 = w1(x) r2(x) c1 c2
```

Domande:

```text
1. T2 legge da T1?
2. Lo schedule è recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
```

---

## Esercizio R2

```text
S2 = w1(x) r2(x) c2 c1
```

Domande:

```text
1. Calcola READS-FROM.
2. È recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
```

---

## Esercizio R3

```text
S3 = w1(x) r2(x) a1
```

Domande:

```text
1. Che problema può succedere?
2. C’è cascading rollback?
3. È ACR?
```

---

## Esercizio R4

```text
S4 = w1(x) c1 r2(x) c2
```

Domande:

```text
1. È recoverable?
2. È ACR?
3. È strict?
4. È rigorous?
```

---

# Blocco B — Distinguere recoverable, ACR, strict, 15 minuti

## Esercizio R5

```text
S5 = w1(x) w2(x) c1 c2
```

Domande:

```text
1. Ci sono READS-FROM?
2. È recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
```

Attenzione: qui non ci sono letture, quindi recoverable e ACR vanno ragionati bene.

---

## Esercizio R6

```text
S6 = w1(x) w2(x) c2 c1
```

Domande:

```text
1. È recoverable?
2. È ACR?
3. È strict?
4. È rigorous?
5. Perché la write-write è importante?
```

---

## Esercizio R7

```text
S7 = w1(x) r2(x) w2(y) c1 c2
```

Domande:

```text
1. Calcola READS-FROM.
2. È recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
```

---

## Esercizio R8

```text
S8 = w1(x) r2(x) w3(x) c1 c2 c3
```

Domande:

```text
1. T2 da chi legge?
2. T3 sovrascrive un valore non committato?
3. È recoverable?
4. È ACR?
5. È strict?
6. È rigorous?
```

---

# Blocco C — Strict vs Rigorous, 15 minuti

Questi sono i più importanti, perché servono a fissare la differenza.

## Esercizio R9

```text
S9 = r1(x) w2(x) c1 c2
```

Domande:

```text
1. Ci sono READS-FROM?
2. È recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
```

Nota mentale: qui `T1` legge, ma non scrive. Guarda bene la differenza tra **strict** e **rigorous**.

---

## Esercizio R10

```text
S10 = r1(x) r2(x) w2(x) c2 c1
```

Domande:

```text
1. C’è qualche read-from tra transazioni?
2. È recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
```

---

## Esercizio R11

```text
S11 = w1(x) c1 r2(x) w2(y) c2 r3(y) c3
```

Domande:

```text
1. Calcola tutti i READS-FROM.
2. È recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
```

---

## Esercizio R12

```text
S12 = w1(x) r2(x) c1 w3(y) r2(y) c3 c2
```

Domande:

```text
1. Calcola READS-FROM.
2. È recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
```

---

# Blocco D — Stile esame, 15 minuti

## Esercizio R13

```text
S13 = r1(x) w2(x) r3(y) w1(y) c2 r3(x) c1 c3
```

Domande:

```text
1. Calcola READS-FROM.
2. È recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
6. Scrivi una motivazione breve per ogni risposta.
```

---

## Esercizio R14

```text
S14 = w1(x) r2(x) w2(y) r3(y) c1 c2 c3
```

Domande:

```text
1. Disegna la catena dei READS-FROM.
2. È recoverable?
3. È ACR?
4. Può causare cascading rollback?
5. È strict?
6. È rigorous?
```

---

## Esercizio R15

```text
S15 = w1(x) c1 r2(x) w2(y) c2 w3(x) r4(y) c3 c4
```

Domande:

```text
1. Calcola READS-FROM.
2. È recoverable?
3. È ACR?
4. È strict?
5. È rigorous?
```

---

# Mini-routine per correggerti

Per ogni esercizio usa questa check-list:

```text
Recoverable:
se Ti legge da Tj, allora cj deve essere prima di ci.

ACR:
se Ti legge da Tj, allora cj deve essere prima della read ri(x).

Strict:
nessuna transazione può leggere o sovrascrivere un valore scritto da una transazione non ancora committata.

Rigorous:
per ogni conflitto ai < bj, il commit ci deve stare tra ai e bj.
```

Fai almeno **R1-R10** in questa sessione. Se ti resta tempo, fai **R13 e R14**. Poi mandami le tue risposte in blocco e te le correggo.