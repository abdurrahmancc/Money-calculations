const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothes");

// button calculate addEventListener
document.getElementById("btn-Calculate").addEventListener("click", function () {
  const totalExpenses = document.getElementById("totalExpenses");
  const balance = document.getElementById("balance");
  const totalCost = expensesTotal();

  // total cost
  if (
    parseFloat(income.value) > totalCost &&
    parseFloat(income.value) > 0 &&
    parseFloat(food.value) > 0 &&
    parseFloat(rent.value) > 0 &&
    parseFloat(clothes.value) > 0
  ) {
    document.getElementById("errorMessage").innerText = "";
    totalExpenses.innerText = totalCost;
    balance.innerText = updateBalance();
  } else {
    document.getElementById("errorMessage").innerText = "Please Enter your correct Amount";
    return;
  }
});

// Expenses Total calculation
function expensesTotal() {
  const cost = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
  return cost;
}

// Update Balance
function updateBalance() {
  const excludingCosts = parseInt(income.value) - expensesTotal();
  return excludingCosts;
}

// save section
document.getElementById("btn-save").addEventListener("click", function () {
  const savingAmount = document.getElementById("saving-Amount");
  const saveInput = document.getElementById("save-Input");
  const remainingBalance = document.getElementById("remaining-Balance");
  const save = (parseInt(income.value) * parseInt(saveInput.value)) / 100;
  const totalCost = updateBalance();
  if (save > totalCost || saveInput.value < 0) {
    saveInput.style.borderColor = "red";
    return alert("Valid Saving Amount");
  }
  if (parseFloat(save) > 0) {
    savingAmount.innerText = parseInt(save);
    remainingBalance.innerText = totalCost - parseInt(save);
    saveInput.style.borderColor = "black";
  } else {
    saveInput.style.borderColor = "red";
    return alert("Valid Saving Amount");
  }
});
