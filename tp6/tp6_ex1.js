function calcul_moyenne(){
    var n1=prompt("Donner la première note:");
    var n2=prompt("Donner la deuxième note:");
    var n3=prompt("Donner la troisième note:");
    var somme = Number(n1)+Number(n2)+Number(n3);
    document.write("Voici la somme: " +somme+"<br>");
    var moyenne=somme/3;
    document.write("Voici la moyenne : "+moyenne+"<br>");
if (moyenne<10)
document.write("Vous etes redoublant")
else
document.write("Vous etes Admis")
}

function test_age(){
    let age = prompt("Quelle est votre age ?");
    if(age<18){
        document.write("Vous etes mineur");
    }
    else{
        document.write('Vous etes majeur');
    }
}

function simple_affichage(){
    let name = prompt("Donner votre Prénom");
    let famillyName = prompt("Donner votre nom");
    document.write('<div style="margin:auto;width:300px;border:2px solid blue;">');
    document.write('Bonjour' +name+famillyName);
    document.write('</div>');
}

function test_couleur(){
    let c = prompt("Donner une couleur");
    if(c =="rouge" || c == "ROUGE" || c == "R"){
        document.body.style.background ="red";
    }
    else if(c=="bleu" ||c =="Bleu" || c =="B"){
document.body.style.background="blue";
}
   else {
    document.write("Couleur non comprise");

   }
}   
