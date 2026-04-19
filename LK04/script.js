const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Cek status dark mode di localStorage saat halaman dimuat
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerText = '☀️ Light Mode';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerText = '☀️ Light Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerText = '🌙 Dark Mode';
    }
});
