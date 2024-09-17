
var btn1 = document.getElementById("botao01")
var btn2 = document.getElementById("botao02")
var btn3 = document.getElementById("botao03")

function mudarcor(x){
    if(x == 1){
        document.body.style.backgroundColor = "red";
    }
    else if (x == 2){
        document.body.style.backgroundColor = "green";
    }
    else if (x == 3){
        document.body.style.backgroundColor = "blue";
    }
    else {
        alert("Porfavor selecione algo válido")
    }
}