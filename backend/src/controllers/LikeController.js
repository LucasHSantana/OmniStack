// Controller salva os likes dados por um dev

const Dev = require('../models/Dev');

module.exports = {
    async store(request, response) {       
        const { devId } = request.params;
        const { user } = request.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            console.log('Dev não existe!');
            return response.status(400).json({ error: 'Dev não existe' });
        }        

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        console.log(`${loggedDev.user} deu like em ${targetDev.user}`);

        if (targetDev.likes.includes(loggedDev._id)){
            const loggedSocket = request.connectedUsers[user];
            const targetSocket = request.connectedUsers[devId];

            if (loggedSocket) {
                request.io.to(loggedSocket).emit('match', targetDev);
            };

            if (targetSocket){
                request.io.to(targetSocket).emit('match', loggedDev);
            }
            console.log('DEU MATCH');
        }

        return response.json(loggedDev);
    }
};