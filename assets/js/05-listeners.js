steps.forEach(element => {
    element.addEventListener('click', () => {
        pagina.textContent = (Array.prototype.indexOf.call(steps, element));
        renderHeaderFooter(parseInt(pagina.textContent));
        contentStyleSheet(parseInt(pagina.textContent));
    });
});

footerPagingBack.addEventListener('click', () => {
    if (pagina.textContent > 0) {
        pagina.textContent--;
        renderHeaderFooter(parseInt(pagina.textContent));
    }
});

footerPagingNext.addEventListener('click', () => {
    if (pagina.textContent < steps.length - 1) {
        pagina.textContent++;
        renderHeaderFooter(parseInt(pagina.textContent));
    }
});