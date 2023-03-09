function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/homem-crianca-p.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/homem-jovem-p.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem-p.png')
            } else {
                img.setAttribute('src', 'imagens/homem-velho-p.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/mulher-crianca-p.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/mulher-jovem-p.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher-p.png')
            } else {
                img.setAttribute('src', 'imagens/mulher-velha-p.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}