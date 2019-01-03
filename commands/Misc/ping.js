const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

	  message.channel.send('pong');
			message.channel.send('Pinging...').then(sent => {
    sent.edit(`my ping - ${sent.createdTimestamp - message.createdTimestamp}ms\napi ping - ${Math.floor(client.ping)}`);
	});

}
module.exports.help = {
    name: "ping"
}