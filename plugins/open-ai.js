import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
if (!text) throw "input text"
const configuration = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            m.reply(response.data.choices[0].text)
    }
handler.help = ['ai']
handler.tags = ['info']
handler.command = /^(ai)$/i
export default handler