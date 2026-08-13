import { Events } from "discord.js";

export default async function join(interaction) {
  const voiceChannel = interaction.member.voice.channel;

  if (!voiceChannel) {
    return message.reply("Masuk voice dulu kocak");
  }

  try {
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });

    message.reply(`Berhasil join ke voice channel: ${voiceChannel.name}`);
  } catch (err) {
    console.error(err);
    message.reply("Gagal join ke voice channel");
  }
}
