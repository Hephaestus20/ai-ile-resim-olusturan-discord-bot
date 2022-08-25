const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const WomboDream = require('dream-api')
  var fs = require("fs");
const axios = require('axios');

exports.run = (client, message, args) => {
  




    let mesaj = args.slice(0).join(' ');

  

  
    message.channel.send("<@" + message.author.id + ">" + " **" + mesaj + "** Hakkında resim oluşturuluyor...");
    let randomnumbers = Math.floor(Math.random() * 15) + 1;;
    console.log(randomnumbers)
  WomboDream.generateImage(randomnumbers, mesaj).then((image) => {
    
    console.log(image);
    
      let image2=image['result']
      const embed = new Discord.MessageEmbed()
   
      .setImage(image.result.final)

        message.channel.send("<@" + message.author.id + ">" + " **" + mesaj + "** Hakkında resim oluştu (Palet: "+ randomnumbers+")");
        message.channel.send(embed);
      });


    


  




};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['resim-getir', 'resim-oluştur', 'resim'],
  permLevel: 0
};

exports.help = {  
  name: 'kullanıcıbilgim',
  description: 'Komutu kullanan kişi hakkında bilgi verir.',
  usage: 'kullanıcıbilgim'
};
