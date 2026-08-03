function predictDelay() {

    let distance = parseInt(document.getElementById("distance").value);
    let lead = parseInt(document.getElementById("lead").value);
    let weather = document.getElementById("weather").value;
    let inventory = parseInt(document.getElementById("inventory").value);
    let cost = parseInt(document.getElementById("cost").value);

    // Validate inputs
    if (
        isNaN(distance) ||
        isNaN(lead) ||
        isNaN(inventory) ||
        isNaN(cost)
    ) {
        alert("Please fill all fields.");
        return;
    }

    let prediction = "";
    let risk = "";
    let supplier = "";
    let route = "";
    let saving = "";
    let inventoryAction = "";

    // Simple prediction logic
    if (distance > 600 || lead > 8 || weather == "Storm") {

        prediction = "Delay Expected";
        risk = "🔴 High Risk";

        supplier = "Supplier B";
        route = "Air Freight";
        saving = "₹12,000";
        inventoryAction = "Increase Safety Stock";

    }
    else if (distance > 350 || weather == "Rain") {

        prediction = "Possible Delay";
        risk = "🟡 Medium Risk";

        supplier = "Supplier C";
        route = "Alternative Route";
        saving = "₹6,500";
        inventoryAction = "Monitor Inventory";

    }
    else {

        prediction = "On Time";
        risk = "🟢 Low Risk";

        supplier = "Current Supplier";
        route = "Standard Route";
        saving = "₹0";
        inventoryAction = "No Action Required";

    }

    // Update dashboard
    document.getElementById("prediction").innerHTML = prediction;
    document.getElementById("risk").innerHTML = risk;

    document.getElementById("supplierRec").innerHTML =
        "✅ Best Supplier : " + supplier;

    document.getElementById("routeRec").innerHTML =
        "🚚 Recommended Route : " + route;

    document.getElementById("savingRec").innerHTML =
        "💰 Estimated Savings : " + saving;

    document.getElementById("inventoryRec").innerHTML =
        "📦 Inventory Action : " + inventoryAction;
}