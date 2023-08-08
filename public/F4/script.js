function form0(){
    document.getElementById("formulario").reset();
}

function procesarRespuestas(){
    let total = 5;
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["a", "c", "a", "a", "a"];

    for (let i=1; i<=total; i++){
        if (myForm["r"+i].value == null || myForm["r"+i].value ==""){
            alert("debe responder todas las preguntas");
            return false;
        } else {
            if(myForm["r"+i].value ===respuestasCorrectas[i-1]){
                puntos++;
            }
        }
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML= "Nota: "+ puntos+ " puntos de "+total+"posibles ";
    return false;
}