function Addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    t3.value = c;

}
function Soustraction() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    t3.value = c;
}
function Multiplication() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    t3.value = c;
}
function Division() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    t3.value = c;
}
function Parite() {
    var a = document.getElementById("t3").value;
    if(a%2==0){
        t4.value = "Pair"
    }
    else{
        t4.value = "Impair"
    }
}
function Permute() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = a
    t1.value = b
    t2.value = c
}


    


