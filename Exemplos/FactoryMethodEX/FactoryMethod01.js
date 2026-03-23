// Classe Base de Veiculo
class Veiculo{
    constructor(modelo){
        this.modelo = modelo;
    }

    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`);
    };
};

// Sub de Veiculo
class Carro extends Veiculo {
    constructor(modelo){
        super(modelo);
    };
};

class Moto extends Veiculo {
    constructor(modelo){
        super(modelo);
    };
};

class Barco extends Veiculo {
    constructor(modelo){
        super(modelo);
    };
};


// Fabrica Abstrata de Veiculo
class FabricaDeVeiculos{
    criarVeiculo(modelo){
        throw new Error('O metodo criarVeiculo deve ser implementado');
    };
};

// Fabrica Concreta de Carros 
class FabricaDeCarros extends FabricaDeVeiculos {
    criarVeiculo(modelo){
        return new Carro(modelo);
    };
};

// Fabrica Concreta de Motos 
class FabricaDeMotos extends FabricaDeVeiculos {
    criarVeiculo(modelo){
        return new Moto(modelo);
    };
};

class FabricaDeBarcos extends FabricaDeVeiculos {
    criarVeiculo(modelo){
        return new Barco(modelo);
    };
};

// Uso da Fabrica - Cliente
const fabricaDeCarros = new FabricaDeCarros();
const fabricaDeMotos = new FabricaDeMotos();
const fabricaDeBarcos = new FabricaDeBarcos();

const veiculo1 = fabricaDeCarros.criarVeiculo('Sedan');
const veiculo2 = fabricaDeCarros.criarVeiculo('Hatch');
const veiculo3 = fabricaDeMotos.criarVeiculo('Esportiva');
const veiculo4 = fabricaDeMotos.criarVeiculo('Custon');
const veiculo5 = fabricaDeBarcos.criarVeiculo('Navio MSC');
const veiculo6 = fabricaDeBarcos.criarVeiculo('Lancha 10 pés');

veiculo1.mostrarDetalhes();
veiculo2.mostrarDetalhes();
veiculo3.mostrarDetalhes();
veiculo4.mostrarDetalhes();
veiculo5.mostrarDetalhes();
veiculo6.mostrarDetalhes();
