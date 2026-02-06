/*Exercício 1 - Classe Simples (Pessoa)

- Crie uma classe chamada Pessoa que tenha:
 nome; idade
 
 - Crie um método apresentar() que exiba no console o nome e a idade da pessoa*/


 class Pessoa {
    constructor (nome, idade){
        this.nome= nome
        this.idade= idade
    }

    apresentar(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}.`)
    }
 }

 const pessoa1 = new Pessoa("Celso", 27)
 pessoa1.apresentar();



 /*Crie uma classe Produto com:
 nome; preço
 
 Crie um método mostrarPreco() que exiba o nome do produto e seu preço*/

 class Produto{
    constructor(nome, preco){
        this.nome= nome
        this.preco= preco
    }

    mostrarProduto(){
        console.log(`Produto: ${this.nome}, Seu preço: R$${this.preco.toFixed(2)}`)
    }
 }

 const produto1 = new Produto("Caderno", 20.00)
 produto1.mostrarProduto()

/*
Crie uma classe Funcionario que possui: nome
Crie classe Gerente que herda de Funcionário e possui: setor
Crie um método que exiba o nome e o setor do gerente*/

class Funcionario{
    constructor(nome){
        this.nome = nome
    }
}

class Gerente extends Funcionario{
    constructor(nome, setor){
        super(nome)
        this.setor = setor
    }

    mostrarDados(){
        console.log(`Funcionario: ${this.nome}, Setor: ${this.setor}`)
    }
}

const funcionario1 = new Gerente ("Marlon", "TI")
funcionario1.mostrarDados()

/*
Crie uma classe Veiculo com: marca
Crie uma classe Carro que herde de Veiculo e possui: modelo
Crie um método que exiba a marca e o modelo do carro */

class Veiculo{
    constructor(marca){
        this.marca = marca
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo){
        super(marca)
        this.modelo = modelo
    }

    mostrarCarros(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
    }
}

const veiculo1 = new Carro ("Toyota", "Corolla Cross")
veiculo1.mostrarCarros()


/*
Crie uma classe Conta onde:
- o saldo seja um atributo privado
- exista um método depositar (valor)
- exista um método mostrarSaldo() */

class Conta{
    #saldo
    constructor(){
        this.#saldo = 0
    }

    depositar(valor){
        if(valor >0){
            this.#saldo += valor
        } else{
            console.log("Valor incorreto!")
        }
    }

    mostrarSaldo(){
        console.log(`Saldo atual: R$${this.#saldo.toFixed(2)}`)
    }
}

const conta1 = new Conta ()
conta1.depositar(150)
conta1.mostrarSaldo()
/*se eu tivesse colocado o saldo no constructor, eu teria que menciona-lo na hora da criação da conta(const) */

/*Crie uma classe Aluno onde:
- a nota seja um atributo privado
- exista um método definirNota(nota)
- exista um método mostrarNota() */

class Aluno{
    #nota

    definirNota(nota){
        if(nota > 0 && nota <=10){
            this.#nota= nota
        } else{
            console.log("Reprovado/Nota inválida")
        }
    }

    mostrarNota(){
        console.log(`Nota: ${this.#nota.toFixed(2)}`)
    }
}
const aluno1 = new Aluno ()
aluno1.definirNota(7)
aluno1.definirNota(20)
aluno1.mostrarNota()

/*não preciso definir a nota como 0 - fiz isso com o saldo pq preciso garantir que ele comece com 0! */