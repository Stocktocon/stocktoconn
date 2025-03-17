// do stuff here similar to the light mode dark mode but instead modify the DOM and add stuff into the nav header when necessary. 

function doHide() {
    root = document.documentElement;
    hidden = localStorage.getItem('weaf');
    if (hidden === 'true'){
        root.style.setProperty('--hide', 'none');
    }
    else{
        root.style.setProperty('--hide', 'block');
    }
}

doHide();