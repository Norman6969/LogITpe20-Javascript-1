const currentImage = document.querySelector('#image');
const images = ['img/pic1.png', 'img/pic2.png', 'img/pic3.png'];

function changeImage(){
console.log("Hello from script file!");
let rnd = Math.floor(Math.random() * images.length);
currentImage.src = images[rnd];
console.log(rnd);

}