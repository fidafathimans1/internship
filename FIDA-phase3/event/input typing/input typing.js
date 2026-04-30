const input = document.getElementById("inputBox");
const preview = document.getElementById("preview");

console.log(input);   

input.addEventListener("input", function () {
  console.log("Typing event triggered");   
  console.log(input.value);                

  preview.textContent = input.value;
});