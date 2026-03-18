// Define as Partes de uma Pessoa:
class Nome {
    constructor(nome) {
        this.nome = nome
    }
}

class Cargo {
    constructor(cargo) {
        this.cargo = cargo
    }
}

class Matricula {
    constructor(matricula) {
        this.matricula = matricula
    }
}

class HoraEntrada {
    constructor(horaEntrada) {
        this.horaEntrada = horaEntrada
    }
}

class HoraSaida {
    constructor(horaSaida) {
        this.horaSaida = horaSaida
    }
}

// Builder
class PessoaBuilder {
    constructor() {
        this.nome = null
        this.cargo = null
        this.matricula = null
        this.horaEntrada = null
        this.horaSaida = null
    }

    addNome(nome) {
        this.nome = new Nome(nome)
        return this
    }

    addCargo(cargo) {
        this.cargo = new Cargo(cargo)
        return this
    }

    addMatricula(matricula) {
        this.matricula = new Matricula(matricula)
        return this
    }

    addHoraEntrada(horaEntrada) {
        this.horaEntrada = new HoraEntrada(horaEntrada)
        return this
    }

    addHoraSaida(horaSaida) {
        this.horaSaida = new HoraSaida(horaSaida)
        return this
    }

    construir() {
        return new Pessoa(
            this.nome,
            this.cargo,
            this.matricula,
            this.horaEntrada,
            this.horaSaida
        )
    }
}

// Construir Pessoa
class Pessoa {
    constructor(nome, cargo, matricula, horaEntrada, horaSaida) {
        this.nome = nome
        this.cargo = cargo
        this.matricula = matricula
        this.horaEntrada = horaEntrada
        this.horaSaida = horaSaida
    }

    mostrarDetalhes() {
        console.log("Nome:", this.nome.nome)
        console.log("Cargo:", this.cargo.cargo)
        console.log("Matrícula:", this.matricula?.matricula)
        console.log("Entrada:", this.horaEntrada.horaEntrada)
        console.log("Saída:", this.horaSaida.horaSaida)
        console.log("-----")
    }
}

// Cliente - Usando o Builder

const aluno = new PessoaBuilder()
    .addNome("Gabriel")
    .addCargo("Aluno")
    .addMatricula("123")
    .addHoraEntrada("07:00")
    .addHoraSaida("12:00")
    .construir()

aluno.mostrarDetalhes()

const professor = new PessoaBuilder()
    .addNome("Carlos")
    .addCargo("Professor")
    .addMatricula("456")
    .addHoraEntrada("08:00")
    .addHoraSaida("17:00")
    .construir()

professor.mostrarDetalhes()

const visitante = new PessoaBuilder()
    .addNome("Ana")
    .addCargo("Público")
    .addHoraEntrada("Livre")
    .addHoraSaida("Livre")
    .construir()

visitante.mostrarDetalhes()