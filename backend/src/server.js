
// Servidor que vai gerenciar as requisições à api

const express = require('express'); // Ajuda com rotas, requisições e respostas
const routes = require('./routes');
const mongoose = require('mongoose'); // Odm (facilitador para trabalhar com o mongodb) 
const cors = require('cors'); // Permite que a aplicação seja acessada por qualquer endereço

console.log('Configurando Server...');
const httpServer = express();
const server = require('http').Server(httpServer);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {    
    const {user} = socket.handshake.query;
    connectedUsers[user] = socket.id;
    console.log(`Nova conexão ${socket.id} - ${user} `);
});
console.log('Configurado!');

console.log('Conectando ao banco de dados...');
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-cgmge.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
console.log('Conectado!');

httpServer.use((request, response, next) => {
    request.io = io;
    request.connectedUsers = connectedUsers;

    return next();
});

console.log('Iniciando httpServer...');
httpServer.use(cors());
httpServer.use(express.json());
httpServer.use(routes);

server.listen(3333);
console.log('Server Iniciado!\nEscutando...');