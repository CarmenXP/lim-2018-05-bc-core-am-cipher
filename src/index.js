
//
// Asignamos todas las Variables 
// Variable que permitirá obtener el texto de entrada del elemento mensaje
let mensajeUsuario;
// Variable que permitirá obtener el numero de posicion del elemento number
let numeroPosiciones;
// Variable que permitirá ejecutar un evento al hacer click en botón encode
let btnCifrar = document.getElementById('encode');
// Variable que permitirá ejecutar un evento al hacer click en botón decode
let btnDescifrar = document.getElementById('decode');
////Creamos una variable donde se mostrara el mensaje Cifrado-Descifrado
let mensajeCiyDe= document.getElementById('respuesta')
// Juntamos los eventos correspondiente a los botones de Encode, Decode.
// Boton Encode
btnCifrar.addEventListener('click', ()=> {
  //Creamos una variable donde se mostrara el mensaje cifrado
  mensajeUsuario = document.getElementById('escribir').value;
  numeroPosiciones=document.getElementById('offset').value;
  cipher.encode(offset.value, mensajeUsuario);
  document.getElementById('respuesta').innerHTML = btnCifrar;
  
})
//Boton Decode
btnDescifrar.addEventListener('click', function () {
  //Creamos una variable donde se mostrara el mensaje cifrado
  mensajeUsuario = document.getElementById('escribir').value;
  numeroPosiciones=document.getElementById('offset').value;
  cipher.decode(offset.value,mensajeUsuario);
  document.getElementById('respuesta').innerHTML = btnDescifrar;
});
