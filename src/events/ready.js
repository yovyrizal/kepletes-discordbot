import { Events } from "discord.js";

export default function ready(client) {
  client.on(Events.ClientReady, (readyClient) => {
    console.log(`Logged in as ${readyClient.user.tag}!`);
  });
}
