function seconnecter() {
    var login = prompt("Donner votre nom d'utilisateur");
    var mdp = prompt("Donner votre mot de passe");
    if (login == "admin" && mdp == "admin") {
        document.write(`Bienvenue ${login}`);
    }
    else {
        alert("Accès refusé");
    }
}

function seconnecter2() {
    window.location.href='https://idrisssssssssssssss.github.io/TP2/';
}

function cdc() {
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaîne contient " + chaine.length + " caractères" + "<br>");
    document.write("La première lettre est " + chaine.substring(0,1) + "<br>");
}

function swich() {
    var color = prompt("Entrez une couleur | 🟢 🔵 🟣 🔴");
    switch (color) {
        case "rouge":
            document.body.style.background = "red";
            break;
        case "ROUGE":
            document.body.style.background = "red";
            break;
    case "Rouge":
            document.body.style.background = "red";
            break;
        case "bleu":
            document.body.style.background = "blue";
            break;
    case "Bleu":
            document.body.style.background = "blue";
            break;
        case "BLEU":
            document.body.style.background = "blue";
            break;
        case "violet":
            document.body.style.background = "purple";
            break;
    case "Violet":
            document.body.style.background = "purple";
            break;
        case "VIOLET":
            document.body.style.background = "purple";
            break;
        case "vert":
            document.body.style.background = "green";
            break;
    case "Vert":
            document.body.style.background = "green";
            break;
        case "VERT":
            document.body.style.background = "green";
            break;
    
        default:
            alert("Couleur non prise en charge, veuillez choisir parmis : Bleu, Violet, Rouge et Vert");
    }
}

function affichagetab() {
    document.write('<table border=2px width=30%>');
    for(var i = 0; i<=5; i++) {
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function affichagetab2() {
    var count = prompt("Entrez le nombre de lignes pour votre tableau");
    document.write('<table border=2px width=30%');
    for(var i = 1; i <= count; i++) {
        document.write(`<tr><td>${i}</td><td>*</td><td>*</td></tr>`);
    }
    document.write("</table>");
}

function seconnecter3(){
    var i = 0;
    do {
        var id= prompt("Entrez votre nom d'utilisateur");
        var mdp = prompt("Entrez votre mot de passe");
        if (id == "admin" && mdp =="admin")
        {
            document.write(`Bienvenue ${id}`);
            break;
        }
        else
        alert("Accès refusé");
    i +=1;
    }while (i<3);
    if (i==3)
    alert("Delai dépassé");
    }

function ajoutligne(){
    window.location.href='https://idrisssssssssssssss.github.io/TP2/';
}

function bonus(){

    var testa = ""
    var total = ""
    var prixttc = 0
    
    do{
        var article = prompt("Votre article")
        var price = prompt("Le prix")
        var qty = prompt("La quantité")

        alert(`Vos ${article} vous coûterons ${price * qty}€`)
        total = Number(price)*Number(qty)
        prixttc += total
        testa += ("Article : " +article+" <br> Prix : "+price +"€"+ " <br> Quantité : "+qty+ " <br> Total : "+total+"€"+"<br><br><br>")
        alert('Le coût total de vos articles est de ' + prixttc + "€")

        next = prompt("Voulez-vous ajouter d'autres articles ? (Oui/Non)");
    }
    while(next != "Non");
    document.write(testa);
    document.write("Prix TTC : "+prixttc+"€");


}