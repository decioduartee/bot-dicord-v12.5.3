module.exports = {
    name: 'ping',
    aliases: ['ping'],
    async execute(client, message, args) {
        message.channel.send('Pong!');
    }
}