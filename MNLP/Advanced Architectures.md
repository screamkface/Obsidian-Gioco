We previusoly seen how the transformer architecture it's made. We've senn the Decoder only architecture like GPT, LLaMa, Mistral and Minerva. Those are autoregressive models since they're a decoder only architecture.

## Limits of Linear Scaling

Scaling up a model size **increase computational requirements** and the compute cost per token increase **linearly**.

### The Hidden Assumption - Dense computation

In a standard Transformer block , every **indiidual token** must be processed by the etirety of the model's parameters across the attention and feed-forward layers.


> [!WARNING] Computational Limit
> Because of this dense routing, training and inference costs scale directly with the size of the model

## MoE

Mixture of Experts (MoE) is the technique that uses many different sub-models (or "experts") to improve the quality of LLMS.

A MoE is defined by two main components:
- **Experts** -> Each FNN layer now has a set of **experts** of which a subset can be chosen. Typically the experts are FNNs.
- **Router or gate network** -> Determine which tokens are sent to which experts

In each layer of an LLM with a MoE, we find somewhat specialized experts

![](../Pasted%20image%2020260507095308.png)

An expert might learn syntatic information on a word level:

![](../Pasted%20image%2020260507095403.png)

### Sparsity & Routing

To understand MoE, it helps to start with an analogy: Imagine a massive hospital. A traditional "dense" neural network is like forcing every single patient to be examined by every single doctor in the building, regardless of their symptoms. A Mixture of Experts (MoE) model is like having a triage nurse (the **router**) who looks at your symptoms and sends you to only the one or two specialist doctors (the **experts**) best suited to treat you.

Here is how those two core concepts—sparsity and routing—function technically.

1. **Sparsity** (Efficiency through Selective Activation)
	In a Sparse MoE model, the network is divided into separatae sub-networks called Experts. When a token is processed, the model only activates a small fraction of these expert.
- **The Result:** You can build a massive model with a massive knowledge base (e.g., 1 trillion total parameters) but only use a fraction of them (e.g., 50 billion parameters) to process any given token.

- **The Benefit:** It allows the model to scale its "brain size" and capacity without requiring proportionally more computational power or time to run.

1. **Routing** (The Decision Maker)
The **router** is a small, **dense neural network** that sits right before the router, here is how it operates:

2. **Evaluation:** As a token (e.g., the word "quantum") enters the router, the router evaluates it and calculates a score (probability weight) for every available expert.

3. **Top-K Selection:** The router uses a "Top-K" mechanism. Usually, $K = 1$ or $K = 2$. If it's a Top-2 router, it selects the two experts with the highest scores for that specific token.

4. **Dispatch:** The token is sent _only_ to those selected experts. The unselected experts are completely ignored for this token (this is where the sparsity happens).

5. **Recombination:** The outputs from the chosen experts are multiplied by the router's confidence scores and added together to form the final output for that layer.

Aactive Params 30b of 80b, sparsity 63%, token seen 10
 ![](../download.png)