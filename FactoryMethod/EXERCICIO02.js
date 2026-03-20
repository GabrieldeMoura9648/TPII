// ==============================
// Estratégias de formatação
// ==============================

const formatadores = {
    direto: ({ nome, sobrenome }) => `${nome} ${sobrenome}`,
    invertido: ({ nome, sobrenome }) => `${sobrenome}, ${nome}`
};


// ==============================
// Factory funcional
// ==============================

const criarNome = (entrada) => {

    if (entrada.includes(",")) {
        const [sobrenome, nome] = entrada.split(", ");
        return { nome, sobrenome, tipo: "invertido" };
    }

    const [nome, sobrenome] = entrada.split(" ");
    return { nome, sobrenome, tipo: "direto" };
};


// ==============================
// Lista de entradas
// ==============================

const entradas = [
    "James Gosling",
    "Scott McNealy",
    "Gosling, James",
    "McNealy, Scott"
];


// ==============================
// Pipeline funcional
// ==============================

const nomesFormatados = entradas
    .map(criarNome)
    .map(obj => formatadores[obj.tipo](obj));


// ==============================
// Impressão
// ==============================

nomesFormatados.forEach(console.log);