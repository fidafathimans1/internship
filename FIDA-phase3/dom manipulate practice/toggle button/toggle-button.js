// Select the elements from the DOM
const toggleBtn = document.getElementById('toggleBtn');
const statusBox = document.getElementById('statusBox');

// Add click event listener
toggleBtn.addEventListener('click', () => {
    // Toggle the 'active' class on the box
    statusBox.classList.toggle('active');
    
    // Check if the class exists to update text and log status
    const isActive = statusBox.classList.contains('active');
    
    if (isActive) {
        statusBox.textContent = "Status: ON";
        console.log("Button clicked: State is now ON");
    } else {
        statusBox.textContent = "Status: OFF";
        console.log("Button clicked: State is now OFF");
    }
});