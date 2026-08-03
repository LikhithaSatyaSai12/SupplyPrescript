from scipy.optimize import linprog

# Cost of each business action
# 1. Air Freight
# 2. Secondary Supplier
# 3. Delay Shipment

cost = [15000, 10000, 0]

# Constraint:
# Delay days for each action
A = [[2, 5, 14]]

# Maximum acceptable delay = 5 days
b = [5]

# Each decision variable must be between 0 and 1
bounds = [(0, 1), (0, 1), (0, 1)]

result = linprog(
    c=cost,
    A_ub=A,
    b_ub=b,
    bounds=bounds,
    method="highs"
)

print("\nOptimization Status:", result.message)

actions = [
    "Air Freight",
    "Secondary Supplier",
    "Delay Shipment"
]

print("\nRecommended Actions:")

for action, value in zip(actions, result.x):
    print(f"{action}: {value:.2f}")