async function game(ctx, Player, Team) {
    ctx.reply('Oyin nima bilan yakunlandi?', {
        reply_markup: JSON.stringify({
            inline_keyboard: [
               [ {
                    text: "Yutuqli",
                    callback_data: 'with'
                },
                {
                    text: "Yutuqsiz",
                    callback_data: "without"
                }]
            ]
        })
    })
}

module.exports = game