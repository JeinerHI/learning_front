function renderProducts(products) {
    if (!productContainer) return;
    productContainer.innerHTML = "";

    for (const phone of products) {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.setAttribute("card", phone.id);
        productCard.id = `product-${phone.id}`;
        productCard.innerHTML = `
        <div class="product-header">
            <i class="fas fa-heart favIcon"></i>
            <h2 class="product-name">${phone.name}</h2>
        </div>

        <div class="product-content"">
            <div class="product-image">
                <img src="${phone.image}" alt="${phone.name}">
            </div>
            <ul>
                    <li><strong>Tamaño Pantalla (cm/pulg.)</strong><br>${phone.screenSize}</li>
                    <li><strong>Capacidad memoria</strong><br>${phone.storage}</li>
                    <li><strong>Sistema Operativo</strong><br>${phone.os}</li>
                    <li><strong>Procesador</strong><br>${phone.processor}</li>
            </ul> 
            <div class="product-details">
                
                <div class="product-info">
                    <div class="product-price">
                        <span class="price">${phone.price}€</span>
                        <p class="tax">IVA incl. Con envío gratis</p>
                        <a href="#" class="finance-link">Simula tu financiación*</a>
                    </div>

                    <div class="availability">
                        <p class="online"><span class="dot green"></span>${phone.availability}</p>
                        <p class="delivery">${phone.delivery}</p>
                        <p class="pickup"><span class="dot brown"></span>${phone.pickup}<br><small>Consultar
                                disponibilidad</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-footer">
            <div class="checkbox">
                <input type="checkbox" id="compare-${phone.name.replace(/\s+/g, '-')}">
                <label for="compare-${phone.name.replace(/\s+/g, '-')}">comparar</label>
            </div>
            <button class="ver-detalle">Ver Detalles</button>
            <button class="add-to-cart" id='${phone.id}'>Añadir al carrito</button>
        </div>
        `;
        productContainer.appendChild(productCard);
    }
}

function renderPopUp(id) {
    const product = phones.find(p => p.id === id);
    let html = "";

    html=`
        <div class="popup-header">
            <button class="close-btn" id="closeBtn">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div class="popup-content">
            <!-- Sección de imagen -->
            <div class="detail-image-section">
                <div class="main-image">
                    <img id="mainImage" src="${product.image}" alt="Producto">
                </div>
                <div class="thumbnail-gallery">
                    <img class="thumbnail active" src="${product.image}">
                    <img class="thumbnail" src="${product.image}">
                    <img class="thumbnail" src="${product.image}">
                </div>
            </div>

            <!-- Sección de información -->
            <div class="detail-info-section">
                <!-- Título y marca -->
                <div class="product-title-section">
                    <span class="product-brand">${product.brand}</span>
                    <h1 id="productTitle">${product.name}</h1>
                    <p class="product-color" id="productColor">Color: ${product.color}</p>
                </div>

                <!-- Precio -->
                <div class="price-section">
                    <span class="current-price" id="currentPrice">${product.price}€</span>
                    <span class="old-price" id="oldPrice" style="display:none;">${product.oldPrice}€</span>
                    <span class="discount-badge" id="discountBadge" style="display:none;">-12%</span>
                </div>
                <p class="price-note">IVA incl. Con envío gratis</p>

                <!-- Descripción -->
                <div class="description-section">
                    <h3>Descripción</h3>
                    <p id="productDescription">${product.description}</p>
                </div>

                <!-- Especificaciones técnicas -->
                <div class="specs-section">
                    <h3>Especificaciones Técnicas</h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <span class="spec-label">Pantalla</span>
                            <span class="spec-value" id="specScreen">${product.screenSize}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Almacenamiento</span>
                            <span class="spec-value" id="specStorage">${product.storage}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">SO</span>
                            <span class="spec-value" id="specOS">${product.os}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Procesador</span>
                            <span class="spec-value" id="specProcessor">${product.processor}</span>
                        </div>
                    </div>
                </div>

                <!-- Disponibilidad -->
                <div class="availability-section">
                    <h3>Disponibilidad</h3>
                    <div class="availability-item">
                        <span class="dot green"></span>
                        <span id="availabilityOnline">${product.availability}</span>
                    </div>
                    <div class="availability-item">
                        <span class="dot green"></span>
                        <span id="deliveryDate">${product.delivery}</span>
                    </div>
                    <div class="availability-item">
                        <span class="dot brown"></span>
                        <span id="pickupInfo">Recogida en tienda disponible</span>
                    </div>
                </div>

                <!-- Botones de acción -->
                <div class="action-buttons">
                    <button class="btn-add-cart add-to-cart" dataId="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Añadir al carrito
                    </button>
                    
                </div>
            </div>
        </div>
    `;
    cardPopUp.innerHTML = html;
    llamarListeningAddToCart();
}

function renderCart() {
    const header = document.querySelector(".user-actions");
    const dif = document.createElement("div");
    dif.className = "cart-view";

    let html = `
        <div class="cart-container">
            <div class="cart-head">
                <h3>Tus añadidos</h3>
                <button onclick="displayCart()">X</button>
            </div>
            <ul class="cart-area">
            </ul>
        </div>`;

        {/* <div class="cart-foot">
                <h3>Tus añadidos</h3>
                <button onclick="displayCart()">X</button>
        </div> */}

    /* console.log("Este es un bloque: ",bloque); */


    dif.innerHTML = html;
    header.appendChild(dif);
}

if (mobileToggle && headerEl) {
    mobileToggle.addEventListener('click', () => {
        const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', String(!expanded));
        headerEl.classList.toggle('nav-open');
    });

    // Close mobile menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            headerEl.classList.remove('nav-open');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

function searchProducts(query) {
    if (query.trim() === "") {
        // Si el input está vacío, mostrar todos los productos
        renderProducts(phones);
    } else {
        // Filtrar productos por nombre, marca o características
        const results = phones.filter(phone => {
            const searchTerm = query.toLowerCase();
            return (
                phone.name.toLowerCase().includes(searchTerm) ||
                phone.brand.toLowerCase().includes(searchTerm) ||
                phone.os.toLowerCase().includes(searchTerm) ||
                phone.processor.toLowerCase().includes(searchTerm) ||
                phone.storage.toLowerCase().includes(searchTerm)
            );
        });
        
        renderProducts(results);
    }
    
    // Reasignar listeners después de renderizar
    llamarListeningFavIcon();
    llamarListeningAddToCart();
    llamarListeningCardPopUp();
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    searchProducts(query);
});

filterButtons.forEach(button => {

    button.addEventListener('click', () => {
        const brand = button.getAttribute('data-brand').toLocaleLowerCase();

        if (brand === 'all') {
            renderProducts(phones);
        } else {
            const filteredPhones = phones.filter(phone => phone.brand.toLowerCase() === brand);
            renderProducts(filteredPhones);
        }

        llamarListeningFavIcon();
        llamarListeningAddToCart();
        llamarListeningCardPopUp();
    });
});

discountButton.addEventListener('click', () => {
    const discountedPhones = phones.filter(phone => phone.discounted);
    renderProducts(discountedPhones);
});

renderProducts(phones);
renderCart(cart);