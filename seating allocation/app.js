let employees = JSON.parse(localStorage.getItem("employees")) || [];

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

function displayEmployees() {
    employees = JSON.parse(localStorage.getItem("employees")) || [];

    if (employees.length === 0) {
        alert("No employees stored yet!");
        return;
    }

    shuffleArray(employees); 
    localStorage.setItem("employees", JSON.stringify(employees));

    document.getElementById("cabinsContainer").style.display = "flex";

    const cabins = [[], [], []];
    employees.forEach((name, index) => {
        cabins[Math.floor(index / 6)].push({ number: index + 1, name }); 
    });

    document.getElementById("cabin1").innerHTML = `<h3>Cabin 1</h3>${cabins[0].map(emp => `<p>${emp.number}. ${emp.name}</p>`).join("")}`;
    document.getElementById("cabin2").innerHTML = `<h3>Cabin 2</h3>${cabins[1].map(emp => `<p>${emp.number}. ${emp.name}</p>`).join("")}`;
    document.getElementById("cabin3").innerHTML = `<h3>Cabin 3</h3>${cabins[2].map(emp => `<p>${emp.number}. ${emp.name}</p>`).join("")}`;
}
