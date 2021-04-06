const fs = require('fs');

module.exports = (client, Discord) => {
    const carrega_dir = (dirs) => {
        const arquivosDeEvento = fs.readdirSync(`./eventos/${dirs}`).filter(arquivos => arquivos.endsWith('.js'));

        for(const arquivos of arquivosDeEvento) {
            const evento = require(`../eventos/${dirs}/${arquivos}`);
            const evento_nome = arquivos.split('.')[0];
            client.on(evento_nome, evento.bind(null, Discord, client));
        }
    }

    ["client", "guild"].forEach(e => carrega_dir(e));
}