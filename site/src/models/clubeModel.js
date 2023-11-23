var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM clube;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarEquipe(nomeProprietario, nomeClube, fundacao, plataforma, estado, email, senha, telefone) {
    var instrucao = `
        INSERT INTO clube (nomeProprietario, nomeClube, fundacao, plataforma, estado, email, senha, telefone) VALUES ('${nomeProprietario}', '${nomeClube}', '${fundacao}', '${plataforma}', '${estado}', '${email}', '${senha}', '${telefone}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarEquipe,
    listar
};