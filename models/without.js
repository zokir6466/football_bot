async function without(ctx, Player, Team) {
    const x = await Team.find()
    const winner = []
    for (let i of x) {
        winner.push({
            text: i.name,
            callback_data: `draw_${i.name}`
        })
    }
    ctx.reply('Oynagan jamolar', {
        reply_markup: {
            inline_keyboard: [
                winner
            ]
        }
    })
}

module.exports = without