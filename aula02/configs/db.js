//Requisição mongoose
const mongoose = require('mongoose')

//Atribuição da promise global do node para a promisse do mongoose
//Evitar warnings de assync
mongoose.Promise = global.Promise;

//conecta com bd passando a url do banco passando os parâmetros obrigatórios para evitar warnings
module.exports = mongoose.connect('mongodb://localhost:27017/exercicio02DB', { useNewUrlParser: true, useUnifiedTopology: true});
