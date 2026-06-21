
La **serializzabilità** serve a dire se l’esecuzione **contemporanea** di più transazioni è corretta.

In un DBMS più transazioni possono essere eseguite insieme, cioè le loro operazioni possono essere **interleaved**: un pezzo di `T1`, poi un pezzo di `T2`, poi di nuovo `T1`, ecc. Il problema è capire se questo intreccio produce un risultato sensato. Nelle slide viene definito **schedule** proprio come una sequenza di azioni che rispetta l’ordine interno di ogni transazione; uno schedule è **seriale** se le transazioni non si intrecciano tra loro.

Uno schedule è **serializzabile** se, anche essendo intrecciato, produce lo stesso risultato di uno schedule seriale. Cioè deve esistere un ordine tipo:

```text
T1 poi T2
```

oppure

```text
T2 poi T1
```

che dia lo stesso effetto finale dello schedule intrecciato. Formalmente, due schedule sono equivalenti se partendo dallo stesso stato del database producono lo stesso outcome finale.

---

## Intuizione semplice

Pensa a due persone che modificano lo stesso conto bancario.

Se le operazioni sono intrecciate, il DBMS deve garantire che il risultato finale sia come se le transazioni fossero state eseguite **una alla volta**, anche se in realtà sono state eseguite insieme.

Quindi:

```text
Interleaving corretto = sembra seriale
Interleaving scorretto = non assomiglia a nessun ordine seriale
```

---

## Esempio 1: schedule seriale

Supponiamo:

```text
T1: aggiunge 100 ad A e B
T2: raddoppia A e B
```

Valori iniziali:

```text
A = 25
B = 25
```

Schedule seriale `T1 -> T2`:

```text
T1: A = A + 100   quindi A = 125
T1: B = B + 100   quindi B = 125

T2: A = A * 2     quindi A = 250
T2: B = B * 2     quindi B = 250
```

Risultato finale:

```text
A = 250
B = 250
```

Questo è ovviamente corretto, perché non c’è concorrenza vera: prima finisce `T1`, poi parte `T2`.

---

## Esempio 2: schedule intrecciato ma serializzabile

Ora intrecciamo le operazioni:

```text
T1 lavora su A
T2 lavora su A
T1 lavora su B
T2 lavora su B
```

Con le operazioni:

```text
T1: A = A + 100
T2: A = A * 2
T1: B = B + 100
T2: B = B * 2
```

Partendo da:

```text
A = 25
B = 25
```

Otteniamo:

```text
A: 25 -> 125 -> 250
B: 25 -> 125 -> 250
```

Risultato finale:

```text
A = 250
B = 250
```

Questo è lo stesso risultato dello schedule seriale:

```text
T1 -> T2
```

Quindi, anche se le transazioni sono intrecciate, lo schedule è **serializzabile**. Nelle slide c’è proprio questo tipo di esempio: uno schedule non seriale può comunque essere equivalente allo schedule seriale `<T1,T2>`. fileciteturn2file1

---

## Esempio 3: schedule non serializzabile

Usiamo sempre:

```text
T1: aggiunge 100 ad A e B
T2: raddoppia A e B
```

Valori iniziali:

```text
A = 25
B = 25
```

Ora considera questo intreccio:

```text
T1 modifica A
T2 modifica A
T2 modifica B
T1 modifica B
```

Calcolo:

```text
A: 25 -> T1 aggiunge 100 -> 125 -> T2 raddoppia -> 250

B: 25 -> T2 raddoppia -> 50 -> T1 aggiunge 100 -> 150
```

Risultato finale:

```text
A = 250
B = 150
```

Ora confrontiamolo con gli unici due schedule seriali possibili.

Seriale `T1 -> T2`:

```text
A = 250
B = 250
```

Seriale `T2 -> T1`:

```text
A = 150
B = 150
```

Lo schedule intrecciato produce:

```text
A = 250
B = 150
```

Questo risultato è “misto”: su `A` sembra che sia avvenuto `T1 -> T2`, mentre su `B` sembra che sia avvenuto `T2 -> T1`.

Quindi non corrisponde né a:

```text
T1 -> T2
```

né a:

```text
T2 -> T1
```

Perciò **non è serializzabile**. Il problema è che `T2` vede per `A` un valore già modificato da `T1`, ma per `B` vede un valore non ancora modificato da `T1`; questo comportamento non può comparire in nessuna esecuzione seriale. fileciteturn2file1

---

## Esempio pratico: posti aereo

Immagina due utenti che prenotano l’ultimo posto disponibile su un volo.

```text
T1:
1. controlla posto disponibile
2. prenota posto

T2:
1. controlla posto disponibile
2. prenota posto
```

Schedule pericoloso:

```text
T1 controlla: posto libero
T2 controlla: posto libero
T1 prenota
T2 prenota
```

Risultato:

```text
stesso posto prenotato due volte
```

Questo non è accettabile, perché nessuna esecuzione seriale corretta lo produrrebbe.

Se fosse seriale:

```text
T1 controlla
T1 prenota
T2 controlla
```

a quel punto `T2` vedrebbe il posto già occupato.

Quindi la serializzabilità serve proprio a evitare situazioni del genere.

---

## Esempio pratico: lost update

Supponiamo:

```text
A = 2
```

Due transazioni vogliono entrambe incrementare `A` di 1.

```text
T1: read(A), A = A + 1, write(A)
T2: read(A), A = A + 1, write(A)
```

Schedule scorretto:

```text
r1(A)   // T1 legge A = 2
r2(A)   // T2 legge A = 2
w1(A)   // T1 scrive A = 3
w2(A)   // T2 scrive A = 3
```

Risultato finale:

```text
A = 3
```

Ma se le transazioni fossero seriali, avremmo:

```text
T1 poi T2: A = 4
T2 poi T1: A = 4
```

Quindi il risultato `A = 3` è sbagliato: un aggiornamento è stato perso. Questa è l’anomalia chiamata **lost update**.

---

## Come si verifica negli esercizi?

Di solito, all’esame non ti chiedono di ragionare sempre sui valori numerici. Ti chiedono spesso la **conflict-serializability**, che si controlla con il **grafo di precedenza**.

Due azioni sono in conflitto se:

```text
1. appartengono a transazioni diverse;
2. operano sullo stesso oggetto;
3. almeno una delle due è una write.
```

Quindi i conflitti sono:

```text
ri(X)  wj(X)
wi(X)  rj(X)
wi(X)  wj(X)
```

con `i ≠ j`.

Poi costruisci il grafo:

```text
Ti -> Tj
```

se un’azione di `Ti` in conflitto viene prima di un’azione di `Tj`.

Regola fondamentale:

```text
grafo aciclico  => schedule conflict-serializable
grafo con ciclo => schedule non conflict-serializable
```

Se il grafo è aciclico, un ordinamento topologico del grafo ti dà l’ordine seriale equivalente. Questa è proprio la procedura operativa riportata nei tuoi schemi. fileciteturn2file0

---

## Mini-esempio con grafo

Schedule:

```text
S = r1(A) w1(A) r2(A) w2(A)
```

Conflitti:

```text
w1(A) prima di r2(A)  => T1 -> T2
w1(A) prima di w2(A)  => T1 -> T2
```

Grafo:

```text
T1 -> T2
```

Non ci sono cicli.

Quindi:

```text
S è conflict-serializable
ordine seriale equivalente: T1 -> T2
```

---

Altro schedule:

```text
S = r1(A) r2(A) w1(A) w2(A)
```

Conflitti:

```text
r1(A) prima di w2(A)  => T1 -> T2
r2(A) prima di w1(A)  => T2 -> T1
w1(A) prima di w2(A)  => T1 -> T2
```

Grafo:

```text
T1 -> T2
T2 -> T1
```

C’è un ciclo.

Quindi:

```text
S non è conflict-serializable
```

Questo è anche il pattern tipico della **lost update**.

---

## Da ricordare per l’esame

La frase chiave è:

> Uno schedule è serializzabile se il suo effetto è equivalente a quello di uno schedule seriale sulle stesse transazioni.

Per gli esercizi pratici, ragiona così:

```text
1. Scrivo le transazioni coinvolte.
2. Cerco le coppie di operazioni in conflitto.
3. Costruisco il grafo di precedenza.
4. Se il grafo ha cicli: non è conflict-serializable.
5. Se il grafo non ha cicli: è conflict-serializable.
6. Un ordinamento topologico mi dà l’ordine seriale equivalente.
```

In parole povere: **la concorrenza va bene solo se il risultato finale sembra ottenuto eseguendo le transazioni una alla volta**.


---
## 1. Conflict-serializable

Uno schedule è **conflict-serializable** se puoi trasformarlo in uno schedule seriale mantenendo lo stesso ordine dei **conflitti**.

Due operazioni sono in conflitto se:

```text
1. appartengono a transazioni diverse
2. lavorano sullo stesso dato
3. almeno una è una write
```

Quindi guardi conflitti tipo:

```text
r1(A) w2(A)
w1(A) r2(A)
w1(A) w2(A)
```

Metodo da esame:

```text
1. Trovi i conflitti
2. Costruisci il grafo di precedenza
3. Se il grafo è aciclico => conflict-serializable
4. Se il grafo ha cicli => non conflict-serializable
```

Quindi la **conflict-serializability** è molto operativa: fai il grafo e controlli i cicli.

---

## 2. View-serializable

Uno schedule è **view-serializable** se esiste uno schedule seriale che “vede” gli stessi valori.

Qui non guardi direttamente tutti i conflitti. Guardi due cose:

```text
1. READS-FROM
   cioè ogni read da quale write legge

2. FINAL-WRITE
   cioè chi fa l’ultima write su ogni oggetto
```

Due schedule sono view-equivalent se hanno gli stessi `READS-FROM` e gli stessi `FINAL-WRITE`. Nelle slide viene definita proprio così la view-equivalence, e poi uno schedule è view-serializable se è view-equivalent a uno schedule seriale.

Metodo da esame:

```text
1. Calcoli da quale write legge ogni read
2. Calcoli l’ultima write su ogni dato
3. Provi a trovare un ordine seriale che rispetti queste due cose
```

---

## Differenza intuitiva

La **conflict-serializability** è più severa.

La **view-serializability** è più permissiva.

Infatti:

```text
Conflict-serializable  =>  View-serializable
View-serializable      ≠>  Conflict-serializable
```

Cioè se uno schedule è conflict-serializable, allora è sicuramente anche view-serializable. Ma può succedere che uno schedule sia view-serializable senza essere conflict-serializable; nelle slide viene riportata proprio questa relazione: `CSR ⊂ VSR`.

---

## Esempio semplice della differenza

Considera:

```text
S = w1(A) w2(A) w2(B) w1(B) w3(A) w3(B)
```

Qui non ci sono read, solo write.

### Conflict-serializability

Conflitti su `A`:

```text
w1(A) prima di w2(A) => T1 -> T2
w2(A) prima di w3(A) => T2 -> T3
```

Conflitti su `B`:

```text
w2(B) prima di w1(B) => T2 -> T1
w1(B) prima di w3(B) => T1 -> T3
```

Abbiamo:

```text
T1 -> T2
T2 -> T1
```

C’è un ciclo.

Quindi:

```text
S non è conflict-serializable
```

### View-serializability

Però, dato che non ci sono read, il `READS-FROM` è vuoto.

Le final write sono:

```text
A: w3(A)
B: w3(B)
```

Quindi basta uno schedule seriale dove `T3` sta alla fine, ad esempio:

```text
T1 -> T2 -> T3
```

In questo ordine seriale, l’ultima write su `A` e su `B` è comunque fatta da `T3`.

Quindi:

```text
S è view-serializable
```

ma non è conflict-serializable.

---

## Riassunto secco

|Tipo|Cosa controlla|Metodo|È più…|
|---|---|---|---|
|**Conflict-serializable**|Ordine dei conflitti|Grafo di precedenza|Restrittiva|
|**View-serializable**|Chi legge da chi + ultime scritture|Reads-from e final-write|Generale|

Da ricordare per l’esame:

```text
CSR ⊂ VSR
```

Quindi:

```text
Se è conflict-serializable, allora è anche view-serializable.
Se non è conflict-serializable, potrebbe comunque essere view-serializable.
```