// Classe Aluno 
class Aluno {
    constructor(nome, idade, curso, unidade, periodo) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.unidade = unidade;
        this.periodo = periodo;
    }

    // Método clone
    clone() {
        return new Aluno(
            this.nome,
            this.idade,
            this.curso,
            this.unidade,
            this.periodo
        );
    }
}

// Classe GerenciadorAlunos 
class GerenciadorAlunos {
    constructor() {
        if (!GerenciadorAlunos.instance) {
            GerenciadorAlunos.instance = this;
            this.alunos = [];
        }
        return GerenciadorAlunos.instance;
    }

    addAluno(aluno) {
        this.alunos.push(aluno);
    }

    listarAlunos() {
        return this.alunos;
    }
}

// Teste do Singleton
const g1 = new GerenciadorAlunos();
const g2 = new GerenciadorAlunos();

console.log(`Verificação de instanciamento iguais: ${g1 === g2}`); 
console.log("--------------------------------------------------");

// Protótipo de Aluno
const alunoPrototipo = new Aluno(
    "DEFAULT",
    0,
    "Análise e Desenvolvimento de Sistemas",
    "Campus Diadema",
    "Noturno"
);

// Clonando alunos
const aluno1 = alunoPrototipo.clone();
aluno1.nome = "João";
aluno1.idade = 20;

const aluno2 = alunoPrototipo.clone();
aluno2.nome = "Maria";
aluno2.idade = 22;


// Adicionando ao Singleton
g1.addAluno(aluno1);
g1.addAluno(aluno2);


// Exibindo resultados
console.log("t---- PROTÓTIPO ORIGINAL ----");
console.table(alunoPrototipo); // Para gerar em formato de tabela

console.log("----- ALUNOS CLONADOS ------");
g1.listarAlunos().forEach(aluno => {
    console.table(aluno);
});

// Verificação de Integridade
console.log("Protótipo após clones:");
console.table(alunoPrototipo);