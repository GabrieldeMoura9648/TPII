// Classe Base de Pessoa
class Pessoa{
    constructor(modelo){
        this.modelo = modelo;
    }

    mostrarDetalhes(){
        console.log(`${this.modelo}`);
    };
};

// Sub de Pessoa
class Aluno extends Pessoa {
    constructor(modelo){
        super(modelo);
    };
};

class Administrador extends Pessoa {
    constructor(modelo){
        super(modelo);
    };
};

class Professor extends Pessoa {
    constructor(modelo){
        super(modelo);
    };
};

class Visitante extends Pessoa {
    constructor(modelo){
        super(modelo);
    };
};


// Fabrica Abstrata de Pessoa
class FabricaDePessoas{
    criarPessoa(modelo){
        throw new Error('O metodo criarPessoa deve ser implementado');
    };
};

// Fabrica Concreta de Alunos 
class FabricaDeAluno extends FabricaDePessoas {
    criarPessoa(modelo){
        return new Aluno(modelo);
    };
};

// Fabrica Concreta de Administradors 
class FabricaDeAdministrador extends FabricaDePessoas {
    criarPessoa(modelo){
        return new Administrador(modelo);
    };
};

class FabricaDeProfessor extends FabricaDePessoas {
    criarPessoa(modelo){
        return new Professor(modelo);
    };
};

class FabricaDeVisitante extends FabricaDePessoas {
    criarPessoa(modelo){
        return new Visitante(modelo);
    };
};


// Uso da Fabrica - Cliente
const fabricaDeAlunos = new FabricaDeAluno();
const fabricaDeAdministrador = new FabricaDeAdministrador();
const fabricaDeProfessor = new FabricaDeProfessor();
const fabricaDeVisitante = new FabricaDeVisitante();

const Pessoa1 = fabricaDeAlunos.criarPessoa('Alunos - Nível 00');
const Pessoa2 = fabricaDeAlunos.criarPessoa('Alunos - Nível 00');

const Pessoa3 = fabricaDeAdministrador.criarPessoa('Administrador - Nível 01');
const Pessoa4 = fabricaDeAdministrador.criarPessoa('Administrador - Nível 01');

const Pessoa5 = fabricaDeProfessor.criarPessoa('Professor - Nível 02');
const Pessoa6 = fabricaDeProfessor.criarPessoa('Professor - Nível 02');

const Pessoa7 = fabricaDeVisitante.criarPessoa('Visitante - Nível 03');
const Pessoa8 = fabricaDeVisitante.criarPessoa('Visitante - Nível 03');

console.log("Alunos:")
Pessoa1.mostrarDetalhes();
Pessoa2.mostrarDetalhes();

console.log("Administrador")
Pessoa3.mostrarDetalhes();
Pessoa4.mostrarDetalhes();

console.log("Professor")
Pessoa5.mostrarDetalhes();
Pessoa6.mostrarDetalhes();

console.log("Visitante")
Pessoa7.mostrarDetalhes();
Pessoa8.mostrarDetalhes();
