const button = document.querySelector('#button');
const images = document.querySelectorAll('img');
let currentIndex = 0;
function nextslide(){
    images.forEach((img, index) => {
        img.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    
}

button.addEventListener('click', nextslide);