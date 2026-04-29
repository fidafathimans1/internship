const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('itemList');

addBtn.addEventListener('click', function() {
    const itemText = input.value;

    if (itemText !== "") {
        const li = document.createElement('li');
        li.textContent = itemText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Remove";
        deleteBtn.className = "delete-btn";

        deleteBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = "";
        } else {
        alert("Please enter something!");
    }
});