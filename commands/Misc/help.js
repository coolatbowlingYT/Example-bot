const Discord = require("discord.js");
const sql = require('sqlite'); 
sql.open('./database.sqlite');

module.exports.run = async (client,message,args) => {
sql.get('SELECT * FROM serversettings WHERE guildid = ?', [message.guild.id]).then(row => {
const prefix = row.prefix;

    const RichEmbed = new Discord.RichEmbed()
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
	.setTitle(`help for ${client.user.username}`)
    .addField('**Image commands: ['+ client.imageCommands.size +']**', '`'+client.imageCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**Misc commands: ['+ client.miscCommands.size +']**', '`'+client.miscCommands.map(c=>c.help.name).join('` `')+'`')
	.addField('**Moderation commands: ['+ client.moderationCommands.size +']**', '`'+client.moderationCommands.map(c=>c.help.name).join('` `')+'`')
	.addField('*Music commands: ['+ client.musicCommands.size +']**', '`'+client.musicCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**More help:**', 'for more help type ```'+ prefix +'help <command>```')	 
    .setDescription(`here are my commands`)
    .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
    message.channel.send(RichEmbed);


});
}
module.exports.help = {
	name: "help",
	alias: "h",
	desc: "shows help to a user"
}