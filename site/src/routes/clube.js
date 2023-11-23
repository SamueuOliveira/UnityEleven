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

module.exports = router;