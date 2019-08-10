// Controller grava novo dev no banco de dados

const axios = require('axios'); // Facilida requisições à apis
const Dev = require('../models/Dev'); //Model

module.exports = {
    //Retorna todos os usuários que ainda não passaram pelo like ou dislike (não retorna o usuario logado também).
    async index(request, response){
        const {user} = request.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ]
        })

        return response.json(users);
    },

    //Caso não exista, grava o novo usuário no banco de dados.
    async store(request, response){
        const { username } = request.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists){
            console.log(`Usuário ${ username } já existe no banco de dados!`);
            return response.json(userExists);            
        }

        const api_response = await axios.get(`https://api.github.com/users/${username}`);        
        const { name, bio, avatar_url } = api_response.data;
        
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar: avatar_url,
        })

        console.log(`Usuário ${dev.user} criado!`)
        return response.json(dev);
    }
};