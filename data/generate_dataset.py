import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
from xgboost import XGBClassifier
import joblib

print("Loading dataset...")

# Load dataset
df = pd.read_csv("data/raw/supply_chain.csv")

# Encode categorical columns
supplier_encoder = LabelEncoder()
weather_encoder = LabelEncoder()

df["Supplier"] = supplier_encoder.fit_transform(df["Supplier"])
df["Weather"] = weather_encoder.fit_transform(df["Weather"])

# Features and target
X = df.drop("Delayed", axis=1)
y = df["Delayed"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = XGBClassifier(
    n_estimators=100,
    max_depth=4,
    learning_rate=0.1,
    random_state=42
)

model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, predictions)

print("Accuracy:", accuracy)
print(classification_report(y_test, predictions))

# Save model
joblib.dump(model, "model/model.pkl")

print("Model saved successfully!")