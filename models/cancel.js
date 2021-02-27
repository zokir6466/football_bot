const c = require("config");
const { Context } = require("telegraf");

function cancel(ctx) {
    ctx.reply('Bekor qilindi.')
}

module.exports = cancel