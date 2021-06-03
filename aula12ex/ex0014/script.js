function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date()
    var hora = data.getHours();
    var minutos = data.getMinutes();
    
    msg.innerHTML = `Agora são ${hora}h${minutos}.`;

    if(hora >= 0 && hora < 12) {
        img.src = "foto-manha.png";
        window.document.body.style.background = "yellow";
    } else if (hora >=12 && hora <=18) {
        img.src = "foto-tarde.png";
        window.document.body.style.background = "orange";
    } else {
        img.src = "foto-noite.png";
        window.document.body.style.background = "blue";
    }
}