async function addToTeam(ctx, Player, Team) {
    var u_position = ctx.callbackQuery.data.split("_")[1]-1
    var players = await Player.find({
        team_id: {
            $exists: false
        }
    })
    var that_player = players[u_position]
    var team = await Team.find({
        name: ctx.callbackQuery.data.split('_')[3]
    })
    
    that_player.team_id = team[0]._id
    team[0].players.push(that_player._id)

    await that_player.save()
    await team[0].save()


    ctx.reply(`o'zgartirildi.`)
}

module.exports = addToTeam