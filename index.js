// =========================== Color picker =================

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const clavier = document.querySelector(".clavier");
    const ecran = document.querySelector(".ecran");
    const switchCol = document.querySelector(".switch");
    const touche = document.querySelectorAll(".btn");
    const equal = document.querySelector("#equaleT");
    const resTouch = document.querySelectorAll("#res1");
    const themeOne = document.querySelector("#one");
    const themeTwo = document.querySelector("#two");
    const themeThree = document.querySelector("#three");

    themeOne.addEventListener("change", function () {
        body.style.backgroundColor = "hsl(222, 26%, 31%)"; //arrière plan
        body.style.color = "hsl(0, 0%, 100%) ";
        clavier.style.backgroundColor = "hsl(223, 31%, 20%)";
        switchCol.style.backgroundColor = "hsl(223, 31%, 20%)";
        ecran.style.backgroundColor = "hsl(224, 36%, 15%)";

        touche.forEach(element1 => {
            element1.setAttribute("style", "background-color:hslhsl(185, 42%, 37%); color:hsl(60, 10%, 19%)");
        });

        equal.setAttribute("style", "background-color:hsl(25, 98%, 40%); color:white");

        resTouch.forEach(element => {
            element.setAttribute("style", "background-color:hsl(185, 42%, 37%); color:white");
        });
    });

    themeTwo.addEventListener("change", function () {
        body.style.backgroundColor = "hsl(0, 0%, 90%)"; //arrière plan
        body.style.color = "hsl(60, 10%, 19%)";
        clavier.style.backgroundColor = "hsl(0, 5%, 81%)";
        switchCol.style.backgroundColor = "hsl(0, 5%, 81%)";
        ecran.style.backgroundColor = "hsl(0, 0%, 93%)";

        touche.forEach(element1 => {
            element1.setAttribute("style", "background-color:hslhsl(185, 42%, 37%); color:hsl(60, 10%, 19%)");
        });

        equal.setAttribute("style", "background-color:hsl(25, 98%, 40%); color:white");

        resTouch.forEach(element => {
            element.setAttribute("style", "background-color:hsl(185, 42%, 37%); color:white");
        });
    });

    themeThree.addEventListener("change", function () {
        body.style.backgroundColor = "hsl(268, 75%, 9%)"; //arrière plan
        body.style.color = "hsl(52, 100%, 62%)";
        clavier.style.backgroundColor = "hsl(268, 71%, 12%)";
        switchCol.style.backgroundColor = "hsl(268, 71%, 12%)";
        ecran.style.backgroundColor = "hsl(268, 71%, 12%)";

        touche.forEach(element1 => {
            element1.setAttribute("style", "background-color:hsl(281, 89%, 26%); color:hsl(52, 100%, 62%)");
        });

        equal.setAttribute("style", "background-color:hsl(176, 100%, 44%); color:white");

        resTouch.forEach(element => {
            element.setAttribute("style", "background-color:hsl(268, 47%, 21%); color:white");
        });

    });

    themeOne.dispatchEvent(new Event("change"));
});

// Hassane Abdel-Razak
// =========================== Color picker =================


// Variables pour stocker les opérations et les valeurs
let currentValue = '';
let previousValue = '';
let selectedOperator = '';

// Fonction pour afficher le contenu dans l'écran
function afficherContenu() {
    const ecran = document.getElementById('result');
    ecran.textContent = currentValue;
}

// Fonction pour écrire un chiffre ou un point dans l'écran
function ecrire(chiffre) {
    if (chiffre === '.' && currentValue.includes('.')) {
        return; // Empêche l'ajout de plusieurs points décimaux
    }
    currentValue += chiffre;
    afficherContenu();
}

// Fonction pour effacer le contenu de l'écran
function reset() {
    currentValue = '';
    afficherContenu();
}
// Hassane Abdel-Razak
// Fonction pour effacer le dernier caractère
function del() {
    currentValue = currentValue.slice(0, -1);
    afficherContenu();
}

// Fonction pour gérer les opérations
function effectuerOperation(operator) {
    if (currentValue !== '') {
        previousValue = currentValue;
        currentValue = '';
        selectedOperator = operator;
    }
}

// Fonction pour calculer le résultat
function calculer() {
    if (previousValue !== '' && currentValue !== '') {
        switch (selectedOperator) {
            case '+':
                currentValue = (parseFloat(previousValue) + parseFloat(currentValue)).toString();
                break;
            case '-':
                currentValue = (parseFloat(previousValue) - parseFloat(currentValue)).toString();
                break;
            case 'x':
                currentValue = (parseFloat(previousValue) * parseFloat(currentValue)).toString();
                break;
            case '÷':
                if (currentValue === '0') {
                    currentValue = 'error';
                    break;
                } else {
                    currentValue = (parseFloat(previousValue) / parseFloat(currentValue)).toString();
                    break;
                }


            // Ajoutez d'autres cas pour les opérations * et ÷ si nécessaire
        }
        previousValue = '';
        selectedOperator = '';
        afficherContenu();
    }
}
// Hassane Abdel-Razak
// Attacher les fonctions aux boutons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (!isNaN(parseFloat(buttonText)) || buttonText === '.') {
            ecrire(buttonText);
        } else if (buttonText === 'DEL') {
            del();
        } else if (buttonText === 'RESET') {
            reset();
        } else if (buttonText === '=') {
            calculer();

        } else {
            effectuerOperation(buttonText);
        }
    });
});


