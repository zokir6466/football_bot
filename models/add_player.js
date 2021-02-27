async function add_player(ctx, Teams) {
    const x = await Teams.find()
    const teams = []
    for (let i of x) {
        teams.push({
            text: i.name,
            callback_data: `team_${i.name}`
        })
    }
    ctx.reply('Qaysi jamoaga o`yinchi qo`shmoqchisiz', {
        reply_markup: {
            inline_keyboard: [
                teams
            ]
        }
    })
}

module.exports = add_player