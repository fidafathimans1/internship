function addListItem() {
    let val = document.getElementById('listInput').value;
    
    
    console.log("Input Value is: " + val);

    if(val !== "") {
        let li = document.createElement('li');
        li.textContent = val;
        document.getElementById('dynamicUl').appendChild(li);
        
        console.log("item added to list");
        
        document.getElementById('listInput').value = "";
    } else {
        console.log("box is blank");
    }
}