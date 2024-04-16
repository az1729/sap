// script.js
document.getElementById('authForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Authentication placeholder logic
    if (username === 'a' && password === 'a') {
        window.location.href = './admin/admin.html';
    } else if (username.startsWith('d') && password === 'd') {
        window.location.href = './advisor/advisor.html';
    } else if (username.startsWith('s') && password === 's') {
        window.location.href = './student/student.html';
    } else {
        alert('Invalid credentials!');
    }
});