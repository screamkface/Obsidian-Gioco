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

# 1. Prima di iniziare

Chiediti:

```text
Quali sono i timestamp delle transazioni?
```

Di solito:

```text
TS(T1)=1
TS(T2)=2
TS(T3)=3
...
```

Oppure, negli esercizi d’esame recenti, il timestamp viene assegnato **quando la transazione compare per la prima volta**.

Poi scrivi lo stato iniziale degli oggetti:

```text
rts(x)=0
wts(x)=0
wts-c(x)=0
cb(x)=true
```

per ogni oggetto coinvolto, ad esempio `x`, `y`, `z`.

---

# 2. Prima domanda per ogni azione

Per ogni operazione dello schedule, chiediti prima:

```text
La transazione è già stata abortita?
```

Se sì:

```text
ignoro questa azione
```

Esempio:

```text
r1(x) viene rifiutata -> T1 abortisce
...
c1
```

Allora:

```text
c1 viene ignorato
```

perché `T1` era già abortita.

---

# 3. Se l’azione è una read `ri(x)`

Quando vedi:

```text
ri(x)
```

devi chiederti:

## Domanda 1

```text
TS(Ti) < wts(x)?
```

Se sì:

```text
read too late
Ti abortisce
```

Perché `Ti` sta cercando di leggere `x` dopo che una transazione più giovane ha già scritto `x`.

Esempio:

```text
w2(x) r1(x)
```

Dopo `w2(x)`:

```text
wts(x)=2
```

Poi arriva `r1(x)`:

```text
TS(T1)=1 < wts(x)=2
```

Quindi:

```text
r1(x) refused
T1 aborts
```

---

## Domanda 2

Se invece:

```text
TS(Ti) >= wts(x)
```

allora chiediti:

```text
cb(x) = true?
```

Se `cb(x)=true`, la read può procedere.

Aggiorni:

```text
rts(x)=max(rts(x), TS(Ti))
```

Se `cb(x)=false`, significa che l’ultima write su `x` non è ancora committata.

Quindi la transazione deve aspettare:

```text
commit oppure abort dell'ultima transazione che ha scritto x
```

---

## Schema per read

```text
ri(x)

1. Ti è già abortita?
   sì -> ignora ri(x)

2. TS(Ti) < wts(x)?
   sì -> read too late -> abort Ti

3. cb(x)=false?
   sì -> Ti aspetta commit/abort dell'ultimo writer

4. altrimenti:
   read accepted
   rts(x)=max(rts(x), TS(Ti))
```

---

# 4. Se l’azione è una write `wi(x)`

Quando vedi:

```text
wi(x)
```

devi chiederti prima la cosa più importante.

## Domanda 1

```text
TS(Ti) < rts(x)?
```

Se sì:

```text
write too late
Ti abortisce
```

Perché una transazione più giovane ha già letto `x`.

Esempio:

```text
r2(x) w1(x)
```

Dopo `r2(x)`:

```text
rts(x)=2
```

Poi arriva `w1(x)`:

```text
TS(T1)=1 < rts(x)=2
```

Quindi:

```text
w1(x) refused
T1 aborts
```

Qui **Thomas write rule non si applica**, perché il problema è una read già avvenuta.

---

## Domanda 2

Se invece:

```text
TS(Ti) >= rts(x)
```

allora chiediti:

```text
TS(Ti) < wts(x)?
```

Se sì, la write è vecchia rispetto a una write più recente.

In questo caso:

```text
Thomas write rule
wi(x) viene ignorata
Ti NON abortisce
```

Attenzione:

```text
ignored ≠ abort
```

La transazione continua, ma quella write non modifica il database.

---

## Domanda 3

Se invece:

```text
TS(Ti) >= rts(x)
TS(Ti) >= wts(x)
```

allora la write viene accettata.

Aggiorni:

```text
wts(x)=TS(Ti)
cb(x)=false
```

Perché `Ti` ha scritto `x`, ma non ha ancora committato.

---

## Schema per write

```text
wi(x)

1. Ti è già abortita?
   sì -> ignora wi(x)

2. TS(Ti) < rts(x)?
   sì -> write too late -> abort Ti

3. TS(Ti) < wts(x)?
   sì -> Thomas write rule -> ignora wi(x), ma Ti continua

4. altrimenti:
   write accepted
   wts(x)=TS(Ti)
   cb(x)=false
```

---

# 5. Se l’azione è un commit `ci`

Quando vedi:

```text
ci
```

chiediti:

```text
Ti è già abortita?
```

Se sì:

```text
ci viene ignorato
```

Se no, chiediti:

```text
Ti ha scritto qualche oggetto?
```

Se non ha scritto nulla:

```text
commit accepted
nessun metadata cambia
```

Se ha scritto, per ogni oggetto `x` scritto da `Ti` aggiorni:

```text
cb(x)=true
wts-c(x)=TS(Ti)
```

---

## Schema per commit

```text
ci

1. Ti è già abortita?
   sì -> ignora ci

2. Ti ha scritto oggetti?
   no -> commit accepted, nessun cambio

3. Ti ha scritto x?
   sì -> cb(x)=true
         wts-c(x)=TS(Ti)
```

---

# 6. Se l’azione è un abort `ai`

Quando vedi:

```text
ai
```

chiediti:

```text
Ti aveva scritto qualche oggetto?
```

Se sì, quelle write vengono annullate.

Negli esercizi base spesso basta scrivere:

```text
Ti aborts
all actions of Ti are removed from the resulting schedule
```

Poi, nel risultato finale, elimini tutte le azioni di `Ti`.

---

# 7. Domande finali dopo aver analizzato tutto

Alla fine chiediti:

```text
Quali transazioni sono abortite?
```

Poi:

```text
Quali write sono state ignorate da Thomas?
```

Poi costruisci lo schedule finale:

```text
tolgo tutte le azioni delle transazioni abortite
tolgo le write ignorate da Thomas
```

Infine, se richiesto:

```text
lo schedule finale è rigorous?
```

Per controllare rigorous:

```text
per ogni conflitto ai < bj,
il commit ci deve stare tra ai e bj
```

---

# 8. Mini-tabella da memorizzare

```text
READ ri(x):

TS(Ti) < wts(x)
    -> abort Ti

TS(Ti) >= wts(x) and cb(x)=false
    -> wait

TS(Ti) >= wts(x) and cb(x)=true
    -> accept, rts(x)=max(rts(x), TS(Ti))
```

```text
WRITE wi(x):

TS(Ti) < rts(x)
    -> abort Ti

TS(Ti) >= rts(x) and TS(Ti) < wts(x)
    -> Thomas write rule, ignore wi(x)

TS(Ti) >= rts(x) and TS(Ti) >= wts(x)
    -> accept, wts(x)=TS(Ti), cb(x)=false
```

```text
COMMIT ci:

if Ti aborted
    -> ignore ci

else, for every x written by Ti:
    cb(x)=true
    wts-c(x)=TS(Ti)
```

---

# 9. Frase mentale velocissima

Ogni volta pensa così:

```text
Read:
sto leggendo dopo una write troppo giovane?

Write:
sto scrivendo dopo una read troppo giovane?
se no, sto scrivendo sopra una write più giovane?

Commit:
la transazione era abortita?
se no, confermo le sue write.
```

---
# Timestamp-based scheduler — Tabella corretta da memorizzare

## Stato mantenuto per ogni oggetto `X`

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

# Regola generale importantissima

Prima di processare qualsiasi azione di `Ti`, chiediti:

```text
Ti è già abortita?
```

Se sì:

```text
ignora l'azione
```

Esempio:

```text
r1(X) viene rifiutata -> T1 abortisce
...
c1
```

Allora:

```text
c1 viene ignorato
```

---

# READ `ri(X)`

Quando arriva:

```text
ri(X)
```

segui questo ordine.

## 1. Controllo timestamp

```text
TS(Ti) < wts(X)?
```

Se sì:

```text
read too late
abort Ti
```

Motivo:

```text
Ti è più vecchia dell'ultima transazione che ha scritto X.
Quindi Ti avrebbe dovuto leggere prima di quella write.
```

---

## 2. Controllo commit-bit

Se invece:

```text
TS(Ti) >= wts(X)
```

allora la read è compatibile con i timestamp.

Ora controlla:

```text
cb(X) = true?
```

### Se `cb(X)=true`

La read viene accettata:

```text
accept ri(X)
rts(X)=max(rts(X), TS(Ti))
```

### Se `cb(X)=false`

La read non può ancora leggere.

```text
Ti waits
```

Motivo:

```text
l'ultima write su X non è ancora committata
```

Attenzione:

```text
non aggiornare ancora rts(X)
```

Quando l'ultima transazione che ha scritto `X` farà commit o rollback, `Ti` verrà risvegliata e dovrai ricontrollare `ri(X)` da capo.

---

## Tabella READ

```text
READ ri(X)

1. Ti già abortita?
   sì -> ignora ri(X)

2. TS(Ti) < wts(X)?
   sì -> abort Ti

3. TS(Ti) >= wts(X) e cb(X)=false?
   sì -> Ti waits
         non aggiornare rts(X)

4. TS(Ti) >= wts(X) e cb(X)=true?
   sì -> accept ri(X)
         rts(X)=max(rts(X), TS(Ti))
```

---

# WRITE `wi(X)`

Quando arriva:

```text
wi(X)
```

segui questo ordine.

## 1. Controllo su `rts(X)`

```text
TS(Ti) < rts(X)?
```

Se sì:

```text
write too late
abort Ti
```

Motivo:

```text
una transazione più giovane ha già letto X.
Ti, essendo più vecchia, avrebbe dovuto scrivere prima di quella read.
```

Questo è il caso più grave.

Attenzione:

```text
se TS(Ti) < rts(X), Thomas write rule NON si applica.
```

---

## 2. Controllo su `wts(X)`

Se invece:

```text
TS(Ti) >= rts(X)
```

allora guardi `wts(X)`.

### Caso A

```text
TS(Ti) >= wts(X)
```

La write sarebbe compatibile.

Ora controlla `cb(X)`.

#### Se `cb(X)=true`

La write viene accettata:

```text
accept wi(X)
wts(X)=TS(Ti)
cb(X)=false
```

Motivo:

```text
Ti ha scritto X, ma non ha ancora committato.
```

#### Se `cb(X)=false`

La write non può ancora essere eseguita:

```text
Ti waits
```

Motivo:

```text
l'ultima write su X non è ancora committata
```

Attenzione:

```text
non aggiornare ancora wts(X)
non mettere ancora cb(X)=false
```

Quando l'ultima transazione che ha scritto `X` farà commit o rollback, `Ti` verrà risvegliata e dovrai ricontrollare `wi(X)` da capo.

---

### Caso B

```text
TS(Ti) < wts(X)
```

La write di `Ti` è vecchia rispetto a una write più giovane.

Ora controlla `cb(X)`.

#### Se `cb(X)=true`

Applichi Thomas write rule:

```text
ignore wi(X)
Ti NON abortisce
```

Motivo:

```text
la write di Ti è obsoleta, perché una transazione più giovane ha già scritto X.
```

Attenzione:

```text
ignored ≠ abort
```

La transazione continua.

#### Se `cb(X)=false`

Non puoi ancora applicare Thomas.

```text
Ti waits
```

Motivo:

```text
la write più giovane non è ancora committata
```

Quando l'ultima transazione che ha scritto `X` farà commit o rollback, `Ti` verrà risvegliata e dovrai ricontrollare `wi(X)` da capo.

Se quella write più giovane committa, probabilmente `wi(X)` sarà ignorata da Thomas.

Se quella write più giovane abortisce, `wts(X)` può tornare a `wts-c(X)`, quindi `wi(X)` potrebbe diventare accettabile.

---

## Tabella WRITE

```text
WRITE wi(X)

1. Ti già abortita?
   sì -> ignora wi(X)

2. TS(Ti) < rts(X)?
   sì -> abort Ti
         Thomas NON si applica

3. TS(Ti) >= rts(X) e TS(Ti) >= wts(X) e cb(X)=true?
   sì -> accept wi(X)
         wts(X)=TS(Ti)
         cb(X)=false

4. TS(Ti) >= rts(X) e TS(Ti) >= wts(X) e cb(X)=false?
   sì -> Ti waits
         non aggiornare wts(X)

5. TS(Ti) >= rts(X) e TS(Ti) < wts(X) e cb(X)=true?
   sì -> Thomas write rule
         ignore wi(X)
         Ti continua

6. TS(Ti) >= rts(X) e TS(Ti) < wts(X) e cb(X)=false?
   sì -> Ti waits
         non ignorare ancora la write
```

---

# COMMIT `ci`

Quando arriva:

```text
ci
```

chiediti prima:

```text
Ti è già abortita?
```

## Caso 1: `Ti` era abortita

```text
ignore ci
```

Una transazione abortita non può committare.

---

## Caso 2: `Ti` non era abortita e non ha scritto nulla

```text
commit accepted
nessun metadata cambia
```

Esempio:

```text
r1(X) c1
```

`T1` ha solo letto, quindi `c1` non aggiorna `wts`, `wts-c` o `cb`.

---

## Caso 3: `Ti` non era abortita e ha scritto oggetti

Per ogni oggetto `X` scritto davvero da `Ti`:

```text
cb(X)=true
wts-c(X)=TS(Ti)
```

Attenzione:

```text
se una write di Ti è stata ignorata da Thomas,
allora quella write non conta come write effettiva.
```

Dopo il commit, le transazioni che aspettavano su `X` possono ripartire.

Quando ripartono:

```text
ricontrolla la loro azione da capo
```

---

## Tabella COMMIT

```text
COMMIT ci

1. Ti già abortita?
   sì -> ignore ci

2. Ti non ha scritto oggetti effettivi?
   sì -> commit accepted
         nessun metadata cambia

3. Ti ha scritto X effettivamente?
   sì -> cb(X)=true
         wts-c(X)=TS(Ti)

4. Ci sono transazioni in wait su X?
   sì -> risvegliale
         ricontrolla la loro azione da capo
```

---

# ROLLBACK / ABORT `ai`

Una transazione può abortire perché:

```text
1. compare esplicitamente ai
2. il timestamp scheduler rifiuta una sua read/write
```

Quando `Ti` abortisce:

```text
tutte le sue azioni vengono eliminate dallo schedule finale
```

Se `Ti` aveva scritto qualche oggetto `X`, bisogna annullare le sue write.

Per ogni oggetto `X` scritto da `Ti`:

```text
wts(X)=wts-c(X)
cb(X)=true
```

Motivo:

```text
si torna all'ultima versione committata di X
```

Poi le transazioni che aspettavano su `X` possono ripartire.

Quando ripartono:

```text
ricontrolla la loro azione da capo
```

---

## Tabella ABORT

```text
ABORT Ti

1. Ti viene abortita

2. Tutte le azioni future di Ti vengono ignorate

3. Per ogni X scritto effettivamente da Ti:
   wts(X)=wts-c(X)
   cb(X)=true

4. Le transazioni in wait su X possono ripartire

5. Quando ripartono:
   ricontrolla la loro azione da capo
```

---

# WAIT

Questo è il punto che crea più confusione.

Quando una transazione va in wait:

```text
l'azione non è ancora accettata
l'azione non è ancora rifiutata
l'azione non è ancora ignorata da Thomas
```

È semplicemente sospesa.

Quindi:

```text
non aggiornare rts(X)
non aggiornare wts(X)
non aggiornare cb(X)
non applicare Thomas ancora
```

Quando la transazione viene risvegliata:

```text
ricontrolla la stessa azione da capo
usando i valori aggiornati di rts, wts, wts-c, cb
```

---

# Frase mentale velocissima

```text
READ:
1. Sono più vecchio dell'ultima write?
   sì -> abort

2. L'ultima write non è committata?
   sì -> wait

3. Altrimenti leggo e aggiorno rts.
```

```text
WRITE:
1. Sono più vecchio di una read già fatta?
   sì -> abort

2. Sono più vecchio dell'ultima write?
   sì:
      se quella write è committata -> Thomas, ignore
      se quella write non è committata -> wait

3. Non sono più vecchio dell'ultima write?
   sì:
      se l'ultima write è committata -> scrivo, wts=TS, cb=false
      se l'ultima write non è committata -> wait
```

```text
COMMIT:
1. La transazione era abortita?
   sì -> ignora commit

2. Ha scritto davvero qualcosa?
   sì -> cb=true, wts-c=TS

3. Risveglia chi aspettava.
```

```text
ABORT:
1. Elimina la transazione

2. Se aveva scritto X:
   wts(X)=wts-c(X)
   cb(X)=true

3. Risveglia chi aspettava.
```

---

# Regola finale per lo schedule risultante

Alla fine costruisci lo schedule finale così:

```text
1. elimina tutte le azioni delle transazioni abortite

2. elimina le write ignorate da Thomas

3. lascia i commit delle transazioni non abortite,
   anche se le loro write sono state ignorate
```