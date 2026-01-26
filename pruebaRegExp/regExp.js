const Expresiones = {
    ejercicio1: /^\d+$/,
    ejercicio2: /^\d{5}$/,
    ejercicio3: /^[a-z]+$/,
    ejercicio4: /^[a-z]+[@][a-z]+[\.][a-z]+$/,
    ejercicio5: /^\d{9,12}$/,
    ejercicio6: /^\s+$/
}

const form = document.getElementById("formu");
const btnSubmit = form.querySelector("#submit");

const validadorInput = (e) => {
    if (!(e.target.value === "")) {
        if ((Expresiones[e.target.id].test(e.target.value))) {
            e.target.classList.remove("noValidado");
            e.target.classList.add("validado");
            e.target.closest(".campo").querySelector(".err_message").textContent = "";
        } else {
            e.target.classList.remove("validado");
            e.target.classList.add("noValidado");
            e.target.closest(".campo").querySelector(".err_message").textContent = `Ingresa un valor valido para ${e.target.id}`;
        }
    } else {
        e.target.classList.remove("validado");
        e.target.classList.remove("noValidado");
        e.target.closest(".campo").querySelector(".err_message").textContent = "";
        return;
    }
}

form.addEventListener("input", (e) => {
    validadorInput(e);
    }
);

btnSubmit.addEventListener("submit", (e) => {
    
});
