const Discord = require('discord.js');
const client = new Discord.Client({ portials: ["MESSAGE", "CHANNEL", "REACTION"] });

client.comandos = new Discord.Collection();
client.eventos = new Discord.Collection();

['comando_handler', 'evento_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

client.login('ODIxNzk5MDU2MTYyMTYwNjgw.YFI-Aw.Tez6ceXgwF8CZKHYVWno6P0S-60');