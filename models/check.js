const registration = require('./createTeam')

async function check (ctx, Player, regstrat) {
    var isReg = await Player.find({
        user_id: ctx.from.id
    })
    if (isReg.length) {
        ctx.reply('Siz ro`yxatdan o`tgansiz')
    } else {
        regstrat++
        registration(ctx)
    }
    return {
        regstrat
    }
}

module.exports = check