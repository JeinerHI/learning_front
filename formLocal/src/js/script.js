const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

form.addEventListener('input', (event) => {
    const target = event.target;
    sessionStorage.setItem(target.id, target.value);
});

inputs.forEach(input => {
    if (sessionStorage.getItem(input.id)) {
        input.value = sessionStorage.getItem(input.id);
    }
});