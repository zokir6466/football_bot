async function loser(ctx, Player, Team ) {
    let team_name = ctx.callbackQuery.data.split('_')[1]
    let team = await Team.find({ "name": team_name })
    team[0].loses.push(Date.now())
    await team[0].save()
    ctx.reply('Bajarildi.')
}

module.exports = loser