This is an excellent request. Writing the code is only 20% of a Data Scientist's job; 80% is knowing how to explain and justify it. If you deeply understand these choices, you will write a stellar report, and your oral defense will be untouchable.
Let’s put on our white coats and conduct a full dissection of our code, block by block.

***

### Block 1: Setup and Hard Negative Mining

This block sets up the battlefield. The most critical choice here is the logic we use to extract the **Hard Negatives**.

**The 85/15 Split (seed=42):** We split the dataset to create a Validation Set. The `seed=42` parameter forces the randomness to be identical across every run. This ensures that our experiments are reproducible (if the professor runs the code, they will get exactly the same numbers we do).

**The `get_hard_triplets` function:** This is a performance goldmine. Instead of using a tedious `for` loop to calculate the cosine similarity for every sentence, we "vectorized" the operation.

**Why use `scores[ex["answer_pos"]] = -1e9`?** When calculating the similarity between the query and all its chunks, the highest score will naturally be that of the correct answer. But what we need is the second-ranked item (the wrong chunk that still resembles the query the most). By setting the score of the correct answer to less than a billion (`-1e9`), we "hide" the positive. When we call `torch.argmax` (which finds the maximum value), the code automatically picks up the most insidious negative. This forces the model to learn the subtle nuances.

### Block 2: The Baselines (Manual Mean Pooling)

Here, the professor wanted to see if you understood how a Transformer works before the dedicated `sentence-transformers` library intervened.

**Why is the `mean_pooling` function so complex?**
We couldn't simply take the mathematical average of all tokens (`torch.mean()`). Why? Due to **Padding**. When we feed the model a 10-word sentence and a 30-word sentence in a batch, the model adds 20 "zeros" to the first one to equalize their lengths.

**The Solution:** We use the `attention_mask`. We multiply the token vectors by the mask (which is 1 for real words and 0 for padding). This way, the zeros from the padding are nullified. Then, instead of dividing by the total fixed length, we divide by `mask.sum()` (the actual number of real words in that specific sentence). This is the correct mathematical mean for NLP.

### Block 3: The Custom Architecture (Attention Pooling & MNRL)

This is the beating heart of your project's excellence. Let’s examine the mathematical choices.

**1. The Attention Pooling Layer (`nn.Sequential`)**
Why this exact structure? `Linear(768, 768) -> Tanh -> Linear(768, 1)?`

*   **The first Linear layer (768, 768):** Takes the vector of a word (which has 768 dimensions) and projects it into a new space for analysis.
*   **Tanh (Hyperbolic Tangent):** This is the "activation" function. Transformers love non-linearities. Tanh compresses values between -1 and 1, allowing the network to understand complex relationships (e.g., "this word is important if close to a verb, but useless at the start of the sentence").
*   **The second Linear layer (768, 1):** Takes the analyzed 768 dimensions and outputs a single number. That number is the specific word’s **"importance score."**

**The final Softmax:** This takes the "scores" of all the words in the sentence and transforms them into percentages. If the sentence is "The firmware is broken," the network will give a high score to "firmware" and "broken," and a low score to "The" and "is." The Softmax ensures that the sum of these percentages equals exactly 1.0. Finally, we multiply every word by its percentage weight.

**2. Multiple Negatives Ranking Loss (MNRL)**
Why this instead of Triplet Loss? Triplet Loss compares a query, a correct answer, and one hard negative (3 sentences at once). MNRL, using a `batch_size=16`, compares the query to its correct answer but uses the other 15 *correct answers* from the batch’s other queries as extra "free" negative examples (**In-batch negatives**). We are giving the model 15 negative examples for every step instead of just one, multiplying training efficiency tenfold without slowing down computation.

**3. The Warmup (10%)**
Why `warmup_steps`? DistilBERT has already learned English from Google. Our Attention Pooling "head," however, we have just created (its weights are random). If we started with a maximum learning rate, the random weights of the head would destroy the pre-trained "brain" of DistilBERT within seconds (**Catastrophic Forgetting** phenomenon). The 10% warmup starts training with extremely light steps, giving the Attention mechanism time to align with the rest of the network.

### Block 4: Re-Ranking (Cross-Encoder)

This is the two-stage logic.

**Why use `ms-marco-MiniLM-L-6-v2`?** "MS MARCO" indicates it was trained on Microsoft’s massive dataset (500k real queries), making it a world champion for this task. "MiniLM-L-6" means it only has 6 layers instead of 12. It is a "distilled" model: it is tiny and very fast, but maintains 95% of the performance of giant models. Perfect for Colab.

**Why do we reorder ONLY the Top-10?** Bi-Encoders (DistilBERT) are lightning-fast; they calculate vectors independently in advance. Cross-Encoders (MiniLM), however, are extremely slow: to calculate a score, they must read the Query and the Answer together in the same string (`[CLS] Query [SEP] Answer [SEP]`), applying self-attention between every single word of the question and the answer. If we did this on all 200 candidates for each query, the notebook would take 10 hours to finish. Filtering the best 10 with the Bi-Encoder and only refining them with the Cross-Encoder is the standard industrial architecture used by Google Search and Bing.

***
