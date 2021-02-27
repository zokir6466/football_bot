async function asist(ctx, Player, Team) {
  function compare(a, b) {
    if (a.asists.length < b.asists.length) {
      return 1;
    }
    if (a.asists.length > b.asists.length) {
      return -1;
    }
    return 0;
  }
  let players = await Player.find()
  players.sort(compare)
  let str = ''

  for (let i of players) {
    let team = await Team.find({
      "_id": i.team_id
    })
    if (team._id == undefined) {
      str += `👤 ${i.name}: 
    🏟️ ${team[0].name}
    #️⃣ ${i.asists.length} ta \n`
    }
  }
  ctx.reply(str)
}

module.exports = asist