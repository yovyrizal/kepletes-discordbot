import { EmbedBuilder, Events } from "discord.js";

export default async function help(interaction) {
  if (!interaction.isChatInputCommand()) return;

  const embed = new EmbedBuilder()
    .setTitle("List Command")
    .setDescription("Ini adalah list command dari bot Kepleset")
    .setColor("Red")
    .addFields([
      {
        name: "📝 **General**",
        value: `**/help**: Untuk menampilkan semua command
                **/ping**: Bot akan membalas dengan Pong!`,
      },
      {
        name: "🔉 **Voice Channel**",
        value: `**/join**: Bot akan join voice channel
                **/leave**: Bot akan keluar dari voice channel`,
      }
    ])

  // Return reply
  return interaction.reply({
    embeds: [embed],
  });
}
