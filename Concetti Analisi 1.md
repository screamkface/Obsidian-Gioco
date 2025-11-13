Ecco una lista dei **concetti fondamentali** che i professori danno spesso per scontato all'orale di Analisi 1 e che potrebbero essere oggetto di domande dirette o di cui si presuppone la padronanza assoluta:

## 📚 **FONDAMENTI TEORICI IMPRESCINDIBILI**

### **1. Logica e Linguaggio Matematico**
- Differenza tra **condizione necessaria/sufficiente**
- Significato di **∀** (per ogni) e **∃** (esiste)
- Negazione di proposizioni con quantificatori
- Dimostrazione per **assurdo** e per **controesempio**

### **2. Insiemi Numerici e Proprietà**
- **Assioma di completezza** di ℝ
- **Densità** di ℚ in ℝ
- **Principio di induzione**
- **Disuguaglianza triangolare**: |a+b| ≤ |a| + |b|

## 📈 **LIMITI E CONTINUITÀ**

### **3. Definizioni di Limite**
- **Tutte le definizioni** (ε-δ, intorni, successioni)
- **Limiti notevoli** a memoria
- **Teorema di unicità del limite**
- **Algebra dei limiti** (senza eccezioni!)

### **4. Continuità**
- Definizione ** punto per punto**
- **Classificazione discontinuità** (1a, 2a, 3a specie)
- **Teorema degli zeri** e **Valori intermedi**
- **Weierstrass** (continua in compatto → max e min)

## ∫ **CALCOLO DIFFERENZIALE**

### **5. Derivate**
- **Definizione come limite** del rapporto incrementale
- **Significato geometrico**
- **Regole di derivazione** fondamentali
- **Teoremi**:
  - **Fermat** (punti stazionari)
  - **Rolle** e **Lagrange** (con ipotesi!)
  - **De L'Hôpital** (quando si applica)

### **6. Studio di Funzione**
- **Asintoti** (orizzontali, verticali, obliqui)
- **Monotonia** e **convessità**
- **Punti di non derivabilità** (punto angoloso, cuspide, flesso a tangente verticale)

## ∑ **SERIE E SUCCESSIONI**

### **7. Successioni**
- **Convergenza/divergenza**
- **Teorema dei carabinieri**
- **Successioni monotone** (convergenti se limitate)

### **8. Serie Numeriche**
- **Condizione necessaria** (termine generale → 0)
- **Serie geometrica** e **armonica**
- **Criteri di convergenza**:
  - **Confronto**
  - **Rapporto** e **Radice**
  - **Confronto asintotico**

## 🔍 **CONCETTI CRITICI** (dove spesso si inciampa)

### **9. Differenze Sottili Ma Cruciali**
- **Continua** vs **Derivabile**
- **Limite** vs **Valore della funzione**
- **Punto di massimo** vs **Punto di massimo relativo**
- **Integrale indefinito** vs **Integrale definito**

### **10. Teoremi "a Scatola Chiusa"**
- **Enunciato preciso**
- **Ipotesi** (NON dimenticare!)
- **Tesi**
- **Idee della dimostrazione** (almeno intuitive)

## 💡 **CONSIGLI PRATICI PER L'ORALE**

1. **Prepara esempi e controesempi** per ogni concetto
2. **Sii preciso nel linguaggio** (non dire "tende" quando "converge")
3. **Ricorda le ipotesi** di ogni teorema
4. **Collega i concetti** tra loro (es: "La continuità serve per applicare Weierstrass...")

## ⚠️ **TRAGUARDO MINIMO**
Se riesci a **spiegare chiaramente** questi concetti come se li stessi insegnando a un compagno, sei sulla buona strada!

Buon esame! 🍀



----
Eccellente richiesta! Queste sono proprio le distinzioni che fanno la differenza all'orale, perché dimostrano che hai capito veramente la materia e non hai solo memorizzato formule. Andiamo con calma e chiarezza su ciascuna coppia.

## 1. Continua vs Derivabile

### **Funzione Continua in un punto \( x_0 \)**
- **Significato intuitivo**: Puoi disegnare il grafico della funzione senza staccare la penna dal foglio in quel punto.
- **Definizione formale**: 
  - ($\lim_{x \to x_0} f(x)$) **esiste finito**
  - $( \lim_{x \to x_0} f(x) = f(x_0))$
  - **Il valore del limite coincide con il valore della funzione nel punto**

### **Funzione Derivabile in un punto \( x_0 \)**
- **Significato intuitivo**: Il grafico della funzione in quel punto non solo è continuo, ma è anche "liscio" (ha una retta tangente ben definita, non verticale).
- **Definizione formale**: 
  - Esiste **finito** il limite del rapporto incrementale:

  $f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$

Questo signfica che quando andiamo a calcolare il limite di h che tende a 0, stiamo trovando la m e la, ovvero il **coefficiente angolare** della retta **secante**.

Situazione iniziale (h "grande"):
P •─────• Q  ← Secante (2 punti di intersezione)

Situazione intermedia (h "piccolo"):
P •──• Q     ← Secante (2 punti molto vicini)

Situazione limite (h → 0):
P •          ← Tangente (1 punto di intersezione)

La foto sotto mostra prima i due punti **a** e **b** e quindi quella che si crea è una **secante**, mentre si avvicina e quindi stiamo studiando l'incremento è ancora una secante. Alla fine quando abbiamo risolto il limite la retta che viene fuori sarà una **tangente**. E quindi se il rapporto incrementale di $x_0$ esiste ed è finito allora la funzione è continua.

![Il rapporto incrementale - SOS Matematica | 350](https://www.sosmatematica.it/wp-content/uploads/2020/02/Rapporto-incrementale.png)
### **La Relazione Cruciale**
- **Derivabile ⇒ Continua** (se una funzione è derivabile in un punto, allora è automaticamente continua in quel punto) 
- **Continua ⇏ Derivabile** (una funzione può essere continua ma NON derivabile)
	- Esempio: |x| è continua, ma non derivabile

### **Regola Mnemonica**
> "Il limite guarda quello che **promette** di fare avvicinandosi al punto, il valore della funzione guarda quello che **fa realmente** nel punto"

## 3. Punto di Massimo vs Punto di Massimo Relativo

### **Punto di Massimo Relativo (o Locale)**
- **Definizione**: \( x_0 \) è di massimo relativo se **esiste un intorno** di \( x_0 \) in cui \( f(x) ≤ f(x_0) \)
- **Significato**: È il punto più alto **NELLA SUA ZONA CIRCOSTANTE**
- **Può essercene più di uno** nella stessa funzione

### **Punto di Massimo Assoluto (o Globale)**
- **Definizione**: \( x_0 \) è di massimo assoluto se **per ogni x** nel dominio \( f(x) ≤ f(x_0) \)
- **Significato**: È il punto **PIÙ ALTO IN ASSOLUTO** di tutta la funzione
- **Ce n'è al massimo uno** (a meno di valori uguali)

### **La Relazione**
- **Massimo Assoluto ⇒ Massimo Relativo** (se è il più alto di tutti, è automaticamente il più alto nella sua zona)
- **Massimo Relativo ⇏ Massimo Assoluto** (può essere solo un "picco locale")

### **Esempio Visivo**
```python
Considera f(x) = x³ - 3x in [-2, 2]

• Massimi Relativi:
  - x = -1: f(-1) = 2 (picco locale)
  - Anche gli estremi del dominio possono essere massimi relativi!

• Massimo Assoluto:
  - Confronto tutti i candidati:
    f(-2) = -2, f(-1) = 2, f(1) = -2, f(2) = 2
  - Massimo valore: 2
  - Punti di massimo assoluto: x = -1 e x = 2 (entrambi danno valore 2)
```

## 4. Integrale Indefinito vs Integrale Definito

### **Integrale Indefinito**
- **Cosa è**: Un'**operazione** che trova le **antiderivate** (o primitive) di una funzione
- **Risultato**: Una **FAMIGLIA DI FUNZIONI** \( F(x) + C \)
- **Simbolo**: \( \int f(x) \, dx \)
- **Significato**: "Quali funzioni, derivate, danno \( f(x) \)?"

### **Integrale Definito**
- **Cosa è**: Un **NUMERO** che rappresenta l'area con segno sotto il grafico di \( f(x) \) tra due punti
- **Risultato**: Un **NUMERO REALE**
- **Simbolo**: \( \int_a^b f(x) \, dx \)
- **Significato**: "Quanto vale l'area (con segno) tra a e b?"

### **Tabella Riassuntiva**
| Aspetto | Integrale Indefinito | Integrale Definito |
|---------|---------------------|-------------------|
| **Risultato** | Funzione \( F(x) + C \) | Numero reale |
| **Dipende da** | Solo da \( f(x) \) | Da \( f(x) \), \( a \) e \( b \) |
| **Simbolo** | \( \int f(x)dx \) | \( \int_a^b f(x)dx \) |
| **Significato** | Insieme di primitive | Area con segno |
| **Esempio** | \( \int xdx = \frac{x^2}{2} + C \) | \( \int_0^2 xdx = 2 \) |

### **Il Collegamento Fondamentale (Teorema Fondamentale del Calcolo)**

$\int_a^b f(x) \, dx = F(b) - F(a)$
dove \( F(x) \) è **una** primitiva di \( f(x) \).

**Nota importante**: L'integrale definito è un numero che **non dipende** dalla costante additiva \( C \), perché:

$[F(b) + C] - [F(a) + C] = F(b) - F(a)$

## 💡 **Consiglio per l'Orale**

Quando ti chiedono di definire uno di questi concetti, **spiega sempre con parole tue** il significato intuitivo prima di dare la definizione formale. Mostra che hai capito la "filosofia" dietro ogni concetto, non solo la formula!

Se hai dubbi su altri concetti o vuoi più esempi, chiedimi pure! 🎯