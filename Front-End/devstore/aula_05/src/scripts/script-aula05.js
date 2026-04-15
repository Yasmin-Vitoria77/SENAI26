// Nome
const nomeUsuario = document.querySelector('#nome-usuario');
nomeUsuario.textContent = "Yasmin Vitória do Nascimento Ramos";

// Foto
const imagem_perfil = document.querySelector('#foto-perfil')
//imagem_perfil.src = 'src/img/fotoperfil.jpg'

imagem_perfil.src = 'https://cinemaweb.com.br/wp-content/uploads/2024/06/pessoa-emma-watson-cwj.avif' 

// Cor de Fundo
const cor_de_fundo = document.querySelector('#container-perfil')

cor_de_fundo.style.background = "#a0c8c3"

// Class Online
const online = document.querySelector ('#badge-status')
online.classList.add ('online')
online.textContent = "Status: Online"

// Skills
const skillsTotais = document.querySelectorAll('.skill')
console.log("Total de skills: ", skillsTotais.length)

//MUDAR FOTO - MODERNO
//Lendo o caminho atual (Direto na propriedade)
const caminhoAtual = foto.src;
//Trocando a imagem (Igual a mudar o valor de uma variável)
foto.src = 'img/esgotado.png';
//Alterando o alt (acessibilidade)
foto.alt = 'Prato não disponível'

//MUDAR FOTO - ANTIGO
const foto = document.querySelector('#foto-prato');
//Lendo o caminho atual/novo da imagem
const caminhoAtual = foto.getAttribute('src');
//Trocando a imagem para "esgotado"
foto.setAttribute('src', 'img/esgotado.png');
//Alterando o alt
foto.setAttribute('alt', 'Prato não disponível');
const foto = document.querySelector('#foto-prato');
