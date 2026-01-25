// Listener for each step to update progress bar and labels
steps.forEach(element => {
    element.addEventListener('click', () => {
        // Remove active class from all steps
        for (let i = 0; i < steps.length; i++) {
            steps[i].classList.remove('stepActive');
            stepsChecks[i].classList.remove('stepCheckActive');
            stepsChecks[i].innerHTML = "";
        }

        let nodoIndex = (Array.prototype.indexOf.call(steps, element));
        // Add active class to clicked step and the previous ones
        for (let i = 0; i <= nodoIndex; i++) {
            steps[i].classList.add('stepActive');
            stepsChecks[i].classList.add('stepCheckActive');
            stepsChecks[i].innerHTML = '✓';
        }

        switch (nodoIndex) {
            case 0:
                filler.style.width = '5%';
                filerLabel.textContent = '1 of 5 Completed';
                break;
            case 1:
                filler.style.width = '25%';
                filerLabel.textContent = '2 of 5 Completed';
                break;
            case 2:
                filler.style.width = '50%';
                filerLabel.textContent = '3 of 5 Completed';
                break;
            case 3:
                filler.style.width = '75%';
                filerLabel.textContent = '4 of 5 Completed';
                break;
            case 4:
                filler.style.width = '99%';
                filerLabel.textContent = '5 of 5 Completed';
                break;
        }
    });
});