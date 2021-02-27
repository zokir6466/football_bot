async function calc(ctx, Player, Team) {
    let players = await Player.find()
    let goalkipper =  players[ctx.callbackQuery.data.split('_')[2]-1]
    let asistant =  players[ctx.callbackQuery.data.split('_')[1]-1]
    goalkipper.golas.push(Date.now())
    asistant.asists.push(Date.now())
    await goalkipper.save()
    await asistant.save()
        .then( () =>  {
            ctx.reply('bajarildi xojam.')
        })

}

module.exports = calc
