function Total() {
    var a = document.getElementById("t3").value 
    var b = document.getElementById("t4").value
    var c = document.getElementById("t5").value 
    var d = document.getElementById("t6").value 
    
    t7.value = Number(a) * Number(c) * 0.05
    t8.value = Number(b) * Number(e) * 0.05
    t9.value =( Number(a) * Number(c) ) - (Number(a)*Number(c)) * 0.05
    t10.value = Number(b) * Number(e) - (Number(b)*Number(e)) * 0.05
    t11.value = t9.value + t10.value 
    
} 
