function criptografar () {
 let texto = document.getElementById("texto").value;
 let tituloTexto = document.getElementById("comeco__mensagem");
 let paragrafo = document.getElementById("Paragrafo");
 let garotolupa = document.getElementById("garotolupa");

    let textoCriptado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat")
    

     if (texto.length !=0){
        document.getElementById("texto").value = textoCriptado;
        tituloTexto.textContent = "O texto foi criptado";
        paragrafo.textContent = "";
        garotolupa.src="";
     } else{
        garotolupa.src="./assets/lupa.png";
        paragrafo.textContent = "";
        tituloTexto.textContent = "Nenhuma mensagem encontrada";
     }
        
     } 
     
     function descriptografar () {
        let texto = document.getElementById("texto").value;
        let tituloTexto = document.getElementById("comeco__mensagem");
        let paragrafo = document.getElementById("Paragrafo");
        let garotolupa = document.getElementById("garotolupa");

        let textoCriptado = texto
          .replace(/enter/gi, "e")
          .replace(/aimes/gi, "i")
          .replace(/ai/gi, "a")
          .replace(/ober/gi, "o")
          .replace(/ufat/gi, "u")

    if (texto.length!=0){
        document.getElementById("texto").value = textoCriptado;
        tituloTexto.textContent = "O texto foi descriptado";
        paragrafo.textContent = "";
        garotolupa.src="./assets/Rectangle.png"
      
    }else{ 
      
    }
        }

    


