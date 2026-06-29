Perfetto. Ti preparo una sessione stile esame sul **timestamp-based concurrency control**, come abbiamo fatto per recoverability.

Assumi sempre, salvo diversa indicazione:

```text
ts(T1)=1, ts(T2)=2, ts(T3)=3, ts(T4)=4, ...
```

Stato iniziale per ogni oggetto `x`, `y`, `z`:

```text
rts(x)=0, wts(x)=0, wts-c(x)=0, cb(x)=true
```

Per ogni esercizio devi scrivere:

```text
1. Stato iniziale degli oggetti coinvolti
2. Analisi azione per azione
3. Se una read/write è accettata, abortita, in attesa o ignorata da Thomas rule
4. Aggiornamento di rts, wts, wts-c, cb
5. Schedule finale eliminando le transazioni abortite e le write ignorate
```

---

# Blocco A — Riscaldamento

## Esercizio T1

```text
S1 = r1(x) r2(x) w2(x) c2 c1
```

Domande:

```text
1. r1(x) viene accettata?
2. r2(x) viene accettata?
3. w2(x) viene accettata?
4. Quali valori finali hanno rts(x), wts(x), wts-c(x), cb(x)?
5. Qual è lo schedule finale?
```

---

## Esercizio T2

```text
S2 = r2(x) w1(x) c1 c2
```

Domande:

```text
1. Cosa succede a r2(x)?
2. Cosa succede a w1(x)?
3. T1 viene abortita?
4. Perché questa è una write too late?
5. Schedule finale?
```

---

## Esercizio T3

```text
S3 = w2(x) r1(x) c2 c1
```

Domande:

```text
1. Cosa succede a w2(x)?
2. Cosa succede a r1(x)?
3. T1 viene abortita?
4. Perché questa è una read too late?
5. Schedule finale?
```

---

## Esercizio T4

```text
S4 = w3(x) w2(x) c3 c2
```

Domande:

```text
1. w3(x) viene accettata?
2. w2(x) viene abortita oppure ignorata?
3. Puoi applicare Thomas write rule?
4. Schedule finale?
```

---

# Blocco B — Thomas write rule

## Esercizio T5

```text
S5 = w4(x) w2(x) w3(x) c4 c2 c3
```

Domande:

```text
1. Quali write vengono accettate?
2. Quali write vengono ignorate da Thomas rule?
3. Qualche transazione viene abortita?
4. Schedule finale?
```

---

## Esercizio T6

```text
S6 = r3(x) w4(x) w2(x) c4 c2 c3
```

Domande:

```text
1. Cosa succede a r3(x)?
2. Cosa succede a w4(x)?
3. Cosa succede a w2(x)?
4. Thomas rule si può applicare oppure T2 abortisce?
5. Schedule finale?
```

Attenzione: qui devi controllare prima `rts(x)` e poi `wts(x)`.

---

## Esercizio T7

```text
S7 = w2(x) w5(x) r4(x) w3(x) c2 c5 c3 c4
```

Domande:

```text
1. Aggiorna rts(x), wts(x), cb(x) passo per passo.
2. r4(x) può leggere subito o deve aspettare?
3. w3(x) viene accettata, abortita o ignorata?
4. Schedule finale?
```

---

# Blocco C — Commit bit e attese

## Esercizio T8

```text
S8 = w2(x) r3(x) c2 c3
```

Domande:

```text
1. Dopo w2(x), quanto valgono wts(x) e cb(x)?
2. r3(x) è compatibile con il timestamp?
3. r3(x) può leggere subito?
4. Quando può procedere?
5. Schedule finale?
```

---

## Esercizio T9

```text
S9 = w2(x) r4(x) a2 r4(x) c4
```

Domande:

```text
1. Dopo w2(x), cb(x) è true o false?
2. La prima r4(x) può procedere subito?
3. Cosa succede dopo a2?
4. La seconda r4(x) legge quale valore?
5. Schedule finale?
```


---

## Esercizio T10

```text
S10 = w1(x) r3(x) w2(y) r4(y) c1 c2 c3 c4
```

Domande:

```text
1. r3(x) deve aspettare c1?
2. r4(y) deve aspettare c2?
3. Quali valori di cb diventano false?
4. Quali commit rendono di nuovo cb=true?
5. Schedule finale?
```

---

# Blocco D — Stile esame

## Esercizio T11

```text
S11 = r1(x) r2(x) r3(y) w2(y) c2 w3(x) c1 c3
```

Domande:

```text
1. Analizza lo schedule con timestamp scheduler.
2. Quale transazione abortisce?
3. Quali azioni vengono eliminate?
4. Qual è lo schedule risultante ignorando le transazioni abortite?
5. Lo schedule risultante è rigorous?
```

Questo è molto simile al formato da esame.

---

## Esercizio T12

```text
S12 = r1(x) r2(y) c2 w1(y) c1 r3(x) w3(y) c3
```

Domande:

```text
1. Analizza azione per azione.
2. Quale transazione abortisce?
3. Quali azioni rimangono nello schedule finale?
4. Lo schedule finale è rigorous?
5. Motiva brevemente.
```

---

## Esercizio T13

```text
S13 = r1(x) w2(x) r3(y) w1(y) c2 r3(x) c1 c3
```

Domande:

```text
1. Quali read vengono accettate?
2. Quali write vengono accettate?
3. Qualche transazione viene abortita?
4. Qualche operazione deve aspettare per cb=false?
5. Schedule finale?
```

---

## Esercizio T14

```text
S14 = r2(x) r4(x) w3(x) w1(y) r3(y) c1 c3 c2 c4
```

Domande:

```text
1. w3(x) è accettata o abortita?
2. w1(y) è accettata?
3. r3(y) può leggere subito?
4. Quali transazioni vengono eliminate dal risultato finale?
5. Schedule finale?
```

---

# Blocco E — Più difficile

## Esercizio T15

```text
S15 = w4(x) r5(x) w3(x) r2(x) c4 c5 c3 c2
```

Domande:

```text
1. w4(x) viene accettata?
2. r5(x) deve aspettare il commit di T4?
3. w3(x) viene ignorata da Thomas oppure abortisce?
4. r2(x) viene accettata o abortita?
5. Schedule finale?
```

---

## Esercizio T16

```text
S16 = r3(x) w5(x) w4(x) r2(x) c5 c4 c3 c2
```

Domande:

```text
1. r3(x) aggiorna rts(x)?
2. w5(x) viene accettata?
3. w4(x) viene ignorata da Thomas oppure abortisce?
4. r2(x) è read too late?
5. Schedule finale?
```

---

## Esercizio T17

```text
S17 = w2(x) w4(y) r5(y) w3(x) r1(x) c2 c4 c3 c5 c1
```

Domande:

```text
1. Analizza separatamente x e y.
2. Quali azioni mettono cb=false?
3. Quali read devono aspettare?
4. Quali azioni causano abort?
5. Schedule finale?
```

---

# Blocco F — Simulazione completa da esame

Fai questi due come se fossero in prova scritta.

## Esercizio T18

```text
S18 = r1(x) r2(y) w3(x) r4(x) w2(x) c3 c2 c1 c4
```

Richiesta:

```text
Apply the timestamp-based scheduler.
For each operation, specify whether it is accepted, rejected, delayed, or ignored by Thomas write rule.
Then write the resulting schedule obtained by removing aborted transactions and ignored writes.
Finally, say whether the resulting schedule is rigorous.
```

---

## Esercizio T19

```text
S19 = r1(x) w2(x) w4(y) r3(y) w1(y) c2 c4 c1 c3
```

Richiesta:

```text
Apply the timestamp-based scheduler.
Update rts, wts, wts-c and cb for every object.
Show which transactions abort.
Write the final schedule.
Check whether the final schedule is rigorous.
```

---

# Blocco G — Domande teoriche rapide

Rispondi senza guardare gli appunti.

## Q1

```text
Perché timestamp ordering non produce deadlock?
```

---

## Q2

```text
Qual è la differenza tra abort e Thomas write rule?
```

---

## Q3

```text
Quando una read ri(x) viene abortita?
```

---

## Q4

```text
Quando una write wi(x) viene abortita?
```

---

## Q5

```text
Quando una write wi(x) viene ignorata?
```

---

## Q6

```text
Che differenza c'è tra wts(x) e wts-c(x)?
```

---

## Q7

```text
A cosa serve cb(x)?
```

---

# Strategia per questa sessione

Fai così:

```text
Primi 20 minuti:
T1-T7

Secondi 20 minuti:
T8-T12

Ultimi 20 minuti:
T18 oppure T19 come simulazione esame
```

Quando mi mandi le risposte, scrivile anche in forma compatta tipo:

```text
T11:
r1(x) ok, rts(x)=1
r2(x) ok, rts(x)=2
r3(y) ok, rts(y)=3
w2(y) abort T2 because ts2 < rts(y)=3
...
Final schedule = ...
Rigorous = ...
```

Così te le correggo velocemente e vediamo subito dove sbagli.