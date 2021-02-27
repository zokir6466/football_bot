const teams = require("./teams")

async function winer(ctx, Player, Team ) {
    let team_name = ctx.callbackQuery.data.split('_')[1]
    let team = await Team.find({ "name": team_name })
    team[0].wins.push(Date.now())
    team[0].point += 3
    await team[0].save()
    ctx.reply('Bajarildi.')
}

module.exports = winer