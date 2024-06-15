# Harnessing Machine Learning for Early Parkinson's Disease Detection
Parkinson's Disease (PD) is a prevalent age-related neurological disorder characterized by a range of motor and cognitive symptoms. Despite its prevalence, PD diagnosis poses a significant challenge due to symptom overlap with other conditions such as normal aging and essential tremor. By the time visible symptoms such as gait and communication difficulties manifest, the disease has often progressed significantly. While there is currently no cure for PD, early detection and intervention can greatly improve patient outcomes by enabling timely management of symptoms and complications.

In this project, we focus on leveraging machine learning (ML) and deep learning (DL) techniques to detect PD using voice signal features. Additionally, we have developed a deep learning model for Parkinson's detection using Voice Recognition and handwriting sample analysis. The rationale behind using voice signals and handwriting samples lies in the fact that PD affects speech patterns and fine motor skills, leading to characteristic changes in vocal parameters and handwriting patterns. By analyzing these features, we aim to develop a robust predictive model capable of differentiating between healthy individuals and those with PD.

# Dataset
Our dataset was sourced from the University of California at Irvine (UCI) machine learning repository, consisting of 195 voice recordings collected during examinations conducted on 31 patients. Each recording contains a variety of vocal features extracted from speech samples obtained from both healthy individuals and PD patients.

Dataset Used : Parkinsons Disease Dataset

Dataset Source : UCI Machine Learning Repository

Dataset Hosting URL : https://archive.ics.uci.edu/ml/machine-learning-databases/parkinsons/parkinsons.data

# Models and Techniques
We explored a range of ML and DL models, including Support Vector Machine (SVM), Random Forest (RF), Decision Tree (DT), K-Nearest Neighbor (KNN), and Multi-Layer Perceptron (MLP). To enhance the performance of our models, we employed various techniques such as Synthetic Minority Over-sampling Technique (SMOTE) to address class imbalance, feature selection to identify the most relevant predictors, and hyperparameter tuning using GridSearchCV to optimize model parameters.

# Results

# Conclusion
Our project underscores the potential of machine learning techniques in improving the early detection and management of Parkinson's Disease. By leveraging voice signal features, handwriting samples, and advanced modeling approaches, we have developed a framework capable of accurately identifying individuals at risk of PD. Additionally, we are committed to raising awareness about mental health disorders by developing innovative testing alternatives to costly medical procedures like DATscan, for early detection and intervention.

Moving forward, we envision further refinement and validation of our models, as well as exploration of additional data sources and features to enhance predictive performance.
