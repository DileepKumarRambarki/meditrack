from fastapi import FastAPI
import joblib
import pandas as pd
import numpy as np
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import requests

app = FastAPI()

# Load saved files
model = joblib.load("model.pkl")
le = joblib.load("label_encoder.pkl")
feature_columns = joblib.load("feature_columns.pkl")

# Prepare NLP vocabulary
clean_symptoms = [s.replace('_', ' ') for s in feature_columns]
vectorizer = TfidfVectorizer(analyzer='char', ngram_range=(2, 4)).fit(clean_symptoms)
symptom_vectors = vectorizer.transform(clean_symptoms)


def nlp_to_dataset_symptoms(user_input, threshold=0.3):
    user_input = user_input.lower()
    segments = re.split(r'[,.!?]| and | with | having | including | plus ', user_input)
    segments = [s.strip() for s in segments if len(s.strip()) > 2]

    found_symptoms = []

    for seg in segments:
        seg_vec = vectorizer.transform([seg])
        scores = cosine_similarity(seg_vec, symptom_vectors).flatten()

        if np.max(scores) > threshold:
            best_match_idx = np.argmax(scores)
            found_symptoms.append(feature_columns[best_match_idx])

    return list(set(found_symptoms))


@app.post("/predict")
def predict(data: dict):
    user_sentence = data["sentence"]

    extracted = nlp_to_dataset_symptoms(user_sentence)

    input_data = pd.DataFrame(0, index=[0], columns=feature_columns)
    for s in extracted:
        input_data[s] = 1

    pred_idx = model.predict(input_data)[0]
    specialist = le.inverse_transform([pred_idx])[0]
    print('Prompt: ', user_sentence)
    print('Detected Symptoms: ',extracted)
    print('Recommended Specialist: ',specialist)
    print('--------------------------------------------------')
    
    return {
        "detected_symptoms": extracted,
        "recommended_specialist": specialist
    }
#uvicorn app:app --reload
