// ===== Produtos Abstratos =====
class Botao {
    renderizar() {
        throw new Error("renderizar() deve ser implementado");
    }
}

class Janela {
    renderizar() {
        throw new Error("renderizar() deve ser implementado");
    }
}

// ===== Produtos Concretos - Windows =====
class BotaoWindows extends Botao {
    renderizar() {
        return "Botao no estilo Windows";
    }
}

class JanelaWindows extends Janela {
    renderizar() {
        return "Janela no estilo Windows";
    }
}

// ===== Produtos Concretos - Mac =====
class BotaoMac extends Botao {
    renderizar() {
        return "Botao no estilo Mac";
    }
}

class JanelaMac extends Janela {
    renderizar() {
        return "Janela no estilo Mac";
    }
}

// ===== Produtos Concretos - Linux =====
class BotaoLinux extends Botao {
    renderizar() {
        return "Botao no estilo Linux";
    }
}

class JanelaLinux extends Janela {
    renderizar() {
        return "Janela no estilo Linux";
    }
}

// ===== Fabrica Abstrata =====
class FabricaInterface {
    criarBotao() {
        throw new Error("criarBotao() deve ser implementado");
    }

    criarJanela() {
        throw new Error("criarJanela() deve ser implementado");
    }
}

// ===== Fabricas Concretas =====
class FabricaWindows extends FabricaInterface {
    criarBotao() {
        return new BotaoWindows();
    }

    criarJanela() {
        return new JanelaWindows();
    }
}

class FabricaMac extends FabricaInterface {
    criarBotao() {
        return new BotaoMac();
    }

    criarJanela() {
        return new JanelaMac();
    }
}

class FabricaLinux extends FabricaInterface {
    criarBotao() {
        return new BotaoLinux();
    }

    criarJanela() {
        return new JanelaLinux();
    }
}

// ===== Cliente =====
function sistemaMultiplataforma(fabrica) {
    const botao = fabrica.criarBotao();
    const janela = fabrica.criarJanela();

    console.log(botao.renderizar());
    console.log(janela.renderizar());
}

// ===== Uso =====
sistemaMultiplataforma(new FabricaWindows());
console.log("----------------");

sistemaMultiplataforma(new FabricaMac());
console.log("----------------");

sistemaMultiplataforma(new FabricaLinux());
console.log("----------------");
