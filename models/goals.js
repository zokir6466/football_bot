async function goals(ctx, Player, Team) {
    function compare( a, b ) {
        if ( a.golas.length < b.golas.length ){
          return 1;
        }
        if ( a.golas.length > b.golas.length ){
          return -1;
        }
        return 0;
    }
    let players = await Player.find()
    players.sort(compare)
    let str = ''

    for (let i of players) {
        let team = await Team.find({ "_id": i.team_id })
            str += `👤 ${i.name}: 
    🏟️ ${team[0].name}
    #️⃣ ${i.golas.length} ta \n`
    }

    ctx.reply(str)
}

module.exports = goals