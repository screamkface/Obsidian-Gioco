Questa è la fase più critica della gestione del progetto. Hai ragione a volerla definire.

L'errore più comune è quello che hai suggerito: "scrivere prima tutta la Bibbia e _poi_ sviluppare il gioco". Questo è un approccio "a cascata" (waterfall) ed è molto rischioso. Potresti passare 3 mesi a scrivere una lore perfetta per poi scoprire che non è divertente da giocare o che l'AI non la gestisce bene.

Dobbiamo usare un approccio **iterativo**. Costruiamo una "fetta" verticale e completa del gioco (Fase 1), poi la allarghiamo (Fase 2-3) e infine la lucidiamo (Fase 4-5).

Ecco la checklist completa del progetto, formattata in markdown per Obsidian, in modo che tu possa copiare, incollare e tenere traccia di tutto.

---

# 🗺️ Checklist Progetto "Rifugio 7"

## Fase 1: Il Prototipo Tecnico (Vertical Slice)

**Obiettivo:** Provare che il loop fondamentale (Regista -> AI -> Carta -> Swipe -> Regista) funziona.

### Setup Ambiente

- [x] Creare un nuovo progetto Unity.
    
- [x] Installare un LLM locale (Ollama).
    
- [x] Scaricare un modello di test (es. `llama3:8b`).
    
- [x] Creare lo script `GameManager.cs`.
    
- [x] Creare lo script `CardData.cs`.
    
- [x] Creare il `cardPrefab` (prefab della carta).
    
- [x] Creare lo script `CardSwipe.cs` e assegnarlo al prefab.
    
- [x] Configurare la scena in Unity (Canvas, `Event System`, `GameManager` object).
    
- [x] Collegare i riferimenti UI (`CardSwipe.cs` e `GameManager.cs`).
    
- [x] Impostare correttamente i `Raycast Target` (Carta=Vero, Testi=Falso).
    

### Mini-Bibbia (Solo per Test)

- [x] Creare una `bibbia_test.json` nella cartella `Resources`.
    
- [x] Scrivere 1 Fazione (es. "Guardia").
    
- [x] Scrivere 1 Minaccia (es. "Statico").
    

### Programmazione (Core Loop)

- [x] **GameManager:** Implementare il caricamento della `bibbia_test.json`.
    
- [x] **GameManager:** Implementare `RequestNextCard()` (la chiamata API a Ollama).
    
- [x] **GameManager:** Implementare la pulizia e la deserializzazione del JSON di risposta.
    
- [x] **GameManager:** Implementare `SpawnCard()`.
    
- [x] **GameManager:** Creare un `DetermineDirectorIntent()` "falso" (es. `if (giorno == 1)`).
    
- [x] **GameManager:** Implementare `ProcessSwipe(tag)` con 1-2 `case` di test.
    
- [x] **CardSwipe:** Implementare `Initialize()` per popolare i testi della carta.
    
- [x] **CardSwipe:** Implementare la logica di swipe (`OnDrag`, `OnEndDrag`) per muovere la carta e mostrare i testi delle opzioni.
    
- [x] **CardSwipe:** Assicurarsi che `OnEndDrag` chiami `GameManager.instance.ProcessSwipe(tag)`.
    

### Test Fase 1

- [x] Avviare il gioco.
    
- [x] La prima carta viene generata correttamente dall'AI?
    
- [x] La carta risponde allo swipe?
    
- [x] I testi SX/DX appaiono durante lo swipe?
    
- [x] Dopo lo swipe, la carta scompare e il `GameManager` chiama una nuova carta?
    

---

## Fase 2: Espansione Core Loop (Contenuto Base)

**Obiettivo:** Rendere il gioco _giocabile_ con tutte le meccaniche di base e la lore principale.

### Scrittura (La Bibbia 1.0)

- [ ] Scrivere i Dossier Fazione completi per tutte e 4 le Fazioni (Guardia, Cultisti, Carovanieri, Figli).
    
- [ ] Scrivere le descrizioni complete per tutte e 5 le Minacce.
    
- [ ] Scrivere le descrizioni complete per tutti e 7 i Luoghi.
    
- [ ] Creare la `bibbia.json` ufficiale e popolarla con questi dati.
    

### Programmazione (Il Regista)

- [ ] **GameManager:** Implementare la "Piramide delle Priorità" in `DetermineDirectorIntent()`.
    
- [ ] **GameManager:** Programmare la logica per la Priorità 3 (Crisi Parametri < 15).
    
- [ ] **GameManager:** Programmare la logica per la Priorità 4 (Crisi Reputazione < -75).
    
- [ ] **GameManager:** Programmare la logica per la Priorità 5 (Intenzioni Narrative: Tensione Politica, Peso della Corona, World Building, Fantasmi del Passato, Respiro).
    
- [ ] **GameManager:** Programmare la logica per la gestione delle probabilità delle Intenzioni (es. dare più peso a World Building all'inizio).
    

### Programmazione (Il Bilanciamento)

- [ ] Creare un documento ("Dizionario dei Tag") che elenchi i 15-20 tag di base del gioco (es. `crisi_cibo_pragmatica`, `guardia_chiede_potere`).
    
- [ ] **GameManager:** Implementare lo `switch` completo in `ProcessSwipe(tag)` per gestire tutti i tag di base.
    
- [ ] **GameManager:** Assicurarsi che ogni `case` modifichi correttamente i parametri (Rifornimenti, Reputazioni, ecc.).
    

### Programmazione (UI)

- [ ] Creare gli elementi UI per mostrare i 4 parametri principali (Rifornimenti, Difesa, ecc.).
    
- [ ] Creare gli elementi UI per mostrare le 4 reputazioni delle Fazioni.
    
- [ ] Creare uno script `UIManager.cs` che aggiorni questi testi quando il `GameManager` cambia i valori.
    

---

## Fase 3: Profondità Narrativa (Quest e Finali)

**Obiettivo:** Implementare la memoria a lungo termine e le storie complesse che portano ai finali assurdi.

### Scrittura (La Bibbia 2.0)

- [ ] Scrivere le descrizioni e gli obiettivi per i 4 "Misteri" (Eco-Uno, Paziente Zero, ecc.).
    
- [ ] Aggiornare la `bibbia.json` con la sezione "Misteri".
    

### Programmazione (Motore di Stato)

- [ ] **GameManager:** Aggiungere la variabile `HashSet<string> questFlags`.
    
- [ ] **GameManager:** Programmare la logica per `CheckForGameOver()` (includendo condizioni di vittoria/sconfitta per i Finali Assurdi).
    

### Programmazione (Regista e Bilanciamento)

- [ ] **GameManager:** Implementare la Priorità 2 (Eventi di Quest) in `DetermineDirectorIntent()`. Il Regista ora deve controllare i `questFlags` prima di decidere.
    
- [ ] **GameManager:** Aggiungere nuovi tag specifici per le quest (es. `statico_indaga_1`, `statico_indaga_2`).
    
- [ ] **GameManager:** Aggiornare `ProcessSwipe(tag)` per gestire questi nuovi tag, assicurandosi che aggiungano/modifichino i `questFlags` corretti.
    

---

## Fase 4: Polish e Meta-Gioco (Look & Feel)

**Obiettivo:** Trasformare il prototipo in un gioco rifinito e implementare il loop di ricompensa finale.

### Arte e Suono

- [ ] Creare (o generare con AI) il set di 20-30 immagini base (Sfondi Luoghi + Ritratti Fazioni).
    
- [ ] Trovare una traccia di musica d'atmosfera.
    
- [ ] Trovare/creare effetti sonori (swipe, click, evento negativo, evento positivo).
    

### Programmazione (Frontend "Juice")

- [ ] **CardSwipe:** Modificare `Initialize()` per caricare dinamicamente l'immagine di sfondo/personaggio corretta in base al contesto della carta (richiede che l'AI restituisca un tag `immagine: "fort_delta"`).
    
- [ ] Implementare un `AudioManager.cs` per gestire musica e SFX.
    
- [ ] Aggiungere feedback visivi (es. flash rosso dello schermo se si perde Morale).
    

### Programmazione (Il Cronista AI)

- [ ] **GameManager:** Creare una `List<string> cronacaRun` per salvare ogni scelta.
    
- [ ] **GameManager:** Modificare `ProcessSwipe()` per salvare l'evento e la scelta nella `cronacaRun`.
    
- [ ] Creare una nuova scena/pannello "Game Over".
    
- [ ] Creare uno script che, al Game Over, prenda la `cronacaRun`, la sintetizzi, e faccia una seconda chiamata AI (al "Cronista AI") per generare la storia della run.
    
- [ ] Mostrare la storia generata sulla schermata di Game Over.
    

### Programmazione (Meta-Gioco - Opzionale V1)

- [ ] Configurare un database esterno (es. Firebase/Supabase).
    
- [ ] Creare una funzione per caricare la storia generata nel database.
    
- [ ] Creare una nuova scena "Sala delle Cronache".
    
- [ ] Creare lo script per scaricare le storie dal database e mostrarle.
    
- [ ] Implementare un sistema di voto.
    

---

## Fase 5: Bilanciamento Finale e Rilascio

**Obiettivo:** Assicurarsi che il gioco sia divertente, giusto e pronto per il pubblico.

- [ ] Fase di Playtesting intensivo (far giocare amici, famiglia, sconosciuti).
    
- [ ] Raccogliere feedback: "È troppo difficile?", "I Cultisti sono troppo fastidiosi?", "Non capisco come funziona la Tecnologia".
    
- [ ] **Bilanciamento (Solo Codice, NON AI):**
    
    - [ ] Modificare i numeri nello `switch` di `ProcessSwipe()` (es. cambiare `Rifornimenti +20` in `+25`).
        
    - [ ] Modificare le probabilità nel `DetermineDirectorIntent()` (es. "L'Intenzione 'Respiro' (evento neutro) deve apparire più spesso").
        
- [ ] Bug Fixing finale (cosa succede se l'AI risponde con un JSON rotto? Gestire l'errore).
    
- [ ] Creare la build finale (PC, Mobile, Web).
    
- [ ] Rilascio!

---
Da rivedere, per il momento iniziamo cosi iterativamente. 