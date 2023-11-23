var express = require("express");
var router = express.Router();

var clubeController = require("../controllers/clubeController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    clubeController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    clubeController.listar(req, res);
});

module.exports = router;