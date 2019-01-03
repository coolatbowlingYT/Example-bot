const Discord = require('discord.js');//grabs d.js
const sql = require('sqlite');//grabs sqlite 
sql.open('./database.sqlite');//creates database if none/grabs database 

const { TOKEN } = require('./config'); 
//make sure you add your bot's token in the ./config file

const client = new Discord.Client();//makes it a bot

require('./util/events.js')(client); 
//i just kept all the events there^, the bots default prefix is there too
require('./util/cmdloader.js')(client);
//that's the command loader^

client.on('message', async message => { 
	if(message.author.bot)return;//NO BOTS ALLOWED
	if(message.channel.type !== "text")return;//SERVERS ONLY
sql.get('SELECT * FROM serversettings WHERE guildid = ?', [message.guild.id]).then(row => {
  let prefix = row.prefix; //calls the prefix from the sql file

  if(!message.content.startsWith(prefix))return;//makes it so you have to use the prefix
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);//grabs the arguments
  const cmd = args.shift().toLowerCase();//makes it so it doesn't mater if its in CAPS or not

  let commandfile = client.commands.get(cmd);//calls the command file
  let alias = client.aliases.get(cmd);//calls the command if it's an alias of the command

  if(commandfile)commandfile.run(client,message,args);//runs f its a command
  if(alias)alias.run(client,message,args);//runs if its an alias of a command

 });
});

client.login(TOKEN);//logs the bot in