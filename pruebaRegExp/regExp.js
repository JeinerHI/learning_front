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

form.addEventListener("input", (e) => {
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
});

btnSubmit.addEventListener("submit", (e) => {
    
});

/* Ejercicios REPLACE  */
/* Dado el siguiente texto:
let texto = "Juan Pérez Gómez";
Usar la siguiente expresión regular:
/\s+/g
Objetivo:
• eliminar los espacios duplicados
• dejar un solo espacio entre palabras 

let text = "Juan  Pérez  Gómez";
console.log(text.replace(/\s+/g," "));*/



/* Ejercicio 2 – Eliminar caracteres no numéricos
Dado el siguiente texto:
let telefono = "+34 612-45 78 90";
Usar la siguiente expresión regular:
/\D/g
Objetivo:
• dejar únicamente los números 

let text = "+34 612-45 78 90";
console.log(text.replace(/\D/g,""));*/



/* Ejercicio 3 – Eliminar caracteres especiales
Dado el siguiente texto:
let usuario = "juan_perez!!2024";
Usar la siguiente expresión regular:
/[^\w]/g
Objetivo:
• eliminar caracteres especiales
• permitir solo letras y números */
let text = "juan_perez!!2024";
console.log(text.replace(/[^\w]/g,""));