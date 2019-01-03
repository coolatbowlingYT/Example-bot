const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
let sum1 = message.content.split(' ').slice(1).join(' ');
let ppl = message.mentions.users.first()||message.guild.users.find(sum1);
let oof = message.mentions.members.first()||message.guild.members.find(sm1);
	if (ppl) {
		var RichEmbed = new Discord.RichEmbed()
     .setDescription(`**Avatar for:** ${ppl}\n[link](${ppl.avatarURL})`)
     .setColor(`${oof.displayHexColor}`)
	 .setTimestamp()
	 .setImage(`${ppl.avatarURL}`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed})
	}
	if (!ppl) {
		var RichEmbed = new Discord.RichEmbed()
		.setDescription(`**Avatar for:** ${message.author}\n[link](${message.author.avatarURL})`)
		.setColor(`${message.member.displayHexColor}`)
		.setTimestamp()
		.setImage(`${message.author.avatarURL}`)
		.setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
		message.channel.send({embed: RichEmbed})
	}
	
}

module.exports.help = {
    name: "avatar",
	type: "Image",
	info: "Gets a users avatar",
	perms: "MEMBER / none",
	useage: `@user / {prefix}avatar`
}