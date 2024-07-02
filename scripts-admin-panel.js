/* styles-admin-panel.css */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
}

header .logo {
    max-height: 40px;
    margin-right: 20px;
}

header .menu {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
}

header .menu li {
    display: inline;
}

header .menu a {
    color: white;
    text-decoration: none;
    font-weight: 700;
}

header .menu a:hover {
    text-decoration: underline;
}

main {
    padding: 20px;
}

.title {
    text-align: center;
    margin-bottom: 20px;
}

.log-section, .admin-section {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.log-section h2, .admin-section h2 {
    margin-top: 0;
}

form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

label {
    margin-top: 10px;
    text-align: left;
}

input {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
}

button {
    margin-top: 20px;
    padding: 10px;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #555;
}

#login-logs {
    list-style: none;
    padding: 0;
}

#login-logs li {
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
}
