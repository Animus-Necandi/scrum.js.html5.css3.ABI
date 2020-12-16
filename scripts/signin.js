

let userLastName = document.getElementById('nom');
let userName= document.getElementById('prenom');
let work = document.getElementById('poste');
let createEmail = document.getElementById('creation-email');
let createPassword = document.getElementById('creation-mdp');


// Stocker les informations dans le localStorage
function store() {
    localStorage.setItem('Nom', userLastName.value);
    localStorage.setItem('Prénom', userName.value);
    localStorage.setItem('Poste', work.value);
    localStorage.setItem('creation-email', createEmail.value);
    localStorage.setItem('creation-mdp', createPassword.value);

}
