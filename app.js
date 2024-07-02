let imc = document.getElementById('imc-btn')

imc.addEventListener("click", function calculo(){

let peso = document.getElementById('quilogramas')
let valorKG = peso.value

let altura = document.getElementById('altura')
let valorAltura = altura.value

let result = document.getElementById('resultado')
let imc_result = valorKG / (valorAltura * valorAltura)


let avaliacao = ""

if (imc_result <= 17 ) {
    avaliacao = "Você está abaixo do peso"
} else if(imc_result >= 18 && imc_result <= 24){
    avaliacao = "Seu peso é Normal"
} else if(imc_result >= 25 && imc_result <= 29){
    avaliacao = "Você está acima do peso"
} else if(imc_result >= 30 && imc_result <= 34){
avaliacao = "Você está com Obesidade"
} else if(imc_result >= 35 && imc_result <= 40){
avaliacao = "Você está com Obesidade de Grau II"
} else if(imc_result > 40){
avaliacao = "Você está com Obesidade Mórbida"
} else{
    avaliacao = "Valor Inválido"
}


result.innerHTML = `<p class="imcResult">${imc_result.toFixed(1)}</p>
                    <p class="imcAvaliacao">${avaliacao}</p>`

})
 
