var clubeModel = require("../models/clubeModel");

function listar(req, res) {
    clubeModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    

    var nomeProprietario = req.body.nomeProprietarioServer;
    var nomeClube = req.body.nomeClubeServer;
    var fundacao = req.body.fundacaoServer;
    var plataforma = req.body.plataformaServer;
    var estado = req.body.estadoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;

     // Faça as validações dos valores
     if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        clubeModel.cadastrar(nomeProprietario, nomeClube, fundacao, plataforma, estado, email, senha, telefone)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listar,
    cadastrar
}

