/*
    greatly pulled from the hw4 discussion stuff
*/
//try catch on the footer is because it causes an error and breaks the slider if there is no footer in the page (should be fixed when everything has a footer by the SSG)
function setTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark'){
        root.style.setProperty('background-color', 'var(--background-color-dark, black)');
        root.style.setProperty('color', 'var(--text-color-dark, white)');
        try {document.querySelector('footer').style.setProperty('color', 'var(--faded-text-dark, #bcbcbc)');
        }catch {}
    }
    else{
        
        root.style.setProperty('background', 'var(--background-color, white)');
        root.style.setProperty('color', 'var(--text-color, black)');
        try{document.querySelector('footer').style.setProperty('color', 'var(--faded-text, #2c2c2c)');
        } catch{}
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
        document.getElementById('themeToggle').checked = (savedTheme == 'dark');
    }
}

document.addEventListener('DOMContentLoaded', setSavedTheme);