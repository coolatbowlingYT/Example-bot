let api = require('nekos-image-api');
exports.run = (client,message) => {
api.image.cat().then(res => {
message.channel.send({file: res.url});
});
}
module.exports.help = {
name: "cat",
alias: "kitty"
}
