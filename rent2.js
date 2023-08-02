
const btnhome1 = document.querySelector('.home1'); 
const btnpagar = document.querySelector('.botonpagar');
const modal4 = document.querySelector('.modal-dialog'); //ventana modal 3


//*********************************************************************************** */
//Acciones de botones


btnhome1.addEventListener("click", inicio);

btnpagar.addEventListener("click", abrirModal4);

//*********************************************************************************** */
//Funciones

// Modal 4

function abrirModal4 () {
  modal4.style.display = "block";
}

  // Volver al inicio
  function inicio () {
    self.open("./index.html");
  }

  // Abrir camara

//   function abrirCamara() {
//     // Obtenemos el elemento de video
//     let video = document.getElementById("video");
//     // Comprobamos si el navegador soporta la API de MediaDevices
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       // Solicitamos el stream de la cámara
//       navigator.mediaDevices.getUserMedia({ video: true })
//         .then(function(stream) {
//           // Asignamos el stream al elemento de video
//           video.srcObject = stream;
//           // Reproducimos el video
//           video.play();
//         })
//         .catch(function(error) {
//           // Si hay algún error, lo mostramos en la consola
//           console.error(error);
//         });
//     } else {
//       // Si el navegador no soporta la API, mostramos un mensaje de alerta
//       alert("Tu navegador no soporta el acceso a la cámara");
//     }
//   }

// //*********************************************************************************** */