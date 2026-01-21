const form = document.getElementById("formu");
const campoNombre = form.querySelector(("#nombre"));
const campoEmail = form.querySelector(("#email"));
const campoDni = form.querySelector(("#dni"));
const btnSubmit = form.querySelector('button[id=submit]');


const regExpNombre = /^[A-Za-z]+ [A-Za-z]+$/;
campoNombre.addEventListener("input", () => {
    let controladorVacio;
    let coincide;
    (campoNombre.value === "") ? controladorVacio = true : controladorVacio = false;

    if (!controladorVacio) {
        coincide = regExpNombre.test(campoNombre.value);
    } else {
        campoNombre.classList.remove("validado");
        campoNombre.classList.remove("noValidado");
        return;
    }

    if (coincide) {
        campoNombre.classList.add("validado");
        campoNombre.classList.remove("noValidado");
    } else {
        campoNombre.classList.remove("validado");
        campoNombre.classList.add("noValidado");
    }
});

const regExpEmail = /^[a-z]+[@](gmail)[\.](com)$/;
campoEmail.addEventListener("input", () => {
    let controladorVacio;
    let coincide;
    (campoEmail.value === "") ? controladorVacio = true : controladorVacio = false;

    if (!controladorVacio) {
        coincide = regExpEmail.test(campoEmail.value);
    } else {
        campoEmail.classList.remove("validado");
        campoEmail.classList.remove("noValidado");
        return;
    }

    if (coincide) {
        campoEmail.classList.add("validado");
        campoEmail.classList.remove("noValidado");
    } else {
        campoEmail.classList.remove("validado");
        campoEmail.classList.add("noValidado");
    }
});

const regExpDni = /^[0-9]{6}[A-Za-z]$/;
campoDni.addEventListener("input", () => {
    let controladorVacio;
    let coincide;
    (campoDni.value === "") ? controladorVacio = true : controladorVacio = false;

    if (!controladorVacio) {
        coincide = regExpDni.test(campoDni.value);
    } else {
        campoDni.classList.remove("validado");
        campoDni.classList.remove("noValidado");
        return;
    }

    if (coincide) {
        campoDni.classList.add("validado");
        campoDni.classList.remove("noValidado");
    } else {
        campoDni.classList.remove("validado");
        campoDni.classList.add("noValidado");
    }
});

btnSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    if (enviar) {

    } else {
        
    }

});