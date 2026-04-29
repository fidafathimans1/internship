const button =
 document.getElementById("button");
const text =
 document.getElementById("text");

button.addEventListener("click", function
   () {
  text.textContent = "You clicked the button!";
});

console.log("JS connected");