const box = document.getElementById('colorBox');
const btn = document.getElementById('styleBtn');

btn.addEventListener('click', function() {

    box.style.backgroundColor = "gold";
    box.style.width = "250px";
    box.style.borderRadius = "50%";
    box.style.color = "blue";
    box.textContent = "Style Changed!";
});