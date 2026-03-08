document.addEventListener('DOMContentLoaded', function() {
    console.log('App loaded');
    const app = document.getElementById('app');
    const btn = document.createElement('button');
    btn.textContent = 'Click me';
    btn.onclick = function() { alert('Hello from freelancer app!'); };
    app.appendChild(btn);
});
