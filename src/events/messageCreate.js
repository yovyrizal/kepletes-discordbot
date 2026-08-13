import { Events } from "discord.js";
import ask from "../ai/ai-command.js";

export default function messageCreate(client) {

    client.on(Events.MessageCreate, async (message) => {

        if (message.author.bot) return;

        if (message.content.startsWith("!ask")) {
            await ask(message);
        }

        if (message.content.startsWith("!ASK")) {
            await ask(message);
        }

    });

}