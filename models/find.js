async function find(ctx, Player) {
    let all_users = await Player.find().select('name number')
    let count = 0
    let msg = ''
    for (const i of all_users) {
        count++
        msg = msg + `${count}: ${i.name} ${i.number}\n`
    }
    ctx.reply(msg)
}

module.exports = find