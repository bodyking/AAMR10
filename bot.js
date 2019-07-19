const Discord = require('discord.js');
const client = new Discord.Client();
console.log("A.AMR10");
var prefix = "^";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : darkxx`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : black ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`^bc`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

var prefix = '^'; // your prefix
client.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission.');
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have permission.');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`Usage: ${prefix}ban @mention reason`);
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You can't ban **${user.user.tag}** because his role highest than your role!`);
     if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I can't ban **${user.user.tag}** because his role highest than my role!`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`You can't ban **${user.user.tag}** because he have Administration permissions!`);
     if(!message.guild.member(user.user).bannable) return message.channel.send(`I can't ban **${user.user.tag}**.`);
      message.guild.member(user).ban(reason, user);
      message.channel.send(`Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``);
    }
});

client.on('message', async(message) => {
    let args = message.content.split(' ');
    if(args[0] == `${prefix}kick`){
        if(!message.guild || message.author.bot) return undefined;
        if(!message.member.hasPermission('KICK_MEMBERS') || !message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return;
        let user = message.guild.members.get(args[1]) || message.mentions.members.first();
        let reason = args.slice(2).join(" ");
        if(!user) return message.channel.send(`**Usage:** ${prefix}kick @member [reason]`);
        if(!reason) reason = 'No reason provided.';
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You cant kick **${user.user.username}** because his role highest than your role!`);
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I cant kick **${user.user.username}** because his role highest than my role!`);
        if(!message.guild.member(user.user).kickable) return message.channel.send(`I cant kick **${user.user.username}**.`);
        await message.guild.member(user).kick(reason, user);
        await message.channel.send(`**${user.user.username}** has been kicked from the server! \`\`${reason}\`\``);
     }
 });

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x06DF00)
    message.channel.sendEmbed(say);
    message.delete();
  }
  


});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
    




message.author.sendMessage(`
**
[❖═════ لتشغيل اللوق Log يجب وجود روم باسم ═══════❖]
[❖═════════════════════════════❖]
       افضل بوت معاكم
[❖═════════════════════════════❖]
الاوامر العامة

^say

^embed

^bc

^ban

^kick

^ping

-------------------------------------------------------

رابط البوت:https://discordapp.com/oauth2/authorize?client_id=445026531341762560&permissions=8&scope=bot

**`);

  }
});

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', 'welcome');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});

client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** Not allowed to advertising Here :angry: ! **`)
  }
}
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith("رابط")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`** تم أرسال الرابط برسالة خاصة **`)

      message.author.send(`**مدة الرابط : يـوم
 عدد استخدامات الرابط : 5 **`)
    }
});

client.on("message", message => {
    if(message.content.startsWith(prefix + "server")){
        if(message.author.bot || message.channel.type == "dm") return;
        let onlineM = message.guild.members.filter(m => m.presence.status !== "offline");
        let verifyL = ["None", "Low", "Medium", "Hard", "Extreme"];
        let region = {
            'brazil': "`Brazil`",
            'eu-central': "`Central Europe`",
            'singapore': "`Singapore`",
            'us-central': "`US Central`",
            'sydney': "`Sydney`",
            'us-east': "`US East`",
            'us-south': "`US South`",
            'us-west': "`US West`",
            'eu-west': "`Western Europe`",
            'london': "`London`",
            'amsterdam': "`Amsterdam`",
            'hongkong': "`Hong Kong`",
            'russia': "`Russia`"
        };
        let serverEmbed = new Discord.RichEmbed()
        .setColor("#36393e")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name}, Server Info`)
        .setDescription(`- Server Name \`${message.guild.name}\`\n- Created At \`${moment(message.guild.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Total Members \`${message.guild.memberCount} [Online: ${onlineM.size}]\`\n- Server Owner \`${message.guild.owner.user.tag}\`\n- Channels \`${message.guild.channels.filter(m => m.type == 'text').size} Text || ${message.guild.channels.filter(m => m.type == 'voice').size} Voice\`\n- Categories \`${message.guild.channels.filter(m => m.type == 'category').size}\`\n- Roles \`${message.guild.roles.size}\`\n- Region \`${region[message.guild.region]}\`\n- Verification Level \`${verifyL[message.guild.verificationLevel]}\`\n- Server ID \`${message.guild.id}\``)
        .setFooter(message.client.user.username,message.client.user.avatarURL);
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:no_entry: You dont have permission!`).then(mm => mm.delete(5000));  message.channel.send(serverEmbed).catch(console.error);
    } else if(message.content.startsWith(prefix + "user")){
        if(message.author.bot || message.channel.type == "dm") return;
        let mnt = message.mentions.users.first();
        let user = mnt || message.author;
        let userEmbed = new Discord.RichEmbed()
        .setColor("#36393e")
        .setThumbnail(user.avatarURL)
        .setAuthor(`${user.username}, User Info`)
        .setDescription(`- Name \`${user.tag}\`\n- Created At \`${moment(user.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Joined At \`${moment(user.joinedAt).format('D/MM/YYYY h:mm a')}\`\n- ID \`${user.id}\``)
        .setFooter(message.client.user.username,message.client.user.avatarURL);
        message.channel.send(userEmbed).catch(console.error);
       
    }
});


client.login(process.env.BOT_TOKEN);
