document.addEventListener('DOMContentLoaded', function() {
    console.log('App loaded');
    const app = document.getElementById('app');
    const btn = document.createElement('button');
    btn.textContent = 'Click me';
    btn.onclick = function() { alert('Hello from freelancer app!'); };
    app.appendChild(btn);
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Restore preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
