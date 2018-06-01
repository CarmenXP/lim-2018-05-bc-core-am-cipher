window.cipher = {
    // Declaro los objetos 
    encode: (offset, string) => {
      let codigoAscii;
      let nuevoAscii;
      let letraAscii;
      let textoCodificado = '';
    
      for (i = 0; i < string.length; i++) {
        numeroAscii = string.charCodeAt(i); 
        if (numeroAscii >= 65 && numberAscii <= 90) {
          nuevoAscii = (numeroAscii - 65 + offset) % 26 + 65;
          letraAscii = String.fromCharCode(nuevoAscii);
        }

         textoCodificado=textoCodificado.concat(letraAscii); 
      }

      return textoCodificado;

    },
    decode: (offset, string) => {
      let codigoAscii;
      let nuevoAscii;
      let letraAscii;
      let textoCodificado = '';
      for (i = 0; i < string.length; i++) {
        numeroAscii = string.charCodeAt(i); 
        if (numeroAscii >= 65 && numberAscii <= 90) {
          nuevoAscii = (numeroAscii + 65 - offset) % 26 + 65;
          letraAscii = String.fromCharCode(nuevoAscii);
        }

         textoCodificado=textoCodificado.concat(letraAscii); 
      }

      return textoCodificado;

    },


  }


    