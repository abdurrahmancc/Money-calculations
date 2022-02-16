const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothes");
document.getElementById("btn-Calculate").addEventListener("click", function () {
  const totalExpenses = document.getElementById("totalExpenses");
  const balance = document.getElementById("balance");

  // total cost
  const totalCost = totalExpensesCost();
  console.log(totalCost);
  totalExpenses.innerText = totalCost;
  balance.innerText = parseInt(income.value) - totalCost;
});

// save section

document.getElementById("btn-save").addEventListener("click", function () {
  const savingAmount = document.getElementById("saving-Amount");
  const saveInput = document.getElementById("save-Input");
  const remainingBalance = document.getElementById("remaining-Balance");
  const save = (parseInt(income.value) * parseInt(saveInput.value)) / 100;
  console.log(save);
  savingAmount.innerText = save;
  const totalCost = totalExpensesCost();
  remainingBalance.innerText = parseInt(income.value) - (totalCost + save);
});

function totalExpensesCost() {
  const cost = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
  return cost;
}
