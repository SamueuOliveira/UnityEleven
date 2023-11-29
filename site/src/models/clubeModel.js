var database = require("../database/config");

function cadastrarEquipe(email, senha) {
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



function plataformaPCEQUIPE() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():",);
    var instruncao = `
    select count(plataforma) as plataformaPCEQUIPE from clube where plataforma ='PC';
    `;
    console.log("Executando a instrução SQL: \n" + instruncao);
    return database.executar(instruncao);
}


function plataformaPS4EQUIPE() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():",);
    var instrucao2 = `
    select count(plataforma) as plataformaPS4EQUIPE from clube where plataforma ='Playstation 4';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}



function plataformaPS5EQUIPE() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():");
    var instrucao2 = `
    select count(plataforma) as plataformaPS5EQUIPE from clube where plataforma ='Playstation 5';`;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}



function plataformaXBOXONEEQUIPE() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():");
    var instruncao = `
    select count(plataforma) as plataformaXBOXONEEQUIPE from clube where plataforma ='Xbox One';
    `;
    console.log("Executando a instrução SQL: \n" + instruncao);
    return database.executar(instruncao);
}



function plataformaXBOXSERIESEQUIPE() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():");
    var instruncao = `
    select count(plataforma) as plataformaXBOXSERIESEQUIPE from clube where plataforma ='Xbox Series S/X';
    `;
    console.log("Executando a instrução SQL: \n" + instruncao);
    return database.executar(instruncao);
}

function listaEquipe() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():");
    var instruncao = `
    SELECT nomeClube, plataforma, nomeProprietario, telefone FROM clube ORDER BY nomeClube;
     `;

    console.log("Executando a instrução SQL: \n" + instruncao);
    return database.executar(instruncao);
}

module.exports = {
    cadastrarEquipe,
    listar,
    plataformaPCEQUIPE,
    plataformaPS4EQUIPE,
    plataformaPS5EQUIPE,
    plataformaXBOXONEEQUIPE,
    plataformaXBOXSERIESEQUIPE,
    listaEquipe
};