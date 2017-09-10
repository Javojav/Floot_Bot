const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.API_KEY, {
  polling: true
});

bot.onText(/(\/start|\/help)/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hello,\nthis is a bot that sends the word \"Flood\" a lot of times when you write /flood [1-5] (the number after /flood says how many messages you want to send).\nAfter using /flood you have to type /activate to use it again, but you have to wait some time before you can use it again.");
});

const aidi = [];
const taim = [];
const numbah = [];

bot.onText(/\/flood (.+)/, (msg, number) => {
  var found = 0;
  for (var i = 0; i < aidi.length; i++) {
    if (msg.chat.id == aidi[i]) {
      bot.sendMessage(msg.chat.id, "Type /activate");
      found = 1;
    }
    else {found = 0;}
  }
  var floodmsg = "";
  for (var i2 = 0; i2 < 320; i2++) {
    floodmsg += "Flood ";
  }
  if (found == 0) {
    const num = number[1];
    if (num < 6) {
      aidi.push(msg.chat.id);
      numbah.push(num);
      var d = new Date();
      var n = d.getTime();
      taim.push(n);
      for (var i = 0; i < num; i++) {
        bot.sendMessage(msg.chat.id, floodmsg);
      }
    }
  }
});

bot.onText(/\/activate/, (msg) => {
  for (var i = 0; i < aidi.length; i++) {
    if (msg.chat.id == aidi[i]) {
      var d = new Date();
      var n = d.getTime();
      var nombredevariablequenosemeocurre = taim[i] + (3600000 * numbah[i])  - n;
      //var nombredevariablequenosemeocurre = taim[i] + (1000 * numbah[i]) - n;
      if (nombredevariablequenosemeocurre < 0) {
        aidi.splice(i, 1);
        taim.splice(i,1);
        numbah.splice(i,1);
        bot.sendMessage(msg.chat.id, "You can use /flood");
      }
      else {
        if (msg.chat.id == aidi[i]) bot.sendMessage(msg.chat.id, "You have to wait");
      }
    }
  }
});
