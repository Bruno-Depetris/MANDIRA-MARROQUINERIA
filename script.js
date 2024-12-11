// Datos de los carruseles: cada array es un conjunto de imágenes y sus detalles
const carruseles = [

    {
        images: ["/Page/Publicaciones/8/1.png", "/Page/Publicaciones/8/2.png", "/Page/Publicaciones/8/3.png"],
        description: "Billeteras POCKET  - AMAYRA DOS COLORES",
        price: "$7000",
    },
    {
        images: ["/Page/Publicaciones/8/4.png", "/Page/Publicaciones/8/5.png", "/Page/Publicaciones/8/6.png", "/Page/Publicaciones/8/7.png", "/Page/Publicaciones/8/8.png", "/Page/Publicaciones/8/9.png"],
        description: "Billeteras POCKET  - AMAYRA TRES COLORES",
        price: "$8000",
    },
    {
        images: ["/Page/Publicaciones/8/10.png", "/Page/Publicaciones/8/11.png", "/Page/Publicaciones/8/12.png", "/Page/Publicaciones/8/13.png", "/Page/Publicaciones/8/14.png"],
        description: "Billeteras POCKET  - TRENDY TRES COLORES",
        price: "$16200",
    },
    {
        images: ["/Page/Publicaciones/7/1.png", "/Page/Publicaciones/7/2.png", "/Page/Publicaciones/7/3.png", "/Page/Publicaciones/7/4.png", "/Page/Publicaciones/7/5.png", "/Page/Publicaciones/7/6.png"],
        description: "Cartera EVERLAST - FEMENINA TAM MEDIO",
        price: "$27300",
    },
    {
        images: ["/Page/Publicaciones/7/7.png", "/Page/Publicaciones/7/8.png", "/Page/Publicaciones/7/9.png", "/Page/Publicaciones/7/10.png", "/Page/Publicaciones/7/11.png", "/Page/Publicaciones/7/12.png", "/Page/Publicaciones/7/13.png", "/Page/Publicaciones/7/14.png"],
        description: "Mochila EVERLAST Verde- XXL",
        price: "$37500",
    },
    {
        images: ["/Page/Publicaciones/aux7/8.png", "/Page/Publicaciones/aux7/9.png", "/Page/Publicaciones/aux7/10.png", "/Page/Publicaciones/aux7/11.png"],
        description: "Bandilera NEGRA - REINA",
        price: "$15000",
    },
    {
        images: ["/Page/Publicaciones/7/15.png", "/Page/Publicaciones/7/16.png", "/Page/Publicaciones/7/17.png", "/Page/Publicaciones/7/18.png", "/Page/Publicaciones/7/19.png", "/Page/Publicaciones/7/20.png"],
        description: "Mochila - BOCA PEZ EVERLAST",
        price: "$31300",
    },
    {
        images: ["/Page/Publicaciones/7/21.png", "/Page/Publicaciones/7/22.png", "/Page/Publicaciones/7/23.png", "/Page/Publicaciones/7/24.png", "/Page/Publicaciones/7/25.png"],
        description: "Maletin - TRAVEL TECH",
        price: "$21300",
    },
    {
        images: ["/Page/Publicaciones/7/26.png", "/Page/Publicaciones/7/27.png", "/Page/Publicaciones/7/28.png", "/Page/Publicaciones/7/29.png", "/Page/Publicaciones/7/30.png", "/Page/Publicaciones/7/31.png", "/Page/Publicaciones/7/32.png"],
        description: "Maletin - BOSSI",
        price: "$25600",
    },
    {
        images: ["/Page/Publicaciones/7/33.png", "/Page/Publicaciones/7/34.png", "/Page/Publicaciones/7/35.png", "/Page/Publicaciones/7/36.png", "/Page/Publicaciones/7/37.png", "/Page/Publicaciones/7/38.png", "/Page/Publicaciones/7/39.png",  "/Page/Publicaciones/7/40.png"],
        description: "Billeteras - EVERLAST-HEAD",
        price: "$13000",
    },
    {
        images: ["/Page/Publicaciones/6/12.png", "/Page/Publicaciones/6/13.png", "/Page/Publicaciones/6/14.png", "/Page/Publicaciones/6/15.png", "/Page/Publicaciones/6/16.png"],
        description: "Bandolera ROSA - CHIMOLA",
        price: "$55000",
    },
    {
        images: ["/Page/Publicaciones/6/1.png", "/Page/Publicaciones/6/2.png", "/Page/Publicaciones/6/3.png", "/Page/Publicaciones/6/4.png", "/Page/Publicaciones/6/5.png", "/Page/Publicaciones/6/6.png", "/Page/Publicaciones/6/7.png"],
        description: "Cartera - BARBARA",
        price: "$60000",
    },
    {
        images: ["/Page/Publicaciones/6/28.png", "/Page/Publicaciones/6/29.png", "/Page/Publicaciones/6/30.png", "/Page/Publicaciones/6/31.png"],
        description: "Riñonera XXL Negra - REINA",
        price: "$30600",
    },
    {
        images: ["/Page/Publicaciones/6/24.png", "/Page/Publicaciones/6/25.png", "/Page/Publicaciones/6/26.png", "/Page/Publicaciones/6/27.png"],
        description: "Bandolera NEGRA op3 - TRENDY",
        price: "$25000",
    },
    {
        images: ["/Page/Publicaciones/6/21.png", "/Page/Publicaciones/6/22.png", "/Page/Publicaciones/6/23.png"],
        description: "Bandolera NEGRA op2 - TRENDY",
        price: "$25000",
    },
    {
        images: ["/Page/Publicaciones/6/17.png", "/Page/Publicaciones/6/18.png", "/Page/Publicaciones/6/19.png", "/Page/Publicaciones/6/20.png"],
        description: "Bandolera NEGRA op1 - TRENDY",
        price: "$25000",
    },
    {
        images: ["/Page/Publicaciones/5/1.png", "/Page/Publicaciones/5/2.png", "/Page/Publicaciones/5/3.png", "/Page/Publicaciones/5/4.png", "/Page/Publicaciones/5/5.png", "/Page/Publicaciones/5/6.png", "/Page/Publicaciones/5/7.png", "/Page/Publicaciones/5/8.png"],
        description: "Mochila Negra - AMAYRA",
        price: "$46260",
    },
    {
        images: ["/Page/Publicaciones/5/9.png", "/Page/Publicaciones/5/10.png", "/Page/Publicaciones/5/11.png", "/Page/Publicaciones/5/12.png", "/Page/Publicaciones/5/13.png", "/Page/Publicaciones/5/14.png"],
        description: "Mochila - Everlast BYN",
        price: "$35180",
    },
    {
        images: ["/Page/Publicaciones/5/20.png", "/Page/Publicaciones/5/21.png", "/Page/Publicaciones/5/22.png", "/Page/Publicaciones/5/23.png", "/Page/Publicaciones/5/24.png", "/Page/Publicaciones/5/25.png"],
        description: "Mochila Negra Opaca - CHIMOLA",
        price: "$86630",
    },
    {
        images: ["/Page/Publicaciones/5/26.png", "/Page/Publicaciones/5/27.png", "/Page/Publicaciones/5/28.png", "/Page/Publicaciones/5/29.png", "/Page/Publicaciones/5/30.png", "/Page/Publicaciones/5/31.png"],
        description: "Mochila Rosa - INFLUENCE",
        price: "$35760",
    },
    {
        images: ["/Page/Publicaciones/5/32.png", "/Page/Publicaciones/5/33.png", "/Page/Publicaciones/5/34.png", "/Page/Publicaciones/5/35.png", "/Page/Publicaciones/5/36.png"],
        description: "Mochila Roja - WILSON",
        price: "$23350",
    },
    {
        images: ["/Page/Publicaciones/5/37.png", "/Page/Publicaciones/5/38.png", "/Page/Publicaciones/5/39.png", "/Page/Publicaciones/5/40.png", "/Page/Publicaciones/5/41.png", "/Page/Publicaciones/5/42.png"],
        description: "Mochila Con USB - UNICROSS",
        price: "$35250",
    },
    
    {
        images: ["/Page/Publicaciones/5/47.png", "/Page/Publicaciones/5/48.png"],
        description: "Billetera VERDE - AMAYRA",
        price: "$11400",
    },
    {
        images: ["/Page/Publicaciones/5/49.png", "/Page/Publicaciones/5/50.png", "/Page/Publicaciones/5/51.png"],
        description: "Billetera NEGRA - AMAYRA",
        price: "$14800",
    },
    {
        images: ["/Page/Publicaciones/5/52.png", "/Page/Publicaciones/5/53.png", "/Page/Publicaciones/5/54.png"],
        description: "Billetera CELESTE - AMAYRA",
        price: "$11400",
    },
    {
        images: ["/Page/Publicaciones/5/55.png", "/Page/Publicaciones/5/56.png", "/Page/Publicaciones/5/57.png", "/Page/Publicaciones/5/58.png"],
        description: "Billetera NEGRA LISA - AMAYRA",
        price: "$11400",
    },
    {
        images: ["/Page/Publicaciones/5/43.png", "/Page/Publicaciones/5/44.png", "/Page/Publicaciones/5/45.png", "/Page/Publicaciones/5/46.png"],
        description: "Cartera NEGRA - TRENDY",
        price: "$19800",
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
    confirmButton.textContent = "Realizar Pedido";
    confirmButton.onclick = confirmPurchase;

    cartContainer.appendChild(list);
    cartContainer.appendChild(totalText);
    cartContainer.appendChild(confirmButton);
}

// Función para confirmar la compra y redirigir a WhatsApp
function confirmPurchase() {
    let message = "¡Hola! Me gustaria hacer la siguiente compra:\n";
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
