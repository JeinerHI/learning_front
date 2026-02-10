const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

form.addEventListener('input', (event) => {
    const target = event.target;
    localStorage.setItem(target.id, target.value);
    input.value = localStorage.getItem('email') || ''; 
});

inputs.forEach(input => {
    if (localStorage.getItem(input.id)) {
        input.value = localStorage.getItem(input.id);
    }
});