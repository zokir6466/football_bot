function ask(ctx, new_user, num, regstrat) {
    if (regstrat) {
        if (num) {
            ctx.forwardMessage(1004942138)
            regstrat = 0
            num = 0
            let that_user = new_user.find(e => e.id == ctx.message.from.id)
            new_user[new_user.indexOf(that_user)].number = ctx.message.text
            ctx.reply(`
To'griligini tekshiring. 
Nick: ${that_user.nick}, 
Raqami: ${that_user.number}`, {
                reply_markup: {
                    inline_keyboard: [
                        [{
                                text: '✅',
                                callback_data: "done"
                            },
                            {
                                text: '🚫',
                                callback_data: "breake"
                            }
                        ]
                    ]
                }
            })
            return {
                f_regstrat: regstrat,
                f_num: num,
                f_new_user: new_user
            }
        } else {
            regstrat = 88
            num++
            new_user.push({
                id: ctx.message.from.id,
                nick: ctx.message.text,
                number: null
            })
            ctx.reply('Yaxshi, endi oyindagi raqamingizni tanlang.')
            return {
                f_regstrat: regstrat,
                f_num: num,
                f_new_user: new_user
            }
        }
    }
    
}

module.exports = ask