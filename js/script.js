// Mostrar y ocultar Texto en botones de section-2

let mostrarTexto_btn = document.getElementById('mostrarTexto_btn');

let ocultarTexto = document.getElementById('ocultarTexto');

mostrarTexto_btn.addEventListener('click', ToggleText);

function ToggleText() {
    ocultarTexto.classList.toggle('mostrar');

    if(ocultarTexto.classList.contains('mostrar')) {
        mostrarTexto_btn.innerHTML = 'Leer menos';
    }
    else {
        mostrarTexto_btn.innerHTML = 'Leer más';
    }   
}

let verInfo = document.getElementById('mostrar_cartas');

let verParrafo1 = document.getElementById('verParrafo1');
let verParrafo2 = document.getElementById('verParrafo2');
let verParrafo3 = document.getElementById('verParrafo3');
let verParrafo4 = document.getElementById('verParrafo4');
let verParrafo5 = document.getElementById('verParrafo5');
let verParrafo6 = document.getElementById('verParrafo6');


verInfo.addEventListener('click', ToggleCard);

function ToggleCard() {
    let arrayCartas =[
        verParrafo1.classList.toggle('mostrar-carta'),
        verParrafo2.classList.toggle('mostrar-carta'),
        verParrafo3.classList.toggle('mostrar-carta'),
        verParrafo4.classList.toggle('mostrar-carta'),
        verParrafo5.classList.toggle('mostrar-carta'),
        verParrafo6.classList.toggle('mostrar-carta')];
 

}