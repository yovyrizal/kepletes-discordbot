import { REST, Routes } from "discord.js";
import dotenv from "dotenv"
dotenv.config();

// env
const BOT_TOKEN = process.env.BOT_TOKEN;
const APP_ID = process.env.APP_ID

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(APP_ID), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
