const btnreservar1 = document.querySelector('.botonreservar1'); //boton que abre modal1
const btnreservar2 = document.querySelector('.botonreservar2');
const btnreservar3 = document.querySelector('.botonreservar3');
const modal1 = document.querySelector('.modal1'); //ventana modal 1
const modal2 = document.querySelector('.modal2'); //ventana modal 2
const modal3 = document.querySelector('.modal3'); //ventana modal 3
const span1 = document.querySelector('.cerrar');
const span2 = document.querySelector('.cerrar2');
const span3 = document.querySelector('.cerrar3');


//*********************************************************************************** */
//Acciones de botones

btnreservar1.addEventListener("click", modalReservar1);
span1.addEventListener("click", modalCerrar1);
window.addEventListener("click", modalCerrarFuera1);

btnreservar2.addEventListener("click", modalReservar2);
span2.addEventListener("click", modalCerrar2);
window.addEventListener("click", modalCerrarFuera2);

btnreservar3.addEventListener("click", modalReservar3);
span3.addEventListener("click", modalCerrar3);
window.addEventListener("click", modalCerrarFuera3);

//*********************************************************************************** */
//Funciones
//Modal1

function modalReservar1 () {
    modal1.style.display = "block";
}

//Cerrar el Modal 1

function modalCerrar1 () {
    modal1.style.display = "none";
}

//Cerrar el Modal 1 haciendo click fuera
function modalCerrarFuera1 () {
    if (event.target == modal1) {
    modal1.style.display = "none";
    }
}

//Modal 2

function modalReservar2 () {
    modal2.style.display = "block";
}

//Cerrar el Modal 1

function modalCerrar2 () {
    modal2.style.display = "none";
}

//Cerrar el Modal 1 haciendo click fuera
function modalCerrarFuera2 () {
    if (event.target == modal2) {
    modal2.style.display = "none";
    }
}

//Modal 3

function modalReservar3 () {
    modal3.style.display = "block";
}

//Cerrar el Modal 1

function modalCerrar3 () {
    modal3.style.display = "none";
}

//Cerrar el Modal 1 haciendo click fuera
function modalCerrarFuera3 () {
    if (event.target == modal3) {
    modal3.style.display = "none";
    }
}

//*********************************************************************************** */