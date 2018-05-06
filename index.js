const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.API_KEY, {
  polling: true
});

bot.onText(/(\/start|\/help)/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hello,\nthis is a bot that sends the word \"Flood\" a lot of times when you write /flood [and a number] (the number after /flood says how many messages you want to send).");
});

bot.onText(/\/flood (.+)/, (msg, number) => {
  if (number[1] >= 15) {
    let div15 = (number[1]/15).toString().split(".")[0];
    for (let i = 0; i < div15; i++) {
      sendflood(msg.chat.id, 15, i*300000);
    }
    sendflood(msg.chat.id, number[1]-15*(number[1]/15).toString().split(".")[0], div15*300000);
  } else sendflood(msg.chat.id, number[1], 0);
});

function sendflood(id, num, delay) {
  setTimeout(() => {
    let floodmsg = "";
    for (let i = 0; i < 670; i++) {
      floodmsg += "Flood ";
    }
    for (let i1 = 0; i1 < num; i1++) {
      bot.sendMessage(id, floodmsg);
    }
  }, delay);
}
