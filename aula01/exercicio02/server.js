const http = require('http')

const tratamentoRequisicoes = function (requisicao, resposta) {
    resposta.writeHead(200, { "Content-Type" : "text/html"});
    resposta.write("<h1>Meu primeiro site Node.js</h1>");
    resposta.end();
}

const servidor = http.createServer(tratamentoRequisicoes)

servidor.listen(3000, function(){
    console.log('Servidor funcionando na porta : 3000')
})