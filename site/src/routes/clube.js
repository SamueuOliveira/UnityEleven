var express = require("express");
var router = express.Router();

var clubeController = require("../controllers/clubeController");

router.post("/cadastrarEquipe", function (req, res) {
    // função a ser chamada quando acessar /clube/cadastrar 
    clubeController.cadastrarEquipe(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /clube/listar
    clubeController.listar(req, res);
});

router.get("/plataformaPCEQUIPE", function (req, res) {
    clubeController.plataformaPCEQUIPE(req, res);
})

router.get("/plataformaPS4EQUIPE", function (req, res) {
    clubeController.plataformaPS4EQUIPE(req, res);
});

router.get("/plataformaPS5EQUIPE", function (req, res) {
    clubeController.plataformaPS5EQUIPE(req, res);
});

router.get("/plataformaXBOXONEEQUIPE", function (req, res) {
    clubeController.plataformaXBOXONEEQUIPE(req, res);
});

router.get("/plataformaXBOXSERIESEQUIPE", function (req, res) {
    clubeController.plataformaXBOXSERIESEQUIPE(req, res);
});

router.get("/listaEquipe", function (req, res) {
    clubeController.listaEquipe(req, res);
});


module.exports = router;