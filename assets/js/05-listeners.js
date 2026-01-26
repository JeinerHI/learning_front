steps.forEach(element => {
    element.addEventListener('click', () => {
        pagina.textContent = (Array.prototype.indexOf.call(steps, element));
        initializePage();
    });
});

footerPagingBack.addEventListener('click', () => {
    if (pagina.textContent > 0) {
        pagina.textContent--;
        initializePage();
    }
});

footerPagingNext.addEventListener('click', () => {
    if (pagina.textContent < steps.length - 1) {
        pagina.textContent++;
        initializePage();
    }
});