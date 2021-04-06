const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ portials: ["MESSAGE", "CHANNEL", "REACTION"] });

client.comandos = new Discord.Collection();
client.eventos = new Discord.Collection();

['comando_handler', 'evento_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

client.login(process.env.DISCORD_TOKEN);