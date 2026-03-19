# **Slide 1** INTRO

Buonpomeriggio a tutti, sono Nicola Moscufo. La tesi che presento oggi nasce dall'intersezione tra Ingegneria del software e intelligenza artificiale. Il lavoro si **concentra** sullo specializzare un modello sul fitness, integrarlo in un software gestionale e alla sua accetazione tramite il framework UTAUT.

# **Slide 2** I PROBLEMI DEGLI LLM

Il settore del fitness e del benessere sono in forte crescita. Tuttavia le soluzioni attuali sono spesso troppo generiche. Non si adattano all'individuo. 

I modelli generalisti quando si parla di temi delicati come la salute ed esercizi di palestra spesso mancano di contesto e soffrono di allucinazioni. 

La soluzione e' creare un AI in grado di dare risposte sicure e contestualizzate

# **Slide 3** Piattaforma AI

La soluzione che ho proposto e' quella di creare un ecosistema che copre sia il lato **b2b** che **b2c**. Proprio nella parte degli utenti viene inserita una chat per parlare con il modello unendo cosi' l'ai con il software gestionale.

# **Slide 4** Pipeline e creazione dataset

Per poter specilizzare un LLM su un compito specifico come quello del fitness, la prima cosa da avere e' un dataset pulito e di alta qualita'. Non esistendo un dataset pubblico per questo scopo ho dovuto crearlo da 0 tramite una pipeline automatizzata.

1. E' stato eseguito lo scraping dei dati tecnici sul portale jefit.com
2. Ho usato gemini 2.5 come teacher model in grado di creare domande e risposte uniche prendendo come knowledge base i dati appena scrapati.
3. Ho ottentuto cosi' un dataset di qualita' con oltre 5k esempi unici.

# **Slide 5** Fine Tune

Con i dati pronti si e' poi passato all'addestramento. Ho scelto gemma come modello di base perche' e' specializzato in italiano, piccolo e offre una finestra di contesto di 8k token. La messa a punto e' stata effettuata tramite la tecnina LoRA ci consente di eseguire l'addestramento su una porzione ridotta di pesi della rete neurale. Il training e' stato effettuato su una piattaforma cloud. La parte piu' importante riguarda la quantizzazione a 4-bit che ci ha permesso di comprimere il modello da 18gb a 4.5 rendendolo eseguibile su tutti i computer.

# **Slide 6** Sistema e screenshot

Sulla sinistra possiamo vedere il component diagram che mostra la suddivisione in sottosistemi, dove abbiamo: l'app mobile in flutter collegata tramite il backend, tramite le api di ollama il backend gestisce i messaggi della chat che possiamo vedere a sinsitra.

# **Slide 7** Studio UTAUT

Ma la tecnologia funziona solo se viene accettata. E' stato condotto uno studio pilota esplorativo prendendo 3 livelli di esperienza diversi e sottoponendo pochi utenti ad un questionario con scala likert. A destra possiamo vedere i risultati che sono chiaramente illuminanti.

Il primo parametro importante e' la **performance expectancy** che ci dice che gli utenti principianti vedono il software come una guida e che li aiuta nella performance in generale. Di conseguenza sara' piu' bassa per gli utenti esperti usando il software come una verifica.

La effort expectancy che e' alta uniforme per tutti e 3 i livelli ci dice che l'app e' facile ed accessibile per tutti.

Le facilitating conditions invece sono una conferma tecnica da parte degli utenti piu'esperti. Questo significa che l'utente esperto si muove in completa autonomia e garantisce coerenza con le risposte tecniche che da il modello.

# **Slide 8** Cosa Abbiamo Imparato

Con lo sviluppo di questa tesi abbiamo imparato a costruire un dataset da 0, specializzare un modello e quantizzarlo per poterlo portare su hw consumer. E abbiamo visto come l'ai possa essere utillizzato come strumento di marketing come in questo caso per l'onboarding dei principianti.

Gli sviluppi futuri sono quelli di portare il software in piu' palestra, integrare la computer vision per riusire a correggere l'esecuzione degli esercizi in tempo reale ed effettuare uno studio su larga scala con UTAUT2.


# **Conclusione**

Vorrei concludere con una citazione di Alan Turing che mi ha accompagnato durante lo sviluppo di questa tesi:  "La domanda interessante è: poiché qualcosa pensa diversamente da noi, vuol dire che non sta pensando?"

Chiaramente il nostro modello non pensa come un personal trainer, ma si e' rivelato essere un'ottima guida.

Grazie per l'attenzione.