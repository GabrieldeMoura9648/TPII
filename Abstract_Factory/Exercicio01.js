// ===== Produtos Abstratos =====
class Terrestre {
    detalhes() {
        throw new Error("detalhes() erro terrestre");
    }
}

class Aereo {
    detalhes() {
        throw new Error("detalhes() erro aereo");
    }
}

// ===== Produtos Concretos - Terrestre =====
class Carro extends Terrestre {
    detalhes() {
        return "Carro";
    }
}

class Onibus extends Terrestre {
    detalhes() {
        return "Onibus";
    }
}

// ===== Produtos Concretos - Aereo =====
class Helicoptero extends Aereo {
    detalhes() {
        return "Helicoptero";
    }
}

class Aviao extends Aereo {
    detalhes() {
        return "Aviao";
    }
}

// ===== Fabrica Abstrata =====
class FabricaProduto {
    criarIndividual() {
        throw new Error("criarIndividual() erro");
    }

    criarColetivo() {
        throw new Error("criarColetivo() erro");
    }
}

// ===== Fabricas Concretas =====
class FabricaTerrestre extends FabricaProduto {
    criarIndividual() {
        return new Carro();
    }

    criarColetivo() {
        return new Onibus();
    }
}

class FabricaAereo extends FabricaProduto {
    criarIndividual() {
        return new Helicoptero();
    }

    criarColetivo() {
        return new Aviao();
    }
}

// ===== Cliente =====
function MobilidadeUrbana(fabrica) {
    const individual = fabrica.criarIndividual();
    const coletivo = fabrica.criarColetivo();

    console.log(individual.detalhes());
    console.log(coletivo.detalhes());
}

// ===== Uso =====
console.log();
console.log();

MobilidadeUrbana(new FabricaTerrestre());
console.log("----------------------------");

MobilidadeUrbana(new FabricaAereo());
console.log("----------------------------");

MobilidadeUrbana(new FabricaTerrestre());
console.log("----------------------------");

MobilidadeUrbana(new FabricaAereo());

console.log();
console.log();
