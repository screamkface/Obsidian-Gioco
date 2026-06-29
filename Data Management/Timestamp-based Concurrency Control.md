Perfetto. Il **timestamp-based concurrency control** è il prossimo grande metodo dopo il locking.

Con il locking dicevamo:

```text
uso lock per controllare chi può leggere/scrivere
```

Con il timestamp invece l’idea è diversa:

```text
non uso i lock per decidere l’ordine logico;
assegno un timestamp a ogni transazione
e obbligo lo schedule a comportarsi come se le transazioni fossero eseguite in quell’ordine.
```

Le slide dicono proprio che ogni transazione riceve un timestamp unico `ts(T)` e che, se `Ti` arriva prima di `Tj`, allora `ts(Ti) < ts(Tj)`. **Lo scheduler forza gli schedule a rispettare questo ordine logico.**

---

# 1. Idea fondamentale

A ogni transazione assegniamo un timestamp.

Di solito negli esercizi vale:

```text
ts(T1) = 1
ts(T2) = 2
ts(T3) = 3
...
```

Quindi l’ordine seriale imposto è:

```text
T1 -> T2 -> T3 -> ...
```

Il timestamp-based scheduler accetta un’azione solo se è compatibile con questo ordine.

Esempio:

```text
w2(x) r1(x)
```

Fisicamente succede prima `w2(x)` e poi `r1(x)`.

Ma **logicamente**, siccome:

```text
ts(T1) < ts(T2)
```

`T1` dovrebbe venire prima di `T2`.

Quindi `r1(x)` arriva troppo tardi: `T1` sta cercando di leggere `x` dopo che una transazione più giovane, `T2`, lo ha già scritto.

Risultato:

```text
r1(x) viene rifiutata
T1 viene abortita
```

---

# 2. Differenza rispetto a 2PL

> 2PL aspetti il lock, con i timestamp abortisci

Con **2PL**:

```text
se non puoi accedere a un dato, aspetti il lock
```

Con **timestamp**:

```text
se arrivi troppo tardi rispetto all’ordine logico, vieni abortito
```

Quindi il timestamp scheduler non costruisce l’ordine seriale guardando il grafo dei conflitti. L’ordine seriale è già deciso dai timestamp.

Tabella mentale:

|Aspetto|2PL|Timestamp|
|---|---|---|
|Meccanismo|Lock|Timestamp|
|Ordine seriale|Dipende dai conflitti|Dipende da `ts(T)`|
|Problema tipico|Deadlock|Abort/restart|
|Se un’azione non va bene|Aspetta lock|Abort oppure Thomas rule|
|Quando conviene|Molti conflitti|Pochi conflitti / molte read-only|

Le slide confrontano proprio i due metodi: 2PL **usa lock e può bloccare molte transazioni**; il timestamp **non usa lock per decidere l’ordine logico, può abortire e far ripartire transazioni, e l’ordine seriale dipende dai timestamp.**

---

# 3. Informazioni mantenute per ogni oggetto X

Per ogni elemento del database `X`, il timestamp scheduler mantiene quattro valori:

```text
rts(X)
wts(X)
wts-c(X)
cb(X)
```

Vediamoli bene.

---

## rts(X)

```text
rts(X) = read timestamp of X
```

È il massimo timestamp tra le transazioni che hanno letto `X`.

In pratica:

```text
rts(X) = timestamp della transazione più giovane che ha letto X
```

Esempio:

```text
r2(x)
r5(x)
r3(x)
```

Allora:

```text
rts(x) = 5
```

Perché `T5` è la **transazione con timestamp più alto che ha letto** `x`.

---

## wts(X)

```text
wts(X) = write timestamp of X
```

È il timestamp dell’ultima transazione che ha scritto `X`.

Esempio:

```text
w2(x)
w7(x)
```

Allora:

```text
wts(x) = 7
```

Perché l’ultima write logica su `x` è stata fatta da `T7`.

---

## wts-c(X)

```text
wts-c(X) = committed write timestamp of X
```

È il timestamp dell’ultima transazione **committata** che ha scritto `X`.

Esempio:

```text
w2(x) c2 w5(x)
```

Se `T5` non ha ancora fatto commit, allora:

```text
wts(x) = 5
wts-c(x) = 2
```

Perché l’ultima write fisica è di `T5`, ma l’ultima write committata è ancora di `T2`.

---

## cb(X)

```text
cb(X) = commit bit
```

Indica se l’ultima write su `X` è stata fatta da una transazione già committata.

```text
cb(X) = true   se l'ultima write su X è committata
cb(X) = false  se l'ultima write su X non è ancora committata
```

Serve per evitare le dirty read. Le slide indicano che per ogni elemento `X` il sistema mantiene `rts(X)`, `wts(X)`, `wts-c(X)` e `cb(X)`, dove il commit-bit è false se l’ultima transazione che ha scritto `X` non ha ancora committato.

---

# 4. Stato iniziale tipico

Negli esercizi spesso ti dicono:

```text
initially, for each element X:
rts(X) = 0
wts(X) = 0
wts-c(X) = 0
cb(X) = true
```

Significa:

```text
all’inizio ogni dato è stato scritto dalla transazione iniziale T0
e quella scrittura è già committata
```

Quindi puoi immaginare:

```text
w0(x) c0
w0(y) c0
...
```

---

# 5. Regola per una read: ri(X)

Quando arriva:

```text
ri(X)
```

devi confrontare:

```text
ts(Ti)
```

con:

```text
wts(X)
```

La domanda è:

```text
Ti sta cercando di leggere X dopo una write di una transazione più giovane?
```

---

## Caso 1: read accettata

Se:

```text
ts(Ti) >= wts(X)
```

allora la read è compatibile con l’ordine timestamp.

Quindi:

```text
ri(X) accettata
rts(X) = max(rts(X), ts(Ti))
```

Esempio:

Stato iniziale:

```text
rts(x)=0, wts(x)=0, cb(x)=true
```

Azione:

```text
r3(x)
```

Controllo:

```text
ts(T3)=3 >= wts(x)=0
```

Quindi:

```text
r3(x) ok
rts(x)=3
```

---

## Caso 2: read too late

Se:

```text
ts(Ti) < wts(X)
```

allora la read arriva troppo tardi.

Significa:

```text
una transazione più giovane ha già scritto X
ma Ti, essendo più vecchia, avrebbe dovuto leggere prima di quella write
```

Quindi:

```text
ri(X) rifiutata
Ti abortita
```

Esempio:

```text
w5(x) r3(x)
```

Dopo `w5(x)`:

```text
wts(x)=5
```

Poi arriva:

```text
r3(x)
```

Controllo:

```text
ts(T3)=3 < wts(x)=5
```

Quindi:

```text
r3(x) no
T3 abort
```

Da esame puoi dire:

```text
r3(x) is a read-too-late action.
```

---

## Caso 3: commit-bit false

C’è un dettaglio importante.

Se:

```text
ts(Ti) >= wts(X)
```

ma:

```text
cb(X) = false
```

significa che l’ultima write su `X` è stata fatta da una transazione non ancora committata.

In questo caso, per evitare dirty read, `Ti` deve aspettare il commit o rollback dell’ultima transazione che ha scritto `X`. Le slide specificano che, se il commit-bit è false, la transazione deve attendere il commit o rollback dell’ultima transazione che ha scritto `X`.

Esempio:

```text
w2(x) r3(x)
```

Dopo `w2(x)`:

```text
wts(x)=2
cb(x)=false
```

Arriva:

```text
r3(x)
```

Controllo timestamp:

```text
ts(T3)=3 >= wts(x)=2
```

Quindi sarebbe compatibile.

Però:

```text
cb(x)=false
```

Quindi `T3` non può leggere subito. Deve aspettare `c2` oppure `a2`.

Se arriva:

```text
c2
```

allora:

```text
cb(x)=true
r3(x) può procedere
```

---

# 6. Regola per una write: wi(X)

Quando arriva:

```text
wi(X)
```

devi controllare due valori:

```text
rts(X)
wts(X)
```

La write può avere tre casi.

---

## Caso 1: write accettata

Se:

```text
ts(Ti) >= rts(X)
```

e:

```text
ts(Ti) >= wts(X)
```

allora la write è compatibile.

Quindi:

```text
wi(X) accettata
wts(X) = ts(Ti)
cb(X) = false
```

Esempio:

Stato:

```text
rts(x)=2
wts(x)=1
```

Azione:

```text
w5(x)
```

Controllo:

```text
5 >= 2
5 >= 1
```

Quindi:

```text
w5(x) ok
wts(x)=5
cb(x)=false
```

---

## Caso 2: write too late rispetto a una read

Se:

```text
ts(Ti) < rts(X)
```

allora una transazione più giovane ha già letto `X`.

Quindi `Ti`, che è più vecchia, non può scrivere `X` adesso, perché avrebbe dovuto farlo prima della read della transazione più giovane.

Risultato:

```text
wi(X) rifiutata
Ti abortita
```

Esempio:

```text
r6(x) w3(x)
```

Dopo `r6(x)`:

```text
rts(x)=6
```

Arriva:

```text
w3(x)
```

Controllo:

```text
ts(T3)=3 < rts(x)=6
```

Quindi:

```text
w3(x) no
T3 abort
```

Questa è una **write too late** grave, perché una transazione più giovane ha già letto un valore che, se `T3` scrivesse ora, sarebbe stato sbagliato rispetto all’ordine seriale.

---

## Caso 3: write obsoleta rispetto a una write più recente

Se:

```text
ts(Ti) >= rts(X)
```

ma:

```text
ts(Ti) < wts(X)
```

allora c’è già una write più recente su `X`.

Quindi la write di `Ti` è ormai obsoleta.

Esempio:

```text
w5(x) w3(x)
```

Dopo `w5(x)`:

```text
wts(x)=5
```

Arriva:

```text
w3(x)
```

Controllo:

```text
ts(T3)=3 < wts(x)=5
```

Però supponiamo:

```text
rts(x) <= 3
```

Allora nessuna transazione più giovane ha letto un valore incompatibile.

In questo caso si può usare la **Thomas write rule**:

```text
la write obsoleta viene ignorata invece di abortire la transazione
```

Le slide dicono che, se `ts(Ti) >= rts(X)` ma `ts(Ti) < wts(X)`, può essere applicata la Thomas write rule: **la write è obsoleta e può essere ignorata.**

---

# 7. Thomas write rule

La **Thomas write rule** serve per non abortire inutilmente.

Idea:

```text
se una write è ormai superata da una write più recente,
non serve eseguirla.
```

Esempio:

```text
w2(x) w5(x) w3(x)
```

Timestamp order:

```text
T2 -> T3 -> T5
```

Ma fisicamente `w5(x)` è già avvenuta prima di `w3(x)`.

Quando arriva:

```text
w3(x)
```

la write di `T3` sarebbe comunque sovrascritta da `T5` nell’ordine seriale finale.

Quindi possiamo ignorarla:

```text
w3(x) ignored by Thomas write rule
```

Attenzione:

```text
ignored ≠ abort
```

La transazione continua, **ma quella write non viene eseguita.**

---

# 8. Riassunto delle regole

Questa è la tabella da memorizzare.

## Read `ri(X)`

|Condizione|Risultato|
|---|---|
|`ts(Ti) >= wts(X)` e `cb(X)=true`|read ok, aggiorna `rts(X)`|
|`ts(Ti) >= wts(X)` e `cb(X)=false`|aspetta commit/abort dell’ultimo writer|
|`ts(Ti) < wts(X)`|read too late, abort `Ti`|

---

## Write `wi(X)`

|Condizione|Risultato|
|---|---|
|`ts(Ti) >= rts(X)` e `ts(Ti) >= wts(X)`|write ok, aggiorna `wts(X)`, `cb(X)=false`|
|`ts(Ti) < rts(X)`|write too late, abort `Ti`|
|`ts(Ti) >= rts(X)` e `ts(Ti) < wts(X)`|Thomas write rule: write ignorata|

---

# 9. Esempio guidato semplice

Supponiamo stato iniziale:

```text
rts(A)=0
wts(A)=0
wts-c(A)=0
cb(A)=true
```

Schedule:

```text
r2(A) r4(A) w3(A) c3
```

---

## Azione 1: `r2(A)`

Controllo:

```text
ts(T2)=2 >= wts(A)=0
cb(A)=true
```

Quindi:

```text
r2(A) ok
rts(A)=2
```

---

## Azione 2: `r4(A)`

Controllo:

```text
ts(T4)=4 >= wts(A)=0
cb(A)=true
```

Quindi:

```text
r4(A) ok
rts(A)=4
```

---

## Azione 3: `w3(A)`

Controllo:

```text
ts(T3)=3 < rts(A)=4
```

Quindi:

```text
w3(A) no
T3 abort
```

Perché `T4`, più giovane di `T3`, ha già letto `A`. Se `T3` scrivesse ora, sarebbe come se nell’ordine seriale `T3` avesse scritto prima della read di `T4`, ma quella read è già stata eseguita senza vedere la write di `T3`.

Quindi `w3(A)` è una write too late.

---

# 10. Esempio con Thomas write rule

Stato iniziale:

```text
rts(A)=0
wts(A)=0
cb(A)=true
```

Schedule:

```text
w5(A) w3(A)
```

---

## Azione 1: `w5(A)`

Controllo:

```text
5 >= rts(A)=0
5 >= wts(A)=0
```

Quindi:

```text
w5(A) ok
wts(A)=5
cb(A)=false
```

---

## Azione 2: `w3(A)`

Controllo:

```text
ts(T3)=3 >= rts(A)=0
ts(T3)=3 < wts(A)=5
```

Quindi non è un problema di read già avvenuta. È solo una write vecchia rispetto a una write più recente.

Con Thomas:

```text
w3(A) ignored
T3 non abortisce per questa azione
```

Senza Thomas, invece, la versione base del timestamp ordering la abortirebbe.

---

# 11. Commit

Quando una transazione `Ti` committa:

```text
ci
```

per ogni oggetto `X` scritto da `Ti`, il sistema aggiorna:

```text
cb(X)=true
wts-c(X)=ts(Ti)
```

Attenzione però: se una write è stata ignorata dalla Thomas rule, non devi aggiornare `wts(X)` per quella write.

Esempio:

```text
w5(A) w3(A) c3
```

Se `w3(A)` è ignorata dalla Thomas rule, allora `c3` non cambia `A`, perché `T3` non ha davvero scritto `A`.

---

# 12. Cosa succede agli abort

Se una transazione viene abortita:

```text
ai
```

tutte le sue azioni vengono eliminate dal risultato finale dello scheduler.

Negli esercizi spesso si chiede:

```text
Describe the behavior of the timestamp-based scheduler.
```

Tu devi scrivere:

```text
questa azione ok
questa azione abortisce T_i
da qui in poi le azioni di T_i vengono ignorate
```

Alla fine, lo schedule prodotto si ottiene togliendo:

```text
azioni delle transazioni abortite
azioni ignorate dalla Thomas rule
```

>Le slide dicono che, senza Thomas rule, lo schedule ottenuto rimuovendo le azioni delle transazioni rollbacked è conflict-serializable; con Thomas, bisogna rimuovere sia le azioni ignorate dalla Thomas rule sia quelle delle transazioni rollbacked.

---

# 13. Collegamento con conflict-serializability

Timestamp-based scheduler garantisce la serializzabilità perché impone un ordine seriale fisso:

```text
ordine dei timestamp
```

Quindi se il sistema accetta tutte le azioni compatibili, lo schedule risultante si comporta come:

```text
T1 -> T2 -> T3 -> ...
```

se i timestamp sono:

```text
1 < 2 < 3 < ...
```

Da ricordare:

```text
Timestamp order = serial order
```

>Però attenzione: ci sono schedule conflict-serializable che non sono accettati dal timestamp scheduler, perché magari il loro ordine seriale equivalente è diverso dall’ordine dei timestamp. Le slide fanno proprio questa osservazione: ci sono schedule conflict-serializable non accettati dal timestamp-based scheduler.

---

# 14. Metodo da esercizio

Quando ti danno uno schedule e ti chiedono il timestamp scheduler, fai sempre così.

## Step 1

Assumi:

```text
ts(Ti)=i
```

se non viene detto diversamente.

---

## Step 2

Prepara tabella per ogni oggetto:

```text
X: rts=0, wts=0, wts-c=0, cb=true
Y: rts=0, wts=0, wts-c=0, cb=true
...
```

---

## Step 3

Leggi lo schedule da sinistra a destra.

Per ogni read:

```text
ri(X)
```

controlla:

```text
ts(Ti) >= wts(X)?
```

Se sì, attenzione al commit-bit.  
Se no, abort.

---

## Step 4

Per ogni write:

```text
wi(X)
```

controlla prima:

```text
ts(Ti) < rts(X)?
```

Se sì:

```text
abort Ti
```

Altrimenti controlla:

```text
ts(Ti) < wts(X)?
```

Se sì:

```text
Thomas write rule: ignore wi(X)
```

Altrimenti:

```text
write ok
wts(X)=ts(Ti)
cb(X)=false
```

---

## Step 5

Per ogni commit:

```text
ci
```

aggiorna gli oggetti scritti da `Ti`:

```text
cb(X)=true
wts-c(X)=ts(Ti)
```

---

# 15. Mini-esempio da esame

Schedule:

```text
S = r1(x) r2(x) w2(x) w1(x) c2 c1
```

Stato iniziale:

```text
rts(x)=0
wts(x)=0
cb(x)=true
```

---

## `r1(x)`

```text
1 >= 0
```

ok:

```text
rts(x)=1
```

---

## `r2(x)`

```text
2 >= 0
```

ok:

```text
rts(x)=2
```

---

## `w2(x)`

Controllo:

```text
2 >= rts(x)=2
2 >= wts(x)=0
```

ok:

```text
wts(x)=2
cb(x)=false
```

---

## `w1(x)`

Controllo:

```text
1 < rts(x)=2
```

Quindi:

```text
w1(x) no
T1 abort
```

Non applichiamo Thomas, perché prima viene il controllo su `rts(x)`: una transazione più giovane, `T2`, ha già letto `x`.

---

## `c2`

`T2` committa:

```text
cb(x)=true
wts-c(x)=2
```

---

## `c1`

`T1` era abortita, quindi:

```text
c1 ignorato
```

Risultato finale:

```text
r2(x) w2(x) c2
```

più eventualmente `r1(x)` se l’esercizio considera le azioni prima dell’abort, ma quando si chiede lo schedule prodotto ignorando le transazioni abortite, si rimuove tutta `T1`.

---

# 16. Frase da memorizzare

```text
The timestamp-based scheduler assigns a timestamp to each transaction and forces the execution to respect the serial order induced by timestamps. A read is rejected if it is too late with respect to the last write. A write is rejected if it is too late with respect to a previous read by a younger transaction; if it is only obsolete with respect to a newer write, the Thomas write rule may ignore it.
```

In italiano:

```text
Il timestamp scheduler assegna un timestamp a ogni transazione e forza lo schedule a rispettare l’ordine seriale dei timestamp. Una read viene rifiutata se arriva troppo tardi rispetto all’ultima write. Una write viene rifiutata se arriva troppo tardi rispetto a una read già fatta da una transazione più giovane; se invece è solo superata da una write più recente, la Thomas write rule può ignorarla.
```

Nel prossimo passo ti conviene fare subito esercizi guidati, perché qui la teoria si fissa solo aggiornando `rts`, `wts`, `cb` azione per azione.

---
Ecco la **check-list mentale** da usare ogni volta negli esercizi sul **timestamp-based scheduler**.

---

# Timestamp-based method: scheduler

## Metadata per ogni elemento `X`

Per ogni oggetto del database `X`, il sistema mantiene:

```text
rts(X)   = read timestamp di X
wts(X)   = write timestamp di X
wts-c(X) = write timestamp committed di X
cb(X)    = commit bit di X
```

Significato:

```text
rts(X)   = massimo timestamp tra le transazioni che hanno letto X
wts(X)   = timestamp dell'ultima transazione che ha scritto X
wts-c(X) = timestamp dell'ultima transazione committata che ha scritto X
cb(X)    = true se l'ultima write su X è committata, false altrimenti
```

Stato iniziale tipico:

```text
rts(X)=0
wts(X)=0
wts-c(X)=0
cb(X)=true
```

---

# Action `ri(X)`

Quando la transazione `Ti` vuole eseguire:

```text
ri(X)
```

il scheduler applica il seguente algoritmo.

```text
if ts(Ti) >= wts(X) then

    if cb(X) = true or ts(Ti) = wts(X) then

        rts(X) = max(ts(Ti), rts(X))
        execute ri(X)

    else

        put Ti in waiting
        Ti waits for the commit or rollback
        of the last transaction that wrote X

else

    rollback(Ti)
```

---

## READ spiegata in modo operativo

Per una read `ri(X)` ragiono così:

```text
1. Controllo timestamp:

   ts(Ti) < wts(X)?

   sì -> rollback(Ti)
   no -> continuo
```

Se:

```text
ts(Ti) >= wts(X)
```

allora la read è compatibile con i timestamp.

A questo punto controllo il commit-bit:

```text
2. cb(X)=true?

   sì -> execute ri(X)
         rts(X)=max(rts(X), ts(Ti))
```

Se invece:

```text
cb(X)=false
```

devo controllare il caso speciale:

```text
3. ts(Ti)=wts(X)?

   sì -> execute ri(X)
         rts(X)=max(rts(X), ts(Ti))

   no -> Ti waits
```

Quindi, in forma compatta:

```text
READ ri(X)

if ts(Ti) < wts(X)
    -> rollback(Ti)

else if cb(X)=true
    -> execute ri(X)
       rts(X)=max(rts(X), ts(Ti))

else if ts(Ti)=wts(X)
    -> execute ri(X)
       rts(X)=max(rts(X), ts(Ti))

else
    -> Ti waits
```

---

# Action `wi(X)`

Quando la transazione `Ti` vuole eseguire:

```text
wi(X)
```

il scheduler applica il seguente algoritmo.

```text
if ts(Ti) >= rts(X) and ts(Ti) >= wts(X) then

    if cb(X) = true then

        wts(X) = ts(Ti)
        cb(X) = false
        execute wi(X)

    else

        put Ti in waiting
        Ti waits for the commit or rollback
        of the last transaction that wrote X

elsesistema mantiene


    if ts(Ti) >= rts(X) and ts(Ti) < wts(X) then

        if cb(X) = true then

            ignore wi(X)

        else

            put Ti in waiting
            Ti waits for the commit or rollback
            of the last transaction that wrote X

    else

        rollback(Ti)
```

---

## WRITE spiegata in modo operativo

Per una write `wi(X)` ragiono così:

```text
1. Controllo se Ti è più vecchia di una read già avvenuta:

   ts(Ti) < rts(X)?

   sì -> rollback(Ti)
   no -> continuo
```

Se non viene abortita, controllo `wts(X)`.

---

## Caso 1: `ts(Ti) >= wts(X)`

La transazione `Ti` non è più vecchia dell'ultima write su `X`.

```text
if ts(Ti) >= rts(X) and ts(Ti) >= wts(X)
```

Ora controllo `cb(X)`.

### Se `cb(X)=true`

```text
execute wi(X)
wts(X)=ts(Ti)
cb(X)=false
```

La write viene eseguita.

`cb(X)` diventa `false` perché `Ti` ha scritto `X`, ma non ha ancora fatto commit.

### Se `cb(X)=false`

```text
Ti waits
```

La write non può essere eseguita subito perché l'ultima write su `X` non è ancora committata.

---

## Caso 2: `ts(Ti) < wts(X)`

La transazione `Ti` è più vecchia dell'ultima write su `X`.

```text
if ts(Ti) >= rts(X) and ts(Ti) < wts(X)
```

Ora controllo `cb(X)`.

### Se `cb(X)=true`

```text
ignore wi(X)
```

Questa è la **Thomas write rule**.

La write viene ignorata perché è obsoleta, ma `Ti` non abortisce.

### Se `cb(X)=false`

```text
Ti waits
```

Non posso ancora applicare Thomas, perché la write più recente non è ancora committata.

---

## WRITE in forma compatta

```text
WRITE wi(X)

if ts(Ti) < rts(X)
    -> rollback(Ti)

else if ts(Ti) >= wts(X) then

    if cb(X)=true
        -> execute wi(X)
           wts(X)=ts(Ti)
           cb(X)=false

    else
        -> Ti waits

else if ts(Ti) < wts(X) then

    if cb(X)=true
        -> ignore wi(X)          // Thomas write rule

    else
        -> Ti waits
```

---

# Commit `ci`

Quando la transazione `Ti` esegue:

```text
ci
```

per ogni elemento `X` scritto da `Ti`:

```text
cb(X)=true
wts-c(X)=ts(Ti)
```

Poi, per ogni transazione `Tj` che stava aspettando:

```text
allow Tj to proceed
```

Cioè le transazioni in waiting possono ripartire.

Il sistema sceglie quale transazione far procedere.

---

## COMMIT in forma operativa

```text
COMMIT ci

for each X written by Ti do

    cb(X)=true
    wts-c(X)=ts(Ti)

for each Tj waiting for X do

    allow Tj to proceed
```

Quando una transazione in waiting riparte, la sua azione deve essere ricontrollata da capo usando i valori aggiornati di:

```text
rts(X), wts(X), wts-c(X), cb(X)
```

---

# Rollback `bi`

Quando la transazione `Ti` esegue il rollback:

```text
bi
```

per ogni elemento `X` scritto da `Ti`:

```text
wts(X)=wts-c(X)
cb(X)=true
```

Cioè si torna all'ultima write committata su `X`.

Poi, per ogni transazione `Tj` che stava aspettando:

```text
allow Tj to proceed
```

Il sistema sceglie quale transazione far procedere.

---

## ROLLBACK in forma operativa

```text
ROLLBACK bi

for each X written by Ti do

    wts(X)=wts-c(X)
    cb(X)=true

for each Tj waiting for X do

    allow Tj to proceed
```

---

# Regole mentali finali

## READ

```text
READ ri(X)

1. ts(Ti) < wts(X)?
   sì -> rollback(Ti)

2. cb(X)=true?
   sì -> execute ri(X)
         rts(X)=max(rts(X), ts(Ti))

3. cb(X)=false ma ts(Ti)=wts(X)?
   sì -> execute ri(X)
         rts(X)=max(rts(X), ts(Ti))

4. cb(X)=false e ts(Ti)>wts(X)?
   sì -> Ti waits
```

---

## WRITE

```text
WRITE wi(X)

1. ts(Ti) < rts(X)?
   sì -> rollback(Ti)

2. ts(Ti) >= wts(X) e cb(X)=true?
   sì -> execute wi(X)
         wts(X)=ts(Ti)
         cb(X)=false

3. ts(Ti) >= wts(X) e cb(X)=false?
   sì -> Ti waits

4. ts(Ti) < wts(X) e cb(X)=true?
   sì -> ignore wi(X)
         Thomas write rule

5. ts(Ti) < wts(X) e cb(X)=false?
   sì -> Ti waits
```

---

# Differenza importante

```text
rollback(Ti)
```

significa che la transazione viene abortita.

```text
ignore wi(X)
```

significa che solo quella write viene ignorata, ma la transazione continua.

```text
Ti waits
```

significa che la transazione non è né abortita né accettata: aspetta il commit o rollback dell'ultima transazione che ha scritto X.