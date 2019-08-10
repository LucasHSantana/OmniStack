// Controller salva os dislikes dados por um dev

const Dev = require('../models/Dev');

module.exports = {
    async store(request, response) {       
        const { devId } = request.params; // dev que foi dado dislike (target)
        const { user } = request.headers; // usuário logado

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            console.log('Dev não existe!');
            return response.status(400).json({ error: 'Dev não existe' });
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        console.log(`${loggedDev.user} deu dislike em ${targetDev.user}`);
        return response.json(loggedDev);
    }
};