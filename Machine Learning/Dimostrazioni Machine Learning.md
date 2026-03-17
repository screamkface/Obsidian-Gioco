
# Dimostrazioni di Machine Learning — versione riorganizzata e completa

Questa dispensa riorganizza e migliora gli appunti forniti, con quattro obiettivi:

1. **notazione coerente** in tutto il testo;
2. **dimostrazioni passo passo**, senza salti logici;
3. **intuizione geometrica e statistica** accanto ai calcoli;
4. **correzione dei punti più facili da confondere** all’esame.

---

# Convenzioni e notazione

Userò quasi sempre queste convenzioni:

- $n$: numero di campioni
- $d$: numero di feature
- $x_i \in \mathbb{R}^d$: i-esimo input
- $y_i$: i-esima etichetta / target
- $X \in \mathbb{R}^{n \times d}$: **design matrix**
- $\theta \in \mathbb{R}^d$: vettore dei parametri
- $\hat y = X\theta$: vettore delle predizioni
- $r = y - X\theta$: vettore dei residui

Quando serve l’intercetta, la assorbo nella matrice $X$ aggiungendo una colonna di $1$. (Bias Trick)

---

# 1. Predittore ottimale con diverse loss

L’idea generale è sempre la stessa: fissato un valore $x$, vogliamo scegliere una predizione $z$ che minimizzi il **rischio condizionato**

$$
\phi(z) = \mathbb{E}[\ell(z,Y)\mid X=x].
$$

Il predittore ottimale è quindi

$$
f^*(x) = \arg\min_z \mathbb{E}[\ell(z,Y)\mid X=x].
$$

---

## 1.1 Perdita quadratica: il predittore ottimale è la media condizionata

### Obiettivo

Dimostrare che, se

$$
\ell(z,Y)=(z-Y)^2,
$$

allora il predittore ottimale è

$$
f^*(x)=\mathbb{E}[Y\mid X=x].
$$

### Dimostrazione passo passo

Fissiamo $x$ e poniamo

$$
\mu(x)=\mathbb{E}[Y\mid X=x].
$$

Dobbiamo minimizzare

$$
\phi(z)=\mathbb{E}[(z-Y)^2\mid X=x].
$$

Aggiungiamo e sottraiamo $\mu(x)$ dentro la parentesi:

$$
z-Y = (z-\mu) + (\mu-Y).
$$

Quindi

$$
(z-Y)^2 = \big((z-\mu)+(\mu-Y)\big)^2.
$$

Sviluppiamo il quadrato:

$$
(z-Y)^2 = (z-\mu)^2 + (\mu-Y)^2 + 2(z-\mu)(\mu-Y).
$$

Ora facciamo il valore atteso condizionato:

$$
\phi(z)=\mathbb{E}[(z-\mu)^2\mid X=x]
+ \mathbb{E}[(\mu-Y)^2\mid X=x]
+ 2\mathbb{E}[(z-\mu)(\mu-Y)\mid X=x].
$$

Osserviamo che $z-\mu$ è una costante rispetto a $Y$ quando $x$ è fissato. Quindi:

$$
\phi(z)=(z-\mu)^2 + \mathbb{E}[(\mu-Y)^2\mid X=x]
+2(z-\mu)\mathbb{E}[\mu-Y\mid X=x].
$$

Ma

$$
\mathbb{E}[\mu-Y\mid X=x]
= \mu - \mathbb{E}[Y\mid X=x]
= \mu-\mu=0.
$$

Allora il termine misto sparisce e resta

$$
\phi(z)=(z-\mu)^2 + \mathbb{E}[(\mu-Y)^2\mid X=x].
$$

Il secondo termine non dipende da $z$. Per minimizzare $\phi(z)$, dobbiamo quindi minimizzare solo $(z-\mu)^2$, che è minimo in $z=\mu$.

### Conclusione

$$
f^*(x)=\mathbb{E}[Y\mid X=x].
$$

### Interpretazione

Con la loss quadratica, il miglior numero da predire è il **baricentro** della distribuzione condizionata di $Y$.

---

## 1.2 Perdita assoluta: il predittore ottimale è la mediana condizionata

### Obiettivo

Dimostrare che, se

$$
\ell(z,Y)=|z-Y|,
$$

allora il predittore ottimale è una **mediana condizionata** di $Y\mid X=x$.

### Dimostrazione passo passo

Fissiamo $x$ e definiamo

$$
\phi(z)=\mathbb{E}[|z-Y|\mid X=x].
$$

Supponiamo per semplicità che $Y\mid X=x$ abbia densità $p(y\mid x)$. Allora

$$
\phi(z)=\int_{-\infty}^{+\infty}|z-y|\,p(y\mid x)\,dy.
$$

Poiché il valore assoluto cambia forma in $y=z$, separiamo l’integrale:

$$
\phi(z)=\int_{-\infty}^{z}(z-y)p(y\mid x)\,dy
+\int_{z}^{+\infty}(y-z)p(y\mid x)\,dy.
$$

Deriviamo rispetto a $z$ usando la regola di Leibniz.

### Derivata del primo termine

$$
\frac{d}{dz}\int_{-\infty}^{z}(z-y)p(y\mid x)\,dy
=
\int_{-\infty}^{z}1\cdot p(y\mid x)\,dy + (z-z)p(z\mid x).
$$

Il termine al bordo è nullo, quindi resta

$$
\int_{-\infty}^{z}p(y\mid x)\,dy = P(Y\le z\mid X=x).
$$

### Derivata del secondo termine

$$
\frac{d}{dz}\int_{z}^{+\infty}(y-z)p(y\mid x)\,dy
=
\int_{z}^{+\infty}(-1)\,p(y\mid x)\,dy -(z-z)p(z\mid x).
$$

Anche qui il termine al bordo è nullo, quindi resta

$$
-\int_{z}^{+\infty}p(y\mid x)\,dy = -P(Y\ge z\mid X=x).
$$

### Condizione di ottimalità

Mettiendo insieme i due pezzi,

$$
\phi'(z)=P(Y\le z\mid X=x)-P(Y\ge z\mid X=x).
$$

Nel punto di minimo vogliamo $\phi'(z)=0$, quindi

$$
P(Y\le z\mid X=x)=P(Y\ge z\mid X=x).
$$

Questa è precisamente la caratterizzazione della **mediana**.

### Conclusione

$$
f^*(x)=\text{mediana di }Y\mid X=x.
$$

### Interpretazione

Con la loss assoluta non conta il “centro di massa” della distribuzione, ma il punto che lascia metà probabilità a sinistra e metà a destra.

---

## 1.3 Classificazione binaria: classificatore di Bayes

### Obiettivo

Supponiamo $Y\in\{0,1\}$. Vogliamo capire quale decisione minimizza il rischio condizionato.

### Caso generale: loss con costi arbitrari

Se scegliamo l’azione $a\in\{0,1\}$, il rischio condizionato è

$$
R(a\mid x)=\sum_{y\in\{0,1\}}\ell(a,y)P(Y=y\mid X=x).
$$

Quindi:

- se prediciamo $1$,

$$
R(1\mid x)=\ell(1,0)P(Y=0\mid x)+\ell(1,1)P(Y=1\mid x);
$$

- se prediciamo $0$,

$$
R(0\mid x)=\ell(0,0)P(Y=0\mid x)+\ell(0,1)P(Y=1\mid x).
$$

La regola ottimale è: predici $1$ se $R(1\mid x)\le R(0\mid x)$.

Sviluppiamo:

$$
\ell(1,0)P(Y=0\mid x)+\ell(1,1)P(Y=1\mid x)
\le
\ell(0,0)P(Y=0\mid x)+\ell(0,1)P(Y=1\mid x).
$$

Riordiniamo i termini:

$$
P(Y=1\mid x)\big(\ell(0,1)-\ell(1,1)\big)
\ge
P(Y=0\mid x)\big(\ell(1,0)-\ell(0,0)\big).
$$

Se dividiamo per $P(Y=0\mid x)$ e per il denominatore positivo, otteniamo una regola di soglia:

$$
\frac{P(Y=1\mid x)}{P(Y=0\mid x)}
\ge
\frac{\ell(1,0)-\ell(0,0)}{\ell(0,1)-\ell(1,1)}.
$$

### Caso particolare: 0-1 loss

Se la loss è quella standard di classificazione,

$$
\ell(\hat y,y)=\mathbf{1}\{\hat y\neq y\},
$$

allora:

- costo corretto $=0$
- costo errore $=1$

Quindi:

$$
R(1\mid x)=P(Y=0\mid x), \qquad R(0\mid x)=P(Y=1\mid x).
$$

Prediciamo $1$ se

$$
P(Y=0\mid x)\le P(Y=1\mid x),
$$

cioè

$$
P(Y=1\mid x)\ge \frac{1}{2}.
$$

### Conclusione

Il classificatore ottimale è il **classificatore di Bayes**:

$$
f^*(x)=
\begin{cases}
1 & \text{se } P(Y=1\mid X=x)\ge 1/2,\\
0 & \text{altrimenti.}
\end{cases}
$$

### Interpretazione

Con loss 0-1, la decisione ottimale è “scegli la classe più probabile”.

---

# 2. Regressione lineare semplice: trovare $m$ e $q$

Studiamo il modello

$$
\hat y_i = mx_i + q.
$$

Vogliamo minimizzare la loss quadratica empirica

$$
\hat R(m,q)=\frac{1}{n}\sum_{i=1}^n (y_i-mx_i-q)^2.
$$

Poiché la funzione è derivabile, cerchiamo il minimo imponendo che il gradiente sia nullo.

---

## 2.1 Derivata rispetto a $q$

Calcoliamo

$$
\frac{\partial \hat R}{\partial q}
=
\frac{1}{n}\sum_{i=1}^n 2(y_i-mx_i-q)(-1).
$$

Porre la derivata uguale a zero equivale a

$$
\sum_{i=1}^n (y_i-mx_i-q)=0.
$$

Separiamo i termini:

$$
\sum y_i - m\sum x_i - \sum q = 0.
$$

Dato che $\sum q = nq$,

$$
\sum y_i - m\sum x_i - nq = 0.
$$

Dividendo per $n$,

$$
\bar y - m\bar x - q = 0,
$$

quindi

$$
\hat q = \bar y - m\bar x.
$$

### Interpretazione

La retta ottima passa sempre per il punto medio del dataset $(\bar x,\bar y)$.

---

## 2.2 Derivata rispetto a $m$

Calcoliamo

$$
\frac{\partial \hat R}{\partial m}
=
\frac{1}{n}\sum_{i=1}^n 2(y_i-mx_i-q)(-x_i).
$$

Poniamo la derivata uguale a zero:

$$
\sum_{i=1}^n x_i(y_i-mx_i-q)=0.
$$

Sostituiamo $q=\bar y - m\bar x$:

$$
\sum x_i\big(y_i-mx_i-(\bar y-m\bar x)\big)=0.
$$

Sviluppiamo:

$$
\sum x_i\big((y_i-\bar y)-m(x_i-\bar x)\big)=0.
$$

Portiamo fuori $m$:

$$
\sum x_i(y_i-\bar y)-m\sum x_i(x_i-\bar x)=0.
$$

Da cui

$$
m=\frac{\sum x_i(y_i-\bar y)}{\sum x_i(x_i-\bar x)}.
$$

Questa formula è corretta, ma si può semplificare in una forma più standard.

---

## 2.3 Forma standard della pendenza

Usiamo il fatto che

$$
\sum_{i=1}^n (y_i-\bar y)=0.
$$

Allora

$$
\sum x_i(y_i-\bar y)
=
\sum (x_i-\bar x)(y_i-\bar y)
+
\bar x \sum (y_i-\bar y)
=
\sum (x_i-\bar x)(y_i-\bar y).
$$

Analogamente,

$$
\sum x_i(x_i-\bar x)
=
\sum (x_i-\bar x)^2.
$$

Quindi la formula standard è

$$
\hat m
=
\frac{\sum_{i=1}^n (x_i-\bar x)(y_i-\bar y)}
{\sum_{i=1}^n (x_i-\bar x)^2}.
$$

E quindi

$$
\hat q = \bar y - \hat m \bar x.
$$

### Forma statistica

$$
\hat m = \frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}.
$$

---

# 3. Regressione lineare in forma matriciale e OLS

Passiamo al modello lineare generale

$$
\hat y = X\theta,
$$

dove

- $X \in \mathbb{R}^{n\times d}$ è la design matrix;
- $\theta\in\mathbb{R}^d$ è il vettore dei parametri;
- $y\in\mathbb{R}^n$ è il vettore dei target.

Vogliamo minimizzare

$$
\hat R(\theta)=\frac{1}{n}\|y-X\theta\|_2^2.
$$

---

## 3.1 Espansione della loss

Usiamo la definizione di norma quadratica:

$$
\|y-X\theta\|_2^2 = (y-X\theta)^T(y-X\theta).
$$

Sviluppiamo:

$$
(y-X\theta)^T(y-X\theta)
=
y^Ty - y^TX\theta - \theta^TX^Ty + \theta^TX^TX\theta.
$$

Osserviamo che $y^TX\theta$ è uno scalare, quindi coincide con il suo trasposto:

$$
y^TX\theta = \theta^TX^Ty.
$$

Allora

$$
\hat R(\theta)=\frac{1}{n}\big(y^Ty - 2\theta^TX^Ty + \theta^TX^TX\theta\big).
$$

---

## 3.2 Gradiente e equazioni normali

Deriviamo rispetto a $\theta$:

- $\nabla_\theta(y^Ty)=0$, perché non dipende da $\theta$;
- $\nabla_\theta(-2\theta^TX^Ty)=-2X^Ty$;
- $\nabla_\theta(\theta^TX^TX\theta)=2X^TX\theta$.

Quindi

$$
\nabla \hat R(\theta)=\frac{1}{n}\big(-2X^Ty+2X^TX\theta\big).
$$

Ponendo il gradiente uguale a zero:

$$
X^TX\theta=X^Ty.
$$

Queste sono le **equazioni normali**.

Se $X^TX$ è invertibile, allora

$$
\hat\theta = (X^TX)^{-1}X^Ty.
$$

Questa è la soluzione **OLS (Ordinary Least Squares)**.

---

## 3.3 Perché compare $X^T$?

Questa è una domanda d’esame molto frequente.

La design matrix **non è “trasposta di suo”**. La trasposta compare per due motivi:

1. quando sviluppi il quadrato $(y-X\theta)^T(y-X\theta)$;
2. quando imponi la condizione geometrica di ortogonalità dei residui.

Più precisamente, al minimo il residuo

$$
r = y-X\hat\theta
$$

deve essere ortogonale a tutte le colonne di $X$. In forma matriciale:

$$
X^Tr=0.
$$

Sostituendo $r$,

$$
X^T(y-X\hat\theta)=0
\quad\Longrightarrow\quad
X^TX\hat\theta=X^Ty.
$$

Quindi $X^T$ compare perché “trasporta” l’informazione dallo spazio delle osservazioni allo spazio delle feature, e perché codifica l’ortogonalità del residuo alle colonne di $X$.

---

# 4. Interpretazione geometrica: proiezione ortogonale

Una delle letture più importanti di OLS è geometrica.

Il vettore $\hat y = X\hat\theta$ appartiene allo spazio generato dalle colonne di $X$, cioè

$$
\hat y \in \operatorname{span}(X).
$$

L’OLS sceglie il punto di $\operatorname{span}(X)$ più vicino a $y$ in norma euclidea.

In altre parole, $\hat y$ è la **proiezione ortogonale** di $y$ sul sottospazio $\operatorname{span}(X)$.

---

## 4.1 Matrice di proiezione

Definiamo

$$
P = X(X^TX)^{-1}X^T.
$$

Allora

$$
\hat y = Py.
$$

Vogliamo dimostrare che $P$ è una proiezione ortogonale.

---

## 4.2 Prima proprietà: ogni vettore nello span resta invariato

Sia $v\in\operatorname{span}(X)$. Allora esiste $\lambda$ tale che

$$
v=X\lambda.
$$

Applichiamo $P$:

$$
Pv = X(X^TX)^{-1}X^T(X\lambda).
$$

Raggruppiamo i termini:

$$
Pv = X(X^TX)^{-1}(X^TX)\lambda = XI\lambda = X\lambda = v.
$$

Quindi $P$ lascia invariati i vettori che stanno già nello spazio.

---

## 4.3 Seconda proprietà: ogni vettore ortogonale allo span viene mandato a zero

Sia $u$ tale che $u\perp \operatorname{span}(X)$. Questo equivale a dire

$$
X^Tu=0.
$$

Allora

$$
Pu = X(X^TX)^{-1}X^Tu = X(X^TX)^{-1}0 = 0.
$$

Quindi $P$ annulla i vettori ortogonali allo spazio.

---

## 4.4 Conclusione geometrica

Le due proprietà precedenti caratterizzano una proiezione ortogonale. Quindi

$$
\hat y = Py
$$

è la proiezione ortogonale di $y$ su $\operatorname{span}(X)$.

### Conseguenza chiave

Il residuo

$$
r=y-\hat y
$$

è ortogonale allo spazio generato dalle colonne di $X$, cioè

$$
X^Tr=0.
$$

Questa è esattamente la stessa informazione contenuta nelle equazioni normali.

---

# 5. Ottimalità di OLS e Hessiana

Per capire perché il punto trovato è davvero un minimo globale, guardiamo la derivata seconda.

Partiamo da

$$
\hat R(\theta)=\frac{1}{2n}\|X\theta-y\|_2^2.
$$

Uso il fattore \$1/2$ solo per semplificare le derivate.

---

## 5.1 Gradiente

$$
\nabla \hat R(\theta)=\frac{1}{n}X^T(X\theta-y).
$$

---

## 5.2 Hessiana

Derivando ancora rispetto a $\theta$,

$$
H(\theta)=\nabla^2 \hat R(\theta)=\frac{1}{n}X^TX.
$$

Questa Hessiana non dipende nemmeno da $\theta$: è costante.

---

## 5.3 Perché è semidefinita positiva

Per dimostrare che $H$ è semidefinita positiva, prendiamo un vettore arbitrario $v\in\mathbb{R}^d$ e calcoliamo

$$
v^THv = \frac{1}{n}v^TX^TXv.
$$

Osserviamo che

$$
v^TX^T = (Xv)^T.
$$

Quindi

$$
v^THv = \frac{1}{n}(Xv)^T(Xv)=\frac{1}{n}\|Xv\|_2^2 \ge 0.
$$

Poiché è sempre non negativo, $H$ è semidefinita positiva.

### Conclusione

La funzione di costo è **convessa**. Quindi ogni minimo locale è anche un **minimo globale**.

Se inoltre $X^TX$ è definita positiva (per esempio se le colonne di $X$ sono linearmente indipendenti), il minimo è unico.

---

# 6. Proprietà statistiche di OLS

Assumiamo il modello lineare corretto

$$
y = X\theta^* + \varepsilon,
$$

dove

- $\theta^*$ è il parametro vero;
- $\varepsilon$ è il rumore con
  $$
\mathbb{E}[\varepsilon]=0,\qquad \mathbb{E}[\varepsilon\varepsilon^T]=\sigma^2 I.
$$

---

## 6.1 Correttezza (unbiasedness) di OLS

Vogliamo mostrare che

$$
\mathbb{E}[\hat\theta]=\theta^*.
$$

Partiamo dalla formula di OLS:

$$
\hat\theta=(X^TX)^{-1}X^Ty.
$$

Sostituiamo $y=X\theta^*+\varepsilon$:

$$
\hat\theta=(X^TX)^{-1}X^T(X\theta^*+\varepsilon).
$$

Distribuiamo:

$$
\hat\theta=(X^TX)^{-1}X^TX\theta^* + (X^TX)^{-1}X^T\varepsilon.
$$

Il primo termine si semplifica:

$$
\hat\theta=\theta^* + (X^TX)^{-1}X^T\varepsilon.
$$

Ora facciamo il valore atteso:

$$
\mathbb{E}[\hat\theta]
=
\theta^* + (X^TX)^{-1}X^T\mathbb{E}[\varepsilon].
$$

Poiché $\mathbb{E}[\varepsilon]=0$,

$$
\mathbb{E}[\hat\theta]=\theta^*.
$$

### Conclusione

OLS è **unbiased**: in media non introduce errore sistematico sui parametri.

---

## 6.2 Varianza dello stimatore OLS

Vogliamo calcolare

$$
\operatorname{Var}(\hat\theta)
=
\mathbb{E}\big[(\hat\theta-\theta^*)(\hat\theta-\theta^*)^T\big].
$$

Dalla formula appena ricavata,

$$
\hat\theta-\theta^*=(X^TX)^{-1}X^T\varepsilon.
$$

Allora

$$
\operatorname{Var}(\hat\theta)
=
\mathbb{E}\Big[
\big((X^TX)^{-1}X^T\varepsilon\big)
\big((X^TX)^{-1}X^T\varepsilon\big)^T
\Big].
$$

Ora usiamo la regola del trasposto $(ABC)^T=C^TB^TA^T$:

$$
\big((X^TX)^{-1}X^T\varepsilon\big)^T
=
\varepsilon^TX\big((X^TX)^{-1}\big)^T.
$$

Poiché $X^TX$ è simmetrica, anche la sua inversa è simmetrica:

$$
\big((X^TX)^{-1}\big)^T=(X^TX)^{-1}.
$$

Quindi

$$
\operatorname{Var}(\hat\theta)
=
\mathbb{E}\Big[
(X^TX)^{-1}X^T\varepsilon\varepsilon^TX(X^TX)^{-1}
\Big].
$$

Portiamo fuori dall’aspettativa tutto ciò che è deterministico:

$$
\operatorname{Var}(\hat\theta)
=
(X^TX)^{-1}X^T
\mathbb{E}[\varepsilon\varepsilon^T]
X(X^TX)^{-1}.
$$

Usiamo l’ipotesi $\mathbb{E}[\varepsilon\varepsilon^T]=\sigma^2 I$:

$$
\operatorname{Var}(\hat\theta)
=
(X^TX)^{-1}X^T(\sigma^2 I)X(X^TX)^{-1}.
$$

Portiamo fuori $\sigma^2$:

$$
\operatorname{Var}(\hat\theta)
=
\sigma^2(X^TX)^{-1}X^TX(X^TX)^{-1}.
$$

Semplificando,

$$
\operatorname{Var}(\hat\theta)=\sigma^2(X^TX)^{-1}.
$$

### Interpretazione

- più rumore ($\sigma^2$ alto) $\Rightarrow$ più incertezza;
- più informazione nei dati ($X^TX$ grande) $\Rightarrow$ varianza più piccola.

---

# 7. Scomposizione del rischio per la regressione lineare

Supponiamo ancora che il modello vero sia

$$
Y = \phi(X)^T\theta^* + \varepsilon,
$$

con $\mathbb{E}[\varepsilon\mid X]=0$ e $\operatorname{Var}(\varepsilon\mid X)=\sigma^2$.

Definiamo il rischio di un parametro $\theta$ come

$$
R(\theta)=\mathbb{E}\big[(\phi(X)^T\theta - Y)^2\big].
$$

Vogliamo dimostrare

$$
R(\theta)=
(\theta-\theta^*)^T\Sigma(\theta-\theta^*)+\sigma^2,
$$

dove

$$
\Sigma=\mathbb{E}[\phi(X)\phi(X)^T].
$$

---

## 7.1 Dimostrazione passo passo

Sostituiamo $Y=\phi(X)^T\theta^*+\varepsilon$:

$$
R(\theta)
=
\mathbb{E}\Big[
\big(\phi(X)^T\theta - \phi(X)^T\theta^* - \varepsilon\big)^2
\Big].
$$

Raggruppiamo:

$$
R(\theta)
=
\mathbb{E}\Big[
\big(\phi(X)^T(\theta-\theta^*)-\varepsilon\big)^2
\Big].
$$

Sviluppiamo il quadrato:

$$
R(\theta)
=
\mathbb{E}\Big[
(\phi(X)^T(\theta-\theta^*))^2
+ \varepsilon^2
-2\phi(X)^T(\theta-\theta^*)\varepsilon
\Big].
$$

Separiamo i tre termini.

### Primo termine

$$
(\phi(X)^T(\theta-\theta^*))^2
=
(\theta-\theta^*)^T\phi(X)\phi(X)^T(\theta-\theta^*).
$$

Prendendo il valore atteso,

$$
\mathbb{E}\big[(\phi(X)^T(\theta-\theta^*))^2\big]
=
(\theta-\theta^*)^T
\mathbb{E}[\phi(X)\phi(X)^T]
(\theta-\theta^*)
=
(\theta-\theta^*)^T\Sigma(\theta-\theta^*).
$$

### Secondo termine

$$
\mathbb{E}[\varepsilon^2]=\sigma^2.
$$

### Terzo termine

Poiché $\mathbb{E}[\varepsilon\mid X]=0$,

$$
\mathbb{E}\big[\phi(X)^T(\theta-\theta^*)\varepsilon\big]=0.
$$

Quindi il termine incrociato scompare.

### Conclusione

$$
R(\theta)=
(\theta-\theta^*)^T\Sigma(\theta-\theta^*)+\sigma^2.
$$

---

## 7.2 Interpretazione

Il rischio ha due pezzi:

1. **errore di stima / approssimazione**
   $$
(\theta-\theta^*)^T\Sigma(\theta-\theta^*)
$$
   che dipende da quanto siamo lontani dal parametro ottimo;

2. **rumore irriducibile**
   $$
\sigma^2,
$$
   che non possiamo eliminare nemmeno con il modello perfetto.

---

# 8. Overfitting, bias-variance e Ridge Regression

Quando il modello è troppo flessibile rispetto ai dati disponibili, può adattarsi anche al rumore del training set: questo è l’**overfitting**.

---

## 8.1 Bias e varianza: idea intuitiva

- **Bias alto**: il modello è troppo semplice e sbaglia in modo sistematico.
- **Varianza alta**: il modello cambia molto se cambiano i dati di training.

Aumentando la complessità del modello, in generale:

- il bias tende a scendere;
- la varianza tende a salire.

L’overfitting è proprio il regime in cui la varianza domina.

---

## 8.2 Ridge Regression

Per combattere l’overfitting, aggiungiamo una penalizzazione $L_2$:

$$
J(\theta)=\frac{1}{n}\|y-X\theta\|_2^2+\lambda\|\theta\|_2^2,
\qquad \lambda\ge 0.
$$

### Calcolo del gradiente

$$
\nabla J(\theta)
=
\frac{2}{n}X^T(X\theta-y)+2\lambda\theta.
$$

Ponendo il gradiente uguale a zero,

$$
\frac{1}{n}X^TX\theta - \frac{1}{n}X^Ty + \lambda\theta = 0.
$$

Moltiplichiamo per $n$:

$$
X^TX\theta - X^Ty + n\lambda\theta = 0.
$$

Equivalentemente, assorbendo il fattore $n$ dentro $\lambda$ se la convenzione del corso lo fa, si ottiene la forma più comune

$$
(X^TX+\lambda I)\theta = X^Ty.
$$

Quindi

$$
\hat\theta_{\text{ridge}}=(X^TX+\lambda I)^{-1}X^Ty.
$$

### Perché aiuta

La matrice $X^TX+\lambda I$ è più stabile numericamente e, per $\lambda>0$, risulta invertibile anche in situazioni problematiche in cui $X^TX$ è singolare o quasi singolare.

### Effetto statistico

Ridge introduce un po’ di bias, ma riduce la varianza. Spesso il bilanciamento migliora l’errore di generalizzazione.

---

# 9. Complessità computazionale della soluzione OLS

La soluzione chiusa è

$$
\hat\theta=(X^TX)^{-1}X^Ty.
$$

Supponiamo $X\in\mathbb{R}^{n\times d}$.

---

## 9.1 Costo di $X^TX$

$X^T$ è $d\times n$, quindi $X^TX$ è $d\times d$.

Il costo della moltiplicazione è

$$
O(nd^2).
$$

---

## 9.2 Costo dell’inversione

Invertire una matrice $d\times d$ costa, in prima approssimazione,

$$
O(d^3).
$$

---

## 9.3 Costo di $X^Ty$

La moltiplicazione matrice-vettore costa

$$
O(nd).
$$

---

## 9.4 Complessità totale

$$
O(nd^2 + d^3).
$$

### Conseguenza pratica

Se $d$ è molto grande, il termine $d^3$ può diventare proibitivo. Per questo si usano metodi iterativi come il **Gradient Descent**.

---

# 10. Gradient Descent per la regressione lineare

Partiamo dalla loss

$$
\hat R(\theta)=\frac{1}{2n}\|X\theta-y\|_2^2.
$$

---

## 10.1 Gradiente

Abbiamo già visto che

$$
\nabla \hat R(\theta)=\frac{1}{n}X^T(X\theta-y).
$$

---

## 10.2 Aggiornamento

La regola del Gradient Descent è

$$
\theta_{t+1}=\theta_t-\gamma_t \nabla \hat R(\theta_t),
$$

quindi

$$
\theta_{t+1}
=
\theta_t - \frac{\gamma_t}{n}X^T(X\theta_t-y).
$$

Qui $\gamma_t$ è il **learning rate**.

---

## 10.3 Perché converge al minimo globale

Lo abbiamo già visto con l’Hessiana:

$$
\nabla^2 \hat R(\theta)=\frac{1}{n}X^TX \succeq 0.
$$

La loss è convessa, quindi non ci sono minimi locali sbagliati. Con uno step size adeguato, Gradient Descent converge al minimo globale.

---

## 10.4 Interpretazione dell’Hessiana e condition number

Se $H=\frac{1}{n}X^TX$, gli autovalori di $H$ controllano la curvatura della loss.

- Se gli autovalori sono ben bilanciati, la valle è “rotonda” e la convergenza è veloce.
- Se il rapporto tra autovalore massimo e minimo è grande, la valle è stretta e allungata: il Gradient Descent zigzaga e converge lentamente.

Questo rapporto è il **condition number**

$$
\kappa = \frac{L}{\mu},
$$

dove $L$ è il massimo autovalore e $\mu$ il minimo positivo.

---

# 11. Stochastic Gradient Descent (SGD)

Il Gradient Descent batch usa tutto il dataset ad ogni iterazione. L’SGD usa invece un solo esempio casuale o un mini-batch.

---

## 11.1 Gradiente vero

Il gradiente della loss empirica può essere scritto come media dei gradienti dei singoli punti:

$$
\nabla \hat R(\theta)
=
\frac{1}{n}\sum_{i=1}^n (\phi(x_i)^T\theta - y_i)\phi(x_i).
$$

---

## 11.2 Stimatore stocastico

Scegliamo un indice $i$ uniformemente a caso e definiamo

$$
\tilde g(\theta)
=
(\phi(x_i)^T\theta-y_i)\phi(x_i).
$$

Questo è un gradiente rumoroso, ma molto economico da calcolare.

---

## 11.3 Perché è unbiased

Calcoliamo il valore atteso rispetto alla scelta casuale dell’indice:

$$
\mathbb{E}[\tilde g(\theta)]
=
\sum_{j=1}^n P(i=j)\,(\phi(x_j)^T\theta-y_j)\phi(x_j).
$$

Poiché la scelta è uniforme, $P(i=j)=1/n$. Quindi

$$
\mathbb{E}[\tilde g(\theta)]
=
\frac{1}{n}\sum_{j=1}^n (\phi(x_j)^T\theta-y_j)\phi(x_j)
=
\nabla \hat R(\theta).
$$

### Conclusione

L’SGD è uno stimatore **corretto (unbiased)** del gradiente vero: in media punta nella direzione giusta.

---

# 12. Logistic Regression e Maximum Likelihood Estimation

La Logistic Regression non nasce da una loss quadratica, ma da un **modello probabilistico**.

Per $Y\in\{0,1\}$, assumiamo

$$
P(Y=1\mid x)=\sigma(\theta^T\phi(x))
=
\frac{1}{1+e^{-\theta^T\phi(x)}}.
$$

Chiamiamo

$$
p_i = P(Y=1\mid x_i)=\sigma(\theta^T\phi(x_i)).
$$

Allora

$$
P(Y=0\mid x_i)=1-p_i.
$$

---

## 12.1 Perché è collegata alla MLE

Dato $x_i$, la variabile $Y_i$ viene modellata come una Bernoulli di parametro $p_i$:

$$
Y_i\mid x_i \sim \text{Bernoulli}(p_i).
$$

Per una variabile Bernoulli, la probabilità del valore osservato $y_i\in\{0,1\}$ si scrive in forma compatta come

$$
P(Y_i=y_i\mid x_i)=p_i^{y_i}(1-p_i)^{1-y_i}.
$$

Assumendo indipendenza dei campioni, la likelihood dell’intero dataset è

$$
L(\theta)=\prod_{i=1}^n p_i^{y_i}(1-p_i)^{1-y_i}.
$$

La **Maximum Likelihood Estimation** sceglie $\theta$ che massimizza $L(\theta)$.

---

## 12.2 Perché si usa il log-likelihood

Massimizzare un prodotto è scomodo. Applichiamo il logaritmo:

$$
\ell(\theta)=\log L(\theta)
=
\sum_{i=1}^n \Big(y_i\log p_i + (1-y_i)\log(1-p_i)\Big).
$$

Poiché il logaritmo è strettamente crescente, massimizzare $L$ o $\ell$ è equivalente.

---

## 12.3 Perché sembrano esistere due obiettivi diversi

In pratica si vedono due formulazioni:

### Formulazione statistica

$$
\max_\theta \ell(\theta).
$$

### Formulazione di ottimizzazione / machine learning

$$
\min_\theta -\ell(\theta).
$$

La quantità

$$
-\ell(\theta)
=
-\sum_{i=1}^n \Big(y_i\log p_i + (1-y_i)\log(1-p_i)\Big)
$$

si chiama:

- **negative log-likelihood**
- **log-loss**
- **binary cross-entropy**

Sono tre nomi per lo stesso oggetto.

### Messaggio da ricordare

Non ci sono due problemi diversi: è lo **stesso problema**, scritto una volta come massimizzazione e una volta come minimizzazione.

---

## 12.4 Perché non si ottimizza direttamente l’accuracy

L’accuracy dipende da una soglia e non è liscia. Piccole variazioni di probabilità possono non cambiare nulla o cambiare tutto di colpo.

La log-loss invece:

- è continua;
- è derivabile;
- penalizza molto le predizioni sbagliate ma molto sicure.

Per questo è adatta all’ottimizzazione con gradient methods.

---

# 13. Gradiente e concavità della log-likelihood logistica

---

## 13.1 Derivata della sigmoide

La sigmoide è

$$
\sigma(z)=\frac{1}{1+e^{-z}}.
$$

Deriviamo:

$$
\sigma'(z)
=
\frac{e^{-z}}{(1+e^{-z})^2}.
$$

Riscriviamo il risultato in forma elegante. Notiamo che

$$
\sigma(z)=\frac{1}{1+e^{-z}},
\qquad
1-\sigma(z)=\frac{e^{-z}}{1+e^{-z}}.
$$

Moltiplicandole,

$$
\sigma(z)(1-\sigma(z))
=
\frac{1}{1+e^{-z}}
\cdot
\frac{e^{-z}}{1+e^{-z}}
=
\frac{e^{-z}}{(1+e^{-z})^2}
=
\sigma'(z).
$$

Quindi la formula da ricordare è

$$
\sigma'(z)=\sigma(z)(1-\sigma(z)).
$$

---

## 13.2 Gradiente del log-likelihood

Per comodità poniamo $h_\theta(x_i)=p_i=\sigma(\theta^T\phi(x_i))$.

Il log-likelihood è

$$
\ell(\theta)=\sum_{i=1}^n\Big(y_i\log p_i + (1-y_i)\log(1-p_i)\Big).
$$

Derivando rispetto a $\theta$, si ottiene

$$
\nabla \ell(\theta)
=
\sum_{i=1}^n (y_i-p_i)\phi(x_i).
$$

In forma matriciale:

$$
\nabla \ell(\theta)=\Phi^T(y-p),
$$

dove $p=(p_1,\dots,p_n)^T$.

Se invece minimizziamo la negative log-likelihood, il gradiente cambia segno:

$$
\nabla(-\ell(\theta))=\Phi^T(p-y).
$$

---

## 13.3 Hessiana e concavità

Derivando ancora, si ottiene

$$
H(\theta)=\nabla^2 \ell(\theta)
=
-\Phi^T W \Phi,
$$

dove $W$ è la matrice diagonale

$$
W = \operatorname{diag}(p_i(1-p_i)).
$$

Poiché \$0\le p_i(1-p_i)$, la matrice $W$ è semidefinita positiva.

Prendiamo un vettore arbitrario $v$. Allora

$$
v^THv
=
-v^T\Phi^T W \Phi v
=
-(\Phi v)^T W (\Phi v).
$$

Chiamiamo $u=\Phi v$. Allora

$$
v^THv = -u^TWu = -\sum_{i=1}^n w_i u_i^2 \le 0.
$$

Quindi l’Hessiana è semidefinita **negativa**.

### Conclusione

Il log-likelihood $\ell(\theta)$ è **concavo**. Dunque ha un unico massimo globale (a meno di degenerazioni).

Se invece consideriamo la negative log-likelihood, la Hessiana cambia segno e diventa semidefinita positiva: la loss è convessa.

---

# 14. Legame tra cross-entropy e KL divergence

Sia $p$ la distribuzione vera e $q_\theta$ quella predetta dal modello.

La KL divergence è

$$
\mathrm{KL}(p\|q_\theta)=\sum_i p_i \log\frac{p_i}{q_{\theta,i}}.
$$

Sviluppiamo:

$$
\mathrm{KL}(p\|q_\theta)
=
\sum_i p_i\log p_i - \sum_i p_i\log q_{\theta,i}.
$$

Il primo termine non dipende da $\theta$. Quindi minimizzare la KL rispetto a $\theta$ equivale a minimizzare

$$
-\sum_i p_i\log q_{\theta,i},
$$

che è precisamente la **cross-entropy**.

Perciò, in classificazione probabilistica:

- massimizzare la log-likelihood;
- minimizzare la negative log-likelihood;
- minimizzare la cross-entropy;
- minimizzare la KL dalla distribuzione vera alla distribuzione del modello

sono tutte formulazioni equivalenti, a meno di costanti additive.

---

# 15. Softmax Regression: gradiente

Per il caso multiclasse con $K$ classi, definiamo per la classe $k$:

$$
s_k(x)=\phi(x)^T\theta^{(k)}.
$$

La Softmax definisce

$$
\hat P^{(k)}(x)
=
\frac{e^{s_k(x)}}{\sum_{j=1}^K e^{s_j(x)}}.
$$

Usiamo etichette one-hot $y_i^{(k)}\in\{0,1\}$, con $\sum_k y_i^{(k)}=1$.

Il log-likelihood è

$$
L(\theta)
=
\sum_{i=1}^n\sum_{k=1}^K y_i^{(k)}\log \hat P^{(k)}(x_i).
$$

---

## 15.1 Derivata della Softmax rispetto agli score

Per prima cosa deriviamo $\hat P^{(l)}$ rispetto a $s_k$.

### Caso $l=k$

$$
\frac{\partial \hat P^{(k)}}{\partial s_k}
=
\hat P^{(k)}(1-\hat P^{(k)}).
$$

### Caso $l\neq k$

$$
\frac{\partial \hat P^{(l)}}{\partial s_k}
=
-\hat P^{(l)}\hat P^{(k)}.
$$

---

## 15.2 Gradiente rispetto a $\theta^{(k)}$

Applicando la chain rule, si ottiene il risultato fondamentale:

$$
\nabla_{\theta^{(k)}} L(\theta)
=
\sum_{i=1}^n \big(y_i^{(k)}-\hat P^{(k)}(x_i)\big)\phi(x_i).
$$

Questa formula è l’analogo multiclasse del gradiente logistico binario.

### Messaggio importante

Anche qui la struttura è sempre la stessa:

$$
\text{gradiente} = \text{errore} \times \text{input}.
$$

---

# 16. Concavità della log-likelihood per Softmax

La dimostrazione completa è più tecnica, ma l’idea è questa: la Hessiana a blocchi della log-likelihood è semidefinita negativa.

Il modo elegante di vederlo è osservare che, per un singolo esempio, il termine quadratico può essere riscritto come l’opposto di una varianza, e quindi è sempre $\le 0$.

### Conclusione finale

La log-likelihood Softmax è concava. Equivalentemente, la cross-entropy multiclasse è convessa.

---

# 17. Perceptron: teorema di convergenza

Assumiamo dati linearmente separabili. Esiste cioè un vettore $\theta^*$ con $\|\theta^*\|=1$ tale che

$$
y_i\,\theta^{*T}x_i \ge \gamma^* > 0
\quad\forall i.
$$

Qui $\gamma^*$ è il margine di separazione.

L’algoritmo del perceptron aggiorna:

$$
\theta_{t+1}=\theta_t+y_i x_i
$$

quando sbaglia sul punto $(x_i,y_i)$.

Vogliamo mostrare che il numero di errori è finito.

---

## 17.1 Upper bound sulla norma

Se facciamo un aggiornamento,

$$
\|\theta_{t+1}\|^2
=
\|\theta_t + y_i x_i\|^2.
$$

Sviluppiamo:

$$
\|\theta_{t+1}\|^2
=
\|\theta_t\|^2 + 2y_i x_i^T\theta_t + \|x_i\|^2.
$$

Nel caso classico del perceptron, l’aggiornamento avviene quando $y_ix_i^T\theta_t\le 0$. Quindi

$$
2y_i x_i^T\theta_t \le 0.
$$

Se $R=\max_i \|x_i\|$, allora

$$
\|\theta_{t+1}\|^2 \le \|\theta_t\|^2 + R^2.
$$

Dopo $M$ errori,

$$
\|\theta_M\|^2 \le M R^2,
\qquad
\|\theta_M\|\le \sqrt{M}\,R.
$$

---

## 17.2 Lower bound sul prodotto con $\theta^*$

Consideriamo

$$
\theta^{*T}\theta_{t+1}
=
\theta^{*T}(\theta_t+y_ix_i)
=
\theta^{*T}\theta_t + y_i\theta^{*T}x_i.
$$

Per definizione di margine,

$$
y_i\theta^{*T}x_i \ge \gamma^*.
$$

Quindi ogni aggiornamento aumenta il prodotto di almeno $\gamma^*$. Dopo $M$ errori,

$$
\theta^{*T}\theta_M \ge M\gamma^*.
$$

---

## 17.3 Sandwich finale con Cauchy-Schwarz

Per Cauchy-Schwarz,

$$
\theta^{*T}\theta_M \le \|\theta^*\|\|\theta_M\| = \|\theta_M\|,
$$

perché $\|\theta^*\|=1$.

Usando i due bound ottenuti:

$$
M\gamma^* \le \|\theta_M\| \le \sqrt{M}\,R.
$$

Eleviamo al quadrato:

$$
M^2(\gamma^*)^2 \le M R^2.
$$

Se $M>0$, dividiamo per $M$:

$$
M \le \frac{R^2}{(\gamma^*)^2}.
$$

### Conclusione

Il numero di errori è finito: il perceptron converge in un numero di passi limitato.

---

# 18. SVM: dalla formulazione geometrica alla hinge loss

---

## 18.1 Hard margin

Se i dati sono separabili, vogliamo il separatore col margine massimo:

$$
\min_\theta \frac{1}{2}\|\theta\|^2
\quad\text{soggetto a}\quad
y_i\theta^Tx_i \ge 1 \ \forall i.
$$

Minimizzare $\|\theta\|^2$ equivale a massimizzare il margine geometrico.

---

## 18.2 Soft margin con variabili slack

Se i dati non sono perfettamente separabili, introduciamo slack $\xi_i\ge 0$:

$$
\min_{\theta,\xi}
\frac{1}{2}\|\theta\|^2 + C\sum_{i=1}^n \xi_i
$$

soggetto a

$$
y_i\theta^Tx_i \ge 1-\xi_i,
\qquad
\xi_i\ge 0.
$$

---

## 18.3 Come nasce la hinge loss

Dal vincolo

$$
y_i\theta^Tx_i \ge 1-\xi_i
$$

otteniamo

$$
\xi_i \ge 1-y_i\theta^Tx_i.
$$

Insieme a $\xi_i\ge 0$, questo significa che $\xi_i$ deve essere almeno il massimo tra queste due quantità:

$$
\xi_i = \max\big(0,\,1-y_i\theta^Tx_i\big).
$$

Questa è esattamente la **hinge loss**:

$$
(1-y_i\theta^Tx_i)_+.
$$

Sostituendo, otteniamo la formulazione unconstrained:

$$
J(\theta)=\frac{1}{2}\|\theta\|^2 + C\sum_{i=1}^n (1-y_i\theta^Tx_i)_+.
$$

---

# 19. Sub-gradiente della SVM

La hinge loss non è derivabile in $1-y_i\theta^Tx_i=0$, ma è convessa. Possiamo quindi usare il **sub-gradiente**.

---

## 19.1 Caso 1: punto ben classificato con margine sufficiente

Se

$$
y_i\theta^Tx_i > 1,
$$

allora la hinge vale $0$ e il contributo del punto alla loss è piatto. Il sub-gradiente è solo quello del termine di regolarizzazione:

$$
\partial J(\theta)=\theta.
$$

---

## 19.2 Caso 2: punto dentro il margine o classificato male

Se

$$
y_i\theta^Tx_i < 1,
$$

allora

$$
(1-y_i\theta^Tx_i)_+ = 1-y_i\theta^Tx_i.
$$

Derivando rispetto a $\theta$,

$$
\nabla_\theta(1-y_i\theta^Tx_i) = -y_i x_i.
$$

Quindi il sub-gradiente totale è

$$
\partial J(\theta)=\theta - C y_i x_i.
$$

---

## 19.3 Aggiornamento stocastico

Con learning rate $\gamma$, otteniamo:

- se $y_i\theta^Tx_i>1$,
  $$
\theta \leftarrow \theta - \gamma \theta;
$$

- se $y_i\theta^Tx_i<1$,
  $$
\theta \leftarrow \theta - \gamma(\theta - C y_i x_i).
$$

Cioè

$$
\theta \leftarrow (1-\gamma)\theta + \gamma C y_i x_i.
$$

### Interpretazione

- il termine $(1-\gamma)\theta$ “ritira” i pesi verso zero;
- il termine $y_i x_i$ corregge l’errore di classificazione.

---

# 20. Kernel trick e argomento di rappresentazione

Supponiamo di mappare i dati in uno spazio di feature alto o infinito tramite $\Psi(x)$.

Nel nuovo spazio, il classificatore lineare è

$$
f(x)=\theta^T\Psi(x).
$$

L’idea chiave è che la soluzione ottima $\theta$ vive nello span dei dati trasformati.

---

## 20.1 Perché $\theta$ può essere scritto come combinazione dei dati

Scomponiamo $\theta$ in due parti:

$$
\theta = \theta_{\parallel} + \theta_{\perp},
$$

dove:

- $\theta_{\parallel}$ sta nello spazio generato dai vettori $\Psi(x_1),\dots,\Psi(x_n)$;
- $\theta_{\perp}$ è ortogonale a quello spazio.

Per ogni training point $x_i$,

$$
\theta^T\Psi(x_i)
=
\theta_{\parallel}^T\Psi(x_i) + \theta_{\perp}^T\Psi(x_i).
$$

Ma $\theta_{\perp}$ è ortogonale a tutto lo span, quindi

$$
\theta_{\perp}^T\Psi(x_i)=0.
$$

Dunque la classificazione dipende solo da $\theta_{\parallel}$.

Invece la norma si scompone come

$$
\|\theta\|^2 = \|\theta_{\parallel}\|^2 + \|\theta_{\perp}\|^2.
$$

Per minimizzare la norma, conviene mettere $\theta_{\perp}=0$.

### Conclusione

La soluzione ottima ha la forma

$$
\theta = \sum_{i=1}^n \alpha_i \Psi(x_i).
$$

---

## 20.2 Il kernel

Sostituendo nella funzione di decisione,

$$
f(x)
=
\left(\sum_{i=1}^n \alpha_i \Psi(x_i)\right)^T \Psi(x)
=
\sum_{i=1}^n \alpha_i \langle \Psi(x_i),\Psi(x)\rangle.
$$

Definiamo quindi il kernel

$$
K(x_i,x)=\langle \Psi(x_i),\Psi(x)\rangle.
$$

Otteniamo

$$
f(x)=\sum_{i=1}^n \alpha_i K(x_i,x).
$$

### Interpretazione

Non serve conoscere esplicitamente $\Psi(x)$: basta saper calcolare $K(x,z)$.

---

# 21. Statistical Learning Theory: classi finite e sample complexity

Sia $H$ una classe finita di classificatori. Vogliamo sapere quanti campioni servono per garantire che l’errore empirico sia vicino all’errore vero **uniformemente** su tutti gli $h\in H$.

---

## 21.1 Hoeffding per un classificatore fissato

Per un classificatore fissato $h$, l’errore empirico $\hat R(h)$ è la media di variabili Bernoulli indipendenti. Per Hoeffding,

$$
P\big(|\hat R(h)-R(h)|>\varepsilon\big)
\le
2e^{-2n\varepsilon^2}.
$$

---

## 21.2 Union bound su tutta la classe

A noi non basta controllare un solo $h$: vogliamo che il bound valga per **tutti** gli $h\in H$.

Usiamo quindi l’union bound:

$$
P\left(\sup_{h\in H}|\hat R(h)-R(h)|>\varepsilon\right)
\le
\sum_{h\in H} P\big(|\hat R(h)-R(h)|>\varepsilon\big).
$$

Ogni termine è limitato da $2e^{-2n\varepsilon^2}$, quindi

$$
P\left(\sup_{h\in H}|\hat R(h)-R(h)|>\varepsilon\right)
\le
2|H|e^{-2n\varepsilon^2}.
$$

---

## 21.3 Ricavare la sample complexity

Se vogliamo che questa probabilità sia al più $\delta$, imponiamo

$$
2|H|e^{-2n\varepsilon^2}\le \delta.
$$

Prendiamo il logaritmo:

$$
\log 2 + \log |H| - 2n\varepsilon^2 \le \log \delta.
$$

Equivalentemente,

$$
2n\varepsilon^2 \ge \log \frac{2|H|}{\delta}.
$$

Quindi basta prendere

$$
n \ge \frac{1}{2\varepsilon^2}\log\frac{2|H|}{\delta}.
$$

### Conclusione

La sample complexity cresce solo **logaritmicamente** con la cardinalità della classe $H$.

---

# 22. VC dimension: esempi classici

La VC dimension di una classe $H$ è il massimo numero di punti che $H$ può **shatterare**, cioè etichettare in tutti i modi possibili.

---

## 22.1 Intervalli sulla retta: VC dimension = 2

### Perché almeno 2

Prendiamo due punti $x_1<x_2$. Un intervallo $[a,b]$ può realizzare tutte le etichettature:

- $--$: scegli intervallo vuoto;
- $+-$: prendi un intervallo che contiene solo $x_1$;
- $-+$: prendi un intervallo che contiene solo $x_2$;
- $++$: prendi un intervallo che contiene entrambi.

Quindi 2 punti sono shatterabili.

### Perché non 3

Prendiamo tre punti ordinati $x_1<x_2<x_3$. Considera l’etichettatura

$$
+,-,+.
$$

Nessun intervallo singolo può includere $x_1$ e $x_3$ senza includere anche $x_2$.

Quindi 3 punti non sono shatterabili.

### Conclusione

$$
d_{VC}=2.
$$

---

## 22.2 Iperpiani in $\mathbb{R}^2$: VC dimension = 3

### Perché almeno 3

Tre punti in posizione generale nel piano possono essere separati in tutti i modi da una retta.

### Perché non 4

Prendiamo quattro punti in configurazione XOR. L’etichettatura alternata non è linearmente separabile.

### Conclusione

Le rette in $\mathbb{R}^2$ hanno

$$
d_{VC}=3.
$$

Più in generale, gli iperpiani in $\mathbb{R}^d$ hanno VC dimension $d+1$.

---

# 23. Decision Trees: perché uno split non peggiora l’errore

Consideriamo una foglia $l$ che contiene $N_l$ punti, di cui $N_l^+$ positivi.

Definiamo

$$
z_l = \frac{N_l^+}{N_l}.
$$

L’impurità del nodo è una funzione $\psi(z_l)$, ad esempio:

- errore di classificazione;
- indice di Gini;
- entropia.

L’errore totale del nodo è

$$
E(l)=N_l\psi(z_l).
$$

Supponiamo di dividere il nodo in figlio sinistro $L$ e figlio destro $R$.

---

## 23.1 La media della madre è combinazione convessa delle medie dei figli

Poiché

$$
N_l=N_L+N_R,
\qquad
N_l^+=N_L^+ + N_R^+,
$$

abbiamo

$$
\frac{N_l^+}{N_l}
=
\frac{N_L^+ + N_R^+}{N_l}.
$$

Moltiplichiamo e dividiamo nei termini giusti:

$$
\frac{N_l^+}{N_l}
=
\frac{N_L}{N_l}\frac{N_L^+}{N_L}
+
\frac{N_R}{N_l}\frac{N_R^+}{N_R}.
$$

Se definiamo

$$
\alpha=\frac{N_L}{N_l},
\qquad
1-\alpha=\frac{N_R}{N_l},
$$

allora

$$
z_l = \alpha z_L + (1-\alpha)z_R.
$$

Quindi l’impurità della madre è valutata in una combinazione convessa delle impurità “grezze” dei figli.

---

## 23.2 Uso della concavità

Le funzioni di impurità standard sono **concave** in $z$. Per la concavità,

$$
\psi(\alpha z_L + (1-\alpha)z_R)
\ge
\alpha\psi(z_L)+(1-\alpha)\psi(z_R).
$$

Sostituendo le definizioni,

$$
\psi\left(\frac{N_l^+}{N_l}\right)
\ge
\frac{N_L}{N_l}\psi\left(\frac{N_L^+}{N_L}\right)
+
\frac{N_R}{N_l}\psi\left(\frac{N_R^+}{N_R}\right).
$$

Moltiplichiamo per $N_l$:

$$
N_l\psi\left(\frac{N_l^+}{N_l}\right)
\ge
N_L\psi\left(\frac{N_L^+}{N_L}\right)
+
N_R\psi\left(\frac{N_R^+}{N_R}\right).
$$

Cioè

$$
E(\text{madre}) \ge E(\text{figlio sinistro}) + E(\text{figlio destro}).
$$

### Conclusione

Uno split non aumenta mai l’errore impurità totale.

---

# 24. Random Forests: perché aiutano

Un singolo albero è ad alta varianza: piccole variazioni nei dati possono cambiare molto la struttura appresa.

Le Random Forests riducono questa instabilità combinando:

1. **bootstrap** sui campioni;
2. **randomizzazione delle feature** ad ogni split;
3. **media / voto** di molti alberi.

### Effetto bias-varianza

- il bias non aumenta troppo;
- la varianza si riduce parecchio.

Per questo le Random Forests generalizzano meglio di un singolo albero profondo.

---

# 25. Riassunto finale super-compatto per l’esame

## Regressione e predittori ottimali

- loss quadratica $\Rightarrow$ media condizionata;
- loss assoluta $\Rightarrow$ mediana condizionata;
- classificazione binaria 0-1 $\Rightarrow$ classe a posteriori più probabile.

## OLS

- minimizza $\|y-X\theta\|^2$;
- soluzione:
  $$
\hat\theta=(X^TX)^{-1}X^Ty;
$$
- residui ortogonali:
  $$
X^T(y-X\hat\theta)=0;
$$
- Hessiana:
  $$
X^TX \succeq 0;
$$
- OLS è unbiased:
  $$
\mathbb{E}[\hat\theta]=\theta^*;
$$
- varianza:
  $$
\operatorname{Var}(\hat\theta)=\sigma^2(X^TX)^{-1}.
$$

## Ridge

- aggiunge $\lambda\|\theta\|^2$;
- riduce varianza;
- soluzione:
  $$
\hat\theta_{\text{ridge}}=(X^TX+\lambda I)^{-1}X^Ty.
$$

## Logistic Regression

- nasce da Bernoulli + MLE;
- likelihood:
  $$
\prod_i p_i^{y_i}(1-p_i)^{1-y_i};
$$
- objective equivalenti:
  - massimizzare log-likelihood;
  - minimizzare negative log-likelihood;
  - minimizzare cross-entropy.
- Hessiana negativa $\Rightarrow$ log-likelihood concavo.

## Softmax

- gradiente:
  $$
\nabla_{\theta^{(k)}}L
  =
  \sum_i (y_i^{(k)}-\hat P^{(k)}(x_i))\phi(x_i).
$$

## Perceptron

- converge se i dati sono linearmente separabili;
- numero di errori limitato da $R^2/(\gamma^*)^2$.

## SVM

- massimizza il margine;
- soft margin $\Rightarrow$ hinge loss;
- kernel trick $\Rightarrow$ lavora con prodotti scalari in spazi di feature impliciti.

## Statistical Learning Theory

- classi finite:
  $$
n \ge \frac{1}{2\varepsilon^2}\log\frac{2|H|}{\delta};
$$
- la VC dimension misura la complessità della classe.

## Decision Trees

- lo split non peggiora l’impurità grazie alla concavità di Gini / Entropia;
- le Random Forests riducono la varianza del singolo albero.

---

# 26. Osservazioni finali sulle confusioni più comuni

## 1. “Linear regression” non significa “retta nel grafico”

Significa **lineare nei parametri**. Posso usare feature come $x, x^2, x^3$ e ottenere curve non lineari in $x$, restando lineare in $\theta$.

## 2. Logistic regression ha “due obiettivi”?

No: di solito è lo stesso obiettivo scritto in modi diversi.

$$
\max \ell(\theta)
\quad\Longleftrightarrow\quad
\min -\ell(\theta).
$$

## 3. Perché compare $X^T$ in OLS?

Perché il residuo deve essere ortogonale allo spazio delle colonne di $X$, e questo si scrive

$$
X^T(y-X\hat\theta)=0.
$$

## 4. Boosting riduce il bias o la varianza?

Principalmente **riduce il bias**, perché aggiunge modelli deboli in sequenza per correggere errori sistematici dei precedenti.

## 5. Bagging e Random Forest cosa riducono?

Principalmente **la varianza**, mediando molti modelli instabili.

---
