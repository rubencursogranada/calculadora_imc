//inicializamos con window.onload para que jacascript se espere a que cargue la página antes de empezar a operar. Esto no permite ejecutar nada hasta que no se cargue la página completamente
window.onload = iniciar;

function iniciar(){//En esta primera función llamamos al botón con el que vamos a calcular y le añadimos el evento clic.
    let btnCalcular = document.getElementById("btnCalcular"); //Llamamos al elemento html del botón y lo guardamos en una variable, a esta variable se le suele poner el mismo nombre del ID del elemento al que señala.
    btnCalcular.addEventListener("click", clickBtncalcular);
}
function clickBtncalcular(){//esta función se ejecuta cuando hago click en el botón
    let txtPeso = document.getElementById("txtPeso");
    let peso = txtPeso.value;//esta variable equivale al prompt

    let txtAltura = document.getElementById("txtAltura");
    let altura = txtAltura.value;

    let imc = peso / (altura * altura);
    let redondeo = Math.round(imc);

    let resultado = document.getElementById("resultadoImc")

    if (resultado){
        resultado.innerHTML = `Tu índice de masa corporal es: ${redondeo}`
    }
    
}