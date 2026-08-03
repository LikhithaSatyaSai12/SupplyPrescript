from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib

app = FastAPI(title="SupplyPrescript Backend")

# Load trained model
model = joblib.load("model/model.pkl")

class Shipment(BaseModel):
    Shipment_ID: int
    Supplier: int
    Distance: int
    Lead_Time: int
    Weather: int
    Inventory: int
    Transport_Cost: int

@app.get("/")
def home():
    return {
        "message": "SupplyPrescript API Running"
    }

@app.post("/predict")
def predict(data: Shipment):

    df = pd.DataFrame([data.model_dump()])

    prediction = model.predict(df)

    return {
        "Predicted Delay": int(prediction[0])
    }