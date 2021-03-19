//Módulos necessários para a execução/criação do servidor
const express = require('express');

//Criação de constantes e instaciamento do servidor
const port = 3200;
const server = express();

//Adição dos middlewares no servidor
server.use(express.urlencoded( {extended: true} ));
server.use(express.json());

//Sobe servidor na porta e envia callback
server.listen(port, () => console.log(`Servidor no ar na porta ${port}`));

//exporta servidor
module.exports = server;