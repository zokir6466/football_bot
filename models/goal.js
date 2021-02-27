async function goal(ctx, Player, Team) {
    let x = await Player.find()
    const players = []
    for (let i of x) {
        players.push(i.name)
    }
    ctx.reply(`Gol muallifi kim?`, {
        reply_markup: JSON.stringify({
            inline_keyboard: players.map((x, xi) => ([{
                text: x,
                callback_data: 'goalkipper_' + String(xi + 1)
            }]))
      })
    })
}

module.exports = goal