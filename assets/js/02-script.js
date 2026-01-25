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
        
        /* element.classList.add('stepActive'); */
    });
});

console.log(steps);