function encrypt() {
    var text = document.getElementById("text-input").value.toLowerCase();
    
    var encryptedText = text.replace(/e/igm, "enter");
    var encryptedText = encryptedText.replace(/o/igm, "ober");
    var encryptedText = encryptedText.replace(/i/igm, "imes");
    var encryptedText = encryptedText.replace(/a/igm, "ai");
    var encryptedText = encryptedText.replace(/u/igm, "ufat");
    //i es para que afecte tanto mayusculas como minusculas
    //g es para que toda la oración o frase
    //m es para que todo afecte a multiples lineas o parrafos
  
    document.getElementById("right-image").style.display = "none";
    document.getElementById("text-error").style.display = "none";
    document.getElementById("encriptado").style.display = "inherit";
    document.getElementById("text-encrypt").style.display = "inherit";
    document.getElementById("copy").style.display = "inherit";
    document.getElementById("text-encrypt").innerHTML = encryptedText;
    const txt = document.getElementById("text-input");
    txt.value = "";
  
  }
  
  function decrypt() {
    var text = document.getElementById("text-input").value.toLowerCase();
  
    var encryptedText = text.replace(/enter/igm, "e");
    var encryptedText = encryptedText.replace(/ober/igm, "o");
    var encryptedText = encryptedText.replace(/imes/igm, "i");
    var encryptedText = encryptedText.replace(/ai/igm, "a");
    var encryptedText = encryptedText.replace(/ufat/igm, "u");
  
    document.getElementById("right-image").style.display = "none";
    document.getElementById("text-error").style.display = "none";
    document.getElementById("text-encrypt").innerHTML = encryptedText;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
  
    const txt = document.getElementById("text-input");
    txt.value = "";

    Swal.fire(
      'Encriptado!',
      'Exitosamente...',
      'success'
    )
  }

  function copy(){
    var content = document.querySelector("#text-encrypt");
    content.select();
    document.execCommand("copy");
    Swal.fire(
      'Copiado!',
      'El contenido se encuentra en su papelera',
      'success'
    )
  }
  