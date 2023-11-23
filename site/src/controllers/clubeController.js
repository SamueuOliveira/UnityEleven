var clubeModel = require("../models/clubeModel");

function listar(req, res) {
    clubeModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarEquipe(req, res) {
    

    var nomeProprietario = req.body.proprietarioServer;
    var nomeClube = req.body.clubeServer;
    var fundacao = req.body.fundacaoServer;
    var plataforma = req.body.plataformaEquipeServer;
    var estado = req.body.estadoEquipeServer;
    var email = req.body.emailEquipeServer;
    var senha = req.body.senhaEquipeServer;
    var telefone = req.body.telefoneEquipeServer;
    console.log("email: ", email, "senha: ",)
     // Faça as validações dos valores
     if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        clubeModel.cadastrarEquipe(nomeProprietario, nomeClube, fundacao, plataforma, estado, email, senha, telefone)
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
    cadastrarEquipe
}

