var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM clube WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function autenticarJogador(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM jogador WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(gamertag, plataforma, posicao, overall, linkVideo, estado, email, senha, telefone) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", gamertag, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO jogador (gamertag, plataforma, posicao, overall, linkVideo, estado, email, senha, telefone) VALUES ('${gamertag}', '${plataforma}', '${posicao}', '${overall}', '${linkVideo}', '${estado}', '${email}', '${senha}', '${telefone}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function plataformaPC() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():",);
    var instruncao = `
    select count(plataforma) as plataformaPC from jogador where plataforma ='PC';
    `;
    console.log("Executando a instrução SQL: \n" + instruncao);
    return database.executar(instruncao);
}


function plataformaPS4() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():",);
    var instrucao2 = `
    select count(plataforma) as plataformaPS4 from jogador where plataforma ='Playstation 4';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}



function plataformaPS5() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():");
    var instrucao2 = `
    select count(plataforma) as plataformaPS5 from jogador where plataforma ='Playstation 5';`;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}



function plataformaXBOXONE() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():");
    var instruncao = `
    select count(plataforma) as plataformaXBOXONE from jogador where plataforma ='Xbox One';
    `;
    console.log("Executando a instrução SQL: \n" + instruncao);
    return database.executar(instruncao);
}



function plataformaXBOXSERIES() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():");
    var instruncao = `
    select count(plataforma) as plataformaXBOXSERIES from jogador where plataforma ='Xbox Series S/X';
    `;
    console.log("Executando a instrução SQL: \n" + instruncao);
    return database.executar(instruncao);
}


function listaJogador() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():");
    var instruncao = `
    SELECT gamerTag, plataforma, posicao, overall, linkVideo, telefone FROM jogador WHERE fkClube IS NULL ORDER BY gamerTag ;
     `;

    console.log("Executando a instrução SQL: \n" + instruncao);
    return database.executar(instruncao);
}


function adicionarFK(idClube, idJogador) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function street():");
    var instruncao = `
    UPDATE jogador SET fkClube = ${idClube} WHERE idJogador = ${idJogador};
     `;

    console.log("Executando a instrução SQL: \n" + instruncao);
    return database.executar(instruncao);
}

module.exports = {
    autenticar,
    autenticarJogador,
    cadastrar,
    plataformaPC,
    plataformaPS4,
    plataformaPS5,
    plataformaXBOXONE,
    plataformaXBOXSERIES,
    listaJogador,
    adicionarFK
};