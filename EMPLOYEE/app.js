let employees = JSON.parse(localStorage.getItem("employees")) || [];
let clickCount = 0;
const sets = [[], [], []];
let uniqueCabinEnabled = false;

// Store a new employee in localStorage
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

// Display the list of stored employees
function displayEmployeeList() {
    const employeeListContainer = document.getElementById("employeeList");
    employeeListContainer.innerHTML = employees.map((name, index) =>
        `<span>${name} <button onclick="deleteEmployee(${index})">×</button></span>`
    ).join(" ");
}

// Delete an employee from localStorage
function deleteEmployee(index) {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployeeList();
}

// Toggle unique cabin restriction based on checkbox
function toggleUniqueCabin() {
    uniqueCabinEnabled = document.getElementById("uniqueCabinRestriction").checked;
}

// Shuffle an array (randomize elements)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Generate a unique set of cabins while avoiding previous sets if restriction is enabled
function generateUniqueSet(previousSets) {
    let remainingEmployees = [...employees];
    let newSet = [[], [], []];

    for (let i = 0; i < 3; i++) {
        let usedNames = new Set();

        if (uniqueCabinEnabled) {
            previousSets.forEach(set => {
                set[i].forEach(name => usedNames.add(name));
            });
        }

        let availableNames = remainingEmployees.filter(name => !usedNames.has(name));
        shuffleArray(availableNames);
        newSet[i] = availableNames.slice(0, 6);
    }

    return newSet;
}

// Handle cabin assignment logic based on clicks
function displayEmployees() {
    employees = JSON.parse(localStorage.getItem("employees")) || [];
    if (employees.length < 18) {
        alert("Please add at least 18 employees.");
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

// Update the cabin display based on sets
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

// Initialize employee list on page load
window.onload = displayEmployeeList;
