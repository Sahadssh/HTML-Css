let employees = JSON.parse(localStorage.getItem("employees")) || [];
let clickCount = 0;
const sets = [[], [], []];
let cabinSizes = [6, 6, 6]; // Default cabin sizes


function storeEmployee() {
    const nameInput = document.getElementById("employeeName");
    let name = nameInput.value.trim();

    if (name !== "" && employees.length < 18) {
        employees.push(name);
        localStorage.setItem("employees", JSON.stringify(employees));
        nameInput.value = "";
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setCabins() {
    let input1 = parseInt(document.getElementById("cabin1Count").value) || 6;
    let input2 = parseInt(document.getElementById("cabin2Count").value) || 6;
    let input3 = parseInt(document.getElementById("cabin3Count").value) || 6;

    cabinSizes = [input1, input2, input3];
}


function displayEmployees() {
    employees = JSON.parse(localStorage.getItem("employees")) || [];
    
    if (employees.length < 18) {
        alert("You need at least 18 employees.");
        return;
    }

    shuffleArray(employees);
    let totalCabinSize = cabinSizes.reduce((sum, size) => sum + size, 0);

    if (clickCount < 3) {
        sets[clickCount] = employees.slice(0, totalCabinSize);
    } else {
     
        sets[0] = [...sets[1]];
        sets[1] = [...sets[2]];
        sets[2] = employees.slice(0, totalCabinSize);
    }

    clickCount++;

    document.getElementById("setsContainer").style.display = "block";

    updateCabins();
}

function updateCabins() {
    for (let setIndex = 0; setIndex < 3; setIndex++) {
        let employeeIndex = 0;
        for (let cabinIndex = 0; cabinIndex < 3; cabinIndex++) {
            let cabinElement = document.getElementById(`set${setIndex + 1}-cabin${cabinIndex + 1}`);
            let employeesForCabin = sets[setIndex].slice(employeeIndex, employeeIndex + cabinSizes[cabinIndex]);

        
            cabinElement.innerHTML = `<h3>Cabin ${cabinIndex + 1}</h3>`;
            employeesForCabin.forEach((name, index) => {
                cabinElement.innerHTML += `<p>${index + 1}. ${name}</p>`;
            });

            employeeIndex += cabinSizes[cabinIndex];
        }
    }
}


document.getElementById("setsContainer").style.display = "none";


