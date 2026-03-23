// ===== Produtos Abstratos =====
class CartaoCredito {
    pagar(valor) {
        throw new Error("pagar() deve ser implementado");
    }
}

class Boleto {
    pagar(valor) {
        throw new Error("pagar() deve ser implementado");
    }
}

// ===== Produtos Concretos - Banco A =====
class CartaoCreditoBancoA extends CartaoCredito {
    pagar(valor) {
        return `Banco A: Pagamento no cartão de crédito R$ ${valor.toFixed(2)} aprovado`;
    }
}

class BoletoBancoA extends Boleto {
    pagar(valor) {
        return `Banco A: Boleto gerado no valor de R$ ${valor.toFixed(2)}`;
    }
}

// ===== Produtos Concretos - Banco B =====
class CartaoCreditoBancoB extends CartaoCredito {
    pagar(valor) {
        return `Banco B: Pagamento no cartão de crédito R$ ${valor.toFixed(2)} aprovado`;
    }
}

class BoletoBancoB extends Boleto {
    pagar(valor) {
        return `Banco B: Boleto gerado no valor de R$ ${valor.toFixed(2)}`;
    }
}

// ===== Fabrica Abstrata =====
class FabricaBanco {
    criarCartaoCredito() {
        throw new Error("criarCartaoCredito() deve ser implementado");
    }

    criarBoleto() {
        throw new Error("criarBoleto() deve ser implementado");
    }
}

// ===== Fabricas Concretas =====
class FabricaBancoA extends FabricaBanco {
    criarCartaoCredito() {
        return new CartaoCreditoBancoA();
    }

    criarBoleto() {
        return new BoletoBancoA();
    }
}

class FabricaBancoB extends FabricaBanco {
    criarCartaoCredito() {
        return new CartaoCreditoBancoB();
    }

    criarBoleto() {
        return new BoletoBancoB();
    }
}

// ===== Cliente =====
function lojaOnline(fabrica, valor) {
    const cartao = fabrica.criarCartaoCredito();
    const boleto = fabrica.criarBoleto();

    console.log(cartao.pagar(valor));
    console.log(boleto.pagar(valor));
}

// ===== Uso =====
lojaOnline(new FabricaBancoA(), 150.00);
console.log("--------------");

lojaOnline(new FabricaBancoB(), 299.99);
console.log("--------------");

lojaOnline(new FabricaBancoA(), 89.50);
console.log("--------------");

lojaOnline(new FabricaBancoB(), 420.75);
