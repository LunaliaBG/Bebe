const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildPresences, GatewayIntentBits.MessageContent] });

const plantArray = ["Adansonii", "Birkin", "Aloe Vera"];

function IstPflanze(sache)
{
    if (typeof sache !== "string") return console.log("sache ist kein String!!!");

    if (sache == "Adansonii") return true;
    else if (sache == "Birkin") return true;
    else return false;
}

client.once("ready", () => {
    console.log("Ich bin bereit UwU");
})

client.on("messageCreate", (message) => {
    console.log(`${message.member.displayName} hat eine Nachricht geschrieben: "${message.content}"`);

    if (message.content.startsWith("IstPflanze? ")) {
        let input = message.content.slice(12)

        if (IstPflanze(input)) {
            message.channel.send("ja du opfer");
        } else {
            message.channel.send("Nö denk mal selbst nach du hund")
        }
    }
})

client.login(token);