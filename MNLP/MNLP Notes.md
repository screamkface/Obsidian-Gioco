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
*   $k, \beta$: Free parameters determined empirically (typically \$0.5 < \beta < 0.8$ for natural language).
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
*   **Interpolation:** Mixing probabilities from different N-gram models (e.g., \$0.6 \times P_{trigram} + 0.3 \times P_{bigram} + 0.1 \times P_{unigram}$).

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

\newpage


# Basics of Training and Evaluation in NLP - Complete Lecture Notes


# Introduction

## Slide 1 - Title and framing

Welcome to this lecture on **the basics of training and evaluation in Natural Language Processing**. The focus of today’s lesson is not on a specific NLP task, but on the mathematical and experimental foundations that allow us to train and evaluate supervised models correctly. In practice, this means understanding how a model learns from data, how we measure its errors, how we improve its parameters, and how we assess whether it is actually performing well.

The title slide establishes the scope of the lecture: we are dealing with the **core mechanics of learning**, especially in the context of **logistic regression**, which is one of the simplest and most instructive probabilistic classifiers. Even when later models become much more complex, many of the ideas introduced here remain central: loss functions, gradients, hyperparameters, data splits, and evaluation metrics.

> **Suggested visual:** a high-level pipeline diagram showing the sequence **data -> model -> loss -> optimization -> evaluation**.

## Slide 2 - Lecture roadmap

The second slide summarizes the lecture in brief. The core topics are:

- **Cross-Entropy**
- **Gradient descent**
- **Evaluation metrics** such as Precision, Recall, and F-measure
- **Test and development sets**
- A brief mention of **statistical significance**

This roadmap is important because it reflects the full lifecycle of supervised learning. We first define what the model should optimize, then we study how optimization works, then we look at how to tune training, and finally we discuss how to judge the model on held-out data.

It is worth noting that, in the PDF excerpt we are reconstructing here, the detailed development is concentrated on **cross-entropy, gradient descent, hyperparameters, evaluation, and data splitting**. Statistical significance is announced in the roadmap, but it is not developed in dedicated subsequent slides.

## Slide 3 - Connection with the previous lecture

The third slide creates continuity with the previous lesson. It says that earlier we saw how to **use an already trained logistic regression model**, whereas now we want to understand **how such a model is actually learned**.

This is a crucial pedagogical transition. Using a trained model is not the same as understanding training. Once we move from inference to learning, we need to answer deeper questions:

- What objective are we optimizing?
- Why is that objective appropriate for classification?
- How do we move from bad parameters to better parameters?
- How do we know when the learned parameters are good enough?

In other words, this lecture shifts us from the **consumer side** of machine learning to the **builder side**.

---

# Module 1 - The Loss Function

## Slides 4-12 - Binary Cross-Entropy for Logistic Regression

### Slide 4 - Why we need a loss function

To train logistic regression, we need a function to minimize. That function is the **loss function**. Conceptually, a loss function measures the discrepancy between:

- the model’s prediction, and
- the correct or **gold** label.

The slide states the learning goal in probabilistic terms: we want to learn the parameters **w** and **b** that maximize the log-probability of the true labels $y$ given the observations $x$. The deck then introduces the **negative log-likelihood**, also called **cross-entropy loss**.

This is an important point. In classification, especially probabilistic classification, we do not merely want the correct class label. We want the model to assign **high probability** to the correct class. Cross-entropy is therefore a natural objective because it rewards confident correct predictions and penalizes confident wrong predictions very strongly.

Before going further, let us recall the logistic regression prediction rule shown in the slides:

$$
\hat{y} = \sigma(w \cdot x + b)
$$

where:

- $x$ is the input feature vector,
- $w$ is the weight vector,
- $b$ is the bias term,
- $w \cdot x$ is the dot product between features and weights,
- $\sigma(\cdot)$ is the **sigmoid** function,
- $\hat{y}$ is the predicted probability that the example belongs to the positive class.

The **sigmoid** is essential because it maps any real-valued score into the interval $(0,1)$, making the output interpretable as a probability:

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

The importance of the sigmoid is threefold. First, it converts raw scores into probabilities. Second, it is differentiable, which makes gradient-based optimization possible. Third, it is monotonic: larger scores correspond to larger predicted probabilities.

> **Suggested visual:** a plot of the sigmoid curve with key points at $z=0$, large positive $z$, and large negative $z$.

### Slides 5-7 - Probability of the correct outcome in binary classification

These slides progressively build the probabilistic interpretation for binary classification. Because there are only two outcomes, we can model the label using a **Bernoulli distribution**. The probability of the correct label is written as:

$$
p(y\mid x) = \hat{y}^{y}(1-\hat{y})^{1-y}
$$

This compact expression is elegant because it handles both possible label values in a single formula.

Let us unpack every symbol carefully:

- $y \in \{0,1\}$ is the true label.
- $\hat{y}$ is the model’s predicted probability of class 1.
- \$1-\hat{y}$ is the predicted probability of class 0.

Now examine the two cases:

- If $y=1$, then the formula becomes
  $$
p(y\mid x)=\hat{y}^{1}(1-\hat{y})^{0}=\hat{y}
$$
  so the probability of the correct outcome is exactly the predicted probability of the positive class.

- If $y=0$, then the formula becomes
  $$
p(y\mid x)=\hat{y}^{0}(1-\hat{y})^{1}=1-\hat{y}
$$
  so the probability of the correct outcome is the predicted probability of the negative class.

The slides annotate the exponents to highlight that the true label acts like an **indicator**. In effect, the formula says: keep the correct term and neutralize the wrong one.

### Slides 8-9 - From probability to log-likelihood

The next step is to apply the logarithm:

$$
\log p(y\mid x) = \log\big(\hat{y}^{y}(1-\hat{y})^{1-y}\big)
$$

Using the logarithm rules $\log(a^b)=b\log a$ and $\log(ab)=\log a + \log b$, we obtain:

$$
\log p(y\mid x) = y\log \hat{y} + (1-y)\log(1-\hat{y})
$$

Why do we take the log?

There are several reasons.

First, the logarithm turns products into sums, which makes optimization more convenient, especially over many training examples.

Second, the logarithm is a strictly increasing function, so maximizing the log-likelihood is equivalent to maximizing the original likelihood. The slide explicitly notes that taking the log does **not affect the location of the maximum**.

Third, log-probabilities are numerically more stable than multiplying many small probabilities together.

At this stage, the objective is still a **quantity to maximize**: the log-likelihood of the correct labels.

### Slides 10-11 - From log-likelihood to cross-entropy loss

Machine learning frameworks typically define training objectives as losses to **minimize**. Therefore, we simply put a minus sign in front of the log-likelihood:

$$
L_{CE}(\hat{y}, y) = -\log p(y\mid x)
$$

Substituting the previous expression gives the binary cross-entropy loss:

$$
L_{CE}(\hat{y}, y) = -\big[y\log \hat{y} + (1-y)\log(1-\hat{y})\big]
$$

Let us interpret this formula.

- If the true class is positive, the relevant term is $-\log \hat{y}$. The loss becomes small when $\hat{y}$ is close to 1, and large when $\hat{y}$ is close to 0.
- If the true class is negative, the relevant term is $-\log(1-\hat{y})$. The loss becomes small when $\hat{y}$ is close to 0, and large when $\hat{y}$ is close to 1.

This tells us why cross-entropy is such a good classification loss: it strongly penalizes **confident errors**. Predicting 0.99 when the correct label is 0 is much worse than predicting 0.55, and the logarithm reflects exactly that.

### Slide 12 - Plugging in the sigmoid model

The final step in this introductory derivation is to replace $\hat{y}$ with the logistic regression output:

$$
\hat{y} = \sigma(w \cdot x + b)
$$

so the loss becomes:

$$
L_{CE}(\hat{y}, y) = -\Big[y\log \sigma(w \cdot x + b) + (1-y)\log\big(1-\sigma(w \cdot x + b)\big)\Big]
$$

Now the loss depends explicitly on the **model parameters** $w$ and $b$. This is exactly what we want: a differentiable function whose value tells us how bad our current parameters are.

At this point, the learning problem is well defined. We now have a parameterized loss, and the next question is: **how do we minimize it?**

> **Suggested visual:** a small two-column table with two examples, one where $y=1$ and one where $y=0$, showing how the loss changes for different values of $\hat{y}$.

---

# Module 2 - Optimization with Gradient Descent

## Slides 13-28 - From the objective to the update rule

### Slides 13-16 - The optimization problem over the training set

Once the loss is defined on a single example, the deck moves to the overall training objective. The parameters are grouped into:

$$
\theta = \{w, b\}
$$

and the optimization problem is written as:

$$
\hat{\theta} = \arg\min_{\theta} \frac{1}{m}\sum_{i=1}^{m} L_{CE}(f(x^{(i)};\theta), y^{(i)})
$$

Every part of this expression matters:

- $\hat{\theta}$ is the parameter setting found by optimization.
- $\arg\min$ means “the value of $\theta$ that minimizes the following expression.”
- $m$ is the number of training samples.
- $x^{(i)}$ is the $i$-th training input.
- $y^{(i)}$ is the gold label for the $i$-th input.
- $f(x^{(i)};\theta)$ is the model prediction for that example under the current parameters.
- $L_{CE}(\cdot)$ is the cross-entropy loss computed on that example.
- The factor $\frac{1}{m}$ means that we are optimizing the **average** loss across the dataset.

Why average rather than sum? Because averaging makes the objective scale-independent with respect to dataset size. It also makes the learning rate easier to interpret.

Slides 14, 15, and 16 visually unpack the formula by highlighting, respectively, the number of samples, the role of the $i$-th sample, and the loss computed on that sample.

### Slide 17 - The core idea of gradient descent

The slide gives the central intuition behind gradient descent: it finds a minimum by determining the direction in which the function rises most steeply, and then moving in the opposite direction.

This is an intuitive geometric idea. Imagine being on the side of a hill. If you want to descend as quickly as possible, you first identify the direction of steepest ascent, then you go exactly the other way.

In optimization terms, if the loss is high, the gradient tells us how to change the parameters to reduce it.

### Slides 18-21 - What the gradient is

The gradient is introduced as a vector with as many dimensions as there are parameters. If there are $f$ features, then there is one component for each weight plus one for the bias.

The gradient of the loss is shown as:

$$
\nabla L(f(x;\theta), y) =
\begin{bmatrix}
\frac{\partial}{\partial w_1} L(f(x;\theta), y) \\
\frac{\partial}{\partial w_2} L(f(x;\theta), y) \\
\vdots \\
\frac{\partial}{\partial w_f} L(f(x;\theta), y) \\
\frac{\partial}{\partial b} L(f(x;\theta), y)
\end{bmatrix}
$$

Let us interpret this carefully.

A **partial derivative** measures how the loss changes if we modify one parameter while keeping all the others fixed.

So:

- $\frac{\partial L}{\partial w_j}$ tells us how sensitive the loss is to the $j$-th weight.
- $\frac{\partial L}{\partial b}$ tells us how sensitive the loss is to the bias.

If one derivative is positive, increasing that parameter will increase the loss locally, so gradient descent will tend to decrease it. If one derivative is negative, increasing that parameter would decrease the loss locally, so gradient descent tends to increase it.

This is why derivatives are such powerful tools: they provide local directional information.

> **Suggested visual:** a 3D bowl-shaped loss surface with an arrow showing the gradient and another arrow showing the descent direction.

### Slide 22 - Convexity of the loss function

One of the most important theoretical remarks in the lecture is that the cross-entropy loss for logistic regression is **convex**.

The slide recalls the definition of convexity:

$$
f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y)
\quad \text{for all } x,y \text{ and } \lambda \in [0,1]
$$

What does this mean geometrically? If a function is convex, the line segment joining any two points on the graph lies above the graph itself.

Why is this important? Because convexity gives a strong guarantee: there are no spurious local minima. For logistic regression, this means that the optimization problem has a single global optimum in parameter space, or at least a well-behaved set of equivalent minima. In practical terms, gradient descent is much easier to trust on a convex objective than on a highly non-convex one.

This does **not** mean that optimization is always instantaneous or numerically trivial, but it does mean that the landscape is fundamentally friendlier than in deep non-linear architectures.

### Slides 23-24 - The update rule and the learning rate

Once we know the gradient, we still need to decide **how far** to move in the descent direction. This is governed by the **learning rate** $\eta$.

The update rule shown in the slides is:

$$
\theta^{t+1} = \theta^t - \eta \, \nabla L\big(f(x;\theta), y\big)
$$

Let us unpack this expression:

- $\theta^t$ is the parameter vector at iteration $t$.
- $\theta^{t+1}$ is the updated parameter vector.
- $\nabla L(\cdot)$ is the gradient of the loss.
- $\eta$ is the learning rate, a positive scalar.

The minus sign is fundamental: since the gradient points uphill, we subtract it to go downhill.

The slide’s geometric illustration shows a point on the left side of a convex loss curve. There the slope is negative, so moving in the opposite direction means increasing the parameter value toward the minimum.

### Slide 25 - Stochastic Gradient Descent as an algorithm

The lecture then presents the pseudocode for **Stochastic Gradient Descent (SGD)**.

The algorithm works as follows:

1. Initialize the parameters $\theta$, often to zero or small random values.
2. Repeat until convergence.
3. Visit training examples, typically in random order.
4. For each training pair $(x^{(i)}, y^{(i)})$:
   - compute the prediction $\hat{y}^{(i)} = f(x^{(i)};\theta)$,
   - compute the loss on that example,
   - compute the gradient $g$ of that loss with respect to $\theta$,
   - update the parameters by subtracting a step proportional to the gradient.
5. Return the learned parameters.

The random order is important because it avoids systematic bias caused by the presentation order of the data and often improves optimization behavior.

### Slides 26-28 - Gradients for binary logistic regression

The deck now makes the optimization concrete by deriving the gradient of binary cross-entropy for logistic regression.

We begin with the loss:

$$
L_{CE}(\hat{y}, y) = -\Big[y\log \sigma(w \cdot x + b) + (1-y)\log\big(1-\sigma(w \cdot x + b)\big)\Big]
$$

For the $j$-th weight, the derivative is:

$$
\frac{\partial L_{CE}(\hat{y}, y)}{\partial w_j}
= \big(\sigma(w \cdot x + b) - y\big)x_j
= (\hat{y} - y)x_j
$$

For the bias, the derivative is:

$$
\frac{\partial L_{CE}(\hat{y}, y)}{\partial b}
= \sigma(w \cdot x + b) - y
= \hat{y} - y
$$

These formulas are extremely important, so let us interpret them.

### Meaning of $(\hat{y} - y)$

The term $\hat{y} - y$ is the **prediction error in probability space**.

- If the model predicts too high a probability for class 1, then $\hat{y} - y$ is positive.
- If the model predicts too low a probability for class 1, then $\hat{y} - y$ is negative.
- If prediction matches the gold label perfectly, the term is small or zero.

### Meaning of $x_j$

The factor $x_j$ tells us how much the $j$-th feature contributed to the example. So the gradient for a weight is the error multiplied by the feature value.

This gives a beautiful learning intuition:

- if a feature is active and the model makes a positive-class error, the corresponding weight is adjusted strongly;
- if the feature value is zero or small, that feature has little influence on the update.

### Why the bias derivative does not include $x_j$

The bias is not tied to a specific feature. It acts as a global offset. Therefore, its derivative is just the error term $\hat{y}-y$.

> **Suggested visual:** a small computational graph showing $x$, $w$, $b$, the sigmoid, the loss, and the resulting gradients with arrows.

---

# Module 3 - Hyperparameters and Training Strategies

## Slides 29-37 - Learning rate, SGD, and mini-batches

### Slides 29-31 - The learning rate as a hyperparameter

The lecture now distinguishes between **parameters** and **hyperparameters**.

- **Parameters** such as $w$ and $b$ are learned automatically from data.
- **Hyperparameters** such as the learning rate $\eta$ are chosen manually by the practitioner.

The learning rate determines the size of the update step.

A **higher learning rate** means:

- larger steps,
- faster movement across the loss surface,
- but potentially unstable training,
- and possibly failure to converge.

A **lower learning rate** means:

- smaller steps,
- slower convergence,
- but more stable training.

Slide 30 explicitly warns that a high learning rate can make the optimization **oscillate around the minimum**. Slide 31 visually contrasts a big learning rate, which jumps back and forth across the bowl-shaped objective, with a small learning rate, which descends more gradually.

This reflects a central optimization trade-off:

- too small, and training becomes inefficient or may appear stuck;
- too large, and training becomes noisy or divergent.

In practice, we usually select $\eta$ by checking performance on a validation set, because the best value depends on the model, features, and dataset.

> **Suggested visual:** the classic side-by-side diagram of overshooting versus smooth convergence, as in the slide.

### Slides 32-33 - Why pure stochastic updates can be unstable

The lecture then returns to **Stochastic Gradient Descent** and points out a limitation: if we compute the gradient using only one training pair at a time, updates may be unstable.

Why? Because any single example provides a noisy estimate of the overall dataset gradient. One example might strongly suggest moving in one direction, while another suggests something slightly different.

The solution introduced by the slides is to compute the gradient by averaging across a **bunch of samples**, that is, a **mini-batch**.

This idea already suggests a compromise between two extremes:

- using one example at a time, which is cheap but noisy,
- using the entire dataset at once, which is stable but expensive.

### Slide 34 - Comparing stochastic, mini-batch, and batch training

This slide is conceptually very important. It introduces a second hyperparameter: the batch size, denoted in the slide by $m$ as the number of elements used to compute the gradient. To avoid confusion with the earlier use of $m$ for dataset size, it is often clearer in practice to denote batch size by $M$, and the slide itself visually uses values like $M=1$, $M=(1, \text{len dataset})$, and $M=\text{len dataset}$.

The three strategies are:

1. **Stochastic gradient training**: $M=1$
2. **Mini-batch training**: \$1 < M < \text{dataset size}$
3. **Batch training**: $M = \text{dataset size}$

The slide also highlights the trade-off between **stability** and **computational cost**.

- As the batch size increases, the gradient estimate becomes more stable.
- But larger batches usually require more memory and higher per-update computation.

So mini-batch training is attractive because it balances the two.

### Slides 35-36 - The mini-batch cost function

The cost across a batch is defined as the average of the losses over the batch items:

$$
\text{Cost}(\hat{y}, y) = \frac{1}{m}\sum_{i=1}^{m} L_{CE}(\hat{y}^{(i)}, y^{(i)})
$$

If we substitute the binary cross-entropy definition, we obtain:

$$
\text{Cost}(\hat{y}, y) =
-\frac{1}{m}\sum_{i=1}^{m}
\Big[
y^{(i)}\log \sigma(w \cdot x^{(i)} + b)
+
(1-y^{(i)})\log\big(1-\sigma(w \cdot x^{(i)} + b)\big)
\Big]
$$

This formula says that we are no longer optimizing one example at a time. Instead, for each update step we average the loss over a small sample of examples.

Each symbol has a clear meaning:

- $m$ is now the batch size.
- $x^{(i)}$ and $y^{(i)}$ are the examples inside the batch.
- The average ensures that the loss magnitude remains comparable across different batch sizes.

### Slide 37 - The mini-batch gradient

The gradient for a batch is the average of the gradients of the elements in the batch. For the $j$-th weight, the slide gives:

$$
\frac{\partial \text{Cost}(\hat{y}, y)}{\partial w_j}
=
\frac{1}{m}\sum_{i=1}^{m}
\big[\sigma(w \cdot x^{(i)} + b) - y^{(i)}\big]x_j^{(i)}
$$

This is exactly what we would expect: the mini-batch gradient is a smoothed version of the single-example gradient.

This averaging reduces variance in the update direction, which is why mini-batch methods are usually more stable than pure SGD. At the same time, they remain much cheaper than recomputing the gradient over the whole dataset for every update.

> **Suggested visual:** a three-panel comparison showing one noisy update from SGD, a smoother mini-batch update, and a full-dataset batch update.

---

# Module 4 - Multinomial Logistic Regression

## Slides 38-44 - Extending from binary to multiple classes

### Slide 38 - Generalizing the binary setup

So far, the lecture has focused on binary classification. But many NLP problems are **multiclass** rather than binary. For instance, part-of-speech tagging, intent classification, topic labeling, and many structured prediction subtasks require choosing one label among several.

The slide states that the learning method for **multinomial logistic regression** generalizes the binary case. The key question is again the same: what loss function should we minimize?

The proposed loss is the **multinomial cross-entropy**:

$$
L_{CE}(\hat{y}, y) = -\sum_{k=1}^{K} y_k \log \hat{y}_k
$$

where:

- $K$ is the number of classes,
- $y_k$ is the gold indicator for class $k$,
- $\hat{y}_k$ is the predicted probability of class $k$.

### Slides 39-40 - Understanding the multinomial cross-entropy terms

The slides then annotate the formula.

The term $\log \hat{y}_k$ is the **log of the predicted probability for class $k$**.

The factor $y_k$ is an **indicator label**:

- it is 1 for the correct class,
- and 0 for all the other classes.

This means that the sum effectively selects only the log-probability of the correct class.

So if class $c$ is the correct one, the loss simplifies to:

$$
L_{CE}(\hat{y}, y) = -\log \hat{y}_c
$$

This is the multiclass analogue of binary cross-entropy: penalize the model when it assigns low probability to the true class.

### Slide 41 - Explicit form with the softmax probability

The slide writes the loss explicitly as:

$$
-\log
\frac{\exp(w_c \cdot x + b_c)}{\sum_{j=1}^{K} \exp(w_j \cdot x + b_j)}
$$

where $c$ is the correct label.

This expression comes from the **softmax** probability for class $c$:

$$
\hat{y}_c =
\frac{\exp(w_c \cdot x + b_c)}{\sum_{j=1}^{K}\exp(w_j \cdot x + b_j)}
$$

The softmax generalizes the sigmoid to multiple classes. It converts a vector of raw scores into a probability distribution over classes.

Why does exponentiation appear here? Because exponentials are always positive, and dividing each exponential by the sum ensures that the resulting probabilities:

- are all positive,
- sum to 1,
- and give higher probability to classes with higher scores.

### Slides 42-43 - Gradient for a class-specific weight

Once the multiclass loss is defined, we again need its gradient. The slides show that for class $k$ and feature $i$, the derivative is:

$$
\frac{\partial L_{CE}}{\partial w_{k,i}} = -(y_k - \hat{y}_k)x_i
$$

which is equivalently:

$$
\frac{\partial L_{CE}}{\partial w_{k,i}} = (\hat{y}_k - y_k)x_i
$$

Slide 43 then substitutes the softmax probability explicitly:

$$
\frac{\partial L_{CE}}{\partial w_{k,i}} =
-\left(
y_k -
\frac{\exp(w_k \cdot x + b_k)}{\sum_{j=1}^{K} \exp(w_j \cdot x + b_j)}
\right)x_i
$$

The logic is perfectly parallel to the binary case:

- $\hat{y}_k - y_k$ measures how much the predicted probability for class $k$ differs from its target value.
- $x_i$ scales that correction by the value of the $i$-th feature.

This means that each class has its own weight vector, and learning adjusts class-specific parameters depending on how much too high or too low the predicted probability is.

### Slide 44 - Final gradient aggregation

The last slide in this sequence writes a final expression for a feature-level gradient:

$$
\frac{\partial L_{CE}}{\partial w_i} = \sum_{k=1}^{K} \frac{\partial L_{CE}}{\partial w_{k,i}}
$$

The meaning here is that if we flatten the model parameters into one larger parameter structure, the contribution associated with feature $i$ can be seen as the sum across all classes. In practical implementations, however, it is often clearer to think in terms of a **weight matrix** with one row or column per class, and to update each class-specific parameter directly.

The important conceptual takeaway is that **multiclass learning preserves the same structure as binary learning**:

1. define probabilities,
2. define cross-entropy loss,
3. compute gradients,
4. update parameters by gradient descent.

> **Suggested visual:** a softmax diagram showing one input vector feeding into $K$ class scores, then into softmax probabilities.

---

# Module 5 - Evaluation of the Model

## Slides 45-60 - Confusion matrices and metrics

### Slide 45 - Why evaluation matters

After training a model, we must evaluate it. The slide correctly emphasizes that evaluation is a central step in any machine learning pipeline. A metric is defined as a **quantitative measure** of model quality.

Evaluation compares two sets:

- the predicted labels,
- the gold labels, typically obtained through human annotation.

This distinction is extremely important in NLP, because a model that seems plausible by casual inspection may still fail systematically in ways that only careful evaluation reveals.

### Slides 46-47 - The confusion matrix in binary classification

For binary classification, the standard starting point is the **confusion matrix**. Conceptually, it is a 2x2 table crossing:

- **gold labels** on one axis,
- **predicted labels** on the other axis.

The four cells are:

- **True Positive (TP):** predicted positive, gold positive
- **False Positive (FP):** predicted positive, gold negative
- **False Negative (FN):** predicted negative, gold positive
- **True Negative (TN):** predicted negative, gold negative

The slide figure is intended to present the usual matrix, although the row label is repeated visually in the image. The correct interpretation is the standard one above: the top row corresponds to **predicted positive**, and the bottom row to **predicted negative**.

The confusion matrix is useful because almost all standard classification metrics can be derived from these four counts.

> **Suggested visual:** a clean 2x2 confusion matrix heatmap with color intensity proportional to the count in each cell.

### Slides 48-52 - Introducing the main metrics

The lecture introduces four core metrics derived from TP, FP, FN, and TN:

- **Accuracy**
- **Precision**
- **Recall**
- **F-measure**

Each metric answers a different question, and that is why no single metric is always sufficient.

### Slide 53 - Accuracy

Accuracy answers the question:

> Of all the predicted items, how many did the model correctly identify?

The formula is:

$$
\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}
$$

Interpretation:

- the numerator counts all correct predictions,
- the denominator counts all evaluated examples.

Accuracy is intuitive and often useful, but it can be misleading when classes are imbalanced. For example, if 95% of examples are negative, a trivial model that always predicts negative already achieves 95% accuracy while being useless for finding positive cases.

### Slide 54 - Precision

Precision answers the question:

> Of all the items the model predicted as positive, how many were actually positive?

The formula is:

$$
\text{Precision} = \frac{TP}{TP + FP}
$$

Interpretation:

- the numerator counts correct positive predictions,
- the denominator counts all positive predictions made by the model.

High precision means the model is conservative and usually right when it says “positive.” This is important in tasks where false alarms are expensive.

### Slide 55 - Recall

Recall answers the question:

> Of all the actual positive items, how many did the model correctly identify?

The formula is:

$$
\text{Recall} = \frac{TP}{TP + FN}
$$

Interpretation:

- the numerator again counts correctly detected positives,
- the denominator counts all real positives in the dataset.

High recall means the model misses few positive examples. This matters when failing to detect a true positive is costly.

### Slide 56 - F-measure

The deck then asks how we can combine precision and recall. The answer is the **harmonic mean** of the two:

$$
F\text{-measure} = \frac{2PR}{P + R}
$$

where:

- $P$ is precision,
- $R$ is recall.

Why the harmonic mean rather than the arithmetic mean? Because the harmonic mean punishes imbalance. If one of precision or recall is very low, the F-measure will also be low. This makes it a more balanced summary when both kinds of performance matter.

### Slide 57 - Beyond binary classification

The previous metrics were defined for binary classification, but NLP often involves more than two classes. The lecture therefore introduces two strategies for extending them:

- **Microaveraging**
- **Macroaveraging**

This is essential because there is not just one way to summarize multiclass performance. The choice depends on whether we want to weight classes equally or weight individual decisions equally.

### Slide 58 - Macroaveraging

In macroaveraging, we compute performance **independently for each class**, treating each class as a separate one-vs-rest binary problem. Then we average the resulting class-level metrics.

So for classes $C_1, C_2, C_3, \ldots$, we compute:

- precision for class $C_1$, recall for class $C_1$, F for class $C_1$,
- then the same for $C_2$,
- and so on,
- and finally average across classes.

Macroaveraging gives equal importance to each class, including rare ones. That is why it is especially useful when class balance matters and minority classes should not be ignored.

### Slides 59-60 - Microaveraging

Microaveraging instead pools decisions across all classes into a single merged confusion matrix and then computes precision, recall, and related metrics from the pooled counts.

The slide illustrates the pooled matrix conceptually by summing the class-specific counts:

- pooled true positives: $TP_{C_1}+TP_{C_2}+TP_{C_3}+\cdots$
- pooled false positives: $FP_{C_1}+FP_{C_2}+FP_{C_3}+\cdots$
- pooled false negatives: $FN_{C_1}+FN_{C_2}+FN_{C_3}+\cdots$
- pooled true negatives: $TN_{C_1}+TN_{C_2}+TN_{C_3}+\cdots$

Microaveraging gives more influence to classes with more examples, because each decision contributes equally.

So the contrast is:

- **Macroaverage:** each class counts equally.
- **Microaverage:** each instance or decision counts equally.

This distinction is particularly important in NLP benchmarks, where label distributions are often highly skewed.

> **Suggested visual:** a side-by-side illustration showing three class-specific confusion matrices on the left and a pooled confusion matrix on the right.

---

# Module 6 - Experimental Methodology

## Slides 61-67 - Train, validation, test, and cross-validation

### Slides 61-62 - The train/dev/test split

The lecture next moves from optimization and evaluation formulas to experimental methodology. This is crucial because a model is only meaningful if its evaluation protocol is sound.

The standard data split consists of:

1. **Training data**
   - used to train the model,
   - that is, to update model parameters.

2. **Development / validation data**
   - used to improve the model,
   - typically for tuning hyperparameters,
   - and for decisions such as early stopping.

3. **Test data**
   - used for the final assessment,
   - and once it has been used, the model must not be changed anymore.

Slide 62 emphasizes a golden rule:

> Once you use test data, your model cannot be changed anymore.

Why? Because as soon as you look at test performance and use it to make design decisions, the test set is no longer a true test set. It has effectively become part of the validation process.

This is one of the most common methodological mistakes in machine learning.

### Slide 63 - Why cross-validation may be needed

The next slide explains that using a separate validation set helps avoid overfitting to the test set. However, fixed train/dev/test splits create another problem when the dataset is small: the train and test sets may each be too small to be representative.

This is a real issue in NLP, especially for specialized domains, low-resource languages, or expensive annotation tasks.

The solution proposed by the lecture is **cross-validation**.

### Slides 64-67 - Cross-validation procedure

The deck presents the logic of cross-validation in stages.

#### Slide 64

First, split the available data into:

- a **development portion**, and
- a **test portion**.

The idea is that the test set remains untouched until the very end, while the development portion is used more efficiently.

#### Slide 65

The development data are divided into $K$ different **folds**. Then, for each round:

- use $K-1$ folds for training,
- use the remaining fold for validation.

This process is repeated $K$ times so that every fold serves ერთხელ as validation.

#### Slide 66

After comparing results across the $K$ runs, we select the best hyperparameters. Then we train the final model on the whole development set using those best hyperparameters.

This is important: cross-validation is mainly a **model selection** strategy.

#### Slide 67

Only after hyperparameters and model choices are fixed do we perform the **final assessment on the test set**.

This preserves the integrity of the final evaluation.

### Why cross-validation is useful

Cross-validation provides a more robust estimate of model behavior when data are limited, because every example in the development portion contributes both to training and to validation across different rounds.

It helps reduce sensitivity to one arbitrary split and usually gives better evidence for hyperparameter selection.

> **Suggested visual:** a fold diagram showing a dataset broken into $K$ blocks, with one block highlighted as validation in each round.

---

# Closing Material

## Slide 68 - Hands-on activity

The hands-on slide points students to a Google Colab notebook. Pedagogically, this means the lecture is not meant to remain purely theoretical. The mathematical ideas introduced in the previous sections are intended to be translated into code.

A practical notebook for this lesson would typically include:

- computing sigmoid outputs,
- implementing binary cross-entropy,
- deriving or verifying gradients,
- running SGD or mini-batch training,
- evaluating predictions with accuracy, precision, recall, and F-measure,
- and experimenting with train/dev/test splits.

This practical step is extremely valuable because optimization and evaluation become much clearer when students see them numerically.

## Slide 69 - Further reading

The last slide suggests Chapter 4 of *Speech and Language Processing* by Jurafsky and Martin. This is an excellent pointer because it situates the lecture content within a broader and authoritative NLP textbook tradition.

A good study strategy is to use these lecture notes as the conceptual scaffold and the textbook chapter as reinforcement, especially for:

- probabilistic interpretation of classification,
- logistic regression,
- optimization fundamentals,
- and evaluation methodology.

---

# Concluding synthesis

Let us conclude by connecting all the modules into one coherent picture.

We began with the question of how to train a classifier. To answer it, we introduced the **cross-entropy loss**, which measures how much probability mass the model assigns to the true label. In the binary case, this led to the Bernoulli likelihood and the binary cross-entropy formula. The sigmoid function played a central role by mapping real-valued scores into valid probabilities.

We then reformulated learning as an optimization problem over all training examples and introduced **gradient descent**. The gradient told us how the loss changes with respect to each parameter, and the learning rate controlled how aggressively we move. Because logistic regression with cross-entropy yields a convex optimization problem, this setup is mathematically well behaved.

Next, we examined the practical side of training: **hyperparameters** and training strategies. The learning rate controls convergence speed and stability, while the batch size determines the trade-off between noisy but cheap updates and stable but expensive ones. Mini-batch training emerged as the practical middle ground.

After that, we extended the same logic from binary to **multinomial logistic regression**, replacing the sigmoid with softmax and binary cross-entropy with multinomial cross-entropy. The core structure remained unchanged: predicted probabilities, cross-entropy loss, gradients, parameter updates.

Finally, we turned to **evaluation** and **experimental design**. A model is not good because it minimizes training loss; it is good if it generalizes to unseen data. That is why confusion matrices, accuracy, precision, recall, F-measure, microaveraging, macroaveraging, train/dev/test splits, and cross-validation are all indispensable. They ensure that our conclusions are scientifically meaningful rather than accidental.

In summary, the lecture builds a complete foundational chain:

$$
\text{probabilistic model} \rightarrow \text{loss} \rightarrow \text{gradient} \rightarrow \text{optimization} \rightarrow \text{hyperparameter tuning} \rightarrow \text{evaluation} \rightarrow \text{experimental validity}
$$

This chain is not limited to logistic regression. It is the conceptual backbone of modern NLP model training.

\newpage

# Word2Vec — Complete Lecture Notes

## 1. Introduction

### Sparse vs. Dense Representations

Until now, we have introduced **sparse word embedding representations**.

- Sparse vectors have a very high number of dimensions, equal to the vocabulary size $|V|$.
- Most entries in each word vector are zero.
- In count-based representations, a word co-occurs with only a limited number of neighboring words, while all other dimensions remain zero.

In this lecture we introduce **dense representations**.

- Dense vectors have many fewer dimensions.
- Their dimensionality is typically $d \ll |V|$.
- They can encode lexical-semantic properties in a geometric space.

### Why Dense Representations Matter

Dense vectors are useful because they:

- use fewer parameters;
- support better learning and generalization;
- reduce overfitting;
- make training faster and more efficient;
- encode similarity between words directly in vector space.

---

## 2. Core Concepts of Word2Vec

### What Word2Vec Is

**Word2Vec** is a method that produces **dense embedding vectors** for a given word.

- It is a machine learning approach.
- It is based on **self-supervised learning**.
- It does not require annotated data, only raw text.

### Self-Supervision from Raw Text

The idea is simple:

- raw text is used as training data;
- nearby words act as the “correct answers”;
- the context is automatically derived from the corpus.

The model learns embeddings by solving a simple prediction task:

- predicting words using the surrounding context;
- using a word-level binary classification objective based on logistic regression.

> The prediction task is only a means to an end: the learned weights are the embeddings.

---

## 3. Architectures: Skip-gram vs. CBOW

### Continuous Bag-of-Words (CBOW)

CBOW is one possible way to implement Word2Vec.

- **Task:** predict the target word given a context word.
- The learned weights are used to compute embeddings.

### Skip-gram

Skip-gram is the second main architecture.

- **Task:** predict a context word given the target word.
- The learned weights are used to compute embeddings.

### Comparison

Both are valid solutions for learning dense embeddings.

- Skip-gram is slower than CBOW.
- CBOW is less accurate than Skip-gram for rare words.

In these notes, the focus is on **Skip-gram**.

---

## 4. Deep Dive into Skip-gram

### Binary Classification Task

Our goal is to train a classifier that, given:

- a focus word $w$,
- a context word $c$,

computes the probability that $c$ is a possible context word of $w$ for a certain context window size.

We formalize the task as:

$$
P(+ \mid w, c)
$$

The negative probability is:

$$
P(- \mid w, c) = 1 - P(+ \mid w, c)
$$

This corresponds to learning a **binary logistic regression model** that, given a pair of words (target and context), predicts the probability that they co-occur in the same context.

### Similarity Intuition

The intuition behind the classifier is that the probability of a context word given a target word is based on the **similarity** between their embeddings.

Two vectors are similar if they have a high dot product:

$$
\operatorname{Similarity}(w, c) \approx c \cdot w
$$

where $c$ and $w$ are embedding vectors of dimension:

$$
d \ll |V|
$$

### From Similarity to Probability

The dot product is **not** a probability, so we apply the sigmoid function:

$$
P(+ \mid w, c) = \sigma(c \cdot w) = \frac{1}{1 + \exp(-c \cdot w)}
$$

### Probability over the Whole Context

Assuming that, given the target word, each context word is independent of the others, we can multiply the probabilities.

If $L$ is the number of words in the context, then:

$$
P(+ \mid w, c_{1:L}) = \prod_{i=1}^{L} \sigma(c_i \cdot w)
$$

To avoid numerical instability, we use the logarithm:

$$
\log P(+ \mid w, c_{1:L}) = \sum_{i=1}^{L} \log \sigma(c_i \cdot w)
$$

**Instead of taking a linear combination (Logistic Regression) as input, here we take the dot product to transorm it in a probability.**


### Model Parameters

Each word has two embeddings:

- **target embedding**;
- **context embedding**.

These are learned as two **matrices**:

- $W$ for target embeddings;
- $C$ for context embeddings.

Each matrix contains embeddings for all words in the vocabulary $V$.

![](../images/Pasted%20image%2020260320114036.png)

---

## 5. Training Process

### Positive and Negative Samples

For each word $w$ in the text:

- words that occur nearby are treated as **positive samples**;
- words that do not occur nearby are treated as **negative samples**.

Example from the slides:

> `... lemon, a [ tablespoon of apricot jam, a ] pinch each ...`

For the target word `apricot`:

- positive samples include `(apricot, tablespoon)`, `(apricot, jam)`, `(apricot, of)`;
- negative samples include `(apricot, burger)`, `(apricot, Tolstoj)`, `(apricot, zebra)`.

![](../images/Pasted%20image%2020260320115041.png)

![](../images/Pasted%20image%2020260320115433.png)

### Training Objective

Given positive and negative examples, the model should:

- maximize the similarity of positive pairs $(w, c^+)$;
- minimize the similarity of negative pairs $(w, c^-)$. 

### Loss Function

Let $c_{\text{pos}}$ be a positive context word and let $\{c_{\text{neg}_1}, \dots, c_{\text{neg}_k}\}$ be the set of $k$ negative samples.

The skip-gram loss function is the negative log-likelihood:

$$
L(w, c_{\text{pos}}, c_{\text{neg}*}) = - \log \left[
P(+ \mid w, c_{\text{pos}})
\prod_{i=1}^{k} P(- \mid w, c_{\text{neg}_i})
\right]
$$

By substituting the sigmoid-based probabilities, we obtain:

$$
L(w, c_{\text{pos}}, c_{\text{neg}*}) = - \left[
\log \sigma(c_{\text{pos}} \cdot w)
+ \sum_{i=1}^{k} \log \sigma(-c_{\text{neg}_i} \cdot w)
\right]
$$

### Sigmoid and Its Derivative

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

$$
\sigma'(x) = \sigma(x)(1 - \sigma(x))
$$

### Gradients

#### Derivative with respect to the positive element

$$
\frac{\partial L}{\partial c_{\text{pos}}}
= [\sigma(c_{\text{pos}} \cdot w) - 1] \, w
$$

#### Derivative with respect to the $i$-th negative element

$$
\frac{\partial L}{\partial c_{\text{neg}_i}}
= \sigma(c_{\text{neg}_i} \cdot w) \, w
$$

#### Derivative with respect to the target word element

$$
\frac{\partial L}{\partial w}
= (\sigma(c_{\text{pos}} \cdot w) - 1)c_{\text{pos}}
+ \sum_{i=1}^{k} \sigma(c_{\text{neg}_i} \cdot w) c_{\text{neg}_i}
$$

### Parameter Update Rules

Let $\eta$ be the learning rate.

#### Update for the positive context vector

$$
c_{\text{pos}}^{t+1}
= c_{\text{pos}}^{t}
- \eta \left[\sigma(c_{\text{pos}}^{t} \cdot w^{t}) - 1\right] w^{t}
$$

#### Update for the $i$-th negative context vector

$$
c_{\text{neg}_i}^{t+1}
= c_{\text{neg}_i}^{t}
- \eta \left[\sigma(c_{\text{neg}_i}^{t} \cdot w^{t})\right] w^{t}
$$

#### Update for the target word vector

$$
w^{t+1}
= w^{t}
- \eta \left[
(\sigma(c_{\text{pos}}^{t} \cdot w^{t}) - 1)c_{\text{pos}}^{t}
+ \sum_{i=1}^{k} \sigma(c_{\text{neg}_i}^{t} \cdot w^{t}) c_{\text{neg}_i}^{t}
\right]
$$

---

## 6. Properties and Limitations

### Benefits of Dense Vectors

Dense vectors provide several advantages.

- They use fewer parameters than sparse vectors.
- They improve learning and generalization.
- They reduce overfitting.
- They allow faster and more efficient training.
- They capture semantic similarity directly in vector space.

Example:

- `car` is close to `automobile`.

### Semantic and Relational Properties

Once Word2Vec is trained, we can inspect the semantics of a word embedding by looking at its most similar words.

- Similarity is computed using cosine similarity.
- Embeddings can reveal semantic neighbors.
- Embeddings can capture relational structure and analogies.

A well-known relational pattern is:

$$
\text{king} - \text{man} + \text{woman} \approx \text{queen}
$$

This reflects the parallelogram-style analogy intuition discussed in the slides.

### Static Embeddings

Word2Vec learns **one fixed vector per word**.

- Each word has the same representation in all contexts.
- It cannot capture context-dependent meanings.
- Example: `bank` has one meaning regardless of the sentence.

### Out-of-Vocabulary Words and Subword Embeddings

A further limitation is the reliance on a fixed vocabulary.

- New or unseen words are problematic.
- One solution is to use **subword embeddings**.
- In this case, a word embedding is computed from the embeddings of its subwords.

The slides introduce **fastText** as the model that uses character $n$-gram splitting to address this issue.

---

## 7. Evaluation

### Intrinsic Evaluation

Intrinsic evaluation measures how well the vector space agrees with human judgments of similarity or relatedness.

Common datasets mentioned in the slides are:

- RG-65
- MC-30
- MEN
- WordSim-353
- SimLex-999

### Extrinsic Evaluation

Extrinsic evaluation measures how useful the embeddings are in downstream NLP tasks.

Examples from the slides include:

- Sentiment Analysis
- Named Entity Recognition (NER)
- Part-of-Speech Tagging

---
