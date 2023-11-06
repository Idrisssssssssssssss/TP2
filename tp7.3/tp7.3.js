function moyenne()
{
    var note1 = document.getElementById("n1").value;
    var note2 = document.getElementById("n2").value;
    var note3 = document.getElementById("n3").value;
    var coef1 = document.getElementById("c1").value;
    var coef2 = document.getElementById("c2").value;
    var coef3 = document.getElementById("c3").value;
    var m = ((Number(note1)*Number(coef1)+Number(note2)*Number(coef2)+Number(note3)*Number(coef3))/(Number(coef1)+Number(coef2)+Number(coef3)));
    moy.value = m;
    if (m < 10)
        resultat.value = "Redoublant";
    else if (m < 12)
        resultat.value = "Admis passable";
    else if (m < 14)
        resultat.value = "Admis assez bien";
    else if (m < 16)
        resultat.value = "Admis bien";
    else if (m <= 20)
        resultat.value = "Admis très bien";
    else if (m > 20)
        resultat.value = "Une erreur est survenue";
   
}