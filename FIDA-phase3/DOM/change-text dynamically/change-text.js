const messageHeading = document.getElementById('message');
const actionButton = document.getElementById('changeBtn');
actionButton.addEventListener('click', function() {
    
    messageHeading.textContent = "WELCOME";
});