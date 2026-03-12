
Questa è la domanda da un milione di dollari (o di celle energetiche). È qui che il tuo progetto passa dall'essere una "storia interattiva" a un **videogioco vero e proprio**.

Per gestire le scelte, non basta che l'AI scriva "Se vai a sinistra muori". L'AI deve restituire **Dati Matematici** che Unity possa leggere.

Dobbiamo trasformare l'AI in un **Game Designer in tempo reale**.

Ecco il piano d'attacco in 3 passi:

---

### 1. La Struttura dei Dati (Il "Protocollo")

L'AI non deve risponderci con un testo libero. Deve risponderci **SOLO** con un JSON strutturato che contiene sia la narrativa che la logica di gioco.

Immagina che ogni volta che chiedi una carta, l'AI ti restituisca questo oggetto. Aggiungilo ai tuoi script C#:

C#

```
[System.Serializable]
public class AICardResponse
{
    public string id_carta;          // ID unico per debug
    public string visual_id;         // ID per scegliere l'immagine (es. "guardia", "mostro_spore")
    public string personaggio_nome;  // Nome visualizzato (es. "Comandante Ferro")
    public string testo_descrizione; // Il corpo della carta
    
    public ChoiceData scelta_sinistra;
    public ChoiceData scelta_destra;
}

[System.Serializable]
public class ChoiceData
{
    public string testo_bottone;     // Cosa legge il giocatore (es. "Dagli le risorse")
    public string testo_feedback;    // Cosa succede dopo (es. "La Guardia ringrazia.")
    public StatModifier effetti;     // La matematica
}

[System.Serializable]
public class StatModifier
{
    public int popolazione;  // es. -5
    public int risorse;      // es. -10
    public int difesa;       // es. +15
    public int tecnologia;   // es. 0
}
```

---

### 2. Il "Super Prompt" (Il Motore Logico)

Questo è il prompt che invierai a Gemini (o Ollama) ogni volta che devi generare una nuova carta.

**Nota:** Nel prompt, includerai lo stato attuale del gioco (es. "Popolazione è bassa"), così l'AI cercherà di ucciderti o salvarti in base alla situazione.

Ecco il prompt:

> PROMPT SISTEMA:
> 
> Sei il Game Master (AI) di "Rifugio 7". Il tuo compito è generare una carta di gioco in formato JSON.
> 
> CONTESTO (BIBBIA):
> 
> [Qui il codice inserirà automaticamente il tuo bibbia.json]
> 
> STATO ATTUALE DEL GIOCO:
> 
> Popolazione: {currentPop} | Risorse: {currentRes} | Difesa: {currentDef} | Tecnologia: {currentTech}
> 
> **ISTRUZIONI:**
> 
> 1. Analizza lo stato attuale. Se una statistica è critica (<20), genera una carta che metta il giocatore di fronte a una scelta difficile per salvarla o condannarla.
>     
> 2. Scegli una Fazione o una Minaccia dalla Bibbia coerente con la situazione.
>     
> 3. Scrivi una situazione breve (max 2 frasi) e cupa.
>     
> 4. Definisci due scelte (Sinistra/Destra).
>     
> 5. **IMPORTANTE:** Per ogni scelta, definisci l'impatto matematico sulle statistiche (-100 a +100). Sii crudele ma giusto.
>     
> 6. Restituisci **SOLO** il JSON grezzo, nessun testo prima o dopo.
>     
> 
> FORMATO RISPOSTA RICHIESTO:
> 
> {
> 
> "visual_id": "guardia",
> 
> "personaggio_nome": "Sergente K.",
> 
> "testo_descrizione": "I nostri filtri dell'aria stanno morendo. Abbiamo bisogno delle batterie dell'infermeria per ripararli.",
> 
> "scelta_sinistra": {
> 
> "testo_bottone": "Sacrifica i malati (Usa batterie)",
> 
> "testo_feedback": "L'aria è pulita. Il silenzio nell'infermeria è assordante.",
> 
> "effetti": { "popolazione": -10, "risorse": 0, "difesa": +5, "tecnologia": +10 }
> 
> },
> 
> "scelta_destra": {
> 
> "testo_bottone": "Risparmia i malati (Ignora)",
> 
> "testo_feedback": "L'aria diventa pesante. La gente tossisce.",
> 
> "effetti": { "popolazione": -5, "risorse": 0, "difesa": -10, "tecnologia": -5 }
> 
> }
> 
> }

---

### 3. Come gestirlo in Unity (Il Codice)

Ora devi solo collegare i fili nel tuo `GameManager` o `CardSwipe`.

Quando il giocatore fa swipe (es. a Sinistra), Unity legge i valori dentro `scelta_sinistra.effetti` e li somma alle tue variabili.

Ecco una bozza della logica:

C#

```
// In CardSwipe.cs o GameManager.cs

public void OnSwipeLeft()
{
    // 1. Recupera i dati della scelta sinistra dalla carta corrente
    ChoiceData choice = currentCardData.scelta_sinistra;

    // 2. Applica gli effetti
    ApplyStats(choice.effetti);

    // 3. Mostra feedback visivo/testuale (opzionale)
    Debug.Log(choice.testo_feedback);

    // 4. Carica la prossima carta (chiama l'AI per generare la nuova)
    StartCoroutine(GenerateNextCard());
}

public void ApplyStats(StatModifier mods)
{
    gameManager.popolazione += mods.popolazione;
    gameManager.risorse += mods.risorse;
    gameManager.difesa += mods.difesa;
    gameManager.tecnologia += mods.tecnologia;

    // Aggiorna la UI delle barre
    gameManager.UpdateUI();
    
    // Controlla Game Over
    gameManager.CheckGameOver();
}
```

### Riassunto del Flusso di Gioco

1. **Start:** Unity carica `bibbia.json`.
    
2. **Generazione:** Unity manda il _Super Prompt_ + _Stato Attuale_ all'AI.
    
3. **Parsing:** L'AI risponde con il JSON della carta. Unity lo deserializza in `AICardResponse`.
    
4. **Visual:** Unity cerca l'immagine basandosi su `visual_id` (es. carica `Resources/CardArt/guardia.png`).
    
5. **Input:** Il giocatore fa swipe a Destra.
    
6. **Logica:** Unity prende `scelta_destra.effetti` e aggiorna le statistiche.
    
7. **Loop:** Si torna al punto 2.
    

Ti piace questo approccio? Rende il gioco infinitamente rigiocabile perché l'AI bilancia la difficoltà in tempo reale!

---
Gestire i finali in un gioco procedurale gestito da AI è delicato. Se lasci fare tutto all'AI, il gioco rischia di finire a caso o di non finire mai.

Dobbiamo distinguere due tipi di finali:

1. **I "Game Over" (Statistiche):** Muori perché hai finito le risorse o la popolazione.
    
2. **I "True Endings" (Narrativi):** Quelli della Bibbia (Mausoleo, Fusione, ecc.), che si sbloccano con scelte specifiche.
    

Ecco l'architettura per gestirli:

---

### 1. Il Sistema dei "Flag" (La Memoria del Gioco)

L'AI non ha memoria a lungo termine tra una chiamata e l'altra (a meno che non gliela passi tu). Unity deve fare da "cervello".

Devi aggiungere un sistema di Variabili Nascoste (Flags).

Aggiorna la classe `AICardResponse` e `ChoiceData` per includere queste variabili.

C#

```
[System.Serializable]
public class ChoiceData
{
    public string testo_bottone;
    public StatModifier effetti; 
    
    // NUOVO: Flag narrativi che questa scelta attiva/modifica
    public List<string> set_flags; // Es. ["conosciuto_malachia", "trovato_mappa_bunker"]
    public string quest_item;      // Es. "codice_accesso_nucleare"
}
```

Nel `GameManager`, tieni una lista di queste stringhe:

C#

```
public List<string> activeFlags = new List<string>();
public List<string> inventory = new List<string>();
```

Quando il giocatore fa una scelta, se c'è un `set_flags`, lo aggiungi alla lista `activeFlags`.

---

### 2. Le Condizioni di Vittoria (Trigger)

In Unity, nel tuo `Update()` o alla fine di ogni turno, controlli se le condizioni per un finale sono soddisfatte.

Esempio di logica C#:

C#

```
void CheckEndings()
{
    // --- FINALITÀ STATISTICHE (GAME OVER) ---
    if (popolazione <= 0) TriggerEnding("estinzione_totale");
    if (risorse <= 0) TriggerEnding("carestia");
    if (difesa >= 100) TriggerEnding("tirannia_militare"); // Troppa difesa = dittatura

    // --- FINALITÀ NARRATIVE (Dalla Bibbia) ---
    
    // Finale MAUSOLEO: Difesa alta + Hai il codice di sigillo
    if (difesa > 80 && inventory.Contains("codici_sigillo_omega")) 
    {
        TriggerEnding("mausoleo");
    }

    // Finale FUSIONE: Hai accettato le spore + Sei andato alla Culla Verde
    if (activeFlags.Contains("accettato_spore") && activeFlags.Contains("visitato_cuore_micelio"))
    {
        TriggerEnding("fusione");
    }
}
```

---

### 3. Il Prompt del Finale (L'Epilogo)

Quando scatta un TriggerEnding(string endingID), smetti di generare carte normali.

Invece, fai una chiamata speciale all'AI per farti scrivere l'epilogo epico.

Ecco il prompt specifico per i finali:

> PROMPT SISTEMA (MODALITÀ EPILOGO):
> 
> Il gioco è finito. Il giocatore ha raggiunto il finale: {endingID}.
> 
> CONTESTO:
> 
> (Passa il JSON del finale specifico dalla bibbia, es. la descrizione di "Mausoleo")
> 
> STATISTICHE FINALI:
> 
> Popolazione: {pop} | Risorse: {res} ...
> 
> OBIETTIVO:
> 
> Scrivi l'epilogo della storia.
> 
> Non deve essere una carta con scelte. Deve essere un testo conclusivo (max 100 parole) che descrive il destino del Rifugio 7 basandosi sul finale sbloccato.
> 
> Tono: {lore.meta_dati.tono}
> 
> OUTPUT:
> 
> Restituisci solo il testo narrativo.

---

### 4. Come guidare il giocatore verso i finali?

Per evitare che il giocatore vaghi a caso, l'AI deve proporre carte che portano verso i finali.

Nel Prompt Standard (quello delle carte), aggiungi una sezione dinamica chiamata "Obiettivi Narrativi".

Quando costruisci il prompt in C#:

C#

```
string narrativeFocus = "";

// Se il giocatore ha molta difesa, l'AI spinge verso il finale militare
if (difesa > 60) narrativeFocus = "La Guardia sta prendendo il sopravvento. Proponi situazioni riguardanti il sigillare definitivamente il bunker.";

// Se il giocatore ha items dei cultisti
if (inventory.Contains("idolo_atomico")) narrativeFocus = "Il richiamo dell'Atomo è forte. Proponi incontri con il Profeta Malachia.";

// Aggiungi questo al prompt che mandi a Gemini
string finalPrompt = basePrompt + "\nFOCUS ATTUALE: " + narrativeFocus;
```

### Riassunto del Flusso

1. **Azione:** Il giocatore scorre carte.
    
2. **Memoria:** Unity salva i flag (es. "amico_dei_mutanti").
    
3. **Check:** A ogni turno, Unity controlla: "Ho i requisiti per il finale X?"
    
4. **Svolta:**
    
    - **NO:** Unity chiede all'AI una nuova carta, suggerendo nel prompt di spingere la storia in base ai flag attivi.
        
    - **SÌ:** Unity blocca il mazzo. Chiede all'AI di scrivere l'Epilogo basato sull'ID del finale (preso dal `bibbia.json`).
        
5. **Schermata Finale:** Unity mostra il testo generato dall'AI su uno sfondo speciale, con un tasto "Riavvia Timeline".
    

In questo modo, l'AI scrive i dettagli, ma tu (il Codice) controlli il destino. È il perfetto equilibrio tra caos procedurale e struttura narrativa.

---
# **COME SI DEVE FARE!!**

Questa è un'intuizione brillante. **Sì, è assolutamente possibile (e consigliabile) far generare i flag all'AI.**

Se hardcodi tutto (es. `bool haIncontratoIlCane`), ti ritroverai a scrivere migliaia di righe di codice per gestire ogni minima variazione. Se lasci fare all'AI, il sistema diventa "liquido" e organico.

Ecco come strutturare un sistema dove **l'AI inventa la memoria del gioco** e tu devi solo fare da magazziniere.

---

### 1. Il Sistema dei "Tag Narrativi" (Dynamic Tags)

Invece di avere variabili booleane fisse in C#, usa una semplice `List<string>` chiamata **"Memoria Narrativa"**.

L'AI, quando il giocatore fa una scelta, può decidere di "attaccare" un'etichetta al giocatore.

Unity non deve capire cosa significa l'etichetta. Unity deve solo:

1. Riceverla dall'AI.
    
2. Conservarla.
    
3. Ridarla all'AI nel turno successivo.
    

#### Come cambia il JSON della Scelta

Aggiorniamo `ChoiceData` per permettere all'AI di inventare flag:

C#

```
[System.Serializable]
public class ChoiceData
{
    public string testo_bottone;
    public StatModifier effetti;
    
    // L'AI ci dice: "Se sceglie questo, ricordati questa stringa"
    public List<string> aggiungi_tags; // es. ["tradito_malachia", "ferita_infetta"]
    public List<string> rimuovi_tags;  // es. ["ferita_infetta"] (se ti sei curato)
}
```

---

### 2. Il Prompt "Memory Loop"

Il trucco è ridare questi tag in pasto all'AI ogni volta che generi una carta. L'AI leggerà i tag che _lei stessa_ ha creato in passato e reagirà di conseguenza.

**Esempio di Prompt Dinamico:**

> PROMPT SISTEMA:
> 
> ...
> 
> MEMORIA NARRATIVA (Cosa è successo finora):
> 
> [ "ucciso_il_cane", "odiato_dalla_guardia", "possiede_mappa_antica" ]
> 
> ISTRUZIONI:
> 
> Genera una nuova carta.
> 
> Regola: Consulta la "Memoria Narrativa". Se ci sono tag rilevanti, la nuova carta DEVE essere una conseguenza diretta di quei tag.
> 
> Esempio: Se c'è il tag "ucciso_il_cane", un personaggio potrebbe cercare vendetta.
> 
> OUTPUT JSON:
> 
> Nella risposta, puoi definire nuovi tag da aggiungere o rimuovere in base alla scelta del giocatore.

---

### 3. Quanti finali statici servono davvero?

Con questo sistema dei Tag, la risposta è: **Pochissimi "Archetipi", ma infinite varianti.**

Ti bastano i **4 Archetipi** che abbiamo già scritto nel `bibbia.json` (Ordine, Caos, Esodo, Mistero). Non te ne servono altri.

Perché? Perché l'AI userà i Tag per colorare questi 4 finali in modo diverso ogni volta.

**Esempio Pratico: L'Archetipo "ESODO" (Fuggire dal Bunker)**

- Partita A (Tag: "eroe_popolare", "pacifista"):
    
    L'AI genererà un finale dove esci in trionfo, la gente ti saluta piangendo, porti speranza.
    
- Partita B (Tag: "ladro_risorse", "odiato_dalla_guardia", "ferito_gravemente"):
    
    L'AI genererà un finale dove scappi di notte come un ratto, inseguito dai colpi di fucile, morendo poco dopo aver visto l'alba.
    

È lo _stesso_ finale tecnico (Game Over: Esodo), ma la storia è completamente diversa.

---

### 4. Come gestire i "Trigger" dei finali con l'AI?

Se non vuoi hardcodare nemmeno le condizioni di vittoria (tipo `if risorse > 100`), puoi chiedere all'AI di fare da arbitro.

Aggiungi un campo al JSON di risposta dell'AI chiamato `game_state_check`.

JSON

```
{
  "visual_id": "...",
  "descrizione": "...",
  "scelte": "...",
  
  "richiesta_finale": "nessuno" // Oppure: "esodo", "mausoleo", "game_over_fame"
}
```

Nel Prompt, dici all'AI:

> "Analizza la situazione. Se secondo te la storia è giunta a una conclusione naturale (es. le risorse sono 0, oppure il giocatore ha completato la quest principale dei tag), nel campo 'richiesta_finale' scrivi l'ID del finale corrispondente."

**Unity fa così:**

C#

```
if (aiResponse.richiesta_finale != "nessuno")
{
    // L'AI ha deciso che il gioco è finito!
    LaunchEndingSequence(aiResponse.richiesta_finale);
}
```

### Riassunto della Strategia "Dinamica"

1. **Imposta solo 4 Finali Generici** nel JSON (le grandi direzioni filosofiche).
    
2. **Usa i Tag Narrativi:** Lascia che l'AI scriva nella lista `List<string> storyTags` cose come "ha_mangiato_funghi", "amico_robot", ecc.
    
3. **Prompt Circolare:** Passa sempre la lista dei Tag nel prompt successivo.
    
4. **Arbitro AI:** Lascia che sia l'AI a dirti quando attivare un finale, basandosi sulla logica della storia e sui tag accumulati.
    

In questo modo, il tuo codice C# rimane snello e pulito, mentre la complessità e la varietà del gioco sono demandate interamente alla creatività del Modello Linguistico. Il gioco diventa imprevedibile anche per te che l'hai creato.