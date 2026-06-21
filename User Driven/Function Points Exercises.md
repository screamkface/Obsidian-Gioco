Perfetto. Facciamoli **a livelli**, come nelle tracce d’esame. L’obiettivo è imparare prima il calcolo meccanico, poi il ragionamento su **ILF/EIF/EI/EO/EQ**, poi la matrice di complessità.

## Metodo fisso da usare sempre

Per ogni esercizio devi seguire questa scaletta:

```text
1. Identify ILF, EIF, EI, EO, EQ
2. Count DET, RET, FTR if needed
3. Use the complexity matrix
4. Assign weights
5. Sum everything
6. Obtain UFP
```

Ricorda:

| Tipo    | Complessità con | Peso Low | Peso Average | Peso High |     |
| ------- | --------------- | -------: | -----------: | --------: | --- |
| **ILF** | DET + RET       |        7 |           10 |        15 |     |
| **EIF** | DET + RET       |        5 |            7 |        10 |     |
| **EI**  | DET + FTR       |        3 |            4 |         6 |     |
| **EO**  | DET + FTR       |        4 |            5 |         7 |     |
| **EQ**  | DET + FTR       |        3 |            4 |         6 |     |

---

# Esercizio 0 — Guidato

A small library app has:

- 2 low ILFs
    
- 1 average ILF
    
- 1 low EIF
    
- 3 low EIs
    
- 1 average EI
    
- 2 average EOs
    
- 4 low EQs
    

Compute the UFP.

Qui **non devi usare DET/RET/FTR**, perché la complessità è già data.

| Elemento      | Peso | Calcolo | Totale |     |
| ------------- | ---: | ------: | -----: | --- |
| 2 low ILF     |    7 |   2 × 7 |     14 |     |
| 1 average ILF |   10 |  1 × 10 |     10 |     |
| 1 low EIF     |    5 |   1 × 5 |      5 |     |
| 3 low EI      |    3 |   3 × 3 |      9 |     |
| 1 average EI  |    4 |   1 × 4 |      4 |     |
| 2 average EO  |    5 |   2 × 5 |     10 |     |
| 4 low EQ      |    3 |   4 × 3 |     12 |     |

Totale:

```text
UFP = 14 + 10 + 5 + 9 + 4 + 10 + 12 = 64
```

Risposta:

> The system has **64 Unadjusted Function Points**.

---

# Esercizio 1 — Calcolo diretto UFP

A university app has:

- 3 low ILFs
    
- 2 average ILFs
    
- 1 high ILF
    
- 2 low EIFs
    
- 5 low EIs
    
- 3 average EIs
    
- 1 high EI
    
- 2 average EOs
    
- 4 low EQs
    
- 1 average EQ
    

Compute the UFP using the standard weights.

Qui devi solo moltiplicare e sommare.

---

# Esercizio 2 — Data Functions: ILF/EIF con DET e RET

A hospital appointment app contains the following logical files:

|Logical file|Type|DET|RET|
|---|---|--:|--:|
|Patient|ILF|18|2|
|Doctor|ILF|22|1|
|Appointment|ILF|30|4|
|External Insurance Registry|EIF|12|1|
|External Payment Registry|EIF|55|2|

Classify each file as **Low, Average or High**, then compute the total Function Points for the data functions only.

Matrice da usare per **ILF/EIF**:

|RET \ DET|1–19 DET|20–50 DET|51+ DET|
|---|--:|--:|--:|
|**1 RET**|Low|Low|Average|
|**2–5 RET**|Low|Average|High|
|**6+ RET**|Average|High|High|

## Solution

### Patient - Low - ILF: 7

### Doctor - Low - ILF: 7

### Appointment - Average - ILF: 10

---

# Esercizio 3 — Transaction Functions: EI con DET e FTR

A library system has these input operations:

|Transaction|Type|DET|FTR|
|---|---|--:|--:|
|Add new book|EI|8|1|
|Register user|EI|12|1|
|Create loan|EI|6|3|
|Return book|EI|4|2|
|Update user profile|EI|18|2|

Classify each EI as **Low, Average or High**, then compute the EI Function Points.

Matrice per **EI**:

|FTR \ DET|1–4 DET|5–15 DET|16+ DET|
|---|--:|--:|--:|
|**0–1 FTR**|Low|Low|Average|
|**2 FTR**|Low|Average|High|
|**3+ FTR**|Average|High|High|

Peso EI:

|Low|Average|High|
|--:|--:|--:|
|3|4|6|
## Solution

- Add new book - Low 
	- Function Points: 3
- Register user - Low
	- Function Points: 3
- Create loan - High
	- Function Points: 6
- Return Book - Low
	- Function Points: 3
- Update user profile - High
	- Function Points - 6

---

# Esercizio 4 — EO/EQ con DET e FTR

A student management system has the following output and inquiry functions:

|Function|Type|DET|FTR|
|---|---|--:|--:|
|View student profile|EQ|10|1|
|Search available exams|EQ|7|2|
|Generate career report|EO|25|3|
|Generate tax payment summary|EO|18|4|
|View exam booking details|EQ|5|1|

Classify each function as **Low, Average or High**, then compute the total FP for EO and EQ.

Matrice per **EO/EQ**:

|FTR \ DET|1–5 DET|6–19 DET|20+ DET|
|---|--:|--:|--:|
|**0–1 FTR**|Low|Low|Average|
|**2–3 FTR**|Low|Average|High|
|**4+ FTR**|Average|High|High|

## Solution

- [EQ] View Student Profile - low
	- FP: 7
- [EQ] Search available exams - Average
	- FP: 4
- [EO] Generate career report - High
	- FP: 7
- [EO] Generate tax payment summary - High
	- FP: 7
- [EO] View exam booking details - Low
	- FP: 4

SUM TOTAL POINTS = 34



---

# Esercizio 5 — Caso completo stile esame

A small university app allows students to:

- register and update their profile; 
    
- search available exams;
    
- book an exam;
    
- cancel an exam booking;
    
- view their career;
    
- generate a career certificate;
    
- pay university fees through an external payment system.
    

To remember

| Tipo    | Complessità con | Peso Low | Peso Average | Peso High |     |
| ------- | --------------- | -------: | -----------: | --------: | --- |
| **ILF** | DET + RET       |        7 |           10 |        15 |     |
| **EIF** | DET + RET       |        5 |            7 |        10 |     |
| **EI**  | DET + FTR       |        3 |            4 |         6 |     |
| **EO**  | DET + FTR       |        4 |            5 |         7 |     |
| **EQ**  | DET + FTR       |        3 |            4 |         6 |     |



The application maintains:

|Logical file|Type|DET|RET|
|---|---|--:|--:|
|Student|ILF|16|2|
|Exam|ILF|20|1|
|Booking|ILF|14|2|
|Career|ILF|28|3|
|External Payment System|EIF|10|1|

The transactions are:

|Function|Type|DET|FTR|
|---|---|--:|--:|
|Register student|EI|12|1|
|Update profile|EI|10|1|
|Search exams|EQ|8|1|
|Book exam|EI|6|4|
|Cancel booking|EI|4|2|
|View career|EQ|15|2|
|Generate certificate|EO|25|2|
|Pay fees|EI|7|3|

Compute the total **Unadjusted Function Points**.

Qui devi fare tutto:

```text
ILF/EIF → DET + RET → complexity → weight
EI/EO/EQ → DET + FTR → complexity → weight
sum all weights → UFP
```

| RET \ DET   | 1–19 DET | 20–50 DET | 51+ DET |
| ----------- | -------- | --------- | ------- |
| **1 RET**   | Low      | Low       | Average |
| **2–5 RET** | Low      | Average   | High    |
| **6+ RET**  | Average  | High      | High    |

|FTR \ DET|1–4 DET|5–15 DET|16+ DET|
|---|--:|--:|--:|
|**0–1 FTR**|Low|Low|Average|
|**2 FTR**|Low|Average|High|
|**3+ FTR**|Average|High|High|

## Solution

|Logical File|Type|DET|RET|Complexity|Weight|Total FP|
|---|---|--:|--:|---|--:|--:|
|Student|ILF|16|2|Low|7|7|
|Exam|ILF|20|1|Low|7|7|
|Booking|ILF|14|2|Low|7|7|
|Career|ILF|28|3|Average|10|10|
|External Payment System|EIF|10|1|Low|5|5|
|**Data Functions Total**||||||**36**|



---

# Esercizio 6 — Function Points + COCOMO II

A system has been estimated at **180 UFP**.

The adjustment factor is not required. The development team uses Java, with a conversion factor of:

```text
53 LOC / FP
```

COCOMO II parameters are:

```text
A = 2.94
E = 1.08
ΠEM = 1.15
```

Tasks:

1. Convert FP into LOC.
    
2. Convert LOC into KSLOC.
    
3. Compute effort in person-months:
    

```text
PM = A × Size^E × ΠEM
```

4. Explain why the effort would increase if the project had higher required reliability and stricter execution time constraints.
    

## Solution 

We need to convert function points into **source lines of code** using an average language factor. 

LOC = FP X LOC per FP

FP = 180
LOC/FP = 53

Convert function points into LOC

LOC = 180 x 53 = **9540**

LOC = **9540**

And then we convert LOC to KSLOC

KSLOC = LOC / 1000

KSLOC = 9540 / 100 = **9.54**

KSLOC = 9.54

Now we need to convert KSLOC in COCOMO II

$$
PM = A × Size^E × ΠEM
$$

PM = 2.94 x 9.54^1.08 x 1.15 = 38.632 

---
