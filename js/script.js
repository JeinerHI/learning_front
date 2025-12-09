/**
 * This function calls the function renderCarrito() at the end, cause this one itself only adds to the array of the cart
   * @param {int }id - This parameter refers to the id passed as an attribute to the button add to cart
*/
function agregar(id) { //? Executed for an element not rendered
    product = phones.find(x => x.id === id)

    /* const itemInCar = cart.find(p => p.id == id); */

    if (cart.find(x => x.id == id)) {
        gtThan(id);
        console.log("This is the one working");
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    qCart.textContent = cart.reduce((acc, x) => acc + x.quantity, 0);
    renderCarrito(cart);
}

/**
   * @param {int }id - This parameter refers to the id passed as an attribute to the button add to cart
*/
function lwThan(id) { //? Executed for an element not rendered

    const item = cart.find(p => p.id == id);

    if (item.quantity > 1) { item.quantity--; }
    else {
        eliminar(id);
    }

    qCart.textContent = cart.reduce((acc, x) => acc + x.quantity, 0);
    renderCarrito(cart);
}

/**
   * @param {int}id - This parameter refers to the id passed as an attribute to the button add to cart
*/
function gtThan(id) { //? Executed for an element not rendered
    const item = cart.find(p => p.id == id);

    if (!item) {
        console.log("problemas al encontrar el producto en el array de carrito")
    } else {
        item.quantity++;
    }

    qCart.textContent = cart.reduce((acc, x) => acc + x.quantity, 0);
    renderCarrito(cart);
}

/**
   * @param {int }id - This parameter refers to the id passed as an attribute to the button add to cart
*/
function eliminar(id) { //! Executed for an element not rendered, but one inside
    /* console.log(cart.indexOf(cart.find(p => p.id == id))); */
    cart.splice((cart.indexOf(cart.find(p => p.id == id))), 1);

    qCart.textContent = cart.reduce((acc, x) => acc + x.quantity, 0);
    renderCarrito(cart);

    const butonOnPage = document.querySelector(`#${id}`);
    butonOnPage.textContent = "Añadir al carrito";
    butonOnPage.classList.toggle('addedToCart');

}

/**
   * The function itself just displays the cart when clicking on the cart on top right
   * @param container - This one refers to the biggest father on the cart rendering, the one hidden
   * @param cuerpo - This one refers to the div covering the rest of the screen with blur
*/
function displayCart() { //? Executed for an element not rendered: 
    /* renderCart(); */
    const container = document.querySelector(".cart-view");
    container.classList.toggle("active");

    cuerpo = document.querySelector("#capa");
    cuerpo.classList.toggle("blur");
}

/**
 * This one renders each item added to the cart array
    * @param {array} carrito - Will be the array of the cart, that's constantly changing when doing cruds
    * @param cartContainer - This one refers to the area after the header of the cart window, where each item will be rendered
    * @param i - Will be each item to render
*/
const renderCarrito = (carrito) => { //? Executed for an element not rendered 
    const cartContainer = document.querySelector(".cart-area");
    cartContainer.innerHTML = "";

    carrito.forEach(elemento => {
        let li = document.createElement("li");
        li.innerHTML = (`<span class="bloque">
                            <button onclick="eliminar('${elemento.id}')">X</button>
                            <img src="${elemento.image}" alt="">
                            <span>${elemento.name}</span>
                            <span>${elemento.price}€</span>
                            <div class="cart-block-handlers">
                                <button class="sumCart" onclick="lwThan('${elemento.id}')">&minus;</button>
                                <span>${elemento.quantity}</span>
                                <button class="redCart" onclick="gtThan('${elemento.id}')">&plus;</button>
                            </div>
                        </span>
                    `);

        cartContainer.appendChild(li);  // * Funciona
    })
}

function llamarListeningFavIcon() {

    const favIcon = document.querySelectorAll('.favIcon');

    favIcon.forEach((heart) => heart.addEventListener('click', (event) => {
        event.stopPropagation();
        event.target.classList.toggle('favorite');
    }));
}

function llamarListeningAddToCart() {
    const addToCart = document.querySelectorAll('.add-to-cart');
    console.log(addToCart);
    addToCart.forEach((btn) => btn.addEventListener('click', (event) => {
        event.stopPropagation();

        let idBtn = btn.getAttribute("id")||btn.getAttribute("dataId");

        if (cart.find(x => x.id == idBtn)) return;

        agregar(idBtn);

        /* event.target.textContent="Agregado &#9989"; */
        event.target.innerHTML = `Agregado <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>`;
        event.target.classList.toggle('addedToCart');
    }));
}

function llamarListeningCardPopUp() {
    // Listener to display the pop up of the detailed card
    const cardContent = document.querySelectorAll(".product-card");
    cardContent.forEach(card => {
    let id = card.getAttribute("card");
    card.addEventListener("click", () => {
        renderPopUp(id);
        cardPopUpOverlay.classList.toggle("active");
        cardPopUp.classList.toggle("active");
        
        let closeBtn = document.getElementById("closeBtn");
        // Función para cerrar el pop-up
        closeBtn.addEventListener("click", () => {
            cardPopUpOverlay.classList.toggle("active");
            cardPopUp.classList.toggle("active");
        });
    });
});
}


llamarListeningFavIcon();
llamarListeningAddToCart();
llamarListeningCardPopUp();