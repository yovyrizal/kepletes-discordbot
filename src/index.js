import { Client, Events, GatewayIntentBits, messageLink } from "discord.js";
import { joinVoiceChannel } from "@discordjs/voice";
import dotenv from "dotenv";
dotenv.config();

// env
const BOT_TOKEN = process.env.BOT_TOKEN;

// Intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

// Join Voice
client.on("messageCreate", async (message) => {
  if (message.content === "!kep") {
    const voiceChannel = message.member.voice.channel;

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
});

client.login(BOT_TOKEN);
