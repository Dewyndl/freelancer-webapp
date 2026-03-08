document.addEventListener('DOMContentLoaded', function() {
    console.log('App loaded');
    var app = document.getElementById('app');
    var btn = document.createElement('button');
    btn.textContent = 'Click me';
    btn.onclick = function() { alert('Hello from freelancer app!'); };
    app.appendChild(btn);

    var toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Dark Mode';
    toggleBtn.style.marginLeft = '10px';
    toggleBtn.onclick = toggleDarkMode;
    app.appendChild(toggleBtn);

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}
