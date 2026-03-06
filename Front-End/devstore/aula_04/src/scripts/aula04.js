// const tempoAgora = new Date()

// const hora = tempoAgora.getHours()

// const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')
// const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

// console.log("Hoje é dia: " + dataFormatada)
// console.log("Horário: " + horaFormatada)

// console.log("Só a hora: " + hora)

// if (hora>12 && hora<18){
//     alert("Boa tarde!");
// } else if(hora>=18 && hora <6){
//     alert("Boa noite")
// }
//
// alert("Seja bem-vindo ao TechFood! Aproveite nossos cupons de hoje.");

// class Prato{
//     constructor(nome, preco){
//         this.nome = nome
//         this.preco = preco
//     }
    
//     exibirComMoeda(resultado){
//         if (resultado){
//             return "R$" + resultado.toFixed(2);
//         } else{
//             return "R$" + this.preco.toFixed(2);
//         }
//     }
    // exibirComMoeda(resultado){ // método
    //     return "R$" + this.preco.toFixed(2)
    //     return "R$" + resultado.toFixed(2)
    // }
// }
// alert("Bem vindo ao restaurante Sabor e Saber!")

// const nome = prompt("Para um atendimento personalizado. Digite seu nome: ")

// let clienteFormatado = nome.trim().toUpperCase() //trim = tira o espaço 

// alert("Bem vindo " + clienteFormatado + " ao restaurante Sabor e Saber")

// const lasanha = new Prato("Lasanha Bolonhesa", 45.00)

// let qtd = prompt("Simulação: Quantas unidades de: " + lasanha.nome + " Você deseja?")

// let total = lasanha.preco * qtd

// alert("Resumo da Simulação: \n Prato:" + lasanha.nome + "\n Total: " + lasanha.exibirComMoeda(total)) //barra invertida = quebra de linha

// alert("Bem vindo ao restaurante Sabor e Saber!")
