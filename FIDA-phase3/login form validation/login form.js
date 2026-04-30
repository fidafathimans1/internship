document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    
    const userError = document.getElementById('userError');
    const passError = document.getElementById('passError');

    let isValid = true;

    
    if (username === "") {
        userError.innerText = "Username required!";
        isValid = false;
    } else if (username.length < 5) {
        userError.innerText = "Username must be at least 5 chars!";
        isValid = false;
    } else {
        userError.innerText = "";
    }

    
    if (password === "") {
        passError.innerText = "Password required!";
        isValid = false;
    } else if (password.length < 6) {
        passError.innerText = "Password must be at least 6 chars!";
        isValid = false;
    } else {
        passError.innerText = "";
    }


    if (isValid) {
        alert("Login Successful!");
        
    }
});