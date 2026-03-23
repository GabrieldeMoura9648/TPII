class Singleton:
    _instance = None  # variável de classe para armazenar a instância

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
            cls._instance.value = 0  # inicializa o valor
        return cls._instance

    def increment(self):
        self.value += 1
        print(f"Value: {self.value}")


# Testando
s1 = Singleton()
s2 = Singleton()
s3 = Singleton()

print(s1 is s2)  # True
print(s3 is s1)  # True

s1.increment()  # Value: 1
s2.increment()  # Value: 2
s3.increment()  # Value: 3