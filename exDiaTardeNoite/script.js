function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.` 
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'IMAGENS/dia.png'
        document.body.style.backgroundColor = "yellow"
    }else if (hora >= 13 && hora <= 18) {
        //BOA TARDE
        img.src = 'IMAGENS/tarde.png'
        document.body.style.backgroundColor = "red"
    }else {
        //BOA NOITE
        img.src = 'IMAGENS/noite.png'
        document.body.style.backgroundColor = "black"
    }
}
