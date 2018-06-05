window.cipher = {
    // Declaro los objetos 
    encode: (offset, string) => {
      let codigoAscii;
      let nuevoAscii;
      let letraAscii;
      let textoCodificado = '';
    
      for (let i = 0; i < string.length; i++) {
        codigoAscii= string.charCodeAt(i); 
        if (codigoAscii >= 65 && codigoAscii <= 90) 
        {
          nuevoAscii = (codigoAscii - 65 + offset) % 26 + 65;
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
    
      for (let i = 0; i < string.length; i++) {
        codigoAscii= string.charCodeAt(i); 
        if (codigoAscii >= 65 && codigoAscii <= 90) {
          nuevoAscii = (codigoAscii + 65 - offset) % 26 + 65;
          letraAscii = String.fromCharCode(nuevoAscii);
        }

         textoCodificado=textoCodificado.concat(letraAscii); 
      }

      return textoCodificado;
    }


  }


    