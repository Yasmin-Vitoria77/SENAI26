console.log(window.location.href) //caminho do arquivo

const titulo = document.getElementById('titulo-site')

//Parágrafo de boas vindas
const saudacao = document.querySelector('#boas-vindas')
//Foto da lasanha
const fotoPrato1 = document.querySelector('#foto-destaque')
//Card da lasanha
const cardLasanha = document.querySelector('#card-lasanha')

const agora = new Date()
const hora = agora.getHours()
if (hora >= 1 && hora< 12){
    saudacao.textContent = "Bom dia!"
}
else if (hora >= 12 && hora < 18){
    saudacao.textContent = "Boa tarde!"
}
else if (hora >= 18 && hora <=24){
    saudacao.textContent = "Boa noite!"
}
else{
    saudacao.textContent = "Hora do seu computador está com erro!"
}

fotoPrato1.alt ="Destaque do Dia: Lasanha Bolonhesa!"
//tudo que é style é CSS
titulo.style.color = "#e67e22"
//add tbm muda negocio
cardLasanha.classList.add('em-promocao')
//saudacao.textContet chamando quem eu quero mudar e indicando o que eu vou mudar - mexendo no conteúdo da tag -> vai mudar o que tá lá e aparecer o que ue colocar aqui