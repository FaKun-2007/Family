// scripts-register.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    const userExists = users.some(user => user.username === newUsername);
    
    if (userExists) {
        document.getElementById('register-message').innerText = 'Логин уже существует';
        document.getElementById('register-message').style.color = 'red';
    } else {
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('register-message').innerText = 'Регистрация прошла успешно';
        document.getElementById('register-message').style.color = 'green';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
});
