function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados digitados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idae < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idae < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}