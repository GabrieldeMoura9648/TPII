//(admim, aluno, prof e publico) 
//(nome, cargo, matricula, 
// horaEntrada, horaSaida)

class Nome {
    constructor(nome){
        this.nome = nome;
    }
}

class Cargo {
    constructor(cargo){
        this.cargo = cargo;
    }
}

class Matricula {
    constructor(ra){
        this.ra = ra;
    }
}

class horaEntrada {
    constructor(entrada){
        this.entrada = entrada;
    }
}

class horaSaida {
    constructor(saida){
        this.saida = saida;
    }
}

    class Pessoa {
        constructor(nome, cargo, matricula, horaentrada, horasaida){
            this.nome = nome;
            this.cargo = cargo;
            this.matricula = matricula;
            this.horaentrada = horaentrada;
            this.horasaida = horasaida;
        }

        mostrarDetalhes() {
            console.log(`Dados de acesso: 
                Nome: \t${this.nome.nome}
                Cargo: \t${this.cargo.cargo}
                Matricula: \t${this.matricula.ra}
                HoraEntrada: \t${this.horaentrada.entrada}
                HoraSaida: \t${this.horasaida.saida}
                `);
        }
    }

    //Builder

    class PessoaBuilder {

        constructor() {
            this.nome = null;
            this.cargo = null;
            this.matricula = null;
            this.horaentrada = null;
            this.horasaida = null;
        }  
    }