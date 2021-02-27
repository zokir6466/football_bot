async function select(ctx, Player, Team) {
    const x = await Player.find({ team_id: { $exists : false } } )
    const players = []
    for (let i of x) {
        players.push(i.name)
    }
    ctx.reply(`Kimni qo'shamiz?`, {
        reply_markup: JSON.stringify({
            inline_keyboard: players.map((x, xi) => ([{
                text: x,
                callback_data: 'player_' + String(xi + 1) + "_" + ctx.callbackQuery.data,
            }])),
      })
    })
}   
module.exports = select