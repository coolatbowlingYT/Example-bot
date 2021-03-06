const Discord = require("discord.js");
const sql = require('sqlite');
sql.open('./database.sqlite');

module.exports.run = async (client,message) => {
sql.get('SELECT * FROM serversettings WHERE guildid = ?', [message.guild.id]).then(row => {
const prefix = row.prefix;
let cmd = message.content.split(' ').slice(1,2).join(' ');

if(!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== message.guild.ownerID)return message.channel.send('you need the ``"ADMINISTRATOR"`` permission to use this');
if(!cmd || cmd === "help"){
    let embed = new Discord.RichEmbed()
    .setTitle('How to use the reset command:')
    .setDescription('This is a moderation command used to set the server config settings back to default')
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .addField('**Command usages:**', `\`\`\`css\n${prefix}reset prefix\`\`\``)
  message.channel.send(embed);
}
if(cmd === "prefix"){
  sql.run('UPDATE serversettings SET prefix = ? WHERE guildid = ?', ["-", message.guild.id]);
  message.channel.send('Server prefix set back to it\'s Default: ``-``');
}
});
}
module.exports.help = {
  name: "reset"
}