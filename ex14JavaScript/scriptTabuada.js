function fazerTabu() {
    let numero = document.getElementById('num')
    let tabu = document.getElementById('seltab')

    if (numero.value == '') {
        window.alert('Erro, campo não pode estar em branco!')
    } else {
        let n = Number(numero.value)
        let c = 1
        tabu.innerHTML = ' '
        while (c <= 10) {
            let item = document.createElement('Option')
            item.text = ` ${n} X ${c} = ${n*c} `
            tabu.appendChild(item)
            c++
        }
    }
}