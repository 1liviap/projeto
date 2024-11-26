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

  document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "Protetor Solar", price: 49.99, image: "img/protetor.webp" },
        { name: "Pós Sol", price: 99.90, image: "img/pos.webp" },
        { name: "Repelente", price: 19.99, image: "img/repelente.png" },
        { name: "Protetor Solar Capilar", price: 199.90, image: "img/cabelo.webp" }
    ];

    const productList = document.getElementById('product-list');
    const filterInput = document.getElementById('filter');
    const sortSelect = document.getElementById('sort-products');

    // Renderizar produtos
    function renderProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('item');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <span>R$${product.price.toFixed(2)}</span>
            `;
            productList.appendChild(productCard);
        });
    }

    // Filtrar produtos
    filterInput.addEventListener('input', () => {
        const filterValue = filterInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(filterValue)
        );
        renderProducts(filteredProducts);
    });

    // Ordenar produtos
    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        const sortedProducts = [...products];

        if (sortValue === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'name-asc') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === 'name-desc') {
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        renderProducts(sortedProducts);
    });

    // Inicializar
    renderProducts(products);
});
