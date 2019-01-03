const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = async (client) => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();

    client.imageCommands = new Discord.Collection();
    client.miscCommands = new Discord.Collection();
    client.moderationCommands = new Discord.Collection();

const imgFiles = await readdir("./commands/Image/");
const miscFiles = await readdir("./commands/Misc/");
const modFiles = await readdir("./commands/Moderation/");


imgFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let img = require(`../commands/Image/${f}`);
    client.imageCommands.set(img.help.name, img);
    client.commands.set(img.help.name, img);
	client.aliases.set(img.help.alias, img);
	});
miscFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let misc = require(`../commands/Misc/${f}`);
    client.miscCommands.set(misc.help.name, misc);
    client.commands.set(misc.help.name, misc);
	client.aliases.set(misc.help.alias, misc);
	});
modFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let mod = require(`../commands/Moderation/${f}`);
    client.moderationCommands.set(mod.help.name, mod);
    client.commands.set(mod.help.name, mod);
	client.aliases.set(mod.help.alias, mod);
	});
console.log(`\nloaded ${client.commands.size} commands`);
console.log(`loaded ${client.aliases.size} aliases`);
}