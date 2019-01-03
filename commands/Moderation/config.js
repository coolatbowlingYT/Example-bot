const Discord = require("discord.js");
const sql = require('sqlite');
sql.open('./database.sqlite');

module.exports.run = async (client,message) => {
sql.get('SELECT * FROM serversettings WHERE guildid = ?', [message.guild.id]).then(row => {
    let prefix = row.prefix;
if(!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== message.guild.ownerID)return message.channel.send('you need the ``"ADMINISTRATOR"`` permission to use this');
    let embed = new Discord.RichEmbed()
    .setTitle('Here\'s the server configuration:')
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .setDescription(`\`\`\`css
• Prefix         :-: ${prefix}\`\`\``)
  message.channel.send(embed);
});

}
module.exports.help = {
  name: "config",
  alias: "conf"
}