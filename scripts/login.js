const loginAccount = document.getElementById('loginaccount');

loginAccount.addEventListener('submit', function(){

    // chercher dans le localStorage les données
    let storedName = localStorage.getItem('creation-email');
    let storedPw = localStorage.getItem('creation-mdp');

    // Entrer les données de la page connexion
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    

    // regarder si ce qu'il y a dans le localStorage et le même que les données de la page de connexion
    if(email == storedName && password == storedPw) {
        location.href = '/information.html';
        alert(`Bienvenue ${email}`);
        

    }else {

        alert(`Cette adresse email : ${email} n'existe pas ! Veuillez créer un compte.`);

    }
    
});



