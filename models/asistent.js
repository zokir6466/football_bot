async function asistant(ctx, Player, Team) {
    let x = await Player.find()
    const players = []
    for (let i of x) {
        players.push(i.name)
    }
    ctx.reply(`Asistent kim?`, {
        reply_markup: JSON.stringify({
            inline_keyboard: players.map((x, xi) => ([{
                text: x,
                callback_data: 'asistant_' + String(xi + 1) + '_' + ctx.callbackQuery.data.split('_')[1]
            }]))
      })
    })
}

module.exports = asistant