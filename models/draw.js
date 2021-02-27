async function draw(ctx, Player, Team ) {
    let team_name = ctx.callbackQuery.data.split('_')[1]
    let team = await Team.find({ "name": team_name })
    team[0].draws.push(Date.now())
    team[0].point += 1
    await team[0].save()
    ctx.reply('Bajarildi.')
}

module.exports = draw