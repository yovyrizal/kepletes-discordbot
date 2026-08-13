import { Events } from "discord.js";
import { getVoiceConnection } from "@discordjs/voice";

export default async function leave(interaction) {
  if (!interaction.isChatInputCommand()) return;
  const connection = getVoiceConnection(interaction.guild.id);
  if (!connection) {
    return interaction.reply("Belum join voice disuruh leave");
  }

  connection.destroy();

  await interaction.reply("Berhasil keluar dari voice");
}
