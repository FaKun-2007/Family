// scripts-admin-login.js
document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const adminUsername = document.getElementById('admin-username').value;
    const adminPassword = document.getElementById('admin-password').value;
    
    let admins = JSON.parse(localStorage.getItem('admins')) || [{ username: 'admin', password: 'admin231' }];
    
    const admin = admins.find(admin => admin.username === adminUsername && admin.password === adminPassword);
    
    if (admin) {
        window.location.href = 'admin-panel.html';
    } else {
        document.getElementById('admin-error-message').innerText = 'Неправильный логин или пароль';
    }
});
