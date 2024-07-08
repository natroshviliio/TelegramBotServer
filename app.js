import TelegramBot from "node-telegram-bot-api";


const token = '7024931734:AAHwNkcB1K3Sq3u1tsH34Hp0I1s3a8KfSyY';
const webUrl = 'https://telegram-test-app-fawn.vercel.app/';

const bot = new TelegramBot(token, {polling: true});

const helpMessage = `<b>To open market please press the button "Market"</b>`


bot.on('message', async msg => {
    const chatId = msg.chat.id;

    if(['/start', '/market'].includes(msg.text)) {
        await bot.sendMessage(chatId, helpMessage, {
            reply_markup: {
                keyboard: [
                    [{text: 'Market', web_app: {url: webUrl}}]
                ]
            },
            parse_mode: 'html'
        });
    }
})