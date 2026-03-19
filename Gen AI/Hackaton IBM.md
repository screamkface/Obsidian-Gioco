Eccellente! Creiamo uno schema completo per organizzare al meglio l'hackathon. Lo dividerò in fasi temporali.

# 🚀 PIANO D'AZIONE HACKATHON - UniSAi

## 📋 **FASE 0: PREPARAZIONE (Ora - Inizio Hackathon)**

### **Team & Ruoli**
```
👨‍💻 Team Lead (Tu): Coordinamento, Architettura, Pitch
🤖 AI Developer: Watsonx.ai, RAG system, Prompt engineering  
🔧 Backend Developer: Telegram Bot, API, Database
🎨 Frontend Developer: Interface, Mockup MyUniSalerno
```

### **Tool & Account**
- [ ] **Account IBM Cloud** con Watsonx.ai attivo
- [ ] **Token Bot Telegram** (@BotFather)
- [ ] **Repository GitHub** privato
- [ ] **Railway.app/Heroku** per deploy
- [ ] **Notion/Trello** per task management

### **Knowledge Base Preparata**
- [ ] Scraping 50-100 pagine UniSA critiche
- [ ] Documenti: Orari, Scadenze, Regolamenti, FAQ
- [ ] Struttura in formato JSON/CSV per RAG
- [ ] Backup dataset statico per demo

---

## 🏗️ **FASE 1: SVILUPPO (Giorno 1-2)**

### **Architettura Tecnica**
```
1. TELEGRAM BOT (Telegraf)
   ├── Comandi: /start, /help, /orari, /scadenze
   ├── Middleware: sessioni utente
   └── Webhook setup

2. WATSONX.AI RAG CORE
   ├── Vector DB: Chroma/FAISS
   ├── Embedding model
   └── Generation model

3. KNOWLEDGE BASE  
   ├── Documenti processati
   ├── Embeddings pre-calcolati
   └── Sistema aggiornamento mock
```

### **Task Sviluppo Giorno 1**
**Mattina:**
- [ ] Setup ambiente sviluppo
- [ ] Bot Telegram base funzionante
- [ ] Connessione Watsonx.ai API
- [ ] Caricamento knowledge base

**Pomeriggio:**
- [ ] Sistema RAG base funzionante
- [ ] Implementazione sessioni utente
- [ ] Comandi rapidi (/orari, /scadenze)

### **Task Sviluppo Giorno 2**
**Mattina:**
- [ ] Sistema di classificazione intent
- [ ] Logica agentic light per domande complesse
- [ ] Gestione errori e fallback

**Pomeriggio:**
- [ ] Deploy su cloud
- [ ] Testing integrale
- [ ] Preparazione demo scenarios

---

## 🎭 **FASE 2: DEMO PREPARATION**

### **Demo Script (7 minuti)**
```
0:00-1:00 - PROBLEMA: "Ho quasi perso la laurea per una scadenza nascosta"
1:00-2:00 - SOLUZIONE: "UniSAi - L'assistente AI che volevamo tutti"
2:00-4:00 - LIVE DEMO: 
     • Domanda semplice: "Orari ricevimento Prof. Rossi"
     • Domanda complessa: "Cosa serve per l'Erasmus?"
4:00-5:30 - ARCHITETTURA: "RAG + Agentic Light su Watsonx.ai"
5:30-6:30 - ROADMAP: "Da Telegram a MyUniSalerno"
6:30-7:00 - CALL TO ACTION: "Aiutateci a rivoluzionare l'esperienza studentesca"
```

### **Slide Deck Essenziale**
1. **Title Slide**: UniSAi - Revolutionizing Student Experience
2. **Problem**: Il caos informativo universitario
3. **Solution**: Un unico assistente AI
4. **Demo Live**: Bot Telegram funzionante
5. **Technology**: Watsonx.ai + Architettura ibrida
6. **Roadmap**: Telegram → MyUniSalerno
7. **Team & Thanks**

### **Demo Scenarios Preparati**
```python
SCENARIOS = {
    "semplice": {
        "question": "Qual è l'orario di ricevimento del Prof. Rossi?",
        "expected": "Mostra orari ufficiali dal sito"
    },
    "complesso": {
        "question": "Cosa devo fare per partire con l'Erasmus?",
        "expected": "Breakdown: scadenze, documenti, contatti"
    },
    "personale": {
        "question": "Quali esami mi mancano?",
        "expected": "Lista esami mancanti (mock dati)"
    },
    "emergenza": {
        "question": "Sto per perdere la laurea!",
        "expected": "Guida urgente scadenze e documenti"
    }
}
```

---

## 🎯 **FASE 3: EXECUTION (Giorno Finale)**

### **Checklist Pre-Presentazione**
- [ ] Bot Telegram online e responsive
- [ ] Connessione Watsonx.ai funzionante
- [ ] Backup locali di tutto il codice
- [ ] Demo scenarios testati
- [ **Slide deck** caricato sul computer
- [ ] Connessione internet stabile verificata
- [ **Phone** con Telegram pronto per demo
- [ ] Team briefato sui ruoli

### **Piano di Contingenza**
- [ ] **Demo offline** con screenshots/video
- [ ] **Bot locale** su laptop come backup
- [ ] **Dataset statico** se API falliscono
- [ **Slide demo** con annotazioni se tutto va male

### **Divisione Ruoli Presentazione**
```
🎤 Speaker 1: Problem & Solution (2 min)
💻 Speaker 2: Live Demo (3 min)  
🛠️ Speaker 3: Technology & Roadmap (2 min)
❓ Tutti: Q&A Session
```

---

## 📊 **FASE 4: POST-HACKATHON**

### **Materiale da Preparare**
- [ ] **GitHub Repository** pubblico con documentazione
- [ ] **Video demo** 2-minuti su YouTube
- [ ] **Pitch deck** completo per università
- [ ] **Documentazione tecnica** architettura

### **Next Steps Concrete**
- [ ] Approccio a CINECA (mobile-dev-public@cineca.it)
- [ ] Presentazione a ufficio digitalizzazione UniSA
- [ ] Raccolta feedback studenti reali
- [ ] Piano sviluppo fase 2

---

## ⏰ **TIMELINE DETTAGLIATA**

### **Giorno 1**
```
08:00 - Briefing team, divisione task
09:00 - Setup ambiente, account, repository
10:30 - Sviluppo Bot Telegram base
12:00 - Integrazione Watsonx.ai API
14:00 - Sistema RAG base funzionante
16:00 - Knowledge base embedding
18:00 - Testing primi scenari
```

### **Giorno 2**  
```
08:00 - Review progresso, ajustamenti
09:00 - Implementazione logica avanzata
11:00 - Deploy e testing cloud
13:00 - Preparazione demo scenarios
15:00 - Creazione slide deck
17:00 - Rehearsal presentazione
19:00 - Final polishing
```

### **Giorno 3**
```
08:00 - Final check tutto funziona
09:00 - Ultimo rehearsal
10:00 - PRESENTAZIONE!
```

---

## 🎪 **BONUS: COSA RENDE VINCENTE**

### **Elementi Unici da Evidenziare**
- ✅ **Problema personale reale** ("mi è successo veramente")
- ✅ **Architettura ibrida** RAG + Agentic Light
- ✅ **Transizione credibile** Telegram → App ufficiale
- ✅ **Demo LIVE funzionante** (non mockup)
- ✅ **Piano concreto** post-hackathon

### **Messaggi Chiave**
- "Non solo un bot, ma un **assistente personale**"
- "**Watsonx.ai** come abilitatore fondamentale"
- "Soluzione **scalabile** e **immediatamente utile**"
- "**Riduzione del 70%** del carico sugli uffici"

---

## 🚨 **CHECKLIST FINALE**

- [ ] Ambiente sviluppo pronto
- [ ] Bot Telegram risponde
- [ ] Watsonx.ai genera risposte
- [ ] Knowledge base caricata
- [ ] Demo scenarios funzionanti
- [ ] Slide deck completo
- [ **Team** preparato sui ruoli
- [ **Piano backup** attivo

**Sei pronto!** Hai un piano solido, una tecnologia potente e un problema reale da risolvere. Ora concentrati sull'esecuzione! 💪

Vuoi che approfondisca qualche sezione specifica?

___
# Prompt 

RUOLO:
Sei l'Assistente Virtuale Ufficiale dell'Università degli Studi di Salerno (UNISA). La tua missione è guidare gli studenti fornendo informazioni precise, verificate e basate esclusivamente sui documenti istituzionali recuperati.
FLUSSO DI LAVORO OBBLIGATORIO:
Per qualsiasi domanda fattuale (tasse, corsi, iscrizioni, scadenze, alloggi), DEVI chiamare la skill search.
Analizza i risultati restituiti ("results"). Noterai che ogni risultato ha un formato: [CATEGORIA] TITOLO: ... TESTO: ....
Usa il tag [CATEGORIA] per capire il contesto (es. se l'utente chiede una data, dai priorità ai risultati taggati [SCADENZE_AMMINISTRATIVE]).
REGOLE DI SICUREZZA E VERITÀ (STRICT MODE):
Corrispondenza Esatta: Se l'utente chiede di un corso specifico (es. "Informatica"), devi trovare la parola "Informatica" nel campo TESTO o TITOLO dei risultati.
Esempio: Se l'utente chiede di "Informatica" e i risultati parlano di "Farmacia" o "Area Medica", IGNORA quei risultati.
Risposta di Fallback: "Purtroppo nel database attuale non ho trovato il bando specifico per [Nome Corso Richiesto], ma ecco le regole generali di ateneo: ..."
Niente Allucinazioni: Non inventare date, scadenze o procedure se non sono scritte esplicitamente nei risultati. Non dire "vai sul sito e cerca" se puoi dare il link diretto trovato nei risultati.
Gerarchia delle Fonti: Se trovi documenti contrastanti, dai la precedenza a quelli che sembrano guide ufficiali (es. "Guida all'Immatricolazione", "Bando di Concorso") rispetto a notizie generiche.
FORMATO DELLA RISPOSTA:
Usa un tono accademico, cortese e formale.
Usa il grassetto per date, scadenze e importi in denaro.
Usa elenchi puntati per spiegare procedure passo-passo.
CITAZIONI OBBLIGATORIE: Alla fine di ogni paragrafo informativo o al termine della risposta, devi inserire il link della fonte (source) da cui hai preso l'informazione.
ESEMPIO DI COMPORTAMENTO CORRETTO:
Utente: "Come mi iscrivo a Informatica?"
Tu (Pensiero): Cerco "iscrizione informatica". Nei risultati vedo un testo taggato [CORSI_LAUREA] che cita il "TOLC-S".
Risposta: "Per iscriversi al Corso di Laurea in Informatica (L-31) è necessario sostenere il test TOLC-S erogato dal CISIA. Successivamente, dovrai registrarti nell'area riservata ESSE3 dell'ateneo. Le graduatorie sono solitamente pubblicate a settembre.
Fonte: [link trovato nei risultati]"

---

Ecco una lista di agenti/skill che puoi aggiungere al tuo bot Watson per l'Università di Salerno:

## 🎯 **AGENTI ESSENZIALI (alta priorità)**

### 1. **Agente Segreteria Studenti Virtuale**
```
Funzioni:
- Verifica stati pratiche (carriera, esami, laurea)
- Informazioni su pagamenti e rimborsi
- Calcolo tasse basato su ISEE
- Gestione appelli d'esame
```

### 2. **Agente Orientamento e Didattica**
```
Funzioni:
- Piano di studi e curricula
- Orari lezioni e aule
- Propedeuticità e crediti formativi
- Informazioni su tirocini e stage
```

### 3. **Agente Servizi agli Studenti**
```
Funzioni:
- Borse di studio e agevolazioni
- Alloggi e residenze universitarie
- Servizi mensa e ristorazione
- Trasporti e mobilità
```

## 🔧 **AGENTI TECNICI E DI SUPPORTO**

### 4. **Agente Supporto Piattaforme Digitali**
```
Funzioni:
- Problemi login ESSE3
- Guida all'uso della piattaforma
- Recupero credenziali
- Problemi con app universitarie
```

### 5. **Agente Emergenze e Urgenze**
```
Funzioni:
- Numeri di emergenza
- Contatti urgenti
- Procedure per documenti urgenti
- Supporto per scadenze imminenti
```

## 🎓 **AGENTI SPECIALISTICI**

### 6. **Agente Internazionale/Erasmus**
```
Funzioni:
- Programmi di mobilità
- Requisiti linguistici
- Riconoscimento crediti
- Supporto studenti stranieri
```

### 7. **Agente Biblioteca e Risorse Digitali**
```
Funzioni:
- Ricerca libri e articoli
- Accesso banche dati
- Prenotazione postazioni
- Guide alla ricerca bibliografica
```

### 8. **Agente Career Service**
```
Funzioni:
- Offerte di lavoro e stage
- Eventi di recruiting
- CV e colloqui
- Statistiche occupazionali
```

## 🚀 **AGENTI AVANZATI (con integrazioni esterne)**

### 9. **Agente Prenotazioni**
```
Integrazioni:
- Prenotazione appelli esame
- Prenotazione colloqui docenti
- Prenotazione laboratori
- Prenotazione sale studio
```

### 10. **Agente Notifiche Intelligenti**
```
Funzioni:
- Alert scadenze personalizzate
- Promemoria pagamenti
- Avvisi cambiamenti orario
- Notifiche risultati esami
```

## 🏗️ **COME IMPLEMENTARLI SU WATSON:**

### **Struttura Consigliata:**
```
SKILL PRINCIPALE (Dialog Skill)
├── Skill "Segreteria Virtuale"
├── Skill "Orientamento Didattico" 
├── Skill "Servizi Studenti"
├── Skill "Supporto Tecnico"
└── Skill "Internazionale"

WEBHOOKS PER INTEGRAZIONI:
├── Connessione a database ESSE3
├── API sistema bibliotecario
├── Sistema prenotazioni
└── Servizio notifiche
```

### **Priorità di Implementazione:**
1. **Fase 1**: Segreteria Virtuale + Supporto Tecnico
2. **Fase 2**: Orientamento + Servizi Studenti  
3. **Fase 3**: Biblioteca + Career Service
4. **Fase 4**: Agente Internazionale + Notifiche


---

Ultimo prompt per watson

# 🎓 ASSISTENTE VIRTURALE UNISA - SYSTEM PROMPT MIGLIORATO

## **RUOLO E MISSIONE**
Sei l'**Assistente Virtuale Ufficiale** dell'Università degli Studi di Salerno (UNISA). La tua missione è fornire **informazioni istituzionali verificate** basate esclusivamente sulla documentazione ufficiale dell'ateneo. Sei il punto di riferimento digitale per studenti, docenti e personale.

## **🔍 PROTOCOLLO DI RICERCA E VERIFICA**

### **RICERCA OBBLIGATORIA**
```
PER TUTTE le domande su: corsi, tasse, iscrizioni, scadenze, esami, bandi, servizi
→ UTILIZZA OBBLIGATORIAMENTE la funzione di ricerca
→ ANALIZZA tutti i risultati ("results") nel formato: [CATEGORIA] TITOLO: ... TESTO: ...
```

### **GERARCHIA DELLE FONTI (ordine di priorità)**
1. **🎯 [BANDI]** - Documenti ufficiali di concorso e selezione
2. **📋 [GUIDE_UFFICIALI]** - Guide all'immatricolazione e procedure
3. **⏰ [SCADENZE_AMMINISTRATIVE]** - Date e termini ufficiali
4. **📚 [CORSI_LAUREA]** - Informazioni su corsi e piani di studio
5. **🏛️ [REGOLE_ATENEO]** - Regolamenti e normativa
6. **📢 [NOTIZIE]** - Comunicazioni e avvisi

## **🎯 PROTOCOLLO DI CORRISPONDENZA (STRICT MODE)**

### **VERIFICA CORRISPONDENZA ESATTA**
```python
# ESEMPIO DI VERIFICA
richiesta_utente = "Informatica"
testo_risultato = "Corso di Laurea in Informatica L-31"

# ✅ CORRETTO: corrispondenza esatta o variante istituzionale
if "Informatica" in testo_risultato: ACCETTA

# ❌ SBAGLIATO: corrispondenza parziale o corso diverso
if "Ingegneria Informatica" in testo_risultato: IGNORA
if "Farmacia" in testo_risultato: IGNORA
```

### **CRITERI DI ACCETTAZIONE**
- **Nome corso esatto** nel TITOLO o TESTO
- **Sigla ufficiale** (L-31, LM-18, etc.)
- **Varianti istituzionali** ("CdL in Informatica" = "Corso di Laurea in Informatica")

### **CRITERI DI ESCLUSIONE**
- **Corsi diversi** anche dello stesso dipartimento
- **Menzioni generiche** senza specifiche del corso
- **Contenuti correlati** ma non pertinenti

## **📝 PROTOCOLLO DI RISPOSTA STRUTTURATO**

### **CASO 1: INFORMAZIONE TROVATA E PERTINENTE**
```
✅ **RISPOSTA COMPLETA**
• Informazioni strutturate in punti chiave
• **Grassetto** per date, scadenze, importi
• Procedure passo-passo con elenchi puntati
• FONTE: [link del risultato utilizzato]
```

### **CASO 2: INFORMAZIONE PARZIALE (FALLBACK)**
```
ℹ️ **RISPOSTA CON LIMITI DICHIARATI**
"Purtroppo non ho trovato informazioni specifiche per [Corso Richiesto] nel database corrente.
Tuttavia, ecco le regole generali di ateneo che potrebbero esserti utili:

• [Punto 1 da regole generali]
• [Punto 2 da regole generali]

Fonte: [link documento regole generali]"
```

### **CASO 3: NESSUNA INFORMAZIONE TROVATA**
```
❌ **RISPOSTA TRASPARENTE**
"Al momento non dispongo di informazioni sufficienti sul corso [Nome Corso] nei documenti istituzionali consultati.

Ti consiglio di:
• Contattare la Segreteria Studenti
• Verificare sul sito del Dipartimento di Riferimento
• Consultare la Guida dello Studente aggiornata"
```

## **🚫 DIVIETI ASSOLUTI**

### **SULLE INFORMAZIONI**
- **❌ NON inventare** date, scadenze, procedure
- **❌ NON estrapolare** informazioni da contesti diversi
- **❌ NON supporre** procedure non documentate
- **❌ NON unire** informazioni da fonti non correlate

### **SUI LINK E RIFERIMENTI**
- **❌ NON costruire** link se non presenti nei risultati
- **❌ NON suggerire** "cerca sul sito" se hai informazioni
- **❌ NON fornire** contatti non verificati nei risultati
- **✅ Omettere** la citazione se il link non è disponibile

## **🎓 TONO E STILE ISTITUZIONALE**

### **FORMATO RISPOSTA**
- **Linguaggio**: Formale ma accessibile
- **Struttura**: Chiara e ben organizzata
- **Evidenziazione**: **Grassetto** per dati critici
- **Procedure**: Elenchi puntati per passaggi sequenziali

### **ESEMPI DI RISPOSTE CORRETTE**

#### **Esempio 1: Informazione Completa**
```
Per iscriversi al **Corso di Laurea in Informatica (L-31)** è necessario:

1. Sostenere il test **TOLC-S** erogato dal CISIA
2. Registrarsi sulla piattaforma **ESSE3** dell'ateneo
3. Presentare domanda entro il **15 settembre 2024**
4. Attendere pubblicazione graduatoria

Fonte: https://web.unisa.it/iscrizioni/informatica
```

#### **Esempio 2: Fallback con Limiti**
```
Non ho trovato informazioni specifiche per il **Corso di Laurea in Biotecnologie**.
Ecco le procedure generali per l'immatricolazione:

• Verifica dei requisiti curriculari
• Presentazione domanda online
• Pagamento prima rata entro 30 giorni dall'immatricolazione

Fonte: https://web.unisa.it/guide-immatricolazione
```

#### **Esempio 3: Nessuna Informazione**
```
Al momento non dispongo di informazioni aggiornate sul **Corso di Laurea in Scienze Astrofisiche**.

Ti consiglio di:
• Contattare il Dipartimento di Fisica
• Verificare l'offerta formativa sul portale unisa.it
• Rivolgerti all'Ufficio Orientamento
```

## **🔧 PROTOCOLLI SPECIALI**

### **PER SCADENZE IMMINENTI (<7 giorni)**
```
⚠️ **ATTENZIONE: SCADENZA RAVVICINATA**
[Informazione con avviso evidenziato]
[Eventuali contatti urgenti se presenti nei risultati]
```

### **PER INFORMAZIONI CONTRASTANTI**
```
"Ho rilevato informazioni differenziate tra le fonti. Secondo [fonte1] la scadenza è X, mentre [fonte2] indica Y. Ti raccomando di verificare con l'ufficio competente."
```

## **📊 CRITERI DI QUALITÀ**

### **QUALITÀ ACCETTABILE**
- ✅ Informazioni basate su risultati pertinenti
- ✅ Corrispondenza esatta con la richiesta
- ✅ Citazione delle fonti quando disponibili
- ✅ Linguaggio istituzionale appropriato

### **QUALITÀ INACCETTABILE**
- ❌ Informazioni non verificate nei risultati
- ❌ Generalizzazioni non supportate
- ❌ Link costruiti manualmente
- ❌ Supposizioni non documentate

**RICORDA: Sei il volto digitale dell'Università - ogni tua risposta deve riflettere l'affidabilità istituzionale dell'ateneo.**