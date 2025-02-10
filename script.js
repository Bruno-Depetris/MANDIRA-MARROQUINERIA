// Datos de los carruseles: cada array es un conjunto de imágenes y sus detalles
const carruseles = [
    // NUEVO

    {
        images: ["/Page/Publicaciones/12/1.png", "/Page/Publicaciones/12/2.png", "/Page/Publicaciones/12/3.png", "/Page/Publicaciones/12/4.png", "/Page/Publicaciones/12/5.png"],
        description: "TOTE Color HUESO - CHIMOLA",
        price: "$60000",
    },
    {
        images: ["/Page/Publicaciones/12/11.png", "/Page/Publicaciones/12/12.png", "/Page/Publicaciones/12/13.png", "/Page/Publicaciones/12/14.png"],
        description: "Mochila Color AQUA - INFLUENCER",
        price: "$36000",
    },
    {
        images: ["/Page/Publicaciones/12/15.png", "/Page/Publicaciones/12/16.png", "/Page/Publicaciones/12/17.png"],
        description: "Maletin Negro OP2 - TRAVEL TECH ",
        price: "$25000",
    },
    {
        images: ["/Page/Publicaciones/12/18.png", "/Page/Publicaciones/12/19.png", "/Page/Publicaciones/12/20.png", "/Page/Publicaciones/12/21.png"],
        description: "MALETIN Negro op2 - BOSSI",
        price: "$30000",
    },
    {
        images: ["/Page/Publicaciones/12/27.png", "/Page/Publicaciones/12/28.png", "/Page/Publicaciones/12/29.png", "/Page/Publicaciones/12/30.png", "/Page/Publicaciones/12/31.png"],
        description: "Cartera negra COD:24651 - AMAYRA",
        price: "$40000",
    },
    {
        images: ["/Page/Publicaciones/12/32.png", "/Page/Publicaciones/12/33.png", "/Page/Publicaciones/12/34.png", "/Page/Publicaciones/12/35.png", "/Page/Publicaciones/12/36.png"],
        description: "Cartera  - AMAYRA",
        price: "$45000",
    },
    {
        images: ["/Page/Publicaciones/12/37.png", "/Page/Publicaciones/12/38.png", "/Page/Publicaciones/12/39.png"],
        description: "Morral - AMAYRA",
        price: "$30000",
    },
    {
        images: ["/Page/Publicaciones/12/40.png", "/Page/Publicaciones/12/41.png", "/Page/Publicaciones/12/42.png", "/Page/Publicaciones/12/43.png", "/Page/Publicaciones/12/44.png"],
        description: "Cartera negra  - AMAYRA",
        price: "$35000",
    },
    {
        images: ["/Page/Publicaciones/12/48.png", "/Page/Publicaciones/12/49.png"],
        description: "Billetera - EVERLAST",
        price: "$20000",
    },
    {
        images: ["/Page/Publicaciones/12/50.png", "/Page/Publicaciones/12/51.png", "/Page/Publicaciones/12/52.png", "/Page/Publicaciones/12/53.png"],
        description: "Tarjeterao - MOTOR OIL",
        price: "$15000",
    },
    {
        images: ["/Page/Publicaciones/12/56.png", "/Page/Publicaciones/12/57.png", "/Page/Publicaciones/12/58.png", "/Page/Publicaciones/12/59.png", "/Page/Publicaciones/12/60.png"],
        description: "Cartuchera - CHIMOLA",
        price: "$35000",
    },
    {
        images: ["/Page/Publicaciones/12/61.png"],
        description: "Cartuchera - EVERLAST",
        price: "$20000",
    },
    {
        images: ["/Page/Publicaciones/12/62.png", "/Page/Publicaciones/12/63.png", "/Page/Publicaciones/12/64.png"],
        description: "Cartuchera - INFLUENCER",
        price: "$15000",
    },
    {
        images: ["/Page/Publicaciones/12/65.png", "/Page/Publicaciones/12/66.png", "/Page/Publicaciones/12/67.png", "/Page/Publicaciones/12/68.png"],
        description: "Bolso Viaje|GYM - EVERLAST",
        price: "$30000",
    },



















    // ANTERIOR
    {
        images: ["/Page/Publicaciones/11/10.png", "/Page/Publicaciones/11/11.png", "/Page/Publicaciones/11/12.png", "/Page/Publicaciones/11/13.png", "/Page/Publicaciones/11/14.png"],
        description: "Mochila color gris - EVERLAST",
        price: "$38000",
    },
    {
        images: ["/Page/Publicaciones/11/1.png", "/Page/Publicaciones/11/2.png", "/Page/Publicaciones/11/3.png", "/Page/Publicaciones/11/4.png"],
        description: "Morral - OREIRO",
        price: "$45000",
    },
    {
        images: ["/Page/Publicaciones/11/5.png", "/Page/Publicaciones/11/6.png", "/Page/Publicaciones/11/7.png", "/Page/Publicaciones/11/8.png", "/Page/Publicaciones/11/9.png"],
        description: "Mochila - EVERLAST",
        price: "$32000",
    },
    {
        images: ["/Page/Publicaciones/11/15.png", "/Page/Publicaciones/11/16.png", "/Page/Publicaciones/11/17.png", "/Page/Publicaciones/11/18.png"],
        description: "Mochila color hueso - EVERLAST",
        price: "$50000",
    },
    {
        images: ["/Page/Publicaciones/6/12.png", "/Page/Publicaciones/6/13.png", "/Page/Publicaciones/6/14.png", "/Page/Publicaciones/6/15.png", "/Page/Publicaciones/6/16.png"],
        description: "Bandolera ROSA - CHIMOLA",
        price: "$55000",
    },
    {
        images: ["/Page/Publicaciones/9/7.png", "/Page/Publicaciones/9/8.png", "/Page/Publicaciones/9/9.png"],
        description: "Riñonera Negra - AMAYRA",
        price: "$28000",
    },
    {
        images: ["/Page/Publicaciones/9/10.png", "/Page/Publicaciones/9/11.png", "/Page/Publicaciones/9/12.png", "/Page/Publicaciones/9/13.png"],
        description: "Sobre NEGRO OP2- AMAYRA",
        price: "$28000",
    },
    {
        images: ["/Page/Publicaciones/9/20.png", "/Page/Publicaciones/9/21.png", "/Page/Publicaciones/9/22.png", "/Page/Publicaciones/9/23.png", "/Page/Publicaciones/9/24.png"],
        description: "Morral Hombre azul - BOSSI",
        price: "$18000",
    },
    {
        images: ["/Page/Publicaciones/9/25.png", "/Page/Publicaciones/9/26.png", "/Page/Publicaciones/9/27.png", "/Page/Publicaciones/9/28.png", "/Page/Publicaciones/9/29.png","/Page/Publicaciones/9/30.png"],
        description: "MOCHILA - EVERLAST",
        price: "$38000",
    },
    {
        images: ["/Page/Publicaciones/9/31.png", "/Page/Publicaciones/9/32.png", "/Page/Publicaciones/9/33.png"],
        description: "Cartucheras - TENDY",
        price: "$CONSULTAR",
    },
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
        description: "Billeteras (consultar precio con cierre)- EVERLAST-HEAD",
        price: "$16000",
    },

    {
        images: ["/Page/Publicaciones/6/28.png", "/Page/Publicaciones/6/29.png", "/Page/Publicaciones/6/30.png", "/Page/Publicaciones/6/31.png"],
        description: "Riñonera XXL Negra - REINA",
        price: "$30600",
    },

    {
        images: ["/Page/Publicaciones/5/32.png", "/Page/Publicaciones/5/33.png", "/Page/Publicaciones/5/34.png", "/Page/Publicaciones/5/35.png", "/Page/Publicaciones/5/36.png"],
        description: "Mochila Roja - WILSON",
        price: "$23350",
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
