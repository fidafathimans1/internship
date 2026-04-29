function addTask() {

    let input = document.getElementById("taskInput");
    let taskValue = input.value;

    
    console.log("User typed Value:",taskValue);

    if (taskValue === "") {
        console.warn("note it:input field empty");
        alert("type something");
        return;
    }

    
    let li = document.createElement("li");
    li.innerHTML = taskValue;
    console.log("new (li) element created");

    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete-btn");

    
    deleteBtn.onclick = function() {
        console.log("click delete button ");
        li.remove();
    };

    
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    
    console.log("apload list");

    
    input.value = "";
}