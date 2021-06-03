const { Client, Intents } = require('discord.js');
const { TOKEN } = require('./config.json');
const client = new Client({
    ws: {
        intents: Intents.ALL
    },
    fetchAllMembers: true
});

client.on('ready', () => {
    console.log('ready');

    const server = client.guilds.cache.get('684084513403699314');

    if (!server) return;

    const totalMemberChannel = server.channels.cache.get('778464513136787476');
    const humanChannel = server.channels.cache.get('778464619890606081');
    const partnerChannel = server.channels.cache.get('778464898774466570');
    const supporterChannel = server.channels.cache.get('778464738635939872');

    const totalMember = server.members.cache.size;
    const human = totalMember - server.members.cache.filter(m => m.user.bot).size;
    const partner = server.members.cache.filter(m => m.roles.cache.has('702045103795077190')).size;
    const supporter = server.members.cache.filter(m => m.roles.cache.has('723772988276867102')).size;

    totalMemberChannel.edit({ name: `👥 Total Member: ${totalMember.toLocaleString()}` });
    humanChannel.edit({ name: `🙎♂ Human: ${human.toLocaleString()}`});
    partnerChannel.edit({ name: `🤝 Partner: ${partner.toLocaleString()}`});
    supporterChannel.edit({ name: `✨ Patrons: ${supporter.toLocaleString()}`});
})

client.on('guildMemberAdd', member => {
    if (member.guild.id !== '684084513403699314') return;

    const totalMemberChannel = member.guild.channels.cache.get('778464513136787476');
    const humanChannel = member.guild.channels.cache.get('778464619890606081');
    const partnerChannel = member.guild.channels.cache.get('778464898774466570');
    const supporterTier1Channel = member.guild.channels.cache.get('778464738635939872');

    const totalMember = member.guild.members.cache.size;
    const human = totalMember - member.guild.members.cache.filter(m => m.user.bot).size;
    const partner = member.guild.members.cache.filter(m => m.roles.cache.has('702045103795077190')).size;
    const supporterTier1 = member.guild.members.cache.filter(m => m.roles.cache.has('723772988276867102')).size;

    totalMemberChannel.edit({ name: `👥 Total Member: ${totalMember.toLocaleString()}` });
    humanChannel.edit({ name: `🙎♂ Human: ${human.toLocaleString()}`});
    partnerChannel.edit({ name: `🤝 Partner: ${partner.toLocaleString()}`});
    supporterTier1Channel.edit({ name: `✨ Patrons: ${supporterTier1.toLocaleString()}`});
});

client.on('guildMemberRemove', member => {
    if (member.guild.id !== '684084513403699314') return;

    const totalMemberChannel = member.guild.channels.cache.get('778464513136787476');
    const humanChannel = member.guild.channels.cache.get('778464619890606081');
    const partnerChannel = member.guild.channels.cache.get('778464898774466570');
    const supporterTier1Channel = member.guild.channels.cache.get('778464738635939872');

    const totalMember = member.guild.members.cache.size;
    const human = totalMember - member.guild.members.cache.filter(m => m.user.bot).size;
    const partner = member.guild.members.cache.filter(m => m.roles.cache.has('702045103795077190')).size;
    const supporterTier1 = member.guild.members.cache.filter(m => m.roles.cache.has('723772988276867102')).size;

    totalMemberChannel.edit({ name: `👥 Total Member: ${totalMember.toLocaleString()}` });
    humanChannel.edit({ name: `🙎♂ Human: ${human.toLocaleString()}`});
    partnerChannel.edit({ name: `🤝 Partner: ${partner.toLocaleString()}`});
    supporterTier1Channel.edit({ name: `✨ Patrons: ${supporterTier1.toLocaleString()}`});
});


client.login(TOKEN);