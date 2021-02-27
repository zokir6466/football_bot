const find = require("./find")


async function insert(ctx, new_user, Player, bot) {
    let that_user = new_user.find(e => e.id == ctx.from.id)
    var add = new Player({
        name: that_user.nick,
        user_id: that_user.id,
        number: that_user.number
    })
    await add.save()
        .then(() => {
            ctx.reply("Ma'lumotlar adminga yuborildi.")
            ctx.deleteMessage(ctx.update.callback_query.message.message_id)
            bot.telegram.sendMessage(1004942138, `Yangi player ${that_user.nick} nomi bilan va ${that_user.number} raqami bilan ro'yxatdan o'tdi.`)
        })
        .catch((e) => {
            ctx.reply('Malumotlarda xatolik bor iltimos birliklarni to`g`ri kiritng va qaytadan urinib ko`ring.')
            console.log(e)
        })

}


module.exports = insert