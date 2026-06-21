## Idea mentale semplice

Uno schedule è **view-serializable** se riesci a trovare un ordine seriale in cui:

```text
1. ogni read legge dallo stesso writer dello schedule originale
2. l’ultima write su ogni oggetto è fatta dalla stessa transazione
```

Quindi devi proteggere due cose:

```text
READS-FROM  = chi legge da chi
FINAL-WRITE = chi scrive per ultimo
```

---

## Metodo da usare sempre

Quando hai uno schedule tipo:

```text
S = ...
```

fai così.

### Step 1 — Scrivi le transazioni

Esempio:

```text
T1: r1(X), w1(Y)
T2: w2(X), w2(Y)
T3: w3(X)
```

Questo ti serve per capire quali transazioni esistono davvero.

---

### Step 2 — Calcola il READS-FROM

Per ogni read `ri(X)`, guardi **l’ultima write su X prima di quella read**.

Esempio:

```text
w3(X) r2(X)
```

Allora:

```text
r2(X) legge da w3(X)
```

quindi:

```text
T3 < T2
```

Perché in un ordine seriale, se `T2` deve leggere il valore scritto da `T3`, allora `T3` deve venire prima di `T2`.

---

### Step 3 — Caso speciale: lettura dal valore iniziale

Se hai:

```text
r1(X)
```

e prima non c’è nessuna write su `X`, allora:

```text
r1(X) legge da w0(X)
```

Questo significa:

```text
T1 deve stare prima di tutte le transazioni che scrivono X
```

Perché se una transazione che scrive `X` venisse prima di `T1`, allora `T1` non leggerebbe più il valore iniziale.

Esempio:

```text
S = r1(X) w2(X)
```

Qui:

```text
r1(X) legge da w0(X)
```

Quindi serve:

```text
T1 < T2
```

---

### Step 4 — Calcola il FINAL-WRITE

Per ogni oggetto, guarda l’ultima write.

Esempio:

```text
w3(X) w2(X)
```

La final-write su `X` è:

```text
w2(X)
```

Quindi `T2` deve stare dopo tutte le altre transazioni che scrivono `X`.

Se anche `T3` scrive `X`, allora:

```text
T3 < T2
```

---

## Tabella da memorizzare

Questa è la parte più utile:

```text
ri(X) legge da wj(X)    => Tj < Ti

ri(X) legge da w0(X)    => Ti < tutte le transazioni che scrivono X

wi(X) è final-write     => tutte le altre transazioni che scrivono X < Ti
```

Se da questi vincoli ottieni una contraddizione tipo:

```text
T1 < T2
T2 < T1
```

allora:

```text
non è view-serializable
```

Se invece riesci a ordinare le transazioni rispettando tutti i vincoli, allora:

```text
è view-serializable
```

---

## Esempio facile

```text
S = w0(X) r1(X) r2(X) w2(X)
```

Transazioni:

```text
T1: r1(X)
T2: r2(X), w2(X)
```

READS-FROM:

```text
r1(X) legge da w0(X)
r2(X) legge da w0(X)
```

FINAL-WRITE:

```text
X: w2(X)
```

Vincoli:

Da `r1(X) <- w0(X)`:

```text
T1 < T2
```

Da `r2(X) <- w0(X)` non ottieni vincoli contro `T1`, perché `T1` non scrive `X`.

Final-write `w2(X)` conferma che `T2` deve stare dopo gli eventuali altri writer di `X`. Ma l’unico writer reale su `X` è `T2`.

Quindi funziona:

```text
T1 -> T2
```

Schedule seriale view-equivalente:

```text
r1(X) r2(X) w2(X)
```

Quindi è view-serializable.

---

## Esempio con contraddizione

```text
S = r1(X) w2(X) w2(Y) w1(Y)
```

Transazioni:

```text
T1: r1(X), w1(Y)
T2: w2(X), w2(Y)
```

READS-FROM:

```text
r1(X) legge da w0(X)
```

Poiché `T2` scrive `X`, serve:

```text
T1 < T2
```

FINAL-WRITE:

Su `Y`:

```text
w2(Y) ... w1(Y)
```

La final-write su `Y` è `w1(Y)`, quindi `T1` deve venire dopo `T2`:

```text
T2 < T1
```

Ora hai:

```text
T1 < T2
T2 < T1
```

Impossibile.

Quindi:

```text
non è view-serializable
```

---

## Errore tipico da evitare

Non devi trasformare ogni `READS-FROM` in un arco a caso.

Per esempio:

```text
r2(X) legge da w0(X)
```

non significa automaticamente:

```text
T2 -> T1
```

Significa solo:

```text
T2 deve stare prima delle transazioni che scrivono X
```

Se `T1` non scrive `X`, allora `r2(X) <- w0(X)` non impone niente rispetto a `T1`.

---

## Mini-routine da esame

Quando ti trovi davanti un esercizio di view, scrivi proprio così:

```text
1. Transazioni:
   T1 = ...
   T2 = ...

2. READS-FROM:
   r_i(X) <- w_j(X)
   ...

3. FINAL-WRITE:
   X: w_i(X)
   Y: w_j(Y)

4. Vincoli:
   ...
   
5. Controllo:
   - se trovo contraddizione => non view-serializable
   - se trovo ordine possibile => view-serializable
```

Il salto mentale è questo: **non devi costruire il grafo dei conflitti**, devi costruire una specie di “grafo dei vincoli view”.  
E se quei vincoli non possono stare insieme, allora non esiste nessuno schedule seriale equivalente.