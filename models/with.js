async function withFunc(ctx, Player, Team) {
    const x = await Team.find()
    const winner = []
    const loser = []
    for (let i of x) {
        winner.push({
            text: i.name,
            callback_data: `winer_${i.name}`
        })
    }
    for (let i of x) {
        loser.push({
            text: i.name,
            callback_data: `loser_${i.name}`
        })
    }
    ctx.reply('Yutgan jamoa', {
        reply_markup: {
            inline_keyboard: [
                winner
            ]
        }
    })
        .then( () => {
            ctx.reply('Yutqazgan jamoa', {
                reply_markup: {
                    inline_keyboard: [
                        loser
                    ]
                }
            })
        } )
}

module.exports = withFunc