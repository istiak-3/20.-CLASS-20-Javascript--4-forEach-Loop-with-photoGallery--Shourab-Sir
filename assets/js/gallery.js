let images = document.querySelectorAll("#gallery img");
let galleryImg = document.querySelector("#galleryImg");
let galleryImgShow = document.querySelector(".galleryImgShow");
let arrowCross = document.querySelector(".arrowCross");
let imgContainer = document.querySelector(".imgContainer");



images.forEach( (image, index) =>{
    image.addEventListener('click', function(e){
        e.stopPropagation()

        galleryImg.classList.add('active');
        galleryImgShow.src = image.src;


        
    })
});

arrowCross.addEventListener('click', function(){
    galleryImg.classList.remove('active');

})

window.addEventListener('click', function(e){
    if(galleryImg.classList.contains('active') && !(imgContainer.contains(e.target))){
        galleryImg.classList.remove('active');
    }
})

