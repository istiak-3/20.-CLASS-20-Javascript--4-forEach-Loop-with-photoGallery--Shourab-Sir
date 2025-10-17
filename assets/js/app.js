/** ---- darkMode Section Start ---- */
let darkModeBtn = document.querySelector(".darkModeBtn");
let body = document.querySelector("body");
let title = document.querySelector(".title span");
let cursor = document.querySelector(".cursor");
let cursorDot = document.querySelector(".cursorDot");

darkModeBtn.addEventListener('click', (event) => {

    if (!(body.classList.contains('darkMode'))) {
        body.classList.add('darkMode');
        title.innerText = 'Dark';
    } else {
        body.classList.remove('darkMode');
        title.innerText = 'Light';
    }

});

window.addEventListener('mousemove', (event) => {
    event.preventDefault();

    let mouseLeft = event.clientX + 'px';
    let mouseTop = event.clientY + 'px';

    cursor.style.left = mouseLeft;
    cursor.style.top = mouseTop;

    cursorDot.style.left = mouseLeft;
    cursorDot.style.top = mouseTop;
})
/** ---- darkMode Section End ---- */


/** ---- photoGallery Section Start ---- */
let images = document.querySelectorAll(".gallery img");
let galleryImg = document.querySelector(".galleryImg");
let galleryImgShow = document.querySelector(".galleryImgShow");
let arrowCross = document.querySelector(".arrowCross");
let imgContainer = document.querySelector(".imgContainer");

images.forEach((image) => {

    image.addEventListener('click', function (e) {
        e.stopPropagation()

        galleryImg.classList.add('active');
        galleryImgShow.src = image.src;
    })

});

arrowCross.addEventListener('click', function () {
    galleryImg.classList.remove('active');
})

window.addEventListener('click', function (e) {

    if (galleryImg.classList.contains('active') && !(imgContainer.contains(e.target))) {
        galleryImg.classList.remove('active');
    }
    
})

/** ---- photoGallery Section End ---- */
