

## 🗺️ La Mappa del Progetto "Rifugio 7"

Ecco la struttura completa, divisa in 5 "pilastri" che comunicano tra loro.

### 1. 🖥️ PILASTRO 1: Il Frontend (UNITY)

_(Ciò che il giocatore vede e tocca)_

Questo è il "corpo" del gioco. È composto quasi interamente dall'Interfaccia Utente (UI).

- **`Canvas` (La Scena Principale)**
    
    - **`Event System`:** (Quello che hai appena sistemato) Cattura tutti gli input (click, trascinamenti).
        
    - **`UIManager.cs` (Script):** Un manager che si occupa di aggiornare i 4 parametri (Rifornimenti, Difesa, ecc.) sullo schermo.
        
    - **`cardPrefab` (Il "Corpo" della Carta):**
        
        - **`CardSwipe.cs` (Script):** Questo è il muscolo.
            
            - **Funzione `Initialize(CardData)`:** Riceve i dati dal GameManager e popola i testi.
                
            - **Logica di Input (`IDragHandler`, `IEndDragHandler`):** Muove la carta, mostra/nasconde i testi delle opzioni (SX/DX), e rileva quando lo swipe è finito.
                
            - **Logica di Feedback:** Al rilascio, se lo swipe è valido, chiama `GameManager.instance.ProcessSwipe(tagScelto)`.
                
        - **Componenti UI:**
            
            - `Image` (lo sfondo della carta) -> **Raycast Target: VERO**
                
            - `Testo_Personaggio` (TextMeshPro) -> **Raycast Target: FALSO**
                
            - `Testo_Descrizione` (TextMeshPro) -> **Raycast Target: FALSO**
                
            - `Testo_Opzione_SX/DX` (TextMeshPro) -> **Raycast Target: FALSO**
                

---

### 2. 🧠 PILASTRO 2: Il Motore (C# / IL REGISTA)

_(Il cervello logico del gioco)_

Questo è il tuo script principale `GameManager.cs`. È il "Regista" che dirige tutto.

- **`GameManager.cs` (Script)**
    
    - **Motore di Stato:** Contiene tutte le variabili principali (`rifornimenti`, `difesa`, `repGuardia`, `questFlags`, `giorno`).
        
    - **Logica del Regista (`DetermineDirectorIntent()`):**
        
        - Questo è il "cervello pensante".
            
        - Usa la "Piramide delle Priorità" per decidere _cosa_ deve succedere.
            
        - _Controllo Prio 1:_ `CheckForGameOver()`
            
        - _Controllo Prio 3 (Crisi):_ `if (rifornimenti < 15) ...`
            
        - _Controllo Prio 5 (Trama):_ `if (giorno < 3) ...`
            
        - **Output:** Una stringa `compito` (l'intenzione) e `contestoBibbia`.
            
    - **Costruttore di "Super-Prompt" (Il RAG):**
        
        - Prende lo `Stato` e l'output del `Regista`.
            
        - Carica i dati rilevanti dalla `bibbia` (Recupero).
            
        - Assembla il `superPrompt` (Aumento).
            
    - **Gestore API (`RequestNextCard()`):**
        
        - La funzione `async` che invia il `superPrompt` all'LLM (Gemini o Ollama).
            
        - Aspetta la risposta JSON.
            
        - Pulisce e deserializza il JSON in un oggetto `CardData`.
            
        - Chiama `SpawnCard(cardData)` (del Pilastro 1).
            
    - **Logica di Bilanciamento (`ProcessSwipe(string tag)`):**
        
        - Questo è il "Sistema dei Tag".
            
        - Contiene il grande `switch` (o `if/else if`) che legge il `tagScelto`.
            
        - **NON legge il testo.** Legge _solo_ il tag (es. `"mistero_statico_indaga_rischio"`).
            
        - Modifica i valori del Motore di Stato (es. `difesa -= 5;`, `questFlags.Add(...)`).
            
        - Chiama `RequestNextCard()` per ricominciare il loop.
            
    - **Archiviatore "Cronista":** (La tua idea)
        
        - Ogni volta che `ProcessSwipe` viene chiamato, salva la carta e la scelta in un `List<string>` per il recap finale.
            

---

### 3. 📖 PILASTRO 3: La Bibbia (JSON / LA MEMORIA)

_(La conoscenza statica del mondo)_

Questo è il "copione" del gioco. È un database, non un codice.

- **`bibbia.json` (File in `Resources`)**
    
    - **`fazioni`:** (Cultisti, Guardia...)
        
        - `nome`, `leader`, `credenze`, `richieste_tipiche`...
            
    - **`luoghi`:** (Fort Delta, Torre dell'Eco...)
        
        - `nome`, `descrizione`, `minacce_associate`...
            
    - **`minacce`:** (Statico, Scuoiati...)
        
        - `nome`, `tipo`, `effetto`...
            
    - **`misteri`:** (Eco-Uno, Paziente Zero...)
        
        - `nome`, `descrizione`, `flag_associato`...
            

---

### 4. 🤖 PILASTRO 4: L'AI (LLM / L'ATTORE)

_(Il motore creativo "stupido")_

Questo è il servizio (Gemini, Ollama) che recita la parte.

- **LLM (Gemini Flash / Llama 3)**
    
    - **Input 1 (Permanente):** `Istruzione di Sistema` (La sua personalità: "Sei un GMAI...", "Rispondi SOLO in JSON...").
        
    - **Input 2 (Dinamico):** Il `Super-Prompt` (Stato + Bibbia + Compito) inviato dal `GameManager`.
        
    - **Output (Affidabile):** Un singolo blocco `JSON` con la `CardData` (personaggio, testo, 2 opzioni, 2 tag).
        

---

### 5. 🏛️ PILASTRO 5: Il Meta-Gioco (SERVER / L'EREDITÀ)

_(La tua idea di "Sala delle Cronache" - Fase 2 del progetto)_

Questo è il loop _esterno_ che dà uno scopo al gioco.

- **"Cronista AI" (Un secondo "Super-Prompt")**
    
    - **Attivato da:** `CheckForGameOver()`.
        
    - **Input:** L'intero log di gioco salvato dall'Archiviatore (Pilastro 2).
        
    - **Compito:** "Sei il Cronista. Scrivi la storia di questa run."
        
    - **Output:** Una lunga stringa di testo (la storia della run).
        
- **Database Esterno (es. Firebase, Supabase)**
    
    - Un server dove il gioco può caricare la storia generata.
        
    - Gestisce la "Sala delle Cronache" (lettura e voto delle storie altrui).
        

---

### Il Flusso Completo (Riepilogo)

1. Il **`GameManager`** (Regista) decide: "Voglio una crisi di cibo".
    
2. Il **`GameManager`** (RAG) guarda la **`Bibbia`** e lo Stato, e costruisce un **`Super-Prompt`**.
    
3. Lo invia all'**`AI`** (Attore).
    
4. L'**`AI`** risponde con un **`JSON`** (la storia e i `tag`).
    
5. Il **`GameManager`** riceve il JSON e lo invia a **`CardSwipe`** (il Frontend) per mostrarlo.
    
6. Il giocatore fa lo swipe. **`CardSwipe`** rileva lo swipe.
    
7. **`CardSwipe`** dice al **`GameManager`**: "Il giocatore ha scelto il tag `crisi_cibo_pragmatica`!".
    
8. Il **`GameManager`** (Bilanciamento) applica la matematica: `Rifornimenti +20`, `Morale -25`.
    
9. Il **`GameManager`** salva la scelta nel log del Cronista.
    
10. Il **`GameManager`** ricomincia dal punto 1.