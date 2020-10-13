const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Bot List Komutları')
.setTimestamp()
.addField('m!bot-ekle','Botu Eklemeye yarar.')
.addField('!botgörüldü','Bot görüldü mesajı atar.')
.addField('!bot-onayla','Botu onaylar.')
.addField('!bot-reddet','Botu reddeder.')
.addField('!botkapalı','Kapalı Bot sahiplerine mesaj geçer.')
.setFooter('MEDYBOT Yardım Menüsü.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 3 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};