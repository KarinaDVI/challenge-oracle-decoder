var input = document.getElementById("mensaje");
    var buttonEncriptar = document.getElementById("encriptar");
    buttonEncriptar.onclick = encriptar;
    var buttonDesencriptar = document.getElementById("desencriptar");
    buttonDesencriptar.onclick = desencriptar;
    var buttonCopiado = document.getElementById("copiado");
    buttonCopiado.onclick = copiar;
    var buttonLimpiar = document.getElementById("limpiar");
    buttonLimpiar.onclick = limpiar;
    var advertencia=document.getElementById("advertencia");

    arrVocal = ["a", "e", "i", "o", "u"];
    arrReplace = ["ai", "enter", "imes", "ober", "ufat"];

    function encriptar() {
      var mensajeIngresar = input.value;
      var mEncriptado = "";

      if (!input.checkValidity()) {
        advertencia.innerText="Ingresa solo letras minúsculas.";
        document.getElementById("mensaje").value="";
      } else if(mensajeIngresar.length==0){
        advertencia.innerText="Texto no encontrado; Ingrese texto para encriptar";
      }
      else {
        for (let i = 0; i < mensajeIngresar.length; i++) {
          let flag = 0;
          let pos;
          for (let j = 0; j < 5; j++) {
            if (mensajeIngresar[i] == arrVocal[j]) {
              flag = 1;
              pos = j;
              break;
            }
          }
          if (flag == 1) {
            mEncriptado = mEncriptado + arrReplace[pos];
          }
          if (flag == 0) {
            mEncriptado = mEncriptado + mensajeIngresar[i];
          }
        }
        //Setear el text area para mostrar el mensaje encriptado;
        document.getElementById("encriptado").innerHTML = mEncriptado;
        advertencia.innerText="";
      }
    }

    // A partir de aquí, la selva....

    function desencriptar() {
      var textArea = document.getElementById("mensaje");
      var tEncriptado = textArea.value;
      var desencriptado = "";
      console.log("a desencriptar: " + tEncriptado);

      if (!input.checkValidity()) {
        advertencia.innerText="Ingresa solo letras minúsculas.";
        document.getElementById("mensaje").value="";
      } else if(tEncriptado.length==0){
        advertencia.innerText="Texto no encontrado; Ingrese texto para desencriptar";
      }
      else {
      for (let i = 0; i < tEncriptado.length; i++) {
        let flag = 0;
        let pos;
        for (let j = 0; j < 5; j++) {
          if (tEncriptado[i] == arrVocal[j]) {
            flag = 1;
            pos = j;
            break;
          }
        }

        if (flag == 1) {
          let bit = arrReplace[pos].toString();
          let part = tEncriptado.substring(i, i + bit.length);

          //console.log("part: "+part+" "+"i, bit.length: "+i+" , "+bit.length);
          if (part == arrReplace[pos]) {
            desencriptado = desencriptado + arrVocal[pos];
            i = i + arrReplace[pos].length - 1;
            //console.log(i);
          }
        }
        if (flag == 0) {
          desencriptado = desencriptado + tEncriptado[i];
          //console.log(i);
        }
      }

      //Setear el text area para mostrar el mensaje encriptado;
      document.getElementById("encriptado").innerHTML = desencriptado;
      advertencia.innerText="";
    }
    }

    function copiar() {
      /* Obtiene el texto */
      var copyText = document.getElementById("encriptado");
      var text = copyText.innerHTML;

        if (document.getElementById("encriptado").innerText==""){
          advertencia.innerText="No hay nada para copiar hacia el input";
        }else{

      document.getElementById("mensaje").value = text;
      /* Selecciona el campo de texto 
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
      /* Copia el texto desde el campo de texto */
      navigator.clipboard.writeText(text);
      /* Avisa el copiado */
      advertencia.innerHTML="Copiado en el input y al portapapeles"
    }
  }
  
    function limpiar(){
      document.getElementById("mensaje").value = "";
      document.getElementById("encriptado").innerHTML = "";
      advertencia.innerText="";

    }