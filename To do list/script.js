
document.addEventListener("DOMContentLoaded", function () {
 
    const todoInput = document.getElementById("todotext");
    const addUpdateButton = document.getElementById("AddUpdateClick");
    const todoList = document.getElementById("list-items");

    let editMode = false; 
    let editTaskElement = null; 

    addUpdateButton.addEventListener("click", function () {
        let taskText = todoInput.value.trim(); 
        if (taskText === "") return;

        if (!editMode) {

            let listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <i class="fa-solid fa-pen edit-btn"></i>
                    <i class="fa-solid fa-trash delete-btn"></i>
                </div>
            `;
            todoList.appendChild(listItem); 
        } else {
           
            editTaskElement.querySelector("span").textContent = taskText;
            editMode = false;
            editTaskElement = null;
            addUpdateButton.classList.remove("fa-check");
            addUpdateButton.classList.add("fa-plus");
        }

        todoInput.value = ""; 
    });

    todoList.addEventListener("click", function (event) {
        if (event.target.classList.contains("edit-btn")) {
           
            editTaskElement = event.target.closest("li"); 
            todoInput.value = editTaskElement.querySelector("span").textContent;
            editMode = true;
            addUpdateButton.classList.remove("fa-plus");
            addUpdateButton.classList.add("fa-check");
        } else if (event.target.classList.contains("delete-btn")) {
       
            event.target.closest("li").remove(); 
        }
    });
});
