const burgerMenu = document.querySelector('#burgerMenu');
const navbarMenu = document.querySelector('#navbarMenu');

burgerMenu.addEventListener("click", function(){
    burgerMenu.classList.toggle("burger-active")
    navbarMenu.classList.toggle("hidden");
});

const image = document.querySelector('.image');

let MulaiImage = false, ImagePageX, ImageScrollkiri;

image.addEventListener("mousedown", ImageDown = (evt) => {
    MulaiImage = true;
    ImagePageX = evt.pageX;
    ImageScrollkiri = image.scrollLeft;
});

image.addEventListener("mousemove", ImageMove = (evt) => {
    if (!MulaiImage) return;
    evt.preventDefault();
    let posisi = evt.pageX - ImagePageX;
    image.scrollLeft = ImageScrollkiri - posisi; 
});

image.addEventListener("mouseup", ImageUP = () => {
    MulaiImage = false;
});