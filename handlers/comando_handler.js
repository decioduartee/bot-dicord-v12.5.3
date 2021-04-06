const fs = require('fs');

module.exports = (client, Discord) => {
    const arquivosDeComando = fs.readdirSync('./comandos').filter(arquivo => arquivo.endsWith('.js'));

    for(const arquivo of arquivosDeComando) {
        const comando = require(`../comandos/${arquivo}`);
        if(comando.name) {
            client.comandos.set(comando.name, comando);
        } else {
            continue;
        }
    }
}