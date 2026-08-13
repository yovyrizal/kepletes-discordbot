import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export default async function ask(message) {

    await message.channel.sendTyping();
    const prompt = message.content.slice(4).trim();

    if (!prompt) {
        return message.reply("Mau nanya apa?");
    }

    console.log("Prompt:", prompt);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: prompt
        });

        if(response.text.length > 1995) {
            return await message.reply("Response dari AI terlalu panjang (maksimal dari discord 2000), minta jawaban yang lebih singkat")
        }
        
        await message.reply(response.text);
        
    } catch (error) {
        console.error(error);
        

        await message.reply(
            "Gagal mendapatkan response dari AI."
        );
    }
}