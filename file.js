const Discord = require("discord.js");
const prettyMilliseconds = require('pretty-ms');

const prefix = "!"

let client = new Discord.Client();

client.on("ready", async() => {
    console.log(`@Assembly ... Pomyślnie zaktualizowano!`);

    client.user.setActivity("@Assembly", {
        type: "PLAYING"
    });
});
  
client.on("guildDelete", guild => {
    console.log(`Zostałem usunięty z serwera: ${guild.name} [ID: ${guild.id}]`);
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
        var args = message.content.slice(prefix.length).trim().split(/ +/g);
        var command = args.shift().toLowerCase()

    if (command == "wstęp") {
        let uptime = new Discord.MessageEmbed()
            .setColor(`#36393f`)
            .setDescription(``)
            .setFooter(`Zapytał: ${message.author.tag}`)
            .setImage(`https://cdn.discordapp.com/attachments/858101137562140673/860246459307786270/75335c3f56f9acb87de37dd82c3c6400.jpg`)
        message.channel.send(uptime)
    }

    if (command == "cut") {
        let cut = new Discord.MessageEmbed()
               .setColor(`#36393f`)
            .setImage(`https://media1.tenor.com/images/bd030a7745e1ae72a6c27e13a23fbfdf/tenor.gif?itemid=14870978`)
        message.channel.send(cut)
    }
    
});

client.login('ODYwMTI5MjcwMjUxMzg4OTYw.YN2vzg.JrK2zFK_tDUOU62DRwsSkV5Og0w');