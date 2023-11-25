CREATE DATABASE unityEleven;
USE unityEleven;


CREATE TABLE clube (
idClube INT PRIMARY KEY AUTO_INCREMENT,
nomeProprietario VARCHAR(45),
nomeClube VARCHAR(45),
fundacao DATE,
plataforma VARCHAR(45),
email VARCHAR(60),
senha VARCHAR(20),
telefone VARCHAR(20))
AUTO_INCREMENT = 100;


CREATE TABLE jogador (
idJogador INT PRIMARY KEY AUTO_INCREMENT,
gamerTag VARCHAR(45),
plataforma VARCHAR(45),  
posicao CHAR(3),
overall INT(3),
linkVideo VARCHAR(255),
estado VARCHAR(25),
email VARCHAR(60),
senha VARCHAR(20),
telefone VARCHAR(20),
fkClube INT,
CONSTRAINT fkJogadorClube FOREIGN KEY (fkClube) REFERENCES clube (idClube))
AUTO_INCREMENT = 1000;


CREATE TABLE endereco (
idContato INT PRIMARY KEY AUTO_INCREMENT,
estado VARCHAR(25),
fkJogador INT, -- 1:1 UM JOGADOR TEM 1 endereço E 1 endereço TEM 1 JOGADOR
fkClube INT,
CONSTRAINT fkContatoJogador FOREIGN KEY (fkJogador) REFERENCES jogador (idJogador),
CONSTRAINT fkContatoClube FOREIGN KEY (fkClube) REFERENCES clube (idClube))
AUTO_INCREMENT = 500;

INSERT INTO clube (nomeProprietario, nomeClube, fundacao, plataforma, email, senha, telefone) VALUES
('Samuel Oliveira', 'Pouco pra Entender FC', '2021-02-08', 'Xbox Series S/X', 'samuel@email.com', 'samuel123', '11934101869'),
('João Silva', 'Futebol Total FC', '1995-07-15', 'PlayStation 4', 'joao@email.com', 'senha123', '11987654321'),
('Ana Oliveira', 'Gol Perfeito FC', '2000-05-20', 'PC', 'ana@email.com', 'senha456', '11965432198'),
('Carlos Santos', 'Bola na Rede United', '1988-12-03', 'Xbox One', 'carlos@email.com', 'senha789', '11912345678'),
('Patrícia Lima', 'Chute Certeiro FC', '1999-08-25', 'PlayStation 5', 'patricia@email.com', 'senhaABC', '11987654321'),
('Rafael Pereira', 'Goleada Garantida FC', '2005-04-10', 'PC', 'rafael@email.com', 'senhaXYZ', '11965432198'),
('Fernanda Silva', 'Drible Certeiro FC', '1993-11-15', 'Xbox Series S/X', 'fernanda@email.com', 'senha123XYZ', '11912345678'),
('Rodrigo Oliveira', 'Chapéu Perfeito FC', '2002-09-18', 'PlayStation 4', 'rodrigo@email.com', 'senha456ABC', '11987654321'),
('Camila Santos', 'Gol de Placa United', '1996-06-30', 'Xbox One', 'camila@email.com', 'senha789XYZ', '11965432198');

select * from clube;

INSERT INTO jogador (gamerTag, plataforma, posicao, overall, linkVideo, email, senha, telefone, fkClube) VALUES
('DCPHD', 'Xbox Series S/X', 'ATA', 87, 'https://www.youtube.com/watch?v=g7HOwx75Trc', 'dcphd@email.com', 'fifa2024', '1169853568745', 100),
('Player1', 'PC', 'MEI', 88, 'https://www.youtube.com/watch?v=abc123', 'player1@email.com', 'senha123', '11987654321', 102),
('GoleadorX', 'PlayStation 4', 'ATA', 86, 'https://www.youtube.com/watch?v=def456', 'goleadorx@email.com', 'senha456', '11965432198', 101),
('SkillMaster', 'Xbox One', 'MEI', 85, 'https://www.youtube.com/watch?v=ghi789', 'skillmaster@email.com', 'senha789', '11912345678', 103),
('FintaCerta', 'PC', 'ATA', 89, 'https://www.youtube.com/watch?v=jkl012', 'fintacerta@email.com', 'senhaABC', '11698535687', 102),
('DefesaSegura', 'PlayStation 5', 'DEF', 88, 'https://www.youtube.com/watch?v=mnop34', 'defesasegura@email.com', 'senhaXYZ', '11543219876', 104),
('DriblesIncriveis', 'Xbox Series S/X', 'ATA', 87, 'https://www.youtube.com/watch?v=qrs567', 'driblesincr@email.com', 'senha789', '11432198765', 106),
('PassesPrecisos', 'PC', 'MEI', 86, 'https://www.youtube.com/watch?v=tuv890', 'passesprecisos@email.com', 'senhaXYZ', '11321087654', 105);

SELECT * FROM jogador;







