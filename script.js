// Datos de los carruseles: cada array es un conjunto de imágenes y sus detalles
const carruseles = [
    {
        images: ["/Page/Publicaciones/5/1.png", "/Page/Publicaciones/5/2.png", "/Page/Publicaciones/5/4.png", "/Page/Publicaciones/5/5.png"],
        description: "Producto 1 - Descripción detallada aquí.",
        price: "$100",
    },
    {
        images: ["/Page/Publicaciones/5/9.png", "/Page/Publicaciones/5/10.png", "/Page/Publicaciones/5/11.png", "/Page/Publicaciones/5/12.png"],
        description: "Producto 2 - Descripción detallada aquí.",
        price: "$120",
    },
    {
        images: ["/Page/Publicaciones/5/20.png", "/Page/Publicaciones/5/21.png", "/Page/Publicaciones/5/22.png", "/Page/Publicaciones/5/23.png"],
        description: "Producto 3 - Descripción detallada aquí.",
        price: "$90",
    },
    {
        images: ["/Page/Publicaciones/5/1.png", "/Page/Publicaciones/5/2.png", "/Page/Publicaciones/5/4.png", "/Page/Publicaciones/5/5.png"],
        description: "Producto 1 - Descripción detallada aquí.",
        price: "$100",
    },

];

// Contenedor donde se generarán los carrseles
const container = document.getElementById("carousel-container");

// Carrito de compras
const cart = [];
let totalAmount = 0;

function mostrarMensaje(texto) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = texto;
    mensajeDiv.style.display = "block";
    setTimeout(() => {
        mensajeDiv.style.display = "none"; // Ocultar después de 3 segundos
    }, 3000);
}

// Llamada a la función


// Función para agregar un producto al carrito
function addToCart(product) {
    mostrarMensaje("Producto cargado correctamente");
    cart.push(product);
    totalAmount += parseFloat(product.price.replace("$", ""));
    updateCartCounter();
    updateCartPopup();
}

// Actualizar el contador del carrito
function updateCartCounter() {
    const cartCounter = document.querySelector("#cart .contador p");
    cartCounter.textContent = cart.length;
}

// Actualizar el contenido emergente del carrito
function updateCartPopup() {
    const cartContainer = document.querySelector("#cart #cart-container");
    cartContainer.innerHTML = ""; // Limpiar contenido previo

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }

    const list = document.createElement("ul");
    cart.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.description} - ${item.price}`;
        list.appendChild(listItem);
    });

    const totalText = document.createElement("p");
    totalText.textContent = `Total: $${totalAmount.toFixed(2)}`;

    // Botón para confirmar compra
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirmar compra";
    confirmButton.onclick = confirmPurchase;

    cartContainer.appendChild(list);
    cartContainer.appendChild(totalText);
    cartContainer.appendChild(confirmButton);
}

// Función para confirmar la compra y redirigir a WhatsApp
function confirmPurchase() {
    let message = "¡Hola! Quiero informacion el estado de los si:\n";
    cart.forEach((item) => {
        message += `- ${item.description}: ${item.price}\n`;
    });
    message += `\nTotal: $${totalAmount.toFixed(2)}`;

    const whatsappUrl = `https://wa.me/3564645861?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
}

// Función para generar un carrusel
function createCarousel(product, index) {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.dataset.carousel = index;

    // Botón anterior
    const prevButton = document.createElement("button");
    prevButton.classList.add("carousel-button", "prev");
    prevButton.innerHTML = "&#10094;";
    prevButton.onclick = () => moveSlide(index, -1);

    // Contenedor de las imágenes
    const slideContainer = document.createElement("div");
    slideContainer.classList.add("carousel-slide");
    slideContainer.dataset.currentIndex = 0;

    product.images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Imagen del producto";
        slideContainer.appendChild(img);
    });

    // Botón siguiente
    const nextButton = document.createElement("button");
    nextButton.classList.add("carousel-button", "next");
    nextButton.innerHTML = "&#10095;";
    nextButton.onclick = () => moveSlide(index, 1);

    // Sección de la descripción y el precio
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("carousel-description");
    const descriptionText = document.createElement("p");
    descriptionText.textContent = product.description;
    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = product.price;

    // Botón de compra
    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.textContent = "Agregar al carrito";
    buyButton.onclick = () => addToCart(product);

    descriptionContainer.appendChild(descriptionText);
    descriptionContainer.appendChild(priceText);
    descriptionContainer.appendChild(buyButton);

    // Armar el carrusel
    carousel.appendChild(prevButton);
    carousel.appendChild(slideContainer);
    carousel.appendChild(nextButton);
    carousel.appendChild(descriptionContainer);
    container.appendChild(carousel);
}

// Generar todos los carruseles
carruseles.forEach((product, index) => {
    createCarousel(product, index);
});

// Lógica para mover las imágenes de un carrusel
function moveSlide(carouselIndex, direction) {
    const carousel = document.querySelector(`.carousel[data-carousel="${carouselIndex}"]`);
    const slideContainer = carousel.querySelector(".carousel-slide");
    const images = slideContainer.querySelectorAll("img");

    // Determinar la nueva posición
    let currentIndex = parseInt(slideContainer.dataset.currentIndex, 10);
    currentIndex = (currentIndex + direction + images.length) % images.length;

    // Mover las imágenes
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    slideContainer.dataset.currentIndex = currentIndex;
}

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const responsiveMenu = document.getElementById("responsive-menu");

    menuToggle.addEventListener("click", () => {
        responsiveMenu.classList.toggle("active"); // Alterna la clase 'active'
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        if (!responsiveMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            responsiveMenu.classList.remove("active");
        }
    });
});
