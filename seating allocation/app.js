document.addEventListener("DOMContentLoaded", function () {
    const employeeInput = document.getElementById("employeeName");
    const addButton = document.createElement("button");
    addButton.textContent = "Add Employee";
    addButton.id = "addEmployee";
    document.body.appendChild(addButton);
    
    const displayButton = document.createElement("button");
    displayButton.textContent = "Display Employees";
    displayButton.id = "displayEmployees";
    document.body.appendChild(displayButton);
    
    const employeeContainer = document.createElement("div");
    employeeContainer.classList.add("employee-container");
    document.body.appendChild(employeeContainer);

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    addButton.addEventListener("click", function () {
        const name = employeeInput.value.trim();
        if (name && employees.length < 18) {
            if (!employees.includes(name)) {
                employees.push(name);
                localStorage.setItem("employees", JSON.stringify(employees));
                employeeInput.value = "";
            } else {
                alert("This name is already added. Please enter a different name.");
            }
        }
        if (employees.length >= 18) {
            employeeInput.disabled = true;
            alert("Maximum 18 employees added!");
        }
    });

    displayButton.addEventListener("click", function () {
        if (employees.length === 0) {
            alert("No employees added yet!");
            return;
        }
        shuffleArray(employees);
        displayEmployees();
    });

    function displayEmployees() {
        employeeContainer.innerHTML = "";
        const officeBoxes = [document.createElement("div"), document.createElement("div"), document.createElement("div")];
        officeBoxes.forEach((box, index) => {
            box.classList.add("office-box");
            box.setAttribute("id", `office-${index + 1}`);
        });

        employees.forEach((employee, index) => {
            const div = document.createElement("div");
            div.textContent = employee;
            div.classList.add("employee-name");
            officeBoxes[Math.floor(index / 6)].appendChild(div);
        });

        employeeContainer.innerHTML = "";
        officeBoxes.forEach(box => employeeContainer.appendChild(box));
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});
