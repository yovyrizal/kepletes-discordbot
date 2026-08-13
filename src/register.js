import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

// env
const BOT_TOKEN = process.env.BOT_TOKEN;
const APP_ID = process.env.APP_ID;
const GUILD_ID = process.env.GUILD_ID;

const commands = [
  {
    name: "ping",
    description: "Reply dengan Pong!",
  },
  {
    name: "help",
    description: "Tampilin semua command",
  },
  {
    name: "join",
    description: "Join voice channel",
  },
  {
    name: "leave",
    description: "Leave dari voice channel",
  },
];

const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationGuildCommands(APP_ID, GUILD_ID), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}