// Load employees from localStorage or initialize an empty array
let employees = JSON.parse(localStorage.getItem("employees")) || [];
let clickCount = 0;
const sets = [[], [], []];

displayEmployeeList();

function storeEmployee() {
    const nameInput = document.getElementById("employeeName");
    let name = nameInput.value.trim();

    if (name !== "" && employees.length < 18) {
        employees.push(name);
        localStorage.setItem("employees", JSON.stringify(employees));
        nameInput.value = "";
    }

    displayEmployeeList();
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Generate a unique set of employees avoiding previous selections
function generateUniqueSet(previousSets) {
    let remainingEmployees = [...employees];
    let newSet = [[], [], []];

    for (let i = 0; i < 3; i++) {
        let usedNames = new Set(previousSets.map(set => set[i]).flat());
        let availableNames = remainingEmployees.filter(name => !usedNames.has(name));

        shuffleArray(availableNames);
        newSet[i] = availableNames.slice(0, 6);
    }

    return newSet;
}

// Display Employees and Assign them to Cabins
function displayEmployees() {
    employees = JSON.parse(localStorage.getItem("employees")) || [];
    if (employees.length < 18) {
        return;
    }

    document.querySelectorAll(".set").forEach(set => set.style.display = "block");

    if (clickCount === 0) {
        shuffleArray(employees);
        sets[0] = [
            employees.slice(0, 6),
            employees.slice(6, 12),
            employees.slice(12, 18)
        ];
        sets[1] = [[], [], []];
        sets[2] = [[], [], []];
    } else if (clickCount === 1) {
        sets[1] = generateUniqueSet([sets[0]]);
        sets[2] = [[], [], []];
    } else if (clickCount === 2) {
        sets[2] = generateUniqueSet([sets[0], sets[1]]);
    } else {
        let tempSet3 = sets[2];
        sets[0] = sets[1];
        sets[1] = tempSet3;
        sets[2] = generateUniqueSet([sets[1], sets[0]]);
    }

    clickCount++;
    updateCabins();
}

// Function to update cabin assignments in UI
function updateCabins() {
    for (let setIndex = 0; setIndex < 3; setIndex++) {
        for (let cabinIndex = 0; cabinIndex < 3; cabinIndex++) {
            let cabinId = `set${setIndex + 1}-cabin${cabinIndex + 1}`;
            let cabinElement = document.getElementById(cabinId);

            if (!cabinElement) {
                console.error(`Cabin with ID ${cabinId} not found!`);
                continue;
            }

            cabinElement.innerHTML = `<h3>Cabin ${cabinIndex + 1}</h3>`;

            if (sets[setIndex][cabinIndex].length === 0) {
                for (let i = 1; i <= 6; i++) {
                    cabinElement.innerHTML += `<p>${i}. </p>`;
                }
            } else {
                sets[setIndex][cabinIndex].forEach((name, index) => {
                    cabinElement.innerHTML += `<p>${index + 1}. ${name}</p>`;
                });
            }
        }
    }
}

// Function to Display Employee List with Delete Button
function displayEmployeeList() {
    const employeeListContainer = document.getElementById("employeeList");
    employeeListContainer.innerHTML = employees.map((name, index) =>
        `<span>${name} <button onclick="deleteEmployee(${index})">\u00d7</button></span>`
    ).join(" ");
}

// Function to Delete an Employee
function deleteEmployee(index) {
    employees.splice(index, 1); 
    localStorage.setItem("employees", JSON.stringify(employees)); 
    displayEmployeeList(); 
    displayEmployees();
}

// Ensure the employee list loads when the page opens
window.onload = displayEmployeeList;

// Function to Manually Assign Employees to Cabins
function setCabins() {
    let cabin1Count = Math.max(1, Math.min(6, parseInt(document.getElementById("cabin1Count").value) || 1));
    let cabin2Count = Math.max(1, Math.min(6, parseInt(document.getElementById("cabin2Count").value) || 1));
    let cabin3Count = Math.max(1, Math.min(6, parseInt(document.getElementById("cabin3Count").value) || 1));
    let totalNeeded = cabin1Count + cabin2Count + cabin3Count;

    if (totalNeeded > employees.length) {
        alert("Not enough employees to assign. Please add more employees.");
        return;
    }

    shuffleArray(employees);

    // Assign employees to all 3 sets at once
    sets[0] = [
        employees.slice(0, cabin1Count),
        employees.slice(cabin1Count, cabin1Count + cabin2Count),
        employees.slice(cabin1Count + cabin2Count, totalNeeded),
    ];

    // Reset other sets
    sets[1] = [[], [], []];
    sets[2] = [[], [], []];

    alert("Cabin spots set! Now click 'Display Employees' to see the assignments.");
    updateCabins(); // Ensure UI updates immediately
}
