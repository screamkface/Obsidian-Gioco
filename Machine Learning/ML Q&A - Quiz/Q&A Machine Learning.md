# Quiz completo di Machine Learning

## Parte 1 — Domande 1-20

1. Nel framework di statistical learning, che cosa rappresenta il domain set X?

2. Qual è la differenza tra label set Y in classificazione binaria e in regressione?

3. Che cosa significa assumere che i dati siano campionati i.i.d.?

4. Qual è la differenza tra generalization error e training error?

5. In che senso l’Empirical Risk Minimization minimizza una quantità “empirica” e non “vera”?

6. Perché l’ERM puro può portare a overfitting?

7. Che ruolo ha l’hypothesis class H dentro ERM con inductive bias?

8. Enuncia con parole semplici l’idea del No-Free-Lunch Theorem.

9. Qual è la differenza tra approximation error ed estimation error?

10. Nel trade-off bias-complexity, che cosa succede in genere quando aumenti troppo la complessità del modello?

11. Che cosa vuol dire che una classe di ipotesi “shatters” un insieme di punti?

12. Che cosa misura la VC-dimension in termini intuitivi?

13. Nel perceptron, quando avviene l’aggiornamento dei pesi?

14. Perché il teorema di convergenza del perceptron richiede separabilità lineare?

15. Nella regressione lineare, qual è la loss standard usata nel PDF?

16. Che cosa rappresenta geometricamente la normal equation nella regressione lineare?

17. Qual è la differenza principale tra Ridge e Lasso nella regressione lineare regolarizzata?

18. Perché la normalizzazione delle feature è particolarmente importante quando si usa regolarizzazione?

19. Nella logistic regression, perché si usa la sigmoid?

20. In che senso la logistic regression è collegata alla Maximum Likelihood Estimation?

## Parte 2 — Domande 21-40

21. Qual è l’effetto della regolarizzazione L1 nella logistic regression rispetto alla L2?

22. Qual è la differenza concettuale tra boosting e bagging?

23. In AdaBoost, perché i campioni classificati male ricevono più peso nei round successivi?

24. In bagging, perché il bootstrap sampling aiuta a ridurre la varianza?

25. Qual è la differenza tra train-test split, validation set e test set?

26. A cosa serve la k-fold cross-validation nella model selection?

27. Come si interpreta una learning curve che mostra errore di training basso ma errore di validation molto più alto?

28. Nel gradient descent, che ruolo ha il learning rate α?

29. Qual è la differenza tra batch gradient descent, stochastic gradient descent e mini-batch gradient descent?

30. Perché i subgradient sono utili in problemi con funzioni non differenziabili, come L1 o hinge loss?

31. Nelle SVM lineari, che cosa significa massimizzare il margine?

32. Qual è la differenza tra hard-margin SVM e soft-margin SVM?

33. Che cosa sono i support vectors e perché sono così importanti?

34. Qual è l’idea del kernel trick nelle SVM non lineari?

35. Quale problema risolve il kernel RBF rispetto a una separazione lineare semplice?

36. Nei decision tree, a cosa servono entropia, information gain e Gini impurity?

37. Perché il pruning viene considerato una forma di regolarizzazione negli alberi decisionali?

38. In un random forest, perché si introduce casualità anche nella scelta delle feature oltre che nel bootstrap?

39. Nel KNN, come cambia in genere il comportamento del modello quando k è molto piccolo rispetto a quando k è molto grande?

40. Qual è la differenza fondamentale tra KNN e K-means?

## Parte 3 — Domande 41-60

41. Perché nel KNN il feature scaling è cruciale quando si usano distanze come Euclidea o Manhattan?

42. Che cosa si intende per curse of dimensionality nel contesto del KNN?

43. Nel grafico errore-vs-k, che cosa indica il cosiddetto elbow point?

44. Nel k-means, qual è la funzione obiettivo minimizzata dall’algoritmo di Lloyd?

45. Qual è un limite classico del k-means rispetto alla forma dei cluster?

46. Nel clustering gerarchico, qual è la differenza tra single linkage e complete linkage?

47. Perché Ward linkage tende spesso a produrre cluster più compatti?

48. Fai una distinzione tra metriche interne di valutazione del clustering e metriche supervisionate.

49. In una feedforward neural network, perché più layer lineari senza attivazioni non aggiungono vera potenza espressiva?

50. Qual è l’idea alla base dell’Universal Approximation Theorem?

51. A cosa serve la backpropagation nelle reti neurali?

52. Perché le CNN sono preferibili alle FNN per dati immagine?

53. Che cosa significa weight sharing in un layer convoluzionale?

54. Come influenzano stride e padding la dimensione dell’output di una convoluzione?

55. Qual è la differenza tra max pooling e average pooling?

56. Perché la ReLU è in genere preferita a sigmoid o tanh negli hidden layers?

57. Che cos’è il problema del dying ReLU?

58. Quando si usa Softmax nell’output layer?

59. In PCA, che cosa si massimizza nella formulazione a massima varianza?

60. Qual è la differenza concettuale tra PCA e autoencoder?

## Parte 4 — Domande 61-70

61. Perché in PCA è importante che i dati siano centrati?

62. Che relazione c’è tra PCA e minimizzazione dell’errore di ricostruzione?

63. In un autoencoder con bottleneck, che ruolo ha la rappresentazione latente?

64. Qual è la differenza tra usare MSE e Binary Cross-Entropy come loss in un autoencoder?

65. Che cosa cambia in un denoising autoencoder rispetto a un autoencoder standard?

66. Perché i denoising autoencoder sono collegati all’idea di manifold learning?

67. Fai un confronto rapido tra feature extraction lineare e non lineare usando PCA e autoencoder.

68. Collega VC-dimension, capacità del modello e rischio di overfitting in una singola spiegazione.

69. Collega ERM, regolarizzazione e generalizzazione in una singola spiegazione.

70. Scegli due algoritmi del PDF e spiegane una differenza profonda, non solo operativa.