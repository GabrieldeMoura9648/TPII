// Classe base de veículo
class Veiculo {
    protected String modelo;

    public Veiculo(String modelo) {
        this.modelo = modelo;
    }

    public void mostrarDetalhes() {
        System.out.println("Veículo modelo: " + modelo);
    }
}
    
// Subclasse Carro
class Carro extends Veiculo {
    public Carro(String modelo) {
        super(modelo);
    }

    public void mostrarDetalhes() {
        System.out.println("Carro modelo: " + modelo);
    }
}

// Subclasse Moto
class Moto extends Veiculo {
    public Moto(String modelo) {
        super(modelo);
    }

    public void mostrarDetalhes() {
        System.out.println("Moto modelo: " + modelo);
    }
}

// Subclasse Barco
class Barco extends Veiculo {
    public Barco(String modelo) {
        super(modelo);
    }

    public void mostrarDetalhes() {
        System.out.println("Barco modelo: " + modelo);
    }
}

// Fábrica abstrata
abstract class FabricaDeVeiculos {
    public abstract Veiculo criarVeiculo(String modelo);
}

// Fábrica concreta de Carros
class FabricaDeCarros extends FabricaDeVeiculos {
    public Veiculo criarVeiculo(String modelo) {
        return new Carro(modelo);
    }
}

// Fábrica concreta de Motos
class FabricaDeMotos extends FabricaDeVeiculos {
    public Veiculo criarVeiculo(String modelo) {
        return new Moto(modelo);
    }
}

// Fábrica concreta de Barcos
class FabricaDeBarcos extends FabricaDeVeiculos {
    public Veiculo criarVeiculo(String modelo) {
        return new Barco(modelo);
    }
}

// Classe principal (Cliente)
public class FactoryMethod01 {
    public static void main(String[] args) {

        FabricaDeVeiculos fabricaDeCarros = new FabricaDeCarros();
        FabricaDeVeiculos fabricaDeMotos = new FabricaDeMotos();
        FabricaDeVeiculos fabricaDeBarcos = new FabricaDeBarcos();

        Veiculo veiculo1 = fabricaDeCarros.criarVeiculo("Sedan");
        Veiculo veiculo2 = fabricaDeMotos.criarVeiculo("Esportiva");
        Veiculo veiculo3 = fabricaDeBarcos.criarVeiculo("Navio");

        veiculo1.mostrarDetalhes();
        veiculo2.mostrarDetalhes();
        veiculo3.mostrarDetalhes();
    }
}