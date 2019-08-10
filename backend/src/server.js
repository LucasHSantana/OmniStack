
// Servidor que vai gerenciar as requisições à api

const express = require('express'); // Ajuda com rotas, requisições e respostas
const routes = require('./routes');
const mongoose = require('mongoose'); // Odm (facilitador para trabalhar com o mongodb) 
const cors = require('cors'); // Permite que a aplicação seja acessada por qualquer endereço

console.log('Configurando Server...');
const server = express();
console.log('Configurado!');

console.log('Conectando ao banco de dados...');
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-cgmge.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
console.log('Conectado!');

console.log('Iniciando server...');
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
console.log('Server Iniciado!\nEscutando...');