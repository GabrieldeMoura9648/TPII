// Classe Pessoa
class Pessoa {
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    // Método clone
    clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

// Classe GerenciaPessoa
class GerenciaPessoa {
    constructor() {
        this.pessoas = {};
    }

    // Adiciona nova pessoa
    addPessoa(id, nome, idade) {
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    // Retorna clone da pessoa
    getPessoaById(id) {
        const pessoaOriginal = this.pessoas[id];

        if (pessoaOriginal) {
            return pessoaOriginal.clone();
        } else {
            return null;
        }
    }
}

// Criando uma instância de GerenciaPessoa:
const gerencia = new GerenciaPessoa();

// Adicionando Pessoas
gerencia.addPessoa(1, 'a', 32);
gerencia.addPessoa(2, 'b', 12);
gerencia.addPessoa(3, 'c', 64);

// Clona pessoa 1 e modifica nome
const pessoaClone1 = gerencia.getPessoaById(1);
pessoaClone1.nome = 'd'; 

console.log(gerencia.getPessoaById(1));
console.log("-----Pessoa Clone-------"); 
console.log(pessoaClone1);
console.log("------------------------");
console.log(gerencia.getPessoaById(2)); 
console.log("------------------------");
console.log(gerencia.getPessoaById(3)); 
console.log("------------------------");
