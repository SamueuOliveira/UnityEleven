var database = require("../database/config");

function cadastrarEquipe (email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM clube WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


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