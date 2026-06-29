Perfetto. **Strict 2PL** e **Strong Strict 2PL** sono varianti del 2PL normale. Servono a collegare il locking non solo alla **conflict-serializability**, ma anche alle proprietà di recovery che hai appena studiato: **strict** e **rigorous**.

---

# 1. Ripasso: 2PL normale

Il **Two-Phase Locking** impone:

```text
prima tutti i lock
poi tutti gli unlock
```

Ogni transazione ha due fasi:

```text
Growing phase:
può acquisire lock, ma non può rilasciarli

Shrinking phase:
può rilasciare lock, ma non può acquisirne di nuovi
```

Esempio 2PL:

```text
sl1(x) r1(x) xl1(y) w1(y) u1(x) u1(y)
```

Tutti i lock vengono prima degli unlock, quindi è 2PL.

Il 2PL garantisce:

```text
2PL => conflict-serializable
```

Però il 2PL normale **non garantisce per forza strictness**.

---

# 2. Problema del 2PL normale

Guarda questo schedule con lock:

```text
xl1(x) w1(x) u1(x) xl2(x) r2(x) c2 u2(x) a1
```

Tradotto nei dati:

```text
w1(x) r2(x) c2 a1
```

Cosa succede?

```text
T1 scrive x
T1 rilascia x prima del commit
T2 legge x
T2 committa
T1 abortisce
```

Questo è un problema grave: `T2` ha letto un valore prodotto da `T1`, ma poi `T1` abortisce.

Quindi lo schedule può rispettare il 2PL normale, ma non essere sicuro dal punto di vista della recovery.

Per risolvere questo problema nasce lo **Strict 2PL**.

---

# 3. Strict Two-Phase Locking

Lo **Strict 2PL** aggiunge una regola al 2PL normale:

```text
Tutti gli exclusive locks devono essere mantenuti fino al commit o abort.
```

Quindi:

```text
se una transazione prende xl_i(x),
può rilasciarlo solo dopo c_i oppure a_i.
```

In formula intuitiva:

```text
xl_i(x) ... c_i/a_i ... u_i(x)
```

oppure:

```text
xl_i(x) ... c_i/a_i
```

se l’unlock è implicito alla fine.

---

# 4. Esempio Strict 2PL

```text
xl1(x) w1(x) xl1(y) w1(y) c1 u1(x) u1(y)
```

Qui `T1` prende lock esclusivi su `x` e `y`, scrive, poi fa commit, e solo dopo rilascia i lock.

Quindi:

```text
T1 mantiene gli exclusive locks fino al commit.
```

Conclusione:

```text
Questo schedule rispetta Strict 2PL.
```

---

# 5. Esempio 2PL ma NON Strict 2PL

```text
xl1(x) w1(x) u1(x) xl2(x) r2(x) c2 u2(x) c1
```

Controlliamo `T1`:

```text
xl1(x) w1(x) u1(x) ... c1
```

`T1` rilascia il lock esclusivo su `x` prima del commit.

Questo viola Strict 2PL.

Quindi:

```text
È 2PL?
Sì, perché T1 non prende altri lock dopo u1(x).

È Strict 2PL?
No, perché T1 rilascia un exclusive lock prima del commit.
```

---

# 6. Cosa garantisce Strict 2PL?

Strict 2PL garantisce due cose:

```text
Strict 2PL => conflict-serializable
```

perché è comunque una forma di 2PL.

In più:

```text
Strict 2PL => strict schedule
```

Perché se una transazione scrive `x`, mantiene il lock esclusivo su `x` fino al commit/abort. Quindi nessun’altra transazione può leggere o sovrascrivere `x` prima che la prima transazione sia terminata.

Quindi Strict 2PL impedisce:

```text
dirty read
dirty write
cascading rollback dovuto a letture sporche
```

---

# 7. Attenzione: Strict 2PL non blocca per forza gli shared locks fino al commit

Questo è il punto più importante.

In **Strict 2PL**, solo gli **exclusive locks** devono essere mantenuti fino al commit/abort.

Gli **shared locks** possono essere rilasciati prima, purché venga rispettata la regola del 2PL.

Esempio:

```text
sl1(x) r1(x) u1(x) xl2(x) w2(x) c2 u2(x) c1
```

Qui `T1` prende uno shared lock su `x`, legge `x`, poi rilascia `x` prima del commit.

Questo può ancora essere Strict 2PL, perché `T1` aveva solo uno shared lock, non un exclusive lock.

Però guarda il data schedule:

```text
r1(x) w2(x) c2 c1
```

Questo schedule è:

```text
strict: sì
rigorous: no
```

Perché `r1(x)` e `w2(x)` sono in conflitto, ma `c1` non sta prima di `w2(x)`.

Questo esempio serve per capire la differenza:

```text
Strict 2PL garantisce strictness,
ma non necessariamente rigorousness.
```

---

# 8. Strong Strict Two-Phase Locking

Lo **Strong Strict 2PL**, chiamato anche **SS2PL**, è più forte.

Regola:

```text
Tutti i lock, sia shared sia exclusive, devono essere mantenuti fino al commit o abort.
```

Quindi non solo:

```text
xl_i(x) ... c_i/a_i ... u_i(x)
```

ma anche:

```text
sl_i(x) ... c_i/a_i ... u_i(x)
```

In parole semplici:

```text
Una transazione non rilascia nessun lock prima di terminare.
```

---

# 9. Esempio Strong Strict 2PL

```text
sl1(x) r1(x) xl1(y) w1(y) c1 u1(x) u1(y)
```

Qui `T1` mantiene sia lo shared lock su `x` sia l’exclusive lock su `y` fino al commit.
Dopo che viene effettuato il commit allora si puo fare **unlock**. 
Quindi:

```text
Questo schedule rispetta Strong Strict 2PL.
```

---

# 10. Esempio Strict 2PL ma NON Strong Strict 2PL

```text
sl1(x) r1(x) u1(x) xl2(x) w2(x) c2 u2(x) c1
```

Analizziamo:

`T1` prende uno shared lock:

```text
sl1(x)
```

poi lo rilascia prima del commit:

```text
u1(x) ... c1
```

Questo non viola Strict 2PL, **perché non è un exclusive lock.**

Ma viola Strong Strict 2PL, perché Strong Strict 2PL richiede di mantenere **tutti** i lock fino al commit.

Quindi:

```text
Strict 2PL: sì
Strong Strict 2PL: no
```

---

# 11. Cosa garantisce Strong Strict 2PL?

Strong Strict 2PL garantisce:

```text
Strong Strict 2PL => rigorous schedule
```

E quindi automaticamente:

```text
Strong Strict 2PL => strict schedule
Strong Strict 2PL => ACR
Strong Strict 2PL => recoverable
Strong Strict 2PL => conflict-serializable
```

La catena completa è:

```text
Strong Strict 2PL => Rigorous => Strict => ACR => Recoverable
```

E, separatamente:

```text
Strong Strict 2PL => 2PL => Conflict-serializable
```

---

# 12. Differenza tra Strict 2PL e Strong Strict 2PL

|Protocollo|Regola|Garantisce|
|---|---|---|
|**2PL**|Dopo il primo unlock non puoi più prendere lock|Conflict-serializable|
|**Strict 2PL**|Come 2PL + tieni gli exclusive locks fino a commit/abort|Strict + conflict-serializable|
|**Strong Strict 2PL**|Come 2PL + tieni tutti i lock fino a commit/abort|Rigorous + strict + conflict-serializable|

La differenza chiave è:

```text
Strict 2PL:
mantiene fino al commit solo gli exclusive locks

Strong Strict 2PL:
mantiene fino al commit tutti i locks
```

---

# 13. Collegamento con strict e rigorous schedule

Qui devi distinguere bene tra **protocollo** e **proprietà dello schedule**.

## Strict 2PL

È un protocollo di locking.

Regola:

```text
mantieni gli exclusive locks fino al commit/abort
```

Conseguenza:

```text
lo schedule prodotto è strict
```

---

## Strict schedule

È una proprietà del data schedule.

Regola:

```text
non puoi leggere o sovrascrivere valori scritti da transazioni non committate
```

---

## Strong Strict 2PL

È un protocollo di locking.

Regola:

```text
mantieni tutti i locks fino al commit/abort
```

Conseguenza:

```text
lo schedule prodotto è rigorous
```

---

## Rigorous schedule

È una proprietà del data schedule.

Regola:

```text
per ogni conflitto ai < bj,
il commit ci deve stare tra ai e bj
```

---

# 14. Metodo da esame

Se ti danno uno schedule con lock e ti chiedono se è Strict 2PL o Strong Strict 2PL, fai così.

## Step 1: controlla 2PL

Per ogni transazione:

```text
nessun lock dopo il primo unlock
```

Se viola 2PL, **allora non può essere né Strict 2PL né Strong Strict 2PL.**

---

## Step 2: controlla Strict 2PL

Per ogni exclusive lock:

```text
xl_i(x)
```

controlla che l’unlock corrispondente:

```text
u_i(x)
```

avvenga solo dopo:

```text
c_i oppure a_i
```

Se trovi:

```text
xl_i(x) ... u_i(x) ... c_i
```

allora non è Strict 2PL.

---

## Step 3: controlla Strong Strict 2PL

Per ogni lock, sia shared sia exclusive:

```text
sl_i(x)
xl_i(x)
```

controlla che venga rilasciato solo dopo commit/abort.

Se trovi:

```text
sl_i(x) ... u_i(x) ... c_i
```

allora non è Strong Strict 2PL.

---

# 15. Esempio completo

Considera:

```text
S = sl1(x) r1(x) u1(x) xl2(x) w2(x) c2 u2(x) c1
```

## 2PL

Per `T1`:

```text
sl1(x) u1(x)
```

Dopo `u1(x)`, `T1` non prende altri lock.

Per `T2`:

```text
xl2(x) u2(x)
```

Va bene.

Quindi:

```text
2PL: sì
```

## Strict 2PL

`T2` ha un exclusive lock:

```text
xl2(x) ... c2 u2(x)
```

lo rilascia dopo commit.

`T1` ha solo shared lock, quindi può rilasciarlo prima del commit.

Quindi:

```text
Strict 2PL: sì
```

## Strong Strict 2PL

`T1` rilascia uno shared lock prima del commit:

```text
sl1(x) r1(x) u1(x) ... c1
```

Quindi:

```text
Strong Strict 2PL: no
```

---

# 16. Riassunto da memorizzare

```text
2PL:
all locks before all unlocks.
Guarantees conflict-serializability.
```

```text
Strict 2PL:
2PL + all exclusive locks are held until commit/abort.
Guarantees strict schedules and conflict-serializability.
```

```text
Strong Strict 2PL:
2PL + all locks, both shared and exclusive, are held until commit/abort.
Guarantees rigorous schedules and conflict-serializability.
```

La frase più importante è:

```text
Strict 2PL mantiene fino al commit solo i lock esclusivi.
Strong Strict 2PL mantiene fino al commit tutti i lock.
```

---

# 17. Mini-esercizi immediati

Prova a classificare questi tre schedule con lock:

## A

```text
xl1(x) w1(x) c1 u1(x) xl2(x) r2(x) c2 u2(x)
```

Domande:

```text
2PL? Yes
Strict 2PL? Yes
Strong Strict 2PL? yes
```

## B

```text
sl1(x) r1(x) u1(x) xl2(x) w2(x) c2 u2(x) c1
```

Domande:

```text
2PL? Yes
Strict 2PL? YES
Strong Strict 2PL? NO because u1(x) before c1
```

## C

```text
xl1(x) w1(x) u1(x) xl2(x) r2(x) c2 u2(x) c1
```

Domande:

```text
2PL? Yes
Strict 2PL? No
Strong Strict 2PL? No
```

Questi tre fissano subito la differenza tra **2PL**, **Strict 2PL** e **Strong Strict 2PL**.