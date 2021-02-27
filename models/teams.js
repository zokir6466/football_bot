async function teams(ctx, Player , Team) {
    let teams = await Team.find()
    for (let i of teams) {
        let str = ''
        let players = []
        for (let id of i.players) {
            let player = await Player.findOne({
                "_id": id
            })
            players.push(player.name)
        }
        for (let x of players) {
            str += (x + '\n')
        }
        ctx.reply(`
            <b>${i.name}</b>: 
${str}
        `, {parse_mode: "HTML"})

    }
}

module.exports = teams