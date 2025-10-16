let darkModeBtn = document.querySelector(".darkModeBtn");
let body = document.querySelector("body");
let title = document.querySelector(".title span");
let cursor = document.querySelector(".cursor");
let cursorDot = document.querySelector(".cursorDot");




darkModeBtn.addEventListener('click', (event) => {
    
    if (!(body.classList.contains('darkMode'))) {
        body.classList.add('darkMode');
        title.innerText = 'Dark';
    }else{
        body.classList.remove('darkMode');
        title.innerText = 'Light';
    }
    
});

window.addEventListener('mousemove', (event)=>{
    event.preventDefault();

    let mouseLeft = event.clientX + 'px';
    let mouseTop = event.clientY + 'px';

    cursor.style.left = mouseLeft;
    cursor.style.top = mouseTop;

    cursorDot.style.left = mouseLeft;
    cursorDot.style.top = mouseTop;
})