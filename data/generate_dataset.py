import pandas as pd
import numpy as np

# Set seed for reproducibility
np.random.seed(42)

n = 1000

suppliers = ["SupplierA", "SupplierB", "SupplierC", "SupplierD", "SupplierE"]
weather = ["Clear", "Cloudy", "Rain", "Storm"]

data = {
    "Shipment_ID": range(1, n + 1),
    "Supplier": np.random.choice(suppliers, n),
    "Distance": np.random.randint(50, 1000, n),
    "Lead_Time": np.random.randint(1, 15, n),
    "Weather": np.random.choice(weather, n),
    "Inventory": np.random.randint(50, 500, n),
    "Transport_Cost": np.random.randint(3000, 25000, n),
}

df = pd.DataFrame(data)

# Create delay condition
df["Delayed"] = (
    (df["Distance"] > 600) |
    (df["Lead_Time"] > 8) |
    (df["Weather"].isin(["Rain", "Storm"]))
).astype(int)

# Save dataset
df.to_csv("data/raw/supply_chain.csv", index=False)

print("Dataset created successfully!")
print(df.head())