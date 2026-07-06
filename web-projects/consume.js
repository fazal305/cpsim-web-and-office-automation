const lowRate = 10;
const mediumRate = 20;
const highRate = 30;

let consumedUnits = Number(prompt("How many electricity units did you consume in kWh?"));

if (Number.isNaN(consumedUnits) || consumedUnits <= 0) {
    document.writeln("Please enter a valid number of units.");
} else {
    let costPerUnit;

    if (consumedUnits <= 80) {
        costPerUnit = lowRate;
    } else if (consumedUnits <= 150) {
        costPerUnit = mediumRate;
    } else {
        costPerUnit = highRate;
    }

    const totalCost = consumedUnits * costPerUnit;

    document.writeln("Consumed units: " + consumedUnits + "<br>");
    document.writeln("Cost per unit: " + costPerUnit + "<br>");
    document.writeln("Total cost: " + totalCost.toFixed(2) + "<br>");
    document.writeln("Thank you for using our electricity bill calculator!");

    alert("Your total electricity bill is: " + totalCost.toFixed(2) + " currency units.");
}
