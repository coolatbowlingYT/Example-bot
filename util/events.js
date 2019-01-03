const sql = require('sqlite');
sql.open('./database.sqlite');

module.exports = (client) => {
    client.on('warn', console.warn);

    client.on('error', console.error);

    client.on('ready', () => {
        console.log(`${client.user.username} is online`);
        client.user.setActivity(`over ${(client.users.size).toLocaleString()} users`, { type: "WATCHING" });
        sql.run('CREATE TABLE IF NOT EXISTS serversettings (guildid TEXT UNIQUE, prefix VARCHAR)').then(() => {
            for (const guild of client.guilds.values()){
                sql.run('INSERT OR IGNORE INTO serversettings (guildid, prefix) VALUES (?, ?)', [guild.id, "-"]);
            }                                                                                            //^^this is the bots default prefix
         });
        });
    
    client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));
    
    client.on('reconnecting', () => console.log('I am reconnecting now!'));
    
    client.on('resume', () => console.log('I have reconnected!')); 
    
    client.on('guildCreate', (guild) => {
        let channel = client.channels.get('506318877266018304');//logChannel
        channel.send(`I have joined the guild ${guild.name}`);
        sql.run('INSERT OR IGNORE INTO serversettings (guildid, prefix) VALUES (?, ?)', [guild.id, "-"]);
        });                                                                                      //^^if you change the default prefix, make sure you change it here too
                                                                                                //ps. if you change it here, you need to change it in the reset cmd too
            
    client.on('guildDelete', (guild) => {
        let channel = client.channels.get('506318877266018304');//logChannel
        channel.send(`I have left the guild ${guild.name}`);
        sql.run('DELETE FROM serversettings WHERE guildid = ?', [guild.id]);
        });
}