
const  todotext = document.getElementById('todotext');
const addupdate = document.getElementById('AddUpdateClick');
const todolist = document.getElementById('list-items');

let editMode = false;
let edittaskelemnt = null;


addupdate.addEventListener("click",function(){
    let tasktext = todotext.value.trim();
    if(tasktext === "")return;

    if (!editMode) {
     
        let listItem = document.createElement("li"); 
        listItem.innerHTML = `
            <span>${tasktext}</span>
            <div>
                <i class="fa-solid fa-pen edit-btn"></i> 
                <i class="fa-solid fa-trash delete-btn"></i>
            </div>`;
        todolist.appendChild(listItem);
    }else{
        editTaskElement.querySelector("span").textContent = tasktext;
        editMode = false;
        edittaskelemnt = null;
        addupdate.classList.remove("fa-check");
        addupdate.classList.add("fa-plus");
    }

       todotext.value = "";
    
});



todolist.addEventListener("click",function(){
    if(event.target.classList.contains("edit-btn")){

        editTaskElement = event.target.closest("li");
        todotext.value = editTaskElement.querySelector("span").textContent;
        editMode = true;
        addupdate.classList.remove("fa-plus");
        addupdate.classList.add("fa-check");
}else if(event.target.classList.contains('delete-btn')){

    event.target.closest("li").remove();
    
}

});



