const renderHeader = (pagina) => {
    for (let i = 0; i < steps.length; i++) {
        steps[i].classList.remove('stepActive');
        stepsChecks[i].classList.remove('stepCheckActive');
        stepsChecks[i].innerHTML = "";
    }

    switch (pagina) {
        case 0:
            steps[0].classList.add('stepActive');
            stepsChecks[0].classList.add('stepCheckActive');
            stepsChecks[0].innerHTML = '✓';
            break;
        case 1:
            for (let i = 0; i <= 1; i++) {
                steps[i].classList.add('stepActive');
                stepsChecks[i].classList.add('stepCheckActive');
                stepsChecks[i].innerHTML = '✓';
            }
            break;
        case 2:
            for (let i = 0; i <= 2; i++) {
                steps[i].classList.add('stepActive');
                stepsChecks[i].classList.add('stepCheckActive');
                stepsChecks[i].innerHTML = '✓';
            }
            break;
        case 3:
            for (let i = 0; i <= 3; i++) {
                steps[i].classList.add('stepActive');
                stepsChecks[i].classList.add('stepCheckActive');
                stepsChecks[i].innerHTML = '✓';
            }
            break;
        case 4:
            for (let i = 0; i <= 4; i++) {
                steps[i].classList.add('stepActive');
                stepsChecks[i].classList.add('stepCheckActive');
                stepsChecks[i].innerHTML = '✓';
            }
            break;
    }
}

function renderHeaderFooter(pagina) {
    switch (pagina) {
        case 0:
            renderHeader(pagina);
            footerImg.src = "assets/img/aplication-data-footer-image";
            filler.style.width = '5%';
            filerLabel.textContent = '1 of 5 Completed';
            break;
        case 1:            
            renderHeader(pagina);
            footerImg.src = "assets/img/tax-residency-footer-image";
            filler.style.width = '25%';
            filerLabel.textContent = '2 of 5 Completed';
            break;
        case 2:            
            renderHeader(pagina);
            footerImg.src = "assets/img/aplication-data-footer-image";
            filler.style.width = '50%';
            filerLabel.textContent = '3 of 5 Completed';
            break;
        case 3:            
            renderHeader(pagina);
            footerImg.src = "assets/img/investability-footer-image";
            filler.style.width = '75%';
            filerLabel.textContent = '4 of 5 Completed';
            break;
        case 4:            
            renderHeader(pagina);
            footerImg.src = "assets/img/review-footer-image";
            filler.style.width = '99%';
            filerLabel.textContent = '5 of 5 Completed';
            break;
    }
}

function contentStyleSheet(pagina) {
    switch (pagina) {
        case 0:
            contentStyleSheetLink.href = "assets/css/05-content-step1.css";
            break;
        case 1:
            contentStyleSheetLink.href = "assets/css/05-content-step2.css";
            break;
        case 2:
            contentStyleSheetLink.href = "assets/css/05-content-step3.css";
            break;
        case 3:
            contentStyleSheetLink.href = "assets/css/05-content-step4.css";
            break;
        case 4:
            contentStyleSheetLink.href = "assets/css/05-content-step5.css";
            break;
    }
}