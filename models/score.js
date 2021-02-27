async function score(ctx, Player, Team) {
  function compare(a, b) {
    if (a.point < b.point) {
      return 1;
    }
    if (a.point > b.point) {
      return -1;
    }
    return 0;
  }
  let team = await Team.find()
  team.sort(compare)
  let str = ''

  for (let i of team) {
    str += `🏟️ <b>${i.name}</b>:  ${i.point} ball \n`
  }

  ctx.reply(str, {
    parse_mode: "HTML"
  })
}

module.exports = score