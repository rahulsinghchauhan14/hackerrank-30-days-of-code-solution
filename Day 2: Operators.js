// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    var tp = meal_cost*(tip_percent/100);
    var taxP = meal_cost*tax_percent/100;
    var totalCost = meal_cost+tp+taxP;
    console.log(Math.round(totalCost));

}
