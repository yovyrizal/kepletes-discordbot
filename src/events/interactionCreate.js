import { Events } from "discord.js";

import join from "../commands/join.js";
import leave from "../commands/leave.js";
import help from "../commands/help.js";
import ping from "../commands/ping.js";
import ask from "../ai/ai-command.js";


export default function interactionCreate(client) {
    client.on(Events.InteractionCreate, async (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        switch (interaction.commandName) {
            case "ping":
                await ping(interaction);
                break;

            case "join":
                await join(interaction);
                break;

            case "leave":
                await leave(interaction);
                break;

            case "help":
                await help(interaction);
                break;
            
            case "ask":
                await ask(interaction);
                break;
        }
    });
}