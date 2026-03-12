---
title: Machine Learning Notes
author: Nicola Moscufo
date: 4 Marzo 2026
lang: it
toc: true
numbersections: true
geometry: top=3cm, bottom=3cm, left=2.5cm, right=2.5cm
fontsize: 11pt
linestretch: 1.25
colorlinks: true
linkcolor: NavyBlue
urlcolor: NavyBlue
toccolor: Black
header-includes:
  - \usepackage{mathpazo}
  - \usepackage[T1]{fontenc}
  - \usepackage{mathtools}
  - \usepackage{bm}
  - \usepackage{booktabs}
  - \usepackage{longtable}
  - \usepackage{array}
  - \usepackage{multirow}
  - \usepackage{fancyhdr}
  - \pagestyle{fancy}
  - \fancyhead[L]{}
  - \fancyhead[R]{\leftmark}
  - \fancyfoot[C]{\thepage}
  - \usepackage[font=small,labelfont=bf]{caption}
  - \usepackage{framed}
  - \definecolor{shadecolor}{RGB}{248,248,248}
  - \usepackage{float}
  - \let\origfigure\figure
  - \let\endorigfigure\endfigure
  - \renewenvironment{figure}[1][2] {\expandafter\origfigure\expandafter[H]} {\endorigfigure}
  - \usepackage{etoolbox}
  - \AtBeginEnvironment{longtable}{\small}
---

# Multilingual Natural Language Processing: Words and Tokens

## The Ontology of Words

In natural language processing (NLP), the distinction between word instances and word types is fundamental to vocabulary management and statistical modeling.

### Word Types vs. Word Instances
*   **Word Types ($|V|$):** These represent the set of distinct linguistic units (vocabulary) present in a corpus. If a corpus contains multiple instances of the word "the," it contributes only once to the count of types. The number of unique types defines the **vocabulary size**, denoted as $|V|$.
*   **Word Instances ($N$):** These represent the total count of running words in a text, where every occurrence is counted, regardless of whether the word has appeared previously. $N$ corresponds to the total length of the corpus.

### Illustrative Example
Consider the sentence: *"They picnicked by the pool, then lay back on the grass and looked at the stars."*

*   **Instances ($N$):** 16 (if punctuation is excluded).
*   **Types ($|V|$):** 14. 
    *   *Note:* The word "the" appears three times (instances), but only once as a type.
*   **Mathematical Relationship:** In any corpus, the relationship is defined by $N \geq |V|$.

## Corpora and Language Diversity

A **corpus** (plural: corpora) is a structured collection of text, typically curated to represent a specific linguistic domain, register, or speaker intent.

### The Multilingual Challenge
While there are approximately 7,000 distinct languages spoken globally, contemporary NLP research suffers from significant "Anglocentrism"—a historical bias where algorithms are predominantly designed, trained, and evaluated using English datasets. This leads to several technical challenges:

*   **Resource Inequality:** High-resource languages (e.g., English, Mandarin, Spanish) have massive amounts of digitized text, whereas low-resource languages lack the data necessary for robust statistical model training.
*   **Code-Switching:** This phenomenon occurs when a speaker or writer alternates between two or more languages or dialects within a single utterance or conversation. Standard monolingual tokenizers and language models struggle with the syntactic and semantic shifts inherent in code-switched text.

### Key Takeaways
*   The vocabulary size $|V|$ is a property of the unique lexicon, while $N$ is the measure of total corpus length.
*   NLP systems should ideally be evaluated across diverse linguistic contexts to avoid overfitting to the idiosyncrasies of English.
*   Code-switching necessitates flexible NLP pipelines capable of handling multiple linguistic structures simultaneously.

\newpage

## Tokenization

Tokenization is the computational process of segmenting a continuous stream of raw input text into discrete units known as **tokens**. These tokens serve as the fundamental input units for subsequent NLP tasks, such as vectorization, syntactic parsing, and machine translation.

### Objectives of Tokenization
The primary goal is to map unstructured character sequences into meaningful discrete units that capture enough semantic information while maintaining a computationally manageable vocabulary size.

### Challenges in Multilingual Tokenization
Tokenization strategies vary significantly across languages due to differences in orthography and morphology:

*   **White-space Tokenization:** Simple splitting by spaces (common in English). This approach fails in languages like Chinese, Japanese, or Thai, which do not use spaces as word boundaries.
*   **Morphological Complexity:** In agglutinative languages (e.g., Turkish, Finnish), a single word can be composed of many concatenated morphemes. Tokenizing at the word level leads to an excessively large $|V|$ and the "out-of-vocabulary" (OOV) problem.
*   **Subword Tokenization:** Modern approaches (e.g., Byte Pair Encoding (BPE), WordPiece) decompose words into smaller sub-units. This balances the representation of rare words while keeping the total vocabulary size $|V|$ restricted, effectively mitigating OOV issues.

### Summary of Tokenization Approaches

| Method | Mechanism | Primary Use Case |
| :--- | :--- | :--- |
| **Word-based** | Split by whitespace/punctuation | Simple English pipelines |
| **Character-based** | Split every character | Models with very small $|V|$ |
| **Subword-based** | Split by frequent n-grams | Multilingual/General-purpose |

### Key Takeaways

*   Tokenization is the bridge between raw character streams and numerical feature spaces.
*   The optimal tokenization strategy is language-dependent and must account for scripts without word delimiters and morphologically rich languages.
*   Subword tokenization is the industry standard for modern deep learning models, as it handles rare words and multilingual input more gracefully than pure word-level tokenization.

---

# NLTK and Linguistic Morphology

## NLTK and Word Tokenization
The Natural Language Toolkit (NLTK) provides standard utilities for tokenization, often relying on the concept of **orthographic words**. 

*   **Definition:** Orthographic words are defined by the conventions of a specific writing system. In many Western languages, the whitespace character acts as the primary delimiter.
*   **Limitations:** This approach is insufficient for languages that lack spaces (e.g., Chinese) or those that use complex cliticization (e.g., French "l'avion" or English contractions). Defining a "word" is therefore a non-trivial linguistic and computational decision.

## Vocabulary Growth (Heaps' Law)
A central question in computational linguistics is: *How many word types should be included in a vocabulary?* 

Empirical observation shows that as the number of word instances ($N$) grows, the number of distinct word types ($|V|$) also grows. This relationship is formalized by **Heaps’ Law**:

$$|V| = kN^{\beta}$$

*   $|V|$: The vocabulary size (number of unique types).
*   $N$: The number of running word instances.
*   $k, \beta$: Free parameters determined empirically (typically $0.5 < \beta < 0.8$ for natural language).
*   **Implication:** The vocabulary is an "open" set; increasing the corpus size indefinitely will continue to yield new, previously unseen word types (e.g., through compounding or neologisms).

## Morphology: The Study of Morphemes
Words are not necessarily atomic units; they are often composed of smaller, meaningful building blocks called **morphemes**.

*   **Root:** The primary morpheme conveying the core semantic content of a word (e.g., "work").
*   **Affix:** A morpheme attached to a root to modify its grammatical function or meaning (e.g., "-ed").

### Classifying Affixes
Affixes are generally categorized into two functional classes:

1.  **Inflectional Morphemes:**
    *   **Function:** Express grammatical relationships (e.g., tense, number, aspect).
    *   **Properties:** Highly productive and regular. They do not typically change the word's part-of-speech category.
    *   **Examples:** Plural "-s", past tense "-ed".

2.  **Derivational Morphemes:**
    *   **Function:** Create new lexemes, often changing the word's syntactic category (part-of-speech).
    *   **Properties:** Less predictable and often idiosyncratic. They may only attach to specific subsets of words (e.g., "careful" is valid, but "sleepful" is not).
    *   **Example:** "Care" (noun) $\rightarrow$ "Careful" (adjective) $\rightarrow$ "Carefully" (adverb).

## Clitics
A **clitic** represents a middle ground between an independent word and a bound morpheme.

*   **Characteristics:** They function syntactically like independent words (representing full semantic concepts) but are phonologically bound to a "host" word.
*   **Examples:**
    *   English: The contraction *'ve* in *"I've"* functions as the verb "have" but cannot stand alone.
    *   Romance Languages: In Spanish or Italian, object pronouns often attach to the end of verbs (e.g., *"dámelo"* - "give it to me").
*   **NLP Significance:** Tokenization algorithms must decide whether to treat clitics as part of the host (potentially bloating the vocabulary with variants like "do" and "don't") or to split them into separate tokens to simplify downstream syntactic analysis.

### Key Takeaways

*   **Heaps' Law** illustrates that vocabulary size is an open-ended function of corpus size, making fixed-vocabulary models prone to OOV errors.
*   **Morphemes** are the atomic units of meaning; distinguishing between inflectional and derivational morphology is essential for stemming and lemmatization tasks.
*   **Clitics** demonstrate the tension between orthographic representation and syntactic reality, requiring careful pre-processing in sophisticated NLP pipelines.

\newpage

# Subword Tokenization: Byte Pair Encoding (BPE)

Modern NLP architectures (e.g., Transformers) rely heavily on subword tokenization to bridge the gap between character-level and word-level representations. **Byte Pair Encoding (BPE)** is the standard algorithm for this task, as it effectively manages the vocabulary size $|V|$ while ensuring that no word is entirely "out-of-vocabulary" (OOV) by decomposing unknown words into known subword units.

## The BPE Mechanism
BPE iteratively merges the most frequent adjacent pair of tokens. It operates on a frequency-based greedy heuristic to build a vocabulary of fixed size $V$.

### 1. Training Phase
The training process induces a subword vocabulary from a training corpus.

*   **Initialization:** Start with a base vocabulary consisting of every unique character in the corpus (the "character unigram" set).
*   **Iteration:**
    1.  Count the frequency of all adjacent pairs of symbols in the training corpus.
    2.  Identify the most frequent pair $(A, B)$.
    3.  Create a new token $AB$ by merging $A$ and $B$.
    4.  Add $AB$ to the vocabulary.
    5.  Replace all occurrences of $(A, B)$ in the corpus with $AB$.
    6.  Repeat until a predefined vocabulary size $|V|$ is reached or a maximum number of merge operations is performed.

### 2. Encoding Phase
Once the vocabulary is induced, encoding new (unseen) text involves applying the learned merge rules in the exact order they were created during training.

*   For any word, segment it into its constituent character units.
*   Iteratively apply the merge rules to the sequence.
*   If a word contains characters or sequences not encountered during training, the process eventually results in individual characters, ensuring the model never faces a completely unknown word.

## Structural Constraints
BPE as traditionally implemented relies on specific assumptions about text structure:

*   **Boundary Restriction:** By default, BPE merges are constrained within word boundaries. The corpus is typically pre-tokenized by whitespace and punctuation before the BPE training begins to ensure that the algorithm does not merge across distinct words.
*   **Orthographic Dependency:** The reliance on whitespace pre-segmentation makes BPE highly dependent on the orthographic conventions of the source language. 

### Limitations and Considerations
*   **Language Bias:** The "whitespace-pre-tokenization" assumption is theoretically problematic for languages like Chinese, Japanese, or Thai, where words are not delimited by spaces. Applying BPE to these languages requires either character-level pre-segmentation or specialized segmentation tools (e.g., morphological analyzers) before subword induction.
*   **Efficiency:** The number of merge operations directly impacts the sequence length. Too few merges result in character-level representations (long sequences, high computational cost), while too many result in word-level representations (high risk of OOV/sparsity).
*   **Deterministic Output:** Once the merge rules are fixed, the encoding process is deterministic, providing a stable input representation for deep learning models.

### Key Takeaways
*   **BPE** optimizes the vocabulary size by merging the most frequent character sequences iteratively, allowing the model to represent rare words as combinations of frequent subwords.
*   **Training** involves building a vocabulary by merging, while **Encoding** involves applying these rules to segment new text.
*   The **pre-tokenization** step (e.g., whitespace splitting) is a critical bottleneck for non-Western languages, necessitating adaptations for effective multilingual application.
*   Subword tokenization effectively balances the trade-off between the low-level granularity of characters and the high-level semantics of full words.

\newpage

# Managing Spelling Errors and String Similarity

In NLP, handling Out-of-Vocabulary (OOV) terms—such as misspellings, neologisms, or morphological variants—is critical for robust performance. While subword tokenization (e.g., BPE) implicitly handles OOV words by decomposing them into sub-units, this process can obscure the original semantic intent. Traditional methods utilize string distance metrics to map noisy input to valid vocabulary terms.

## Minimum Edit Distance (Levenshtein Distance)
The **Minimum Edit Distance (MED)** between two strings is defined as the minimum number of atomic operations (insertions, deletions, or substitutions) required to transform one string into another.

### Edit Operations
Let $X$ and $Y$ be two strings. We consider three operations:
1.  **Insertion (I):** Add a character to the source string.
2.  **Deletion (D):** Remove a character from the source string.
3.  **Substitution (S):** Replace one character with another.

The total cost is the sum of these operations. Depending on the application, specific operations may be weighted differently (e.g., in some phonetic models, a substitution might count as 2, while an insertion counts as 1).

## Dynamic Programming Approach
Computing the edit distance for every pair of strings in a large vocabulary is computationally expensive. We use **Dynamic Programming (DP)** to solve this by storing the results of subproblems in a matrix $D$ of size $(n+1) \times (m+1)$, where $n$ and $m$ are the lengths of strings $X$ and $Y$.

### Formalization
Let $D[i, j]$ denote the edit distance between the prefix $X[1 \dots i]$ and the prefix $Y[1 \dots j]$. 

The value $D[i, j]$ is computed using the following recurrence relation:

$$
D[i, j] = \min \begin{cases} 
D[i-1, j] + 1 & \text{(Deletion)} \\
D[i, j-1] + 1 & \text{(Insertion)} \\
D[i-1, j-1] + \text{cost}(X[i], Y[j]) & \text{(Substitution)}
\end{cases}
$$

Where the cost function for substitution is:
*   $\text{cost}(X[i], Y[j]) = 0$ if $X[i] = Y[j]$
*   $\text{cost}(X[i], Y[j]) = 1$ if $X[i] \neq Y[j]$

### Boundary Conditions
The base cases for the matrix are:
*   $D[0, 0] = 0$ (Two empty strings have distance 0)
*   $D[i, 0] = i$ (Transforming a string of length $i$ to an empty string requires $i$ deletions)
*   $D[0, j] = j$ (Transforming an empty string to a string of length $j$ requires $j$ insertions)

### Computational Complexity
*   **Time Complexity:** $O(n \times m)$, where $n$ and $m$ are the lengths of the two strings.
*   **Space Complexity:** $O(n \times m)$ to store the matrix, though it can be optimized to $O(\min(n, m))$ if only the final distance value is required.

## Application in NLP
*   **Spell Checking:** Given a user input $X$, finding the word $W$ in the vocabulary $V$ that minimizes $D(X, W)$.
*   **Query Expansion:** Identifying similar terms for search optimization.
*   **Limitations:** Simple MED treats all character edits equally. In practice, some typos are more likely than others (e.g., hitting a key adjacent to the correct one on a QWERTY keyboard). Modern systems often use weighted edit distance matrices to account for keyboard topography or phonetic similarity (e.g., Soundex or Metaphone).

### Key Takeaways
*   **Minimum Edit Distance** provides a robust, deterministic way to quantify string dissimilarity.
*   **Dynamic Programming** is essential to reduce the complexity of the calculation from exponential to quadratic, making it feasible for real-time applications.
*   While subword tokenization provides an alternative to dictionary-based lookups, Edit Distance remains a foundational tool for correcting orthographic noise and identifying variants in low-resource settings.

\newpage

# N-grams and Sequential Modeling

In Natural Language Processing, an **N-gram** is a contiguous sequence of $N$ items from a given sample of text. These items can be characters, syllables, or words, depending on the application. N-grams are the building blocks of statistical language models, allowing us to represent the structure of language based on local context.

## Definition and Taxonomy
An N-gram model predicts the likelihood of the next element in a sequence based on the preceding $N-1$ elements. The size $N$ determines the scope of the "memory" of the model.

### Terminology
*   **Unigram ($N=1$):** A single element (e.g., "The"). This treats each word as an independent event, ignoring order.
*   **Bigram ($N=2$):** A sequence of two adjacent elements (e.g., "The cat"). This accounts for local pairwise dependencies.
*   **Trigram ($N=3$):** A sequence of three adjacent elements (e.g., "The cat sat").
*   **Quadrigram ($N=4$):** A sequence of four adjacent elements (e.g., "The cat sat on").

## Probabilistic Formulation
The objective of an N-gram model is to estimate the probability of a word $w_n$ given its history of length $N-1$:

$$P(w_n | w_1, w_2, \dots, w_{n-1}) \approx P(w_n | w_{n-N+1}, \dots, w_{n-1})$$

### The Markov Assumption
N-gram models operate under a **Markov Assumption**, which posits that the probability of a future state depends only on a limited window of recent history.
*   For a bigram model ($N=2$), the model assumes $P(w_n | w_{1:n-1}) \approx P(w_n | w_{n-1})$.
*   As $N$ increases, the model captures more long-range dependencies, but the number of unique N-gram types (and thus the memory and training data requirements) grows exponentially.

## Practical Considerations

### Sparsity
As $N$ increases, the number of possible N-gram combinations $|V|^N$ grows rapidly. This leads to **data sparsity**, where many valid sequences in a language never appear in the training corpus (assigned a probability of zero). To mitigate this, practitioners use:
*   **Smoothing:** Assigning a small probability mass to unseen N-grams (e.g., Laplace smoothing, Good-Turing estimation).
*   **Backoff:** Using a lower-order N-gram (e.g., a bigram) if the higher-order N-gram (e.g., a trigram) has not been observed.
*   **Interpolation:** Mixing probabilities from different N-gram models (e.g., $0.6 \times P_{trigram} + 0.3 \times P_{bigram} + 0.1 \times P_{unigram}$).

### N-grams vs. Subword Models
While N-grams operate on discrete word units, subword tokenization (like BPE) acts as a specialized form of N-gram induction where tokens are learned based on character-sequence frequency rather than pre-defined word boundaries.

### Key Takeaways
*   **Contiguity:** N-grams capture sequential local dependencies by definition.
*   **Trade-off:** Small $N$ values are robust but capture minimal context; large $N$ values provide more linguistic nuance but suffer severely from data sparsity.
*   **Language Modeling:** N-grams provide the foundational framework for estimating the probability of word sequences, a core task in speech recognition, machine translation, and text generation.
*   **Scalability:** The choice of $N$ must be balanced against the available corpus size to avoid the "curse of dimensionality" inherent in counting sequences.

\newpage

# Language Models: Foundations and Probability

A Language Model (LM) is a computational system that assigns a probability distribution over sequences of words or tokens. By learning patterns from large-scale text data, an LM allows us to quantify the likelihood of a given string, effectively capturing the structure and "naturalness" of human language.

## Formalization and Probability
The fundamental goal of a language model is to compute the probability of a sequence of $N$ words $W = (w_1, w_2, \dots, w_n)$. Using the **Chain Rule of Probability**, we decompose this joint probability into a product of conditional probabilities:

$$P(w_1, w_2, \dots, w_n) = \prod_{i=1}^{n} P(w_i | w_1, w_2, \dots, w_{i-1})$$

In this formulation, $P(w_i | w_1, \dots, w_{i-1})$ represents the probability of word $w_i$ occurring given all preceding words (the "history").

### The N-gram Approximation
Since computing $P(w_i | w_1, \dots, w_{i-1})$ exactly is intractable due to the infinite variety of language and the sparsity of long histories, we apply the **Markov Assumption**. We approximate the probability by considering only the most recent $N-1$ words:

$$P(w_i | w_1, \dots, w_{i-1}) \approx P(w_i | w_{i-N+1}, \dots, w_{i-1})$$

For example, in a **Bigram model** ($N=2$):
$$P(w_i | w_1, \dots, w_{i-1}) \approx P(w_i | w_{i-1})$$

## Estimation and Training
To estimate these probabilities, we use the Maximum Likelihood Estimation (MLE) approach based on observed frequencies in a corpus:

$$P(w_i | w_{i-N+1:i-1}) = \frac{C(w_{i-N+1:i-1}, w_i)}{C(w_{i-N+1:i-1})}$$

Where:
*   $C(\cdot)$ denotes the count of the sequence in the corpus.
*   The denominator is the total count of the history sequence.

### Challenges in Estimation
1.  **Corpus Dependency:** The quality and domain of the training corpus dictate the model's performance. A model trained on legal documents will assign low probability to casual conversation.
2.  **Infinite Language:** Language is creative and open-ended. Even with massive corpora, many valid sequences are never observed (Zero Probability Problem), leading to the need for smoothing techniques.
3.  **Data Sparsity:** As $N$ increases, the number of possible unique sequences grows exponentially ($|V|^N$), meaning most N-grams will have zero counts in any finite dataset.

## Applications of Language Models
Language models serve as the backbone for various NLP tasks:
*   **Speech Recognition:** Disambiguating acoustic signals by assigning high probability to likely word sequences.
*   **Machine Translation:** Ranking candidate translations based on their fluency in the target language.
*   **Spelling Correction:** Selecting the most probable intended word among candidates based on context.
*   **Part-of-Speech Tagging:** Determining the correct syntactic tag for a word based on its sequence of neighbors.

### Key Takeaways
*   **Language Models** define a probability distribution over strings, allowing for generative and interpretive capabilities.
*   The **Chain Rule** allows for the decomposition of sequence probability, while the **Markov Assumption** makes the calculation computationally feasible through N-gram approximations.
*   **Probability vs. Fluency:** An ideal LM assigns high probability to grammatically correct and semantically logical sequences, and very low probability to nonsensical or rare sequences.
*   Estimation relies on frequency counting, but requires advanced techniques like smoothing to handle the inherent sparsity of human language.

\newpage

# Statistical Language Modeling and Estimation

## Relative Frequency Estimation (Maximum Likelihood)

To derive a probability distribution for an N-gram model, we rely on the **Relative Frequency Estimate**. This approach, known as **Maximum Likelihood Estimation (MLE)**, chooses the parameter values that maximize the likelihood of the observed training data.

### The MLE Formulation
Given a corpus, we normalize the counts of N-gram occurrences by the counts of their prefixes.

For a bigram model ($N=2$), the probability of $w_i$ given $w_{i-1}$ is:
$$P(w_i | w_{i-1}) = \frac{C(w_{i-1}, w_i)}{C(w_{i-1})}$$

For the general case ($N$-gram), the probability of $w_i$ given a context of length $N-1$ is:
$$P(w_i | w_{i-N+1}, \dots, w_{i-1}) = \frac{C(w_{i-N+1}, \dots, w_{i-1}, w_i)}{C(w_{i-N+1}, \dots, w_{i-1})}$$

### Sentence Boundaries
To allow the model to learn the probability of a sentence starting or ending, we augment the text by bracketing each sentence with special start (`<s>`) and end (`</s>`) tokens. This ensures that the model can learn the distribution of valid sentence openers and closers, treating them as part of the sequence.

## Statistical Model Training and Data Splitting

Statistical models like N-grams require careful handling of data to ensure that the learned parameters generalize to unseen text rather than simply memorizing the training material.

### The Three-Way Data Split
To evaluate a model’s performance accurately, we partition the available data into three distinct, non-overlapping sets:

1.  **Training Set (80%):** The data used to calculate the counts $C(\cdot)$ and populate the N-gram probability tables. The model "learns" from this data.
2.  **Development (Dev) Set (10%):** Used for tuning hyperparameters—such as the choice of $N$ in an N-gram model, or the selection of smoothing parameters. This set helps prevent overfitting to the training data.
3.  **Test Set (10%):** A "held-out" dataset containing fresh data that the model has never encountered. The performance on this set provides an unbiased estimate of the model’s generalization capabilities.

### Key Considerations
*   **Non-Intersection:** It is strictly required that the test set shares no data with the training or development sets. Evaluation on training data ("cheating") leads to overly optimistic performance reports.
*   **Generalization:** The fundamental goal is to build a model that captures the underlying linguistic patterns, enabling it to process novel sequences accurately.

### Key Takeaways
*   **MLE** is the standard approach for estimating N-gram probabilities by normalizing counts based on observed occurrences in the training corpus.
*   **Sentence delimiters (`<s>`, `</s>`)** are essential for modeling the probability of entire sequences rather than just word transitions.
*   **Data Partitioning** into Training, Development, and Test sets is mandatory to develop models that generalize to unseen, real-world data and to tune parameters without overfitting.
  
  \newpage

# Perplexity and Evaluation of Language Models

Once a language model is trained, it is essential to quantify its performance. A primary metric for this, which reflects how well a model fits a test dataset, is **Perplexity (PP)**.

## Understanding Perplexity
Perplexity measures how "surprised" a language model is by a test set. A model that assigns a higher probability to the sentences in the test set is considered a better model, and thus, it will have lower perplexity. 

Formally, perplexity is the inverse probability of the test set, normalized by the number of words $n$. 

### Formal Definition
For a sequence of words $W = w_1, w_2, \dots, w_n$, the perplexity is defined as:
$$PP(W) = P(w_1, \dots, w_n)^{-1/n}$$

Using the Chain Rule of probability, this can be expanded as:
$$PP(W) = \left( \prod_{i=1}^{n} P(w_i | w_1, \dots, w_{i-1}) \right)^{-1/n}$$

### Perplexity for a Bigram Model
In a bigram model, the conditional probability $P(w_i | w_1, \dots, w_{i-1})$ simplifies to $P(w_i | w_{i-1})$. Consequently, the perplexity becomes:
$$PP(W) = \sqrt[n]{\frac{1}{\prod_{i=1}^{n} P(w_i | w_{i-1})}}$$

*   **Interpretation:** Perplexity is the **geometric mean of the inverse probabilities**. 
*   **Intuition:** A model with a perplexity of $k$ is effectively as "confused" as if it had to choose uniformly at random between $k$ possible next words at each position in the test set. Therefore, lower perplexity is always better.

## Qualitative Evaluation
Beyond quantitative metrics like perplexity, N-gram models are frequently evaluated via **qualitative inspection**:

1.  **Sentence Generation:** We can use the trained model to sample sequences of words. By observing the generated output, we can qualitatively assess the fluency and coherence of the model.
2.  **Order Sensitivity:** The quality of generated text varies significantly with the choice of $N$:
    *   **Unigrams ($N=1$):** Generate "word soup" because they ignore the order and relationships between words.
    *   **Bigrams ($N=2$):** Capture simple local dependencies; the output often makes local sense but lacks long-term coherence.
    *   **Trigrams/Quadrigrams ($N=3, 4$):** Produce increasingly readable text as they capture larger, more contextually relevant chunks of language, though they are more prone to verbatim memorization of the training set if $N$ is too large.

### Key Takeaways
*   **Perplexity** is a crucial metric that evaluates a model's fit on unseen data; lower scores indicate higher predictive accuracy.
*   **Geometric Interpretation:** Perplexity effectively measures the branching factor of the model's predictions.
*   **Qualitative vs. Quantitative:** While perplexity provides a scalar score, generating text serves as a sanity check to verify if the model has learned the structural and syntactic nuances of the target language.

\newpage

# Smoothing in Statistical Language Models

Maximum Likelihood Estimation (MLE) assigns probabilities based strictly on observed frequencies in a training corpus. Because language is open-ended and the training data is necessarily finite, many valid N-grams (sequences that could exist in a language) will never be observed in the training set.

This leads to the **Zero Probability Problem**: if a test sequence contains a single unseen N-gram, the entire sequence probability becomes zero. **Smoothing** (or discounting) is the collection of techniques used to reallocate a small portion of the probability mass from observed N-grams to unseen N-grams.

## Smoothing Techniques

### 1. Laplace (Add-One) Smoothing
The simplest approach is to add a constant count (usually 1) to all possible N-grams in the vocabulary, even if their observed count is zero.

For a bigram model:
$$P_{Laplace}(w_i | w_{i-1}) = \frac{C(w_{i-1}, w_i) + 1}{C(w_{i-1}) + |V|}$$

*   **Mechanism:** Adding 1 to the numerator of all counts and $|V|$ to the denominator ensures that the sum of all probabilities remains 1.
*   **Limitation:** It is generally too aggressive; it steals too much probability mass from frequent words and assigns it to rare ones, which often leads to poor performance.
*   **Add-Lambda ($\lambda$):** A refinement where one adds a small fraction $\lambda$ (e.g., 0.1) instead of 1, providing finer control over the smoothing.

### 2. Good-Turing Smoothing
Good-Turing estimation uses the count of things that have occurred once ($N_1$) to estimate the probability of things that have occurred zero times ($N_0$).

*   **Logic:** If $N_r$ is the number of N-grams that appear $r$ times, we estimate the count of N-grams that appear $r$ times using the count of N-grams that appear $r+1$ times.
*   **Application:** It is particularly effective for estimating the probability mass for unseen items.

### 3. Interpolation
Interpolation combines higher-order N-gram models with lower-order models. It assumes that if a trigram is unseen, we can fall back on the bigram or unigram probability as a proxy.

$$P_{interp}(w_n | w_{n-2}, w_{n-1}) = \lambda_1 P(w_n | w_{n-2}, w_{n-1}) + \lambda_2 P(w_n | w_{n-1}) + \lambda_3 P(w_n)$$

Where $\sum \lambda_i = 1$. This allows the model to leverage the specificity of higher orders when available, and the robustness of lower orders when data is sparse.

### 4. Backoff Strategies (Katz Backoff)
Unlike interpolation, which always uses a mix of models, **Backoff** uses the most specific model available.

*   If $C(w_{n-2}, w_{n-1}, w_n) > 0$, use the trigram probability.
*   Otherwise, "back off" to the bigram probability $P(w_n | w_{n-1})$ multiplied by a scaling factor to ensure the total distribution remains normalized.
*   If the bigram is also unseen, back off to the unigram probability.

### Key Takeaways
*   **Data Sparsity:** Smoothing is a necessary correction for the inherent limitations of empirical frequency estimation.
*   **Trade-off:** Effective smoothing balances the need to assign non-zero probability to unseen events without sacrificing the predictive power of high-frequency, well-observed sequences.
*   **Evolution:** While these "pre-neural" techniques were essential for classical N-gram models, they paved the way for modern methods like embedding-based smoothing, where similarity in vector space allows for the generalization to unseen contexts.