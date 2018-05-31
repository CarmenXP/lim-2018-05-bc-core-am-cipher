window.cipher = {
    // Creando objeto y funcion 
    encode: (offset, string) => {
      let numeroAscii;
      let nuevonumeroAscii;
      let letterAscii;
      let textcod = '';
      for (i = 0; i < string.length; i++) {
        numberAscii = string.charCodeAt(i); // asigno una variable donde obtenga una caja que se
        // almacene un texto y extraiga la posición ascii de cada letra que me da el arreglo(conjunto de espacios)
        if (numberAscii >= 65 && numberAscii <= 90) {
          newnumberAscii = (numberAscii - 65 + offset) % 26 + 65;
          letterAscii = String.fromCharCode(newnumberAscii);
      