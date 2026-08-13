import { Client, GatewayIntentBits } from "discord.js";
import ready from "./events/ready.js";
import { joinVoiceChannel } from "@discordjs/voice";
import dotenv from "dotenv";
import interactionCreate from "./events/interactionCreate.js";
import messageCreate from "./events/messageCreate.js";
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

ready(client)
interactionCreate(client)
messageCreate(client);

client.login(BOT_TOKEN);
