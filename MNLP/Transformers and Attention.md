To understand meaning, models must:
- **Dynamically adjust** representations
- Link words to the **relevant context**

The **attention mechanism**:
- Computes representations **based on other words in the sentence**
- Assign **weights to relevant words**
- Builds **richer representations** across layers

At it's core, the attention mechanism is just a **weighted sum of context vectors**

$$a_i = \sum_{j} \alpha_{ij} x_j$$
where:
- $a_i$ : is the **output** representation at position **i**.
- $x_j$ : is the **input** representation at position **j**.
- $\alpha_{ij}$ : The attention value which represents *how much representation j contributes to build representation i*

> [!info] Model Iteration Parameters
> Defines the range of iteration ($j$) used across different models based on input dimensions $N$ and $i$.
> 
> ---
> 
> **⚙️ Encoder Models**
> The iterator $j$ moves across the *entire* input dimension.
> - Range: $1 \le j \le N$
> - Description: Full sweep of all available dimensions.
> 
> **🔄 Decoder Models**
> The iterator $j$ is constrained and only moves up to a specific index $i$.
> - Range: $1 \le j \le i$
> - Description: Limited sweep, where the upper bound ($i$) is predefined for that decoding step.

$$a_i = \sum_{j} \alpha_{ij} x_j$$**How shall we compute this α weighting?**
With the attention mechanism, **weight** each prior representation proportionally
to **how similar** it is to the current representation i. *So the output of attention is a sum of the representation of prior tokens weighted by their similarity with the current token embedding.*

![](../Pasted%20image%2020260420114310.png)


## Encoder

Used to produce contextualized representations of input words (**tokens**)
- BERT
- RoBERTa
- XLM-RoBERTa
- alBERTo (Italian model)
- ...
## Decoder
Used to produce auto-regressive representations of input words for text generation (language modeling)
- GPT 
- LLaMa
- Mistral
- Minerva
- ...

## Attention mechanism

Transformers can build contextual representations of word meaning, i.e.
contextualized embeddings, by combining the representations of the most relevant
words in context. In a Transformer, we build up richer and richer contextualized representations of the meanings of input tokens, layer by layer

**Self Attention**
A method to compute a vector representation for a token at a particular
layer, by selectively attending to information from contextual tokens at
the previous layer

![](../Pasted%20image%2020260420120652.png)
![](../Pasted%20image%2020260420120838.png)
![](../Pasted%20image%2020260420121026.png)
![](../Pasted%20image%2020260420121628.png)

This diagram illustrates the crucial first stage of how transformers process input tokens—specifically, how they transform a simple word meaning into three specialized vector representations required for the Self-Attention mechanism: **Query (Q)**, **Key (K)**, and **Value (V)**.

The computation is not about finding the final answer yet; it is about **preparing the tokens** so that the model knows how each token relates to every other token in the input sequence.

### 1. The Starting Point: Word/Token Embeddings (Input)

Before any computation happens, the transformer must convert human-readable words into a format the computer understands.

- **What it is:** A word embedding (e.g., 'See') is a dense vector—a long list of floating-point numbers—that numerically represents the meaning and context of that word. Words with similar meanings will have vectors that are numerically closer together in this high-dimensional space.
    
- **The Purpose:** This initial step captures the semantic content of the token.
    

### 2. The Transformation: Linear Layers (Computation)

This is the core computational step shown by the arrows passing through $W_k$, $W_q$, and $W_v$.

- **What it is:** Each embedding vector is passed through a linear layer. A linear layer performs a matrix multiplication operation using learned weight matrices ($W$).
    
    $$\text{Output} = \text{Input Vector} \times W$$
    
    The matrices $W_k$, $W_q$, and $W_v$ are the "weights" of the model. They are parameters that the transformer learns during training to optimally project the original meaning into three different conceptual spaces.
    
- **The Effect:** Since the same input vector is multiplied by three different weight matrices, it results in three completely distinct output vectors ($Q$, $K$, and $V$), even though they all started as representations of the same word.
    

### 3. The Results: Query, Key, and Value Vectors

By creating these specialized vectors, the transformer enables a complex comparison process known as "attention." Each vector serves a specific functional role in the attention calculation:

**A. Query ($\mathbf{Q}$)**

- **Role:** The question. The Query vector represents what the current token is looking for. When the model processes the word 'See', its $Q$ vector asks, "What information do I need from other words to understand myself better?"
    
- **Function in Attention:** It is used to probe and compare against all the Key vectors.
    

**B. Key ($\mathbf{K}$)**

- **Role:** The label/index. The Key vector represents what a token contains or offers. When processing the word 'that', its $K$ vector says, "I contain information about this specific object."
    
- **Function in Attention:** It is compared against the Query vectors to determine relevance (i.e., how well does the answer I offer match your question?).
    

**C. Value ($\mathbf{V}$)**

- **Role:** The content. The Value vector contains the actual, rich information associated with the token. If the Key matches a Query strongly, the model uses the corresponding Value to update its understanding of the current word.
    
- **Function in Attention:** It is weighted and summed up; it holds the information that will be passed along.
    

### How This Leads to Context-Aware Tokens (The Next Step)

While your diagram shows only the preparation phase, the full computation happens when $Q$, $K$, and $V$ interact in the Self-Attention block:

1. **Scoring:** The Query vectors ($\mathbf{Q}$) are compared against all Key vectors ($\mathbf{K}^T$). This calculation determines a score of relevance. (e.g., How relevant is the word 'that' to my question, $Q$? A high score means they relate strongly.)
    
2. **Weighting:** These scores are normalized (using Softmax) to create attention weights (probabilities).
    
3. **Weighted Sum:** These attention weights are multiplied by the corresponding Value vectors ($\mathbf{V}$). The final output vector for the input token is a weighted average of all other Value vectors, emphasizing those that had high relevance scores.
    

**Summary Flow:**

$$\text{Word Embedding} \xrightarrow{\times W_q} \mathbf{Q} \quad / \quad \text{Word Embedding} \xrightarrow{\times W_k} \mathbf{K} \quad / \quad \text{Word Embedding} \xrightarrow{\times W_v} \mathbf{V}$$

$$\mathbf{Q} \text{ compares against } \mathbf{K} \implies \text{Attention Weights} \implies \text{Weights applied to } \mathbf{V} \implies \text{New, Contextualized Token Representation}$$

---

### Transformer Architecture: Self-Attention Mechanism

The self-attention mechanism is a core component of transformer models, enabling them to weigh the importance of different words or tokens within an input sequence relative to every other word. This allows the model to capture long-range dependencies and create context-aware representations for each token.

#### Foundation: Query, Key, and Value Vectors ($\mathbf{Q}, \mathbf{K}, \mathbf{V}$)

The process relies on three learned projection matrices ($W^Q$, $W^K$, $W^V$). These matrices transform the initial input embeddings ($X$) into three specialized vector forms for every token:

- **Query ($\mathbf{Q}$):** Represents what information the current token is looking for.
    
- **Key ($\mathbf{K}$):** Acts as a label or index, determining if its information is relevant to a specific Query.
    
- **Value ($\mathbf{V}$):** Contains the actual content of the token; this is the information that will be aggregated and passed forward.
    

These vectors are calculated using linear transformations: $Q = XW^Q$, $K = XW^K$, and $V = XW^V$.

#### Step 1: Computing the Scaled Dot-Product Score (Similarity)

The first step is to compute a scalar score, which measures the raw similarity or compatibility between the Query vector ($\mathbf{q}_i$) of token $x_i$ and the Key vector ($\mathbf{k}_j$) of token $x_j$. This determines how relevant $x_j$ is to the focus of $x_i$.

**Formula for Raw Score:**

$$\text{score}(x_i, x_j) = \frac{\mathbf{q}_i \cdot \mathbf{k}_j}{\sqrt{d_k}}$$

- **Dot Product ($\mathbf{q}_i \cdot \mathbf{k}_j$):** Measures the alignment between the query and key vectors.
    
- **Scaling Factor ($\sqrt{d_k}$):** Divides the raw score by the square root of the dimension of the keys ($d_k$). This scaling prevents the magnitude of the dot products from becoming excessively large, which stabilizes training and mitigates the vanishing gradient problem within the Softmax function.
    

#### Step 2: Computing Attention Weights ($\alpha_{ij}$)

The raw scores are converted into a probability distribution using the Softmax function. This transforms the similarity score into an attention weight, $\alpha_{ij}$, indicating the precise proportion of attention token $i$ should dedicate to token $j$.

**Formula for Attention Weight:**

$$\alpha_{ij} = \text{softmax}(\text{score}(x_i, x_j))$$

The Softmax is computed over all tokens ($j$) relative to a single query ($i$). This ensures that the attention weights for any given token $i$ sum up to $1$.

#### Step 3: Generating Contextualized Output (Attention Head)

In this final stage, the calculated attention weights ($\alpha_{ij}$) are applied to the Value vectors ($v_j$) of all tokens. The output vector for a specific head ($\text{head}_i$) is a weighted sum of these value vectors.

**Formula for Attention Head Output:**

$$\text{head}_i = \sum_{j} \alpha_{ij} v_j$$

- **$v_j$:** The Value vector of token $j$.
    
- **$\alpha_{ij} v_j$:** Represents the information from token $j$ that is selectively pulled into the output for token $i$, weighted by its calculated relevance.
    

**Functional Result:**

The resulting $\text{head}_i$ is a new, highly contextualized vector. It no longer represents just the original token $x_i$; rather, it blends relevant information from every other word in the sentence according to their measured importance ($\alpha_{ij}$), enabling the model to understand nuances like "it" referring correctly back to its antecedent.

#### The Power of Parallelization: Matrix Operations

While the steps above describe the vector-level interactions between individual tokens ($i$ and $j$), a defining breakthrough of the transformer architecture is that it _does not_ process these tokens sequentially. Instead, it parallelizes the entire operation using matrix multiplication.

Rather than looping through vectors one by one (like older RNN models), the transformer packs the embeddings for the entire sequence into a single, large input matrix ($X$). The self-attention mechanism processes this entire sequence globally:

**The Global Attention Equation:**

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

- **$QK^T$ (Matrix Multiplication):** Instead of computing individual dot products, multiplying the entire Query matrix ($Q$) by the transposed Key matrix ($K^T$) instantly generates a massive grid (matrix) of raw similarity scores comparing _every_ word in the sequence to _every other_ word simultaneously.
    
- **Scaling and Softmax:** The scaling factor and Softmax are applied to this entire grid row-wise, instantly creating a complete matrix of attention weights.
    
- **$\times V$:** Finally, this weight matrix is multiplied by the entire Value matrix ($V$), producing the final, contextualized representations for all tokens in the sequence in a single computational step.
    

**Why It Matters:** This highly optimized matrix math is exactly what modern GPUs are designed to compute incredibly fast. By parallelizing attention, transformers eliminated the sequential bottleneck of earlier AI models, allowing them to process massive blocks of text simultaneously and enabling the rapid training of the Large Language Models we use today.

---

**Note on Multi-Head Attention:** While this describes a single attention head ($\text{head}_i$), full transformer models employ Multi-Head Attention. This involves running several independent attention heads in parallel, allowing the model to simultaneously focus on different relationships (e.g., one head focuses on syntax, another on semantic similarity) before concatenating and combining their outputs.

![](../Pasted%20image%2020260420161028.png)


## Multi Head Attention

In the Transformer attention module, we have A separate attention heads. Each head has its own set of parameters that allows it to model different aspects of the relationships among inputs. 

Each head might be attending to the context for different purposes:
- Represent **different linguistic relationships** (grammar, semantics, cross-linguality) between context elements and the current token
- Look for **particular kinds of patterns** in the context

> [!NOTE]
>  In a multi-head attention layer, each head operates in parallel at the same depth within the model. Every head has its own set of parameters

$$\mathbf{q}_i^c = \mathbf{x}_i\mathbf{W}^{\mathbf{Q}c}; \quad \mathbf{k}_j^c = \mathbf{x}_j\mathbf{W}^{\mathbf{K}c}; \quad \mathbf{v}_j^c = \mathbf{x}_j\mathbf{W}^{\mathbf{V}c}; \quad \forall c \quad 1 \leq c \leq A$$

After the computation of $A$ attention heads:

- Concatenate them:  $(\mathbf{head}^1 \oplus \mathbf{head}^2 \dots \oplus \mathbf{head}^A) \in \mathbb{R}^{d_vA}$
    
- Project back to input dimension $d$: $\mathbf{a}_i = (\mathbf{head}^1 \oplus \mathbf{head}^2 \dots \oplus \mathbf{head}^A)\mathbf{W}^O$
    

$$\mathbf{W}^O \in \mathbb{R}^{d_vA \times d}$$

![](../Pasted%20image%2020260420162928.png)

Here is an explanation of the concepts presented in the slides, followed by organized notes transcribing the key information and mathematical formulas.

### Explanation of the Concepts

The slides break down two critical components of the Transformer architecture: the **Residual Stream** and the **Feedforward Layer**.

#### 1. The Residual Stream (Slides 1 & 2)

Think of the residual stream as the central highway running from the beginning to the end of the Transformer model. When a word (token) is converted into an input embedding, it enters this highway.

Instead of passing the data completely through a sequence of transformations where the original input gets completely overwritten, Transformers use **residual connections** (also known as skip connections). The model takes the current representation, computes some complex function on it (like Attention or a Feed forward network), and then **adds the result back** to the original representation.

![](../Pasted%20image%2020260420163834.png)

This is incredibly important for two reasons:

- **Gradient Flow:** It prevents the "vanishing gradient" problem during training, allowing the model to be very deep.
    
- **Information Preservation:** The original meaning of the token isn't lost; the model iteratively adds updates and context to it as it moves through the layers.
    

**Pre-Norm vs. Post-Norm:**

Slide 2 highlights a vital architectural shift. The original 2017 "Attention is All You Need" paper used a "Post-Norm" structure: it applied Attention/FFN, added it to the residual stream, and _then_ applied Layer Normalization.

Modern GPT-style models use "Pre-Norm": they apply Layer Normalization _before_ the Attention/FFN blocks, and then add the raw output back to the stream. Pre-norm is highly preferred today because it significantly stabilizes the training of very deep networks.

#### 2. The Feedforward Layer (Slide 3)

While Self-Attention allows tokens to look at _other_ tokens to gather context, the Feedforward Network (FFN) operates on **each token completely independently**.

The FFN acts like an individual memory or processing center for each token. It uses a clever "expand-and-compress" strategy:

1. **Expansion:** It projects the input vector ($d$) into a much larger, high-dimensional hidden space ($d_{\text{ff}}$) using a linear transformation.
    
2. **Activation:** It applies a non-linear activation function (like ReLU) to filter and transform the data.
    
3. **Compression:** It projects the data back down to the original dimension ($d$) using a second linear layer so it can be added back into the residual stream.
    

This expansion phase drastically increases the model's capacity to store facts, memorize patterns, and process the complex contextual information gathered during the attention phase.

---
### Transcribed Slide Notes

#### Transformer Block: Residual Stream

> A Transformer processes each token as a **single flowing representation** (residual stream). The stream starts with the **input embedding** (dimension $d$).

**How a residual layer works (GPT-style models):**

- Start with input vector $\mathbf{x}_i$
    
- Apply **LayerNorm** $\rightarrow$ **Attention**
    
- **Add result back** to the stream (residual connection)
    
- Apply **LayerNorm** $\rightarrow$ **Feedforward**
    
- **Add again** to the stream
    

**Formulations Comparison:**

- **Original formulation from the Transformer 2017 paper (Post-Norm):**
    
    $$\mathbf{y} = \text{LayerNorm}(\mathbf{x} + \text{Attention}(\mathbf{x}))$$
    
    $$\mathbf{z} = \text{LayerNorm}(\mathbf{y} + \text{FFN}(\mathbf{y}))$$
    
- **GPT-style formulation (Pre-Norm, stabilizes input to attention):**
    
    $$\mathbf{y} = \mathbf{x} + \text{Attention}(\text{LayerNorm}(\mathbf{x}))$$
    
    $$\mathbf{z} = \mathbf{y} + \text{FFN}(\text{LayerNorm}(\mathbf{y}))$$
    

---

#### Transformer Architecture: Feedforward Layer

> A **fully-connected neural network** applied to each token independently. Consists of **2 linear layers** with **1 hidden layer**.

**How the feedforward works:**

- Input (dimension $d$)
    
- Linear transformation $\rightarrow$ **hidden layer** ($d_{\text{ff}}$)
    
- Activation (e.g., ReLU)
    
- Linear transformation $\rightarrow$ back to dimension $d$
    

**Key Properties:**

- Expands $\rightarrow$ transforms $\rightarrow$ compresses to increase model capacity.
    
- Hidden representation ($d_{\text{ff}}$) is strictly larger than input dimension $d$.
    

**Mathematical Formula:**

$$\text{FFN}(\mathbf{x}_i) = \text{ReLU}(\mathbf{x}_i\mathbf{W}_1 + b_1)\mathbf{W}_2 + b_2$$

---
## Transformer Block Components: Feedforward and Normalization

### Feedforward Layer (FFN)
The Feedforward Network is a fully-connected neural network applied independently to each token representation within the transformer block. Its primary function is to expand, transform, and then compress the input information, thereby increasing the model's capacity.

*   **Structure:** Consists of two linear layers with one hidden layer in between.
    1.  **Expansion:** Input vector (dimension $d$) passes through a linear transformation into a larger dimension ($d_{ff}$).
    2.  **Transformation:** An activation function (e.g., ReLU) is applied to the expanded representation.
    3.  **Compression:** The output passes through a second linear transformation, mapping it back down to the original dimension $d$.
*   **Purpose:** Helps stabilize training and allows the model to process information more richly for each token independently.

### Layer Normalization (LayerNorm)
Applied twice within each transformer block (e.g., after attention and after FFN), LayerNorm is a technique used to standardize the input vectors, which significantly aids in stabilizing the training process.

*   **Function:** It normalizes a *single token vector* across its dimensions (not the entire layer).
*   **Mechanism:** For an input vector $\mathbf{x}$ (dimension $d$):
    1.  Calculate the **Mean** over all values in the vector $\mathbf{x}$.
    2.  Calculate the **Standard Deviation** over all values in the vector $\mathbf{x}$.
    3.  The normalized output is then scaled and shifted using learned parameters ($\gamma$, for scaling; $\beta$, for shifting).

### Computation Flow within a Transformer Layer (Putting It All Together)
A complete transformer layer processes token embeddings through several stages:

1.  **Input Embeddings:** Token words are converted into dense, continuous row vectors of dimension $d$.
2.  **Attention Processing:** The token representations interact with all other tokens via the attention mechanism to create context-aware vectors.
3.  **Residual Connection & Norm (Post-Attention):** The output is combined with the original input vector (residual stream), and LayerNorm is applied to stabilize the result.
4.  **Feedforward Processing:** The resulting vector passes through the FFN layer, which transforms and expands the representation further.
5.  **Residual Connection & Norm (Post-FFN):** The output of the FFN is again combined with its input via a residual connection, followed by LayerNorm.

***

## Incorporating Word Order: Embeddings and Positional Information

### Token Embeddings
Transformer layers operate on token embeddings, which are the fundamental numerical representations of words.

*   **Embedding Matrix ($E$):** This matrix contains one row vector for every distinct token in the vocabulary ($\vert V \vert$). Each vector has a dimension $d$.
*   **Process:** To represent a specific token (e.g., "cat"), its index is retrieved, and the corresponding row vector is extracted from $E$.

### The Need for Positional Embeddings
Standard token embeddings are *not position-dependent*. They treat all tokens identically regardless of where they appear in the sequence. Therefore, to incorporate word order into the model (a requirement for understanding grammar and syntax), positional information must be explicitly added.

*   **Positional Embedding:** A vector representation that encodes the specific position of each token within a sequence. This vector is **added** to the corresponding token embedding.

### Methods for Absolute Position Encoding
Two primary methods are used to generate these position vectors:

#### 1. Learned (Absolute) Positions
*   **Mechanism:** Embeddings corresponding to every possible input position (up to a maximum length $N$) are randomly initialized and treated as trainable parameters during the training process.
*   **Storage:** These positional embeddings are stored in a matrix $E_{\text{pos}}$ of shape $N \times d$.
*   **Limitation:** Since there will be many more examples for initial positions than for positions near the sequence boundaries, embeddings at outer limits may become undertrained and generalize poorly.

#### 2. Static Function (Sinusoidal) Positions
*   **Mechanism:** Instead of learning the position vectors, a pre-established static function maps integer positional indices to real-valued vectors using combinations of sine and cosine functions with varying frequencies.
*   **Advantage:** This approach allows the model to handle sequences of arbitrary length without requiring dedicated training data for every possible position. (This was the method used in the original Transformer paper by Vaswani et al., 2017).
---
## Advanced Positional Encoding Techniques

### 1. Absolute Position Limitations Revisited
While learned positional embeddings are effective, relying solely on them can be problematic:

*   **Data Bias:** Training datasets inherently contain far more examples for positions near the beginning and end of sequences than for positions in the middle, potentially leading to poor generalization at sequence boundaries.
*   **Scalability Issue:** If the model encounters a sequence length longer than its maximum trained position $N$, it has no defined representation for that new absolute position.

### 2. Static Function (Sinusoidal) Positional Embeddings
To overcome scalability issues, static functions provide a deterministic way to encode position without requiring large amounts of positional training data.

*   **Mechanism:** A predefined function maps integer positions into real-valued vectors using combinations of sine and cosine functions with varying frequencies.
*   **Advantage:** This method generates stable, generalized representations for any arbitrary sequence length, as the encoding relies on mathematical patterns rather than learned weights specific to a maximum size.

### 3. Relative Positional Embeddings
This represents an evolution in how position is handled: instead of telling the model *where* a token is located (absolute), it tells the model *how far apart* two tokens are (relative distance). This allows the attention mechanism to focus on the proximity and relationship between tokens regardless of their absolute spot in the sequence.

**Modern Implementations:**
*   **Relative Position Bias:** A learned bias term is added directly into the calculation of the attention scores, effectively modifying how the model weighs distant vs. nearby tokens (e.g., T5, Swin Transformer).
*   **Rotary Positional Embedding (RoPE):** This technique encodes relative position implicitly using geometry. It applies a rotation in the embedding space based on the token's position. Because the dot product between two rotated vectors depends only on their *distance*, RoPE ensures that the model captures relative relationships, even for unseen sequence lengths (e.g., GPT-3.5 and 4, LLaMA, Mistral).

***

## The Language Modeling Head

The Language Modeling Head is a crucial piece of additional neural circuitry applied to the final layer representations of the Transformer. Its purpose is to transform the complex contextualized embedding vector into a probability distribution over the entire vocabulary, allowing the model to perform language-related tasks.

### Core Function and Mechanics
1.  **Input:** Receives the rich, final context-aware representation from the last transformer layer.
2.  **Projection:** This representation is passed through a linear layer (the language model matrix).
3.  **Output:** The output is a vector of logits—one value for every possible token in the vocabulary ($\vert V \vert$).
4.  **Prediction:** Applying a Softmax function to the logit vector converts these scores into probabilities, allowing the model to predict the correct next or required token index.

### Architectural Differences: Encoder vs. Decoder Roles

The application of the language modeling head differs significantly based on whether the Transformer is used in an Encoder-only or Decoder-only configuration:

| Feature | Encoder (e.g., BERT) | Decoder (e.g., GPT) |
| :--- | :--- | :--- |
| **Task Focus** | Understanding/Representation Learning | Sequential Generation |
| **Prediction Goal** | Predict the original *input* token index. | Predict the *next* sequential token index (autoregressive). |
| **Context Use** | Uses full, bidirectional context of the entire input sequence. | Uses only previous tokens in the sequence; future tokens are masked. |
| **Primary Training Method** | Masked Language Modeling (MLM) and NSP. | Autoregressive language modeling. |

### Weights Tying
A common optimization technique is "weights tying," where the weights used for two different matrices—the input embedding matrix ($E$) and the transpose of the output projection matrix ($\mathbf{E}^T$)—are forced to be identical.

*   **Benefit:** This significantly reduces the number of parameters that need to be stored and trained, leading to computational efficiency without sacrificing performance.

---
## Language Modeling Mechanisms in Transformers

### Autoregressive vs. Bidirectional Language Modeling

The function of the language model head depends on whether the Transformer architecture is configured for generation (Decoder) or understanding (Encoder).

*   **Decoder LM (Autoregressive):** Used when generating text sequentially. The model predicts the **next token** in a sequence, given all preceding tokens. This process is autoregressive.
*   **Encoder LM (Bidirectional):** Used primarily during pretraining for tasks like classification or understanding. The model aims to predict missing words using the **full bidirectional context** of the entire sentence.

### Parameter Efficiency: Weights Tying
To optimize memory and computational resources, a technique called "weights tying" is often employed in the language modeling head.

*   **Mechanism:** This method shares the same set of weights between two crucial matrices:
    1.  **Embedding Matrix ($E$):** Maps sparse one-hot vocabulary vectors ($\text{[}1 \times \vert V \vert\text{]}$) into dense embedding vectors ($\text{[}1 \times d\text{]}$). Shape: $\vert V \vert \times d$.
    2.  **Output Projection Matrix ($\mathbf{E}^T$):** Maps the final dense representation ($d$) back to vocabulary logits ($\text{[}1 \times \vert V \vert\text{]}$). This is typically the transpose of $E$. Shape: $d \times \vert V \vert$.
*   **Benefit:** By ensuring $E = (\mathbf{E}^T)^T$, the model effectively uses only one set of weights, dramatically reducing storage and training complexity.

***

## Encoder Training Objectives (Pretraining)

Encoder models like BERT are trained on massive datasets using two primary objectives designed to teach the model rich linguistic patterns and deep contextual relationships: Masked Language Modeling (MLM) and Next Sentence Prediction (NSP).

### 1. Masked Language Modeling (MLM)
MLM trains the encoder to handle words independently by forcing it to reconstruct tokens that have been deliberately hidden or corrupted within an input sentence.

*   **Objective:** The model predicts the probability distribution over the entire vocabulary for every masked token. This is equivalent to handling words in a "cloze style" format.
*   **Training Procedure (Corruption Criteria):** During training, a percentage of tokens are corrupted according to specific rules:
    *   **80% of the time:** The original token is replaced by a special vocabulary token named `[MASK]`.
    *   **10% of the time:** The original token is randomly substituted with another token sampled from the overall vocabulary (e.g., "delicious" $\rightarrow$ "gasp").
    *   **10% of the time:** The original token remains unchanged.

### 2. Next Sentence Prediction (NSP)
MLM focuses on word-level understanding, whereas NSP adds a critical objective for sentence-level comprehension and discourse coherence.

*   **Objective:** To classify whether two given sentences are logically adjacent in the source document or if they were randomly sampled from different parts of the corpus. This is a binary classification task.
*   **Special Tokens:** BERT introduces specific tokens to frame the input pairs:
    *   `[CLS]`: Prepended to the input sequence, its final representation is used for NSP classification.
    *   `[SEP]`: Placed between two sentences and after the final token of the last sentence, acting as a separator.
*   **Training Regime:** The training corpus is split 50/50:
    *   **Positive Pairs (50%):** Sentence B truly follows Sentence A.
    *   **Negative Pairs (50%):** Sentence B is randomly selected from elsewhere in the massive corpus, meaning it does not logically follow Sentence A.

> **Contrast:** While MLM teaches the model *what words mean*, NSP teaches the model *how sentences relate to each other*.

---
## Advanced Encoder Training: BERT Family Models and Architectures

### Evolution of BERT Family Models (Improvements over Original BERT)
While BERT revolutionized NLP, subsequent models addressed limitations such as lack of true multilingual optimization, inefficient training methods, or excessive parameter count.

*   **XLM-R (Cross-Lingual Language Model - RoBERTa):** Addresses the limitation that original BERT is trained on a limited number of languages and does not share vocabulary well across them.
    *   **Approach:** Utilizes multilingual training samples and employs explicit language identification. It sums the language information into both token embeddings and positional embeddings.
    *   **Key Improvement (RoBERTa modification):** By removing translation-based language modeling, XLM-R achieves better performance with massive datasets (over 2 Trillion tokens).

*   **XLNet (Permutation Language Modeling):** An architecture developed by CMU+Google that moves beyond the fixed masking of MLM.
    *   **Approach:** Uses **Permutation Language Modeling**, where it attempts to predict *all* tokens, but they are presented to the model in random order rather than a standard sequence. This allows the model to capture dependencies regardless of token position.

*   **RoBERTa (Robustly Optimized BERT Pretraining Approach):** Developed by Facebook, RoBERTa focused on optimizing the training methodology itself.
    *   **Improvements:**
        1.  Significantly increased pre-training data (up to 1000% more than original BERT).
        2.  Improved overall training setup and methodologies.
        3.  Removed the less effective Next Sentence Prediction (NSP) task.
    *   **Result:** Consistently outperforms the original BERT and XLNet on standardized benchmarks like GLUE.

*   **DistilBERT:** A model designed for efficiency and deployment speed.
    *   **Approach:** Achieves approximately half the number of parameters of the full BERT while retaining most of its performance (a minor drop, typically less than 3%). It uses approximation techniques to streamline the output distribution calculations.

***

## Downstream Applications: Using Pretrained Language Models (PLMs)

Pretrained Language Models (PLMs) are foundational models trained on massive text corpora and then adapted for specific downstream tasks (e.g., classification, NER). The adaptation process involves two main strategies:

### 1. Domain Adaptation
*   **Goal:** To specialize the model's general knowledge to a narrower, specialized domain or language variety.
*   **Method:** Training the already pretrained PLM on a smaller dataset specific to that domain (e.g., medical texts, legal documents).

### 2. Task-Specific Adaptation
This involves using the rich contextual embeddings generated by the frozen or fine-tuned PLM to solve concrete problems. The two main approaches are:

*   **Option 1: Frozen (Feature Extraction):**
    *   The weights of the entire pretrained model are kept **fixed**.
    *   The model acts as a sophisticated feature extractor, generating contextual representations for the input text.
    *   Only a small, task-specific output layer (e.g., a simple linear classifier) is trained on top of these frozen features.
    *   **Pros:** Faster training; less computational cost.
    *   **Cons:** Lower potential performance ceiling.

*   **Option 2: Fine-Tuned:**
    *   The weights of the entire pretrained model *and* the task-specific output head are updated during training.
    *   Training is done end-to-end, typically using a small learning rate to prevent catastrophic forgetting of the general knowledge acquired during pretraining.
    *   **Pros:** Achieves higher overall performance; superior adaptation to the specific task data.
    *   **Cons:** Requires more computational resources; risk of overfitting if fine-tuned on too little data.

### Common Downstream Tasks
PLMs are employed for various NLP tasks, categorized by how they process the sequence:

#### A. Sequence Classification (e.g., Sentiment Analysis)
The model takes an entire input text and produces a single output label for the whole document. The task is to determine properties of the sequence as a unit.
*   **Example:** Classifying a movie review as `[Positive]` or `[Negative]`.

#### B. Sequence Labeling (e.g., Named Entity Recognition - NER)
The model assigns a tag to *every single token* in the input sequence, marking boundaries and types of specific entities.
*   **Named Entity:** Any entity that can be referred to by a proper name (person, location, organization).
*   **NER Tagging:** Tags must capture both whether a token is part of an entity and what type it is (e.g., `PER` for person, `ORG` for organization).
*   **BIO Tagging Scheme:** A standard method used to denote the start and continuation of entities:
    *   `B-[class]`: Beginning of a named entity mention.
    *   `I-[class]`: Inside/continuation of a named entity mention.
    *   `O`: Outside of any named entity.

#### C. Sequence Pair Classification (e.g., Natural Language Inference - NLI)
The model processes two input sentences simultaneously (a premise and a hypothesis) and classifies the logical relationship between them.
*   **Goal:** To determine if the Hypothesis is logically entailed by, contradicts, or is neutral with respect to the Premise.

> **Summary of Adaptation:** The task-specific output layer must match the required format: For classification (Sequence Classification/NLI), it outputs a category index; for word-by-word tasks (NER), it outputs a label sequence for each token.

---
## Sequence Labeling Detail: Named Entity Recognition (NER)

### The Role of NER
Named Entity Recognition (NER) is a specific type of sequence labeling task where the objective is to identify continuous spans of text that represent proper names and assign a corresponding category tag to those entities.

*   **Entity Definition:** A named entity refers to any real-world object or concept that can be referred to by a proper name (e.g., a person, a location, an organization).
*   **Tagging Scheme:** NER requires tags for the type of entity found (e.g., `PER` for Person, `LOC` for Location, `ORG` for Organization).

### BIO Tagging System
To treat NER as a word-by-word sequence labeling problem, annotators use the **BIO tagging scheme**. This system captures both the boundary (start/inside) and the type of every named entity. Each token is tagged using one of three labels:

*   **B-[class]:** Denotes the *Beginning* of an entity mention belonging to a specific class (e.g., `B-PER`).
*   **I-[class]:** Denotes a token that is *Inside* or continues an existing entity mention of a specified class (e.g., `I-PER`).
*   **O:** Denotes a token that does **not** belong to any named entity.

**Example:** For the phrase "Jane Villanueva of United," the tagging would be:

| Token | Tag | Description |
| :--- | :--- | :--- |
| Jane | `B-PER` | Start of a person's name. |
| Villanueva | `I-PER` | Continuation of the person's name. |
| of | `O` | Not an entity. |
| United | `B-ORG` | Start of an organization name. |

***

## Sequence Pair Classification: Natural Language Inference (NLI)

### Definition and Goal
Natural Language Inference (NLI) is a sequence pair classification task where the model must determine the logical relationship between two sentences: a **Premise** and a **Hypothesis**.

*   **Goal:** To classify whether the Hypothesis is logically entailed by, contradicts, or is neutral with respect to the Premise.
    *   **Entailment:** The premise guarantees that the hypothesis is true (e.g., *Premise: A man is playing a guitar.* $\rightarrow$ *Hypothesis: A person is playing an instrument.*).
    *   **Neutral:** The relationship cannot be determined from the text alone; they are independent statements (e.g., *Premise: A woman is reading a book in a park.* $\rightarrow$ *Hypothesis: She is enjoying the book.*).
    *   **Contradiction:** The premise directly negates the hypothesis (e.g., *Premise: A child is sleeping on the couch.* $\rightarrow$ *Hypothesis: The child is running outside.*).

***

## Sentence Embeddings and Semantic Search

### What are Sentence Embeddings?
A sentence embedding is a dense vector representation designed to numerically encode the complete semantic meaning of an entire sequence of text (a sentence or phrase). These vectors allow computers to perform mathematical operations on meaning, enabling tasks like semantic search.

**Methods for Extraction from PLMs:**
1.  **Using `[CLS]` Token:** The contextualized embedding generated by the special classification token (`[CLS]`) at the final layer is often used as a quick proxy for the sentence embedding.
2.  **Pooling Techniques:** Applying pooling mechanisms over all the individual contextualized embeddings of the input tokens:
    *   **Mean Pooling:** Calculating the average vector across all token representations.
    *   **Max Pooling:** Taking the element-wise maximum value from all token representations.

### SentenceBERT (SBERT): The Innovation
While standard PLMs can generate sentence embeddings, they are not efficiently fine-tuned for **sentence-level tasks**, such as similarity comparison. SBERT addresses this by fundamentally changing how these embeddings are extracted and trained.

**Core Architecture: Siamese / Triplet Networks**
Instead of treating each sentence independently (as BERT does at the token level), SBERT uses specialized network architectures to force sentences with similar meanings to have close vectors in the embedding space.

*   **Siamese Network:** Two identical instances of a transformer model share the same weights and encode two separate input sentences simultaneously. This ensures that the representations are consistent for comparative tasks (like similarity matching).
*   **Triplet Network:** Encodes three related sentences at once: an **Anchor** sentence, a **Positive** example (semantically similar to the anchor), and a **Negative** example (semantically dissimilar to the anchor).

### SBERT Training Objectives
SBERT is fine-tuned specifically on sentence-pair tasks:

1.  **Natural Language Inference (NLI) Fine-Tuning:** The model learns embeddings such that pairs labeled as *Entailment* have vectors close together, while *Contradiction* pairs are far apart. This provides a rich semantic signal for sentence understanding.
2.  **Semantic Textual Similarity (STS):** This is the primary similarity task. SBERT minimizes the distance between the embedding of two semantically similar sentences, often using specialized losses like:
    *   **Cosine Similarity Loss:** Maximizing cosine similarity for positive pairs.
    *   **Triplet Loss:** Training to ensure that $distance(\text{Anchor}, \text{Positive}) < distance(\text{Anchor}, \text{Negative})$.

> **Impact:** SBERT's methods enable efficient retrieval and advanced semantic search, allowing users to find documents or sentences based on meaning rather than just keyword matching.