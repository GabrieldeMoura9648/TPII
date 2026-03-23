# Classe base de veículo
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo

    def mostrarDetalhes(self):
        print(f"Modelo: {self.modelo}")


# Subclasse Carro
class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)


# Subclasse Moto
class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)


# Subclasse Barco
class Barco(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)


# Fábrica abstrata
class FabricaDeVeiculo:
    def criarVeiculo(self, modelo):
        raise NotImplementedError("O método criarVeiculo deve ser implementado")


# Fábrica concreta de Carros
class FabricaDeCarros(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Carro(modelo)


# Fábrica concreta de Motos
class FabricaDeMotos(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Moto(modelo)


# Fábrica concreta de Barcos
class FabricaDeBarcos(FabricaDeVeiculo):
    def criarVeiculo(self, modelo):
        return Barco(modelo)


# USO DA FÁBRICA (Cliente)
fabricaDeCarros = FabricaDeCarros()
fabricaDeMotos = FabricaDeMotos()
fabricaDeBarcos = FabricaDeBarcos()

veiculo1 = fabricaDeCarros.criarVeiculo('Sedan')
veiculo2 = fabricaDeCarros.criarVeiculo('Hatch')
veiculo3 = fabricaDeMotos.criarVeiculo('Esportiva')
veiculo4 = fabricaDeMotos.criarVeiculo('Custom')
veiculo5 = fabricaDeBarcos.criarVeiculo('Navio MSC')
veiculo6 = fabricaDeBarcos.criarVeiculo('Lancha 10 pés')

print()
veiculo1.mostrarDetalhes()
veiculo2.mostrarDetalhes()
veiculo3.mostrarDetalhes()
veiculo4.mostrarDetalhes()
veiculo5.mostrarDetalhes()
veiculo6.mostrarDetalhes()
print()