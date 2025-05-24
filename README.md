# MLT-Project-Toxicity-Classification

## Entrenamiento

Para realizar el entrenamiento de los modelos y entender el proceso seguido respecto al preprocesamiento, entrenamiento y evaluación, siga los siguientes pasos:

1. Ejecute el notebook `preprocessing_embeddings.ipynb` el cual generará los archivos con los datos e incrustaciones necesarias para entrenar y evaluar los modelos.

2. Ejecute alguno de los siguientes notebooks:
- `dl_cnn.ipynb`: Modelo creado usando una arquitectura convolucional.
- `dl_gru.ipynb`: Modelo usando la arquitectura recurrente GRU.
- `ml_logistic_regression.ipynb`: Modelo de regresión logística.
- `ml_naive_bayes.ipynb`: Modelo de naive bayes.
- `svm_dense.ipynb`: Modelo de SVM y modelo de capas lineales.
- `xgb_bilstm_robertaft.ipynb`: Modelo que usa el clasificador de XGBoost, modelo que usa la arquitectura recurrente bidireccional BI-LSTM y modelo que hace ajuste de los pesos de `cardiffnlp/twitter-roberta-base` junto con una cabeza de clasificación.

## Ejecución de la demostración (Inferencia)