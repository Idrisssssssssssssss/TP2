function seconnecter(){
    var login = prompt("Donner votre nom d'utilisateur")
    var password = prompt("Entrer votre mot de passe")
    if(login == "admin" && password == "admin"){
        document.write("Bienvenue :" + login);
    }
    else{
        alert("Accès refusé")
    }
}