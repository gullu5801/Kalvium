// ================= PROJECT OVERVIEW =================
// This project demonstrates:
// ES6 features (let, const, arrow functions)
// OOP & Prototype Inheritance
// Recursion (recursiveSum)
// Pure Function (calculateTotal)
// Higher-Order & First-Class Functions
// Array methods (map, filter, reduce)
// DOM manipulation

// ================= OOP =================

// Utility class
class Utility {
    constructor(id, name, amount, category) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.category = category;
        this.date = new Date().toLocaleDateString();
    }
}

// Inheritance
class PremiumUtility extends Utility {
    constructor(id, name, amount, category, priority) {
        super(id, name, amount, category);
        this.priority = priority;
    }
}

// ================= DATA =================
let utilities = [];
let idCounter = 1; // unique ID for each utility

// ================= PURE FUNCTION =================
const calculateTotal = arr => arr.reduce((sum, item) => sum + item.amount, 0);

// ================= HIGHER-ORDER FUNCTION =================
const processUtilities = callback => callback(utilities);

// ================= RECURSION =================
function recursiveSum(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index].amount + recursiveSum(arr, index + 1);
}

// ================= RENDER =================
const renderUtilities = (data = utilities) => {
    const list = document.getElementById("utilityList");

    if (data.length === 0) {
        list.innerHTML = "<p>No utilities added</p>";
        return;
    }

    list.innerHTML = data.map((item) => {

        // ✅ DESTRUCTURING USED
        const { id, name, amount, category, date } = item;

        return `
            <li>
                ${name} | ${category} | ₹${amount} | ${date}
                <button onclick="deleteUtility(${id})">Delete</button>
            </li>
        `;
    }).join('');
};

// ================= ADD =================
document.getElementById("addBtn").addEventListener("click", () => {
    const name = document.getElementById("utilityName").value;
    const amount = Number(document.getElementById("utilityAmount").value);
    const category = document.getElementById("utilityCategory").value;

    if (!name || !amount) {
        alert("Enter valid data");
        return;
    }

    const newUtility = new PremiumUtility(
        idCounter++, // unique ID
        name,
        amount,
        category,
        "High"
    );

    // ✅ Spread operator used
    utilities = [...utilities, newUtility];

    renderUtilities();

    document.getElementById("utilityName").value = "";
    document.getElementById("utilityAmount").value = "";
});

// ================= DELETE (FIXED) =================
function deleteUtility(id) {
    utilities = utilities.filter(item => item.id !== id);
    renderUtilities();
}

// ================= TOTAL =================
document.getElementById("totalBtn").addEventListener("click", () => {

    // ✅ Recursion
    const totalRecursive = recursiveSum(utilities);

    // ✅ Pure function (reduce)
    const totalReduce = calculateTotal(utilities);
    console.log("Reduce Total:", totalReduce);

    document.getElementById("total").textContent = totalRecursive;

    // ✅ First-class function usage
    processUtilities(data => console.log("Processed Data:", data));
});

// ================= FILTER =================
document.getElementById("filterBtn").addEventListener("click", () => {
    const filtered = utilities.filter(item => item.amount > 500);
    renderUtilities(filtered);
});

// ================= RESET =================
document.getElementById("resetBtn").addEventListener("click", () => {
    utilities = [];
    renderUtilities();
    document.getElementById("total").textContent = 0;

    document.getElementById("utilityName").value = "";
    document.getElementById("utilityAmount").value = "";
});

// ================= IIFE =================
(function () {
    console.log("Smart Utility Manager Initialized");
})();