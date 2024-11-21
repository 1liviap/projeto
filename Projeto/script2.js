// paginal inicial teste
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add('active');
});
