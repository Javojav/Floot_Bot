# Floot_Bot
This is a bot for [Telegram](https://telegram.org/) written in [node.js](https://nodejs.org/), to send the word *Flood* in a chat a lot of times.

## Usage
To use this bot, first go to Telegram and search for [@Floot_Bot](https://t.me/Floot_Bot).

### Send flood
To send Flood, you use the `/flood` command, you need to specify how many messages you want to send after writing `/flood`.

> /flood ***Number***

Each message contains the word *Flood* 670 times, because Telegram messages have a maximum length of 4096 characters.

If this number is larger than 15, 15 messages will be sent every 5 minutes, to avoid getting a [429 error](https://httpstatuses.com/429).
