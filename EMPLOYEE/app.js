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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateUniqueSet(previousSets) {
    let remainingEmployees = [...employees];
    let newSet = [[], [], []];

    for (let i = 0; i < 3; i++) {
        let usedNames = new Set();

        
        previousSets.forEach(set => {
            set[i].forEach(name => usedNames.add(name));
        });

        let availableNames = remainingEmployees.filter(name => !usedNames.has(name));

        shuffleArray(availableNames);
        newSet[i] = availableNames.slice(0, 6);

        
        remainingEmployees = remainingEmployees.filter(name => !newSet[i].includes(name));

       
        if (newSet[i].length < 6) {
            let remainingSpots = 6 - newSet[i].length;
            shuffleArray(remainingEmployees);
            newSet[i].push(...remainingEmployees.slice(0, remainingSpots));
            remainingEmployees = remainingEmployees.slice(remainingSpots);
        }
    }

    return newSet;
}


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
       
        sets[0] = sets[1];
        sets[1] = sets[2];
        sets[2] = generateUniqueSet([sets[0], sets[1]]);
    }

    clickCount++;
    updateCabins();
}
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

function displayEmployeeList() {
    const employeeListContainer = document.getElementById("employeeList");
    employeeListContainer.innerHTML = employees.map((name, index) =>
        `<span>${name} <button onclick="deleteEmployee(${index})">\u00d7</button></span>`
    ).join(" ");
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployeeList();
    displayEmployees();
}

window.onload = displayEmployeeList;


function checkbox(){
    
}