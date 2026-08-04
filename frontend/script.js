// Update Date & Time
function updateDateTime() {
    const now = new Date();
    document.getElementById("datetime").innerHTML =
        "📅 " + now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);


// Prediction Function
function predictDelay() {

    // Show loading
    document.getElementById("prediction").innerHTML = "⏳ Predicting...";
    document.getElementById("risk").innerHTML = "--";

    setTimeout(() => {

        let shipment = document.getElementById("shipment").value;
        let distance = parseInt(document.getElementById("distance").value);
        let lead = parseInt(document.getElementById("lead").value);
        let weather = document.getElementById("weather").value;
        let inventory = parseInt(document.getElementById("inventory").value);
        let cost = parseInt(document.getElementById("cost").value);

        // Validation
        if (
            shipment.trim() === "" ||
            isNaN(distance) ||
            isNaN(lead) ||
            isNaN(inventory) ||
            isNaN(cost)
        ) {
            alert("Please fill all fields before prediction.");

            document.getElementById("prediction").innerHTML = "No Prediction";
            document.getElementById("risk").innerHTML = "--";

            return;
        }

        let prediction = "";
        let risk = "";
        let supplier = "";
        let route = "";
        let saving = "";
        let inventoryAction = "";

        // Prediction Logic
        if (distance > 600 || lead > 8 || weather === "Storm") {

            prediction = "Delay Expected";
            risk = "🔴 High Risk";

            supplier = "Supplier B";
            route = "Air Freight";
            saving = "₹12,000";
            inventoryAction = "Increase Safety Stock";

        }

        else if (distance > 350 || weather === "Rain") {

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

        // Display Results
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

    }, 1000);

}


// Reset Function
function resetForm() {

    document.getElementById("shipment").value = "";
    document.getElementById("distance").value = "";
    document.getElementById("lead").value = "";
    document.getElementById("weather").selectedIndex = 0;
    document.getElementById("inventory").value = "";
    document.getElementById("cost").value = "";

    document.getElementById("prediction").innerHTML = "No Prediction";
    document.getElementById("risk").innerHTML = "--";

    document.getElementById("supplierRec").innerHTML =
        "✅ Best Supplier : --";

    document.getElementById("routeRec").innerHTML =
        "🚚 Recommended Route : --";

    document.getElementById("savingRec").innerHTML =
        "💰 Estimated Savings : --";

    document.getElementById("inventoryRec").innerHTML =
        "📦 Inventory Action : --";

}