document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const admins = JSON.parse(localStorage.getItem('admins')) || [{ username: 'admin', password: 'admin231' }];
    
    const validAdmin = admins.find(admin => admin.username === username && admin.password === password);
    
    if (validAdmin) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('loginLogs', JSON.stringify([...JSON.parse(localStorage.getItem('loginLogs') || '[]'), { user: username, time: new Date().toLocaleString() }]));
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').innerText = 'Неправильный логин или пароль';
    }
});
