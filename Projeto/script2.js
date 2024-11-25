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


//praias
function alterarInformacoes() {
  // Alterar informações de Copacabana
  const copacabanaStatus = document.getElementById('copacabana-status');
  const copacabanaTemp = document.getElementById('copacabana-temp');
  copacabanaStatus.textContent = 'imprópria'; // Novo status
  copacabanaStatus.classList.remove('propria');
  copacabanaStatus.classList.add('impropria');
  copacabanaTemp.textContent = '27°C'; // Nova temperatura

  // Alterar informações de Ipanema
  const ipanemaStatus = document.getElementById('ipanema-status');
  const ipanemaTemp = document.getElementById('ipanema-temp');
  ipanemaStatus.textContent = 'imprópria'; // Novo status
  ipanemaStatus.classList.remove('propria');
  ipanemaStatus.classList.add('impropria');
  ipanemaTemp.textContent = '29°C'; // Nova temperatura

  // Alterar informações de Leblon
  const leblonStatus = document.getElementById('leblon-status');
  const leblonTemp = document.getElementById('leblon-temp');
  leblonStatus.textContent = 'própria'; // Novo status
  leblonStatus.classList.remove('impropria');
  leblonStatus.classList.add('propria');
  leblonTemp.textContent = '22°C'; // Nova temperatura
}


// produtos

  const rentalItems = [
    { name: "Pranchas", price: "$20", details: "Tipos: Stand-up, Surf" },
    { name: "Cadeiras", price: "$10", details: "" },
    { name: "Guarda-Sol", price: "$8", details: "" },
  ];

  const itemsGrid = document.querySelector(".items-grid");

  rentalItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>Diária: ${item.price}</p>
      <p>${item.details}</p>
    `;
    itemsGrid.appendChild(itemDiv);
  });

