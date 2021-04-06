module.exports = (Discord, client, message) => {
    const prefix = process.env.DISCORD_PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const comando = client.comandos.get(cmd) || client.comandos.find(a => a.aliases && a.aliases.includes(cmd));

    if(comando) comando.execute(client, message, args, Discord);
}