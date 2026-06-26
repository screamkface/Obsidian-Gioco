Perfetto, ora siamo nella parte **recovery**: non stiamo più chiedendo solo “lo schedule è serializzabile?”, ma:

> se una transazione abortisce, il sistema riesce a recuperare senza lasciare inconsistenze?

Quindi qui entrano:

```text
Recoverable schedule
ACR / Avoid Cascading Rollback
Strict schedule
Rigorous schedule
```

---

# 1. Il problema della recoverability

Finora spesso assumevamo che tutte le transazioni facessero `commit`. Però nella realtà una transazione può anche fare `abort` o `rollback`.

Il problema nasce quando una transazione legge un valore scritto da un’altra transazione **non ancora committata**.

Esempio:

```text
S = w1(A) r2(A) a1
```

Significa:

```text
T1 scrive A
T2 legge A scritto da T1
T1 abortisce
```

Il problema è: `T2` ha letto un valore che, dopo l’abort di `T1`, non dovrebbe più esistere.

Quindi anche `T2` dovrebbe essere annullata.

Questo può causare il cosiddetto **cascading rollback**, cioè una catena di rollback. Nei tuoi appunti viene indicato proprio che se una transazione legge un valore scritto da una transazione non ancora committata, e quest’ultima abortisce, **anche la transazione che ha letto può dover abortire.**

---

# 2. Non-recoverable schedule

Uno schedule è **non recoverable** quando una transazione committa dopo aver letto da una transazione che poi non ha ancora committato.

Esempio:

```text
S = w1(A) r2(A) c2 a1
```

Leggiamolo:

```text
T1 scrive A
T2 legge A scritto da T1
T2 committa
T1 abortisce
```

Questo è gravissimo.

Perché `T2` ha fatto commit usando un valore sporco, cioè un valore prodotto da `T1`, ma poi `T1` abortisce.

Il DBMS non può più sistemare facilmente la situazione, perché `T2` è già stata confermata.

Quindi:

```text
S non è recoverable
```

Da ricordare:

```text
Non recoverable = una transazione committa prima della transazione da cui ha letto.
```

---

# 3. Recoverable schedule

Uno schedule è **recoverable** se nessuna transazione committa prima delle transazioni da cui ha letto.

Formula:

```text
se Ti legge da Tj, allora cj < ci
```

Cioè:

```text
Ti può committare solo dopo che Tj ha committato
```

Esempio recoverable:

```text
S = w1(A) r2(A) c1 c2
```

Qui:

```text
T2 legge da T1
T1 committa
T2 committa
```

Quindi va bene.

Perché se `T1` committa prima di `T2`, allora il valore letto da `T2` è stato confermato.

Conclusione:

```text
S è recoverable
```

La definizione negli appunti è proprio: uno schedule è recoverable se nessuna transazione committa prima delle transazioni da cui ha letto; se `Ti` legge da `Tj`, deve valere `cj < ci`.

---

# 4. Recoverable non basta

Attenzione: uno schedule recoverable può comunque avere problemi.

Esempio:

```text
S = w1(A) r2(A) r3(A) a1
```

Qui:

```text
T1 scrive A
T2 legge A da T1
T3 legge A da T1
T1 abortisce
```

A questo punto anche `T2` e `T3` devono abortire, perché hanno letto un valore annullato.

Quindi lo schedule può essere recuperabile, ma causare comunque **cascading rollback**.

La recoverability evita il problema più grave, cioè il commit di una transazione dipendente da una transazione abortita. Però non impedisce che una transazione legga dati non committati.

---

# 5. ACR — Avoid Cascading Rollback

ACR significa:

```text
Avoid Cascading Rollback
```

Uno schedule è **ACR** se ogni transazione legge solo valori scritti da transazioni che hanno già committato.

Formula:

```text
se Ti legge da Tj, allora cj < ri(X)
```

Cioè:

```text
Tj deve committare prima che Ti legga il valore scritto da Tj
```

Esempio ACR:

```text
S = w1(A) c1 r2(A) c2
```

Qui:

```text
T1 scrive A
T1 committa
T2 legge A
T2 committa
```

Quindi `T2` legge solo dopo il commit di `T1`.

Conclusione:

```text
S è ACR
```

Negli appunti: uno schedule evita cascading rollback se ogni transazione legge solo valori scritti da transazioni già committate; se `Ti` legge da `Tj`, deve valere `cj < ri(X)`.

---

# 6. Differenza tra recoverable e ACR

Questa è fondamentale.

## Recoverable

Controlla l’ordine dei commit:

```text
Ti legge da Tj  =>  cj < ci
```

Quindi `Ti` può leggere un valore sporco, basta che non committi prima di `Tj`.

Esempio recoverable ma non ACR:

```text
S = w1(A) r2(A) c1 c2
```

È recoverable perché:

```text
c1 < c2
```

Ma non è ACR perché:

```text
r2(A)
```

avviene prima di `c1`.

Quindi `T2` legge da `T1` quando `T1` non ha ancora committato.

---

## ACR

Controlla l’ordine della lettura:

```text
Ti legge da Tj  =>  cj < ri(X)
```

Quindi la lettura di dati sporchi è vietata.

Da ricordare:

```text
ACR è più forte di Recoverable.
```

Infatti:

```text
ACR => Recoverable
```

---

# 7. Strict schedule

Uno schedule è **strict** se una transazione può leggere o scrivere un dato solo se l’ultima transazione che ha scritto quel dato ha già committato.

In parole semplici:

```text
non puoi leggere dati non committati
non puoi sovrascrivere dati non committati
```

Quindi strict vieta due cose:

```text
1. leggere un valore scritto da una transazione non committata
2. sovrascrivere un valore scritto da una transazione non committata
```

Esempio non strict:

```text
S = w1(A) w2(A) c1 c2
```

Qui `T2` scrive `A` dopo che `T1` ha scritto `A`, ma prima che `T1` abbia committato.

Quindi `T2` sta sovrascrivendo un valore scritto da una transazione non ancora committata.

Conclusione:

```text
S non è strict
```

Negli appunti: uno schedule strict impone che ogni transazione legga e scriva solo valori scritti da transazioni già committate; quindi non può né leggere né sovrascrivere un valore scritto da una transazione non committata.

---

# 8. Strict è più forte di ACR

ACR controlla solo le letture.

Strict controlla:

```text
letture + scritture
```

Esempio ACR ma non strict:

```text
S = w1(A) w2(A) c1 c2
```

Qui non ci sono letture, quindi non c’è cascading rollback dovuto a una read.

Però non è strict, perché `T2` sovrascrive `A` mentre `T1` non ha ancora committato.

Quindi:

```text
S può essere ACR ma non strict
```

Da ricordare:

```text
Strict => ACR => Recoverable
```

---

# 9. Rigorous schedule

Uno schedule è **rigorous** se, per ogni coppia di azioni in conflitto, la seconda può avvenire solo dopo il commit della transazione della prima.

Formalmente:

```text
se ai è di Ti
bj è di Tj
ai precede bj
ai e bj sono in conflitto
allora ci deve stare tra ai e bj
```

In parole semplici:

> se una transazione usa un dato in modo che crea conflitto, mantiene il controllo fino al commit.

Esempio:

```text
S = w1(A) c1 r2(A) c2
```

`w1(A)` e `r2(A)` sono in conflitto.

Tra loro c’è:

```text
c1
```

Quindi va bene.

Esempio non rigorous:

```text
S = r1(A) w2(A) c1 c2
```

`r1(A)` e `w2(A)` sono in conflitto.

Per essere rigorous, tra `r1(A)` e `w2(A)` dovrebbe esserci `c1`.

Ma non c’è.

Quindi:

```text
S non è rigorous
```

Negli appunti viene definito rigorous proprio così: per ogni coppia di azioni conflittuali `ai` e `bj`, se `ai` viene prima di `bj`, allora il commit `ci` deve comparire tra `ai` e `bj`.

---

# 10. Gerarchia

La gerarchia è:

```text
Rigorous ⊆ Strict ⊆ ACR ⊆ Recoverable
```

Oppure da leggere così:

```text
Rigorous => Strict => ACR => Recoverable
```

Quindi:

```text
se è rigorous, allora è anche strict
se è strict, allora è anche ACR
se è ACR, allora è anche recoverable
```

Ma il contrario non vale sempre.

Gli appunti riportano questa gerarchia tra recoverable, ACR, strict e rigorous.

---

# 11. Collegamento con serializzabilità

Questa parte è importantissima.

Recoverability, ACR, strict e rigorous parlano di **recovery**, non direttamente di serializzabilità.

Quindi uno schedule può essere:

```text
conflict-serializable ma non recoverable
```

oppure:

```text
recoverable ma non conflict-serializable
```

Sono due famiglie di proprietà diverse.

- **Serializability**: riguarda la correttezza dell’interleaving.
    
- **Recoverability**: riguarda cosa succede se una transazione abortisce.
    

Da esame conviene scriverlo chiaramente:

```text
These properties are related to recovery, not directly to serializability.
```

---

# 12. Metodo da esercizio

Quando ti chiedono:

```text
Is S recoverable?
Is S ACR?
Is S strict?
Is S rigorous?
```

procedi così.

## Step 1: calcola i reads-from

Guarda ogni read:

```text
ri(X)
```

e chiediti:

```text
da quale write precedente legge?
```

Esempio:

```text
w1(A) r2(A)
```

Allora:

```text
r2(A) reads-from w1(A)
```

Quindi `T2` dipende da `T1`.

---

## Step 2: recoverable

Per ogni dipendenza:

```text
Ti legge da Tj
```

controlla:

```text
cj < ci
```

Se sì per tutte, è recoverable.

Se trovi anche solo un caso:

```text
ci < cj
```

allora non è recoverable.

---

## Step 3: ACR

Per ogni read-from:

```text
Ti legge da Tj tramite ri(X)
```

controlla:

```text
cj < ri(X)
```

Cioè `Tj` deve aver committato prima della lettura.

Se una transazione legge da una transazione non ancora committata, non è ACR.

---

## Step 4: strict

Controlla tutte le read e tutte le write.

Una transazione **non può**:

```text
leggere un valore scritto da una transazione non committata
sovrascrivere un valore scritto da una transazione non committata
```

Quindi devi guardare anche coppie write-write.

Esempio:

```text
w1(A) w2(A)
```

Se `c1` non sta prima di `w2(A)`, allora non è strict.

---

## Step 5: rigorous

Guarda tutti i conflitti.

Per ogni conflitto:

```text
azione di Ti prima di azione di Tj
```

deve esserci:

```text
ci
```

tra le due azioni.

Se manca, non è rigorous.

Il tuo file degli step d’esame riassume la procedura così: calcolare i reads-from, controllare `cj < ci` per recoverable, `cj < ri(X)` per ACR, poi verificare strict e rigorous sui valori scritti da transazioni non committate e sui conflitti.

---

# 13. Riassunto secco

```text
Recoverable:
Ti legge da Tj  =>  cj < ci
```

```text
ACR:
Ti legge da Tj  =>  cj < ri(X)
```

```text
Strict:
non si leggono né si sovrascrivono valori scritti da transazioni non committate
```

```text
Rigorous:
per ogni conflitto ai < bj, il commit ci deve stare tra ai e bj
```

Gerarchia:

```text
Rigorous => Strict => ACR => Recoverable
```

Frase da ricordare:

```text
Recoverable evita commit sbagliati.
ACR evita cascading rollback.
Strict semplifica il rollback.
Rigorous è ancora più forte e mantiene l’ordine dei conflitti fino al commit.
```