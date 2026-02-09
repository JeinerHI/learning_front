paletteChanger.addEventListener('click', (e) => {
    let target = e.target;
    let selector = paletteChanger.querySelector('.color_options');

    switch (target.id) {
        case ('palette_icon', 'palette_icon_img'):
            selector.classList.toggle('pallette-active');
            break;
        case 'palette1':
            localStorage.setItem('palette', 'palette1');
            document.documentElement.style.setProperty('--main-color', 'var(--purple)');
            break;
        case 'palette2':
            localStorage.setItem('palette', 'palette2');
            document.documentElement.style.setProperty('--main-color', 'var(--orange)');
            break;
        case 'palette3':
            localStorage.setItem('palette', 'palette3');
            document.documentElement.style.setProperty('--main-color', 'var(--green)');
            break;
    }

    initializePage();
});

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

pagina.textContent=0;
initializePage();