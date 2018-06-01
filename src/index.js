// Juntamos los eventos correspondiente a los botones de Encode, Decode.

 let textoCifrado = () => {
  let mensajeUsuario = document.getElementById('escribir').value; // asigno variable donde usuario pondrà texto
  let numeroPosiciones=parseInt(document.getElementById('offset').value);
 let textomodificado =cipher.encode(numeroPosiciones,mensajeUsuario);
 document.getElementById('result').innerHTML=textomodificado;
}
document.getElementById('encode').addEventListener('click',textoCifrado);



let textoDesCifrado = () => {
  let mensajeUsuario = document.getElementById('escribir').value; // asigno variable donde usuario pondrà texto
  let numeroPosiciones=parseInt(document.getElementById('offset').value);
 let textomodificado =cipher.decode(numeroPosiciones,mensajeUsuario);
 document.getElementById('result').innerHTML=textomodificado;
}
document.getElementById('decode').addEventListener('click',textoDesCifrado);