const contenedor = document.querySelector("#container");
const btnEnviar = document.querySelector("#enviarForm");
const searchInput = document.querySelector("#buscador");

const tarjetas = [];
let secuencia = 1;

const asignarIndice = () => {
    let actual = secuencia;
    secuencia++;
    return actual;
}

function crearTarjeta(nombre, detalle) {
    const id = asignarIndice();
    const html = document.createElement('li');
    html.classList.toggle(`cardNumber`);
    html.classList.toggle(`numeroTarjeta${id}`);
    html.innerHTML = `
        <h2>${nombre}</h2>
        <p>${detalle}</p>
        <button class="eliminar" aEliminar="${id}">Eliminar</button>
        <button class='coloreador'>Colorear</button>
    `;

    tarjetas.push({"id": id, "nodo": html});
}

function renderCards(tarjetas) {
    tarjetas.forEach((card) => contenedor.appendChild(card["nodo"]));
    llamarEscuchadores();
}

btnEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    const inputNombre = document.querySelector("#nombre");
    const nombre = inputNombre.value.toLowerCase();
    const inputDetalle = document.querySelector("#detalle");
    const detalle = inputDetalle.value.toLowerCase();

    if (!nombre) return;
    if (!detalle) return;

    crearTarjeta(nombre, detalle);

    inputNombre.value = "";
    inputDetalle.value = "";

    renderCards(tarjetas);
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    const filteredArray = tarjetas.filter((x) => x["nodo"].includes(query));
    renderCards(filteredArray);
});



function eliminar(id){ 
    tarjetas.splice((tarjetas.indexOf(tarjetas.find(p => p["id"] == id))),1);
    renderCards(tarjetas);
}

function llamarEscuchadores() {
    const cardAColorear = document.querySelectorAll(".cardNumber");
    cardAColorear.forEach((card) => {
        card.addEventListener("click", (event) => {
            if ((event.target.getAttribute("class")) == "coloreador") { event.currentTarget.classList.toggle("activar") }
        });
    });

    const eliminadores = document.querySelectorAll(".eliminar");
    eliminadores.forEach((btn) => btn.addEventListener("click", () => {
        eliminar(btn.getAttribute("aEliminar"));
    }));
}

renderCards(tarjetas);