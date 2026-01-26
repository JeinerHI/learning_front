const form = document.getElementById("formu");
const ejercicio1= form.querySelector("#ejercicio1");
const ejercicio2= form.querySelector("#ejercicio2");
const ejercicio3= form.querySelector("#ejercicio3");
const ejercicio4= form.querySelector("#ejercicio4");
const ejercicio5= form.querySelector("#ejercicio5");
const ejercicio6= form.querySelector("#ejercicio6");
const btnSubmit = form.querySelector('button[id=submit]');


function validadorInput(e, regExp){
    let controladorVacio;
    let coincide;
    (e.currentTarget.value === "") ? controladorVacio = true : controladorVacio = false;

    if (!controladorVacio) {
        coincide = regExp.test(e.currentTarget.value);
    } else {
        e.currentTarget.classList.remove("validado");
        e.currentTarget.classList.remove("noValidado");
        return;
    }

    if (coincide) {
        e.currentTarget.classList.add("validado");
        e.currentTarget.classList.remove("noValidado");
    } else {
        e.currentTarget.classList.remove("validado");
        e.currentTarget.classList.add("noValidado");
    }
} 

ejercicio1.addEventListener("input", (e) => { /* solo numeros */
    const regExp = /^\d+$/;
    validadorInput(e, regExp);
});

ejercicio2.addEventListener("input", (e) => { /* codigo postal */
    const regExp = /^\d{5}$/;
    validadorInput(e, regExp);
});

ejercicio3.addEventListener("input", (e) => { /* texto sin espacios */
    const regExp = /^[a-z]+$/;
    validadorInput(e, regExp);
});

ejercicio4.addEventListener("input", (e) => { /* Email estructura basica */
    const regExp = /^[a-z]+[@][a-z]+[\.][a-z]+$/;
    validadorInput(e, regExp);
});

ejercicio5.addEventListener("input", (e) => { /* telefono */
    const regExp = /^\d{9,12}$/;
    validadorInput(e, regExp);
});

ejercicio6.addEventListener("input", (e) => { /* solo espacios */
    const regExp = /^\s+$/;
    validadorInput(e, regExp);
});

btnSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    if (enviar) {

    } else {
        
    }

});