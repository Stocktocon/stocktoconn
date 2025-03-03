/*
    greatly pulled from the hw4 discussion stuff
*/

function setTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark'){
        root.style.setProperty('background-color', 'var(--background-color-dark, black)');
        root.style.setProperty('color', 'var(--text-color-dark, white)');
        footer.style.setProperty('--faded-text', '#bcbcbc');
    }
    else{
        root.style.setProperty('background', 'var(--background-color, white)');
        root.style.setProperty('color', 'var(--text-color, black)');
    }
}
function toggleTheme()
{
    const currTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currTheme === 'light'? 'dark': 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

function setSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        setTheme(savedTheme);
        document.getElementById('themeToggle').checked = (savedTheme === 'dark');
    }
}

document.addEventListener('DOMContentLoaded', setSavedTheme);