function showLogin() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('signUpContainer').style.display = 'none';
}

function showSignUp() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signUpContainer').style.display = 'block';
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        displayError('loginErrorMessage', 'Both fields are required');
        return;
    }

    const hashedPassword = hashPassword(password);

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && hashedPassword === storedPassword) {
        alert('Login successful');
    } else {
        displayError('loginErrorMessage', 'Invalid username or password');
    }
});

document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('signUpUsername').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !password || !confirmPassword) {
        displayError('signUpErrorMessage', 'All fields are required');
        return;
    }

    if (password !== confirmPassword) {
        displayError('signUpErrorMessage', 'Passwords do not match');
        return;
    }

    const hashedPassword = hashPassword(password);
    localStorage.setItem('username', username);
    localStorage.setItem('password', hashedPassword);

    alert('Sign up successful');
    showLogin();
});

function displayError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function hashPassword(password) {
    return CryptoJS.MD5(password).toString();
}