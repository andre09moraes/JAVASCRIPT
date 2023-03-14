function calcular() {
    var altura = (document.getElementById('txta').value)/100
    var peso = document.getElementById('txtp').value
    var res = document.getElementById('res')

    var imc = peso / altura ** 2
    if (imc < 18.5){
        res.innerHTML = 'Abaixo do peso'
    } else if (imc < 25) {
        res.innerHTML = 'No peso ideal'
    } else if (imc < 29) {
        res.innerHTML = 'Acima no peso'
    } else if (imc < 40) {
        res.innerHTML = 'Obesidade I'
    } else {
        res.innerHTML = 'Obesidade II'
    }
}