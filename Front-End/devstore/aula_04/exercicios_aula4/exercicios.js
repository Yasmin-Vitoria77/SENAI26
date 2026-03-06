//Exercício 1
// alert("Olá")

// const nome = prompt ("Qual seu nome?")

// const sobrenome = prompt ("E o seu sobrenome?")

// let nomeCompleto= nome.trim() + " " + sobrenome.trim()

// alert("Prazer, " + nomeCompleto.trim())

// let letras = nome.length + sobrenome.length

// alert("Seu nome completo: " + nomeCompleto.toLowerCase())

// alert("Seu nome possui: " + letras + " "+ "letras")

//Exercício 2
// alert("Bem Vindos!")

// const preco = prompt("Digie o valor total da conta: ")

// const pessoas = prompt("Quantas pessoas são: ")

// let valorPorPessoa = preco / pessoas

// alert("O valor pago por cada um será de: R$" + valorPorPessoa.toFixed(2))

//Exercício 3
const valor = prompt("Olá, diga o valor total da compra: ")

const cupom = prompt("Você tem cupom?"){
    if(valor>= 150 || valor.toLowerCase() == sim){
        alert("Você possui cupom")
    } else{
        alert("Você não possui cupom")
    }
}