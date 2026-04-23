let utilities = [];

const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const totalDisplay = document.getElementById("total");

addBtn.addEventListener("click", addUtility);

function addUtility() {
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter valid details");
    return;
  }

  const utility = { name, amount };
  utilities.push(utility);

  nameInput.value = "";
  amountInput.value = "";

  renderUtilities();
}

function renderUtilities() {
  list.innerHTML = "";
  let total = 0;

  utilities.forEach((item, index) => {
    total += item.amount;

    
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${item.name} - ₹${item.amount}</span>
      <button class="delete-btn" onclick="deleteUtility(${index})">Delete</button>
    `;

    list.appendChild(li);
  });

  totalDisplay.textContent = total;
}

function deleteUtility(index) {
  utilities.splice(index, 1);
  renderUtilities();
}