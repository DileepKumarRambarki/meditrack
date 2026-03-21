from fastapi import FastAPI
import joblib
import pandas as pd
import numpy as np
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

# =========================
# Load Disease Model
# =========================
disease_model = joblib.load("disease_model.pkl")
disease_encoder = joblib.load("disease_label_encoder.pkl")
disease_features = joblib.load("disease_features.pkl")

# =========================
# Load Specialist Model
# =========================
specialist_model = joblib.load("specialist_model.pkl")
specialist_encoder = joblib.load("specialist_label_encoder.pkl")
specialist_features = joblib.load("specialist_features.pkl")

# =========================
# NLP Preparation (use one common vocabulary)
# =========================
clean_symptoms = [s.replace('_', ' ') for s in disease_features]

vectorizer = TfidfVectorizer(analyzer='char', ngram_range=(2, 4)).fit(clean_symptoms)
symptom_vectors = vectorizer.transform(clean_symptoms)


def nlp_to_dataset_symptoms(user_input, threshold=0.3):
    user_input = user_input.lower()

    segments = re.split(r'[,.!?]| and | with | having | including | plus ', user_input)
    segments = [s.strip() for s in segments if len(s.strip()) > 2]

    detected = []

    for seg in segments:
        seg_vec = vectorizer.transform([seg])
        scores = cosine_similarity(seg_vec, symptom_vectors).flatten()

        if np.max(scores) > threshold:
            best_idx = np.argmax(scores)
            detected.append(disease_features[best_idx])

    return list(set(detected))


@app.post("/predict")
def predict(data: dict):
    user_sentence = data["sentence"]

    # Step 1: Extract symptoms
    extracted_symptoms = nlp_to_dataset_symptoms(user_sentence)

    # =========================
    # Step 2: Disease Prediction
    # =========================
    disease_input = pd.DataFrame(0, index=[0], columns=disease_features)

    for s in extracted_symptoms:
        if s in disease_input.columns:
            disease_input[s] = 1

    disease_idx = disease_model.predict(disease_input)[0]
    predicted_disease = disease_encoder.inverse_transform([disease_idx])[0]

    # =========================
    # Step 3: Specialist Prediction
    # =========================
    specialist_input = pd.DataFrame(0, index=[0], columns=specialist_features)

    for s in extracted_symptoms:
        if s in specialist_input.columns:
            specialist_input[s] = 1

    specialist_idx = specialist_model.predict(specialist_input)[0]
    predicted_specialist = specialist_encoder.inverse_transform([specialist_idx])[0]

    # Logs (optional)
    print("Prompt:", user_sentence)
    print("Detected Symptoms:", extracted_symptoms)
    print("Disease:", predicted_disease)
    print("Specialist:", predicted_specialist)
    print("--------------------------------------------------")

    return {
        "detected_symptoms": extracted_symptoms,
        "predicted_disease": predicted_disease,
        "recommended_specialist": predicted_specialist
    }

#uvicorn app:app --reload. modify this app.py