var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});
router.post("/autenticarJogador", function (req, res) {
    usuarioController.autenticarJogador(req, res);
});

router.get("/plataformaPC", function (req, res) {
    usuarioController.plataformaPC(req, res);
})

router.get("/plataformaPS4", function (req, res) {
    usuarioController.plataformaPS4(req, res);
});

router.get("/plataformaPS5", function (req, res) {
    usuarioController.plataformaPS5(req, res);
});

router.get("/plataformaXBOXONE", function (req, res) {
    usuarioController.plataformaXBOXONE(req, res);
});

router.get("/plataformaXBOXSERIES", function (req, res) {
    usuarioController.plataformaXBOXSERIES(req, res);
});

router.get("/listaJogador", function (req, res) {
    usuarioController.listaJogador(req, res);
});

router.post("/adicionarFK", function (req, res) {
    usuarioController.adicionarFK(req, res);
});





module.exports = router;