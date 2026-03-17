# Pandoc Guard Report

- Nota: `Machine Learning/Dimostrazioni Machine Learning.md`
- Stato: **FALLITO**
- Sommario: Validazione conclusa: 2 errori, 0 warning.

## Diagnostica

- **ERROR** `latex_error`: LaTeX Error: Option clash for package babel.

- **INFO** `latex_context`: l.61 \usepackage

- **ERROR** `latex_exec_error`: Command failed: xelatex -interaction=nonstopmode -halt-on-error -output-directory /tmp/pandoc-guard-EPrbAx /tmp/pandoc-guard-EPrbAx/Dimostrazioni Machine Learning.sanitized.tex


## Comando Pandoc

```bash
pandoc --from markdown+yaml_metadata_block+wikilinks_title_after_pipe+tex_math_dollars+pipe_tables+grid_tables+multiline_tables+raw_tex+smart --resource-path /tmp/pandoc-guard-EPrbAx:/home/nicola/Documents/Local Obs/Obsidian Locale -s /tmp/pandoc-guard-EPrbAx/Dimostrazioni Machine Learning.sanitized.md -t latex -o /tmp/pandoc-guard-EPrbAx/Dimostrazioni Machine Learning.sanitized.tex
```

## Comando motore PDF

```bash
xelatex -interaction=nonstopmode -halt-on-error -output-directory /tmp/pandoc-guard-EPrbAx /tmp/pandoc-guard-EPrbAx/Dimostrazioni Machine Learning.sanitized.tex
```

## Anteprima Markdown sanificato

```markdown
---
title: Dimostrazioni ML
subtitle: Dimostrazioni guidate machine learning
author:
  - name: Nome Cognome
    affiliation: Università / Dipartimento
    email: nome@example.com
  - name: Secondo Autore
    affiliation: Istituzione
date: 4 Marzo 2026
lang: it-IT
abstract: Tutte le dimostrazioni del corso di ML
keywords:
  - machine learning
  - regression
  - classification
subject: Machine Learning
bibliography: references.bib
csl: ieee.csl
link-citations: true
nocite: "@*"
numbersections: true
toc: true
toc-depth: 2
lof: false
lot: false
documentclass: article
classoption:
  - a4paper
  - 11pt
geometry:
  - margin=2.5cm
fontsize: 11pt
linestretch: 1.15
colorlinks: true
papersize: a4
pagestyle: plain
urlcolor: blue
linkcolor: black
citecolor: blue
figureTitle: Figura
tableTitle: Tabella
figPrefix: Fig.
eqnPrefix: Eq.
tblPrefix: Tab.
standalone: true
from: markdown+tex_math_dollars+fenced_divs+implicit_figures
header-includes:
  - |
    \usepackage[T1]{fontenc}
  - |
    \usepackage[utf8]{inputenc}
  - |
    \usepackage[italian]{babel}
  - |
    \usepackage{microtype}
  - |
    \usepackage{amsmath, amssymb, amsthm}
  - |
    \usepackage{booktabs}
  - |
    \usepackage{longtable}
  - |
    \usepackage{graphicx}
  - |
    \usepackage{float}
  - |
    \usepackage{caption}
  - |
    \usepackage{subcaption}
  - |
    \usepackage{csquotes}
  - |
    \usepackage{hyperref}
  - |
    \hypersetup{
      pdftitle={Titolo del paper},
      pdfauthor={Nome Cognome},
      pdfsubject={Paper scientifico},
      pdfkeywords={machine learning, regression, classification}
    }
include-before-body:
  - |
    \newtheorem{theorem}{Teorema}
    \newtheorem{proposition}{Proposizione}
    \newtheorem{lemma}{Lemma}
    \newtheorem{corollary}{Corollario}
    \theoremstyle{definition}
    \newtheorem{definition}{Definizione}
    \newtheorem{example}{Esempio}
    \theoremstyle{remark}
    \newtheorem{remark}{Osservazione}
---
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

Quando serve l’intercetta, la assorbo nella matrice $X$ aggiungendo una colonna di $1$.

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
\hat y_i = mx_i

… [troncato]
```
