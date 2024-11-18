let currentIndex = 0;

function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.carousel-card');
  const totalItems = cards.length;

  // Atualiza o índice atual de acordo com a direção
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  // Calcula o offset com base na largura do item
  const offset = -currentIndex * 100; // Cada item ocupa 100% da largura do contêiner

  // Move o track do carrossel
  track.style.transform = `translateX(${offset}%)`;
}

