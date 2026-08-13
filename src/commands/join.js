import { Events } from "discord.js";
import { joinVoiceChannel } from "@discordjs/voice";

export default async function join(interaction) {
  if (!interaction.isChatInputCommand()) return;
  const voiceChannel = interaction.member.voice.channel;

  if (!voiceChannel) {
    return interaction.reply("Masuk voice dulu kocak");
  }

  try {
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });

    interaction.reply(`Berhasil join ke voice channel: ${voiceChannel.name}`);
  } catch (err) {
    console.error(err);
    interaction.reply("Gagal join ke voice channel");
  }
}
