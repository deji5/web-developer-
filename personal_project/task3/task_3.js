// DOM elements
const expenseForm = document.getElementById("expenseForm");
const expenseTableBody = document.getElementById("expenseTableBody");
const totalAmountDisplay = document.getElementById("totalAmount");
const filterCategory = document.getElementById("filterCategory");
const budgetInput = document.getElementById("budget");
const setBudgetBtn = document.getElementById("setBudgetBtn");
const budgetMessage = document.getElementById("budgetMessage");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let budget = JSON.parse(localStorage.getItem("budget")) || 0;

// Format currency (₦)
function formatCurrency(amount) {
  return `₦${amount.toLocaleString("en-NG", { minimumFractionDigits: 2})}`;
}

// Save to localStorage
function saveData() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  localStorage.setItem("budget", JSON.stringify(budget));
}

// Calculate total spending
function calculateTotal(filteredList = expenses) {
  return filteredList.reduce((sum, item) => sum + item.amount, 0);
}

// Render expenses to table
function renderExpenses(list = expenses) {
  expenseTableBody.innerHTML = "";
  list.forEach((expense, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${expense.name}</td>
      <td>${formatCurrency(expense.amount)}</td>
      <td class="category-${expense.category}">${expense.category}</td>
      <td>${expense.date}</td>
      <td><button class="delete-btn" data-index="${index}">Delete</button></td>
    `;
    expenseTableBody.appendChild(row);
  });
  updateTotal(list);
}

// Update total and budget alert
function updateTotal(list = expenses) {
  const total = calculateTotal(list);
  totalAmountDisplay.textContent = formatCurrency(total);

  if (budget > 0) {
    const percent = (total / budget) * 100;
    if (percent > 80) {
      budgetMessage.textContent = `⚠️ Warning: You've spent ${percent.toFixed(1)}% of your budget!`;
      budgetMessage.style.color = "red";
    } else {
      budgetMessage.textContent = `✅ Spending within budget. (${percent.toFixed(1)}%)`;
      budgetMessage.style.color = "green";
    }
  }
}

// Add expense
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("expenseName").value.trim();
  const amount = parseFloat(document.getElementById("expenseAmount").value);
  const category = document.getElementById("expenseCategory").value;
  const date = document.getElementById("expenseDate").value;

  if (!name || !amount || !category || !date) return alert("Please fill all fields!");

  expenses.push({ name, amount, category, date });
  saveData();
  renderExpenses();
  expenseForm.reset();
});

// Delete expense
expenseTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;
    expenses.splice(index, 1);
    saveData();
    renderExpenses();
  }
});

// Filter by category
filterCategory.addEventListener("change", () => {
  const selected = filterCategory.value;
  const filtered = selected === "All" ? expenses : expenses.filter(e => e.category === selected);
  renderExpenses(filtered);
});

// Set budget
setBudgetBtn.addEventListener("click", () => {
  budget = parseFloat(budgetInput.value);
  if (budget <= 0 || isNaN(budget)) {
    alert("Please enter a valid budget!");
    return;
  }
  saveData();
  updateTotal();
  budgetMessage.textContent = `✅ Budget set at ${formatCurrency(budget)}`;
});

// Initialize app
renderExpenses();
updateTotal();





