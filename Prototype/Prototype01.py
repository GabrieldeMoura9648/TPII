import copy

class Pessoa: 
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    
    def __str__(self):
        return f'Nome: {self.nome}, Idade: {self.idade}'
    
    def clone(self):
        return copy.copy(self)

class GerenciaPessoa:
    def __init__(self):
        self.pessoas = {}

    def addPessoa(self, nome, idade, id):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa

    def getPessoa(self, id):
        return self.pessoas[id].clone()
    
# Criação da gerência
gerencia = GerenciaPessoa()

# Adicionando pessoas
gerencia.addPessoa('a', 32, 1)
gerencia.addPessoa('b', 12, 2)
gerencia.addPessoa('c', 64, 3)

# Clonando pessoas
pessoa1 = gerencia.getPessoa(1)
pessoa2 = gerencia.getPessoa(2)

# Alterando valores das clones
pessoa1.idade = 18
pessoa2.nome = "EWEE"
pessoa2.idade = 55

# Impressão das pessoas originais na gerência
print(gerencia.getPessoa(1))
print("------------------------")
print(gerencia.getPessoa(2))
print("------------------------")
print(gerencia.getPessoa(3))
print("------------------------")

# Impressão das clones alteradas
print(pessoa1)
print(pessoa2)