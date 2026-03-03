// ===== Produtos Abstratos =====
class RoboMontador {
    operar() {
        throw new Error("operar() deve ser implementado");
    }
}

class RoboInspetor {
    operar() {
        throw new Error("operar() deve ser implementado");
    }
}

// ===== Produtos Concretos - Linha Automotiva =====
class MontadorAutomotivo extends RoboMontador {
    operar() {
        return "Montador Automotivo: Montando carros";
    }
}

class InspetorAutomotivo extends RoboInspetor {
    operar() {
        return "Inspetor Automotivo: Inspecionando pecas automotivas";
    }
}

// ===== Produtos Concretos - Linha Eletronicos =====
class MontadorEletronico extends RoboMontador {
    operar() {
        return "Montador Eletronico: Montando circuitos";
    }
}

class InspetorEletronico extends RoboInspetor {
    operar() {
        return "Inspetor Eletronico: Inspecionando chips";
    }
}

// ===== Fabrica Abstrata =====
class FabricaRobos {
    criarMontador() {
        throw new Error("criarMontador() deve ser implementado");
    }

    criarInspetor() {
        throw new Error("criarInspetor() deve ser implementado");
    }
}

// ===== Fabricas Concretas =====
class FabricaAutomotiva extends FabricaRobos {
    criarMontador() {
        return new MontadorAutomotivo();
    }

    criarInspetor() {
        return new InspetorAutomotivo();
    }
}

class FabricaEletronicos extends FabricaRobos {
    criarMontador() {
        return new MontadorEletronico();
    }

    criarInspetor() {
        return new InspetorEletronico();
    }
}

// ===== Cliente =====
function linhaDeProducao(fabrica) {
    const montador = fabrica.criarMontador();
    const inspetor = fabrica.criarInspetor();

    console.log(montador.operar());
    console.log(inspetor.operar());
}

// ===== Uso =====
linhaDeProducao(new FabricaAutomotiva());
console.log("---------------------------");

linhaDeProducao(new FabricaEletronicos());
console.log("---------------------------");

linhaDeProducao(new FabricaAutomotiva());
console.log("---------------------------");

linhaDeProducao(new FabricaEletronicos());
