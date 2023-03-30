
let siffra = 0;

function plusclick(){
    //console.log("click")
    
    siffra = siffra + 1
    document.getElementById("svar").innerHTML = siffra;
}

const minusknapp = document.getElementById("minusclick");
minusknapp.addEventListener("click", minusClick);

function minusClick(){
    siffra = siffra - 1;
    document.getElementById("svar").innerHTML = siffra
}