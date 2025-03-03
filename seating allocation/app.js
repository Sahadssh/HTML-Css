

let employees = JSON.parse(localStorage.getItem("employees")) || [];
 displayEmployeeList(); 
function storeEmployee (){
    const nameInput = document.getElementById("employeeName");
    let name = nameInput.value.trim();


    if(name !== "" && employees.length < 18){
        employees.push(name);
        localStorage.setItem("employees",JSON.stringify(employees));
        nameInput.value= "";
        
    }
    displayEmployeeList();
}
 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayEmployees() {
    employees = JSON.parse(localStorage.getItem("employees")) || [];

    if (employees.length === 0) {
        alert("No employees stored yet!");
        return;
    }

    let cabin1Input = parseInt(document.getElementById("cabin1Count").value) || 0;
    let cabin2Input = parseInt(document.getElementById("cabin2Count").value) || 0;
    let cabin3Input = parseInt(document.getElementById("cabin3Count").value) || 0;

    let cabin1Count = Math.min(Math.max(cabin1Input, 1), 6);
    let cabin2Count = Math.min(Math.max(cabin2Input, 1), 6);
    let cabin3Count = Math.min(Math.max(cabin3Input, 1), 6);

    shuffleArray(employees); 

    let cabins = [[], [], []];

    if (cabin1Input === 0 && cabin2Input === 0 && cabin3Input === 0) {
       
        employees.forEach((name, index) => {
            let cabinIndex = Math.floor(index / 6);
            cabins[cabinIndex].push({ number: index + 1, name });
        });
    } else {
       
        let employeeIndex = 0;
        for (let i = 0; i < cabin1Count; i++) {
            if (employeeIndex < employees.length) {
                cabins[0].push({ number: i + 1, name: employees[employeeIndex++] });
            }
        }
        for (let i = 0; i < cabin2Count; i++) {
            if (employeeIndex < employees.length) {
                cabins[1].push({ number: i + 1, name: employees[employeeIndex++] });
            }
        }
        for (let i = 0; i < cabin3Count; i++) {
            if (employeeIndex < employees.length) {
                cabins[2].push({ number: i + 1, name: employees[employeeIndex++] });
            }
        }
    }


    document.getElementById("cabinsContainer").style.display = "flex";
    document.getElementById("cabin1").innerHTML = `<h3>Cabin 1</h3>${cabins[0].map(emp => `<p>${emp.number}. ${emp.name}</p>`).join("")}`;
    document.getElementById("cabin2").innerHTML = `<h3>Cabin 2</h3>${cabins[1].map(emp => `<p>${emp.number}. ${emp.name}</p>`).join("")}`;
    document.getElementById("cabin3").innerHTML = `<h3>Cabin 3</h3>${cabins[2].map(emp => `<p>${emp.number}. ${emp.name}</p>`).join("")}`;

   
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


window.onload = displayEmployeeList;
}


