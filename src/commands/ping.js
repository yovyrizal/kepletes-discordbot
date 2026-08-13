import { Events } from "discord.js";

export default async function ping(interaction) {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
      await interaction.reply("Pong!");
    }
}
