const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready',  () => {
  console.log('By : SAJED ');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});


client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === "^^help") {
   message.react("??")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("?Dream SYSTEM? ?��� �����?", true)
      
      .addField("?@SAJED   ??#8844 ??���� �����?", true)
      
      .addField("?^help^????��� ��� ���� ������� �� ����� ������???", true)
      
	    .addField("?^help^^????��� ��� ������� ������???", true)
	    
      .addField("?^help^^^????��� ���  ������� ��������???", true)
      
      .addField("?????����� ��� ���� ������ � ������ �� ������� ?????", true)
      
  message.channel.sendMessage({embed});

 }
});




client.on('message', message => {
   if (message.content === "^^roll 1") {
  message.channel.sendMessage(Math.floor(Math.random() * 25));
    }
});
 
client.on('message', message => {
   if (message.content === "^^roll 2") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});
 
client.on('message', message => {
   if (message.content === "^^roll 3") {
  message.channel.sendMessage(Math.floor(Math.random() * 75));
    }
});
 
client.on('message', message => {
   if (message.content === "^^roll 4") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});


console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const zead = [
   '*** ��� ���� ���� ***',
   '*** ������ ���� ���� � ***',
   `*** ���� �� ! ��� ����� �� ��� ������  ***`,
   '*** �� ��� ������� � ***',
   '*** ����� �� ��� ���� ����� � ***',
   '*** ���� ���� ���� ���� ��� �� ���� ���� ���� ����� ������ ***',
   '*** ����� ��� ���� ���� ����� ***',
   '*** �� ��� ���� ��� ����� � ***',
   '*** ����� ��� ���� ���� ����� ***',
   '*** �� ��� ���� ��� ����� � ***',
   '*** �� ��� ������� � ***',
   '*** ��� ����� ��� ����� ���� ! ***',
   '*** ���� ��� �� ����� ��� ��� ������ �� ��� ***',
   '*** ����� ����� �� ����� �� ��� ��� �� ��� ***',
   '*** ��� ��� ��� ���� � ���� �� ���� ***',
   '*** ��� ���� ***',
   '*** ��� �� ����� ���� ���� �� ������ ***',
   '*** �� ����� ���� ����� �� ����� ***',
   '*** ����� !  ***',
   '*** ��� ����� ��� ������ ����� ����� ������� ����� ���� ���� ***',
   '*** �� ��� ���� � ***',
   '*** ��� ����� ����� ��� ��� ������� ������ ***',
   '*** �� ��� �� ����� ���� ***',
'*** ��� ��� ����� ������ ��� ����� ***',
   '*** ��� ��� ����� �����***',
   '*** ����� ��� �� ����� ����� � ***',
   '*** ��� ���� ���� ����� ��� ����� �� ������ ***',
   '*** ���� �� ��� ���� ���� ���� �������� ***',
   '*** ���� �� ����� ������ �� ��� ����� ��� ***',
   '*** ����� �� ���� ������ � ***',
   '*** ������������������� ��� ���� ����� �� ��� ������ ***',
   '*** �� ���� ��� ���� �� ��� ���� ***',
   '*** ������� ��� ! ���� .����  ***',
   '*** ����� ���� , �� ���� ���� � ***',
   '*** �� �� ���� ���� , ���� .���� ��� ���� ***',
   '*** ����� ���� . �� ���� ���� � ***',
   '*** ��� ���� �� ����� ����� ��� �� ���� ***',
   '*** ��� ���� �� ���� ��� ������ ***',
   '*** �� ���� �� ��� ! ***',
   '*** ���� : ��� ��� ***',
   '*** ���� : �� ���� ������� ��� ��� ***',
   '*** ���� : ���� ��� ��� �� ������ ***',
   '*** ���� : ���� ���� �� ���� ***',
   '*** ���� : ���� ��� ������ ����� ��� �� | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** ��� �� ��� �� ������ ***',
   '*** ����� ����� ������ ����� ���� ����� 100 ����� , ������ �� ��� ����� ����� ��� �������  ***'
]
 client.on('message', message => {
 if (message.content.startsWith('^^����')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("���� ���� ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});



 const cuttweet = [
     '�� ���� �| ����� �� ��� ����� ��� ���� ����� ����ɡ ���� �����',
     '�� ���� | ���� ��� ������ ����� ����߿',
     '�� ���� | ������ �� ... �',
     '�� ���� | ���� ������� ������� �� �����߿',
     '�� ���� �| ���� ������ڿ',
     '�� ���� �| �� ����� ���� ������߿',
     '�� ���� | ���� ���� ����� �� ��� ��� ���� ����� �߿',
     '�� ���� �| ����� ����ѡ �������� �� ���ȿ',
     '�� ���� | ��� 10 ���� ��� ����� �',
     '�� ���� �| ��� ���� ����� ������� ���� ��� ���߿',
     '��� ���� | ���� ��� ����� �� ��� ������ �',
     '�� ���� | ���� ���� ����� ���� �����ǿ',
     '��� ���� | �� �� ����� ���� ����� ���� �����ݿ',
     '��� ���� | �� ���� ������ɿ',
     '��� ���� | ��� ������ �� ���� �',
     '��� ���� | �� ��� ���� ��� ����.',
     '��� ���� | ��� ������ �� ������� �������� �',
     '��� ���� | ���� ���� ������ ��� ���� �߿',
     '��� ���� | ���� ���� �� ����� �� ������ �!',
     '��� ���� |���� ���� ��� ���� �',
     '��� ���� | ����� ����� ��� ���� ����� ��� ���� ����� �',
     '�� ���� | �� ��� ����� �� ��� ���� ����ʿ',
     '��� ���� | ���� ����� ������� �����ǿ',
     '��� ���� | ����� �� ����� ��� ���� ���� ����� �',
     '��� ���� | �� ����� ���� ���� ����� �',
     '��� ���� | ����� ������ ����� �',
     '��� ���� | �� ��� ����� ���� ������ ��� ������ ����� ������',
]

 client.on('message', message => {
   if (message.content.startsWith("^^�� ����")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('���� �� ����' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**������ ��� �� ���� ��� ������ ��� �� ������� ��� ����� ������ ���� �� �� ���� ��� ����� ���� ����**.",
  "**�� ���� ���� �� ���� �� ������� �������**.",
  "**�� ���� ��� �� ����� ��� ����� ���� ���� ������**.",
  "**���� �� ���� ������� ����� �� ������ ����� �������**.",
  "**�� ����� ���� ����� ��� �� �����**.", 
  "**������ ���� �� ���� ��������� ������ ��� ���� ����� �������� ������ ��� ����� �����**.", 
  "**����� ��� �������� � �� ����� ������ �� ����� �������**.", 
  "**�� ���� ����� ����� ��� �� �� ���� ����� �����**.", 
  "**��������� ������� �� ���� ������**.", 
  "**��� ���� �� �� ������ �� ���� ��� ���� �� ����**.", 
  "**��� ���� �� �� ������ �� ���� ��� ���� �� ����**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("^^�����")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('���� �����' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});



client.on("message", message => {
 if (message.content === "^help^") {
        message.react("??")
           message.react("??")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-?? ���� ����� ������
-?? ��� ��������� 
-? ����� �� ���
-?? ����� �� ���� 
-?? ����� ���� � ���� ����� ����� ���������

? ?????????????????? ? 

???����� ����???
                        
??^^server ?������� �� �������?                      

??^^servers ?����� ���� ����� ��� ����� ��� ���� ?  

??^^bot ?����� ����� ��� �����?

??^^date ?������ �������?

??^^ping ?������ ���� �����?

??^^members ?������� �� �������?

??^^embed ?����� ��� ��� ���� �����?

??^^say ?�� ���� ������ ���� �����?

??^^animal  ?��� �� ����� ���  ���������?

? ?????????????????? ? 

???����� ������???

??^^rooms ?������ ��� ����� �������?

??^^ban ?����� ��� ����?

??^^kick ?����� ��� ���?

??^^clear ?���� ����� ����?

??^^edit  ?������ ����� ?

??^^ct  �������: ����� ��� ������?�� ����� ��� �����?

??^^cv  �������: ����� ��� ������?�� ����� ��� ����?

??^^delet  ?���� ���� ������ ���� ���� �� �����?

? ?????????????????? ? 

???������???

??^^roll 1   ?������ �� 1 ��� 25?

??^^roll 2   ?������ �� 1 ��� 50?

??^^roll 3   ?������ �� 1 ��� 75?

??^^roll 4   ?������ �� 1 ��� 100?

? ?????????????????? ? 

???�����???

??^^�� ����

??^^���� 

??^^����� 

? ?????????????????? ? 

???����� �����???

??^^avatar ?�� ��� ����� �� ���� �� ���?

??^^image ?�� ��� ���� �������?

??�����

? ?????????????????? ? 

???����� �������???

?? ����� 1 / ����� 2 

?? ����� 3 / ����� 4

?? ����� 5 / ����� 6 

?? ����� 7 / ����� 8

?? ����� 9 / ����� 10

? ?????????????????? ? 

???����� ����� ���������???

^^invite | ����� ����� �� ����� ����� 

^^support| ����� ������  ����� ����� � ��������

����� ������ ���� ����� | @SAJED   ??#8844  

? ?????????????????? ? 




`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === "^help^^^") {
        message.react("??")
                message.react("??")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
? ?????????????????? ? 
???����� ������???

??^^ban ?����� ��� ����?

??^^kick ?����� ��� ���?

??^^clear ?���� ����� ����?

??^^edit  ?������ ����� ?

??^^ct  �������: ����� ��� ������?�� ����� ��� �����?

??^^cv  �������: ����� ��� ������?�� ����� ��� ����?

??^^delet  ?���� ���� ������ ���� ���� �� �����?

??^^bc  ?������ ����������? 

??^^rooms ?������ ��� ����� �������?


? ?????????????????? ? 

	  

???����� ����� ���������???

^^invite | ����� ����� �� ����� ����� 

^^support| ����� ������  ����� ����� � ��������

����� ������ ���� ����� | @SAJED   ??#8844  






`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === "^help^^") {
        message.react("??")
                message.react("??")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
? ?????????????????? ? 

???����� ����???
                        
??^^server ?������� �� �������?                      

??^^servers ?����� ���� ����� ��� ����� ��� ���� ?  

??^^bot ?����� ����� ��� �����?

??^^date ?������ �������?

??^^ping ?������ ���� �����?

??^^members ?������� �� �������?

??^^embed ?����� ��� ��� ���� �����?

??^^say ?�� ���� ������ ���� �����?

??^^animal  ?��� �� ����� ���  ���������?


? ?????????????????? ? 
	  

???����� ����� ���������???

^^invite | ����� ����� �� ����� ����� 

^^support| ����� ������  ����� ����� � ��������

����� ������ ���� ����� | @SAJED   ??#8844  


`)


message.author.sendEmbed(embed)

}
}); 


client.on('message', message => {
    if (message.content.startsWith("^^avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

                    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('^^ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });

client.on("message", (message) => {
if (message.content.startsWith("^^ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('��� ������ ��� �������')

}
});
client.on("message", (message) => {
if (message.content.startsWith("^^cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('��� ������ ��� �����')
    
}
});






var prefix = "^^";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// ^^say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


   client.on("message", message => {
    const prefix = "^^"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  client.on('message', (message) => {
    if (message.content.startsWith('^^kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' �� ��� ��� ����� �� �������');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 


client.on('message', (message) => {
    if (message.content.startsWith('^^ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('��� ������� ������ ���');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + '�� ��� ��� ����� �� �������');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});
  
  client.on("message", (message) => {
    if (message.content.startsWith('^^delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});
  
  
client.on('message', message => {
     if (message.content === "^^servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**| ��������� |**" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});

  var prefix = "^^";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
var prefix = "^^";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('� ������� :', `${message.guild.name}`)
            .addField('� ������ : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' � ������� : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on('message', message => {
    if (message.content === "^^server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: �� �� �������',`${message.guild.id}`,true)
         .addField(':date: ����� ��',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: ���� �������',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: ������� ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: �����' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: ������',message.guild.region)
         .addField(':ribbon: ������ �������',`${message.guild.emojis.size}`,true)
         .addField(':construction: ����� ������',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: �����  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });


  client.on('message', message => {
    if (message.content === "^^rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

  var prefix = "^^";
  const HeRo = new Discord.Client();
  client.on('message', message => {
      if (message.content === prefix + "date") {
          if (!message.channel.guild) return message.reply('** This command only for servers **');  
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();

              var Date15= new Discord.RichEmbed()
              .setTitle("**?  Date - ������� ? **")
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "?"+ Day + "-" + Month + "-" + Year + "?")
              .setFooter(`*help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
               message.channel.sendEmbed(Date15);
      }
  });




    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='^^members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| ��������� ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| �� �� ��',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| ����',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| ����� ���� ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('��� ����� �������',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



var prefix = "^^"

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'edit')) {
        message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
    }
});

client.on('message', message => {
     if (message.content === "^^bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**��� ��������� ��� ���� �����:**" , client.guilds.size)
  .addField("**����������:**", client.users.size)
  .addField("**�����:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
    if (message.content === "^^roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('�����:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on("guildCreate", guild => {
  console.log(` ��� �� ���� ���  �� ����� ���� ! ${guild.name} ���� ����� �� ${guild.owner.user.username}!`)
});




  
  
client.on('ready', () => {
   client.user.setGame(" ^^help | ^^invite ");
}); 

client.on("message", message => {
    var prefix = "^^";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`***��� �� ������� ���� ������� ������ �� ���� ���� ������� ������� ���� ���� ����***, ${member}`);
  
});

client.on('message', message => {
  if (true) {
if (message.content === '^^support') {
      message.author.send(' |https://discord.gg/2AB7Aqt| �� �� �������').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "^^support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | ������" , " |  ������ �������� �� �������")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
  if (true) {
if (message.content === '^^invite') {
      message.author.send(' ���� ����� |  https://discordapp.com/oauth2/authorize?client_id=524246356991410186&scope=bot&permissions=2146958591 ').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "^^invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | ������" , " |  ������ �������� �� �������")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('^^bc-users')){
 if(!message.author.id === '408518562521546764') return;
message.channel.sendMessage('��� ����� ������� |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message=>{
    if (message.content ==='^^add-colors'){
        if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }
    if (message.content === '^^de-colors'){
                if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.roles.find('name', x)
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }

})
  
  
  
  
client.on('message', message => {
 if (message.content.startsWith("����� 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***��� �� ������� ���� ������� ������ �� ���� ���� ������� ������� ����***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith("����� 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***��� ����� ��� ���� ��� ����� ���� ����� ��� ����� ��� ���� ��� ����� ���� �����.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("����� 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***������ �� ��� �� ���� ������� �� ���� ����� �� ���� ������ ���� ������ ������ ���� ����� ������ ������***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("����� 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***����� ����� ����� ��� ������ ����� ���� ������� ���� ������ ��� ������.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("����� 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***�� ���� ����� ��� ����� ���� �������� �� ���� ���� ������� ������ ����� ����� ����� ����� ������ ���� ����� ������.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("����� 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***����� �� ��� ������ ������� ���� ������ ������� ���� ���� ����� ������ ���� �� ���� ������� �� ������ ���������. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("����� 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***�� ���� ��� ������ ������ ���� ������͡ ������� ����� �����͡ ������� ���͡ ����� �����͡ ��� ����� �� ����� �� ������***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("����� 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***����� ��� ������ ��� ���� ��� ���� ����� ��� ������ ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("����� 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***�� ����� ������ ���� ����ǡ ���� �� ����� ������ ����� �� ����� ����� �� ��� ������� ����ǡ ��� ����� ���� ��� ����� �����. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("����� 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***���� ��������� �����***" ,mentionavatar.username )
  .setDescription('***�� ��� ���� �� �� ��� ����� ������ ����� ������ �� ��� ���� ������ ������� ����� ����� ���� ������ �� ��� ����� �����??�� ����� ������ ��������� �� ��� ���� ���� ����.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.login('������ ����');




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`1help - Script By : SAJED`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`^^help `,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});




client.login(process.env.BOT_TOKEN);