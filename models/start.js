const find = require("./find")
const mongoose = require('mongoose')
const {
    players
} = require('./db')
const Player = mongoose.model("Player", players)
const start = function (ctx) {
    console.log(ctx.message)
    if (ctx.message.chat.id == 1004942138 || ctx.message.chat.id == 1300693) {
        ctx.reply(`Assalomualaykum. Hush kelibsiz. Agar biz bilan birga bir ligada futbol o'ynamoqchi bo'lsangiz pastdagi "Ro'yxatdan o'tish" tugmasini bosing.`, {
            reply_markup: {
                inline_keyboard: [
                    [{
                            text: '📝 Register',
                            callback_data: "registratsiya"
                        },
                        {
                            text: "📑 Liga Table",
                            callback_data: "tablitsa"
                        }
                    ],
                    [{
                            text: '⚽️ Top Player',
                            callback_data: "popular"
                        },
                        {
                            text: "⚽️ Top Asist",
                            callback_data: "asists"
                        }
                    ],
                    [{
                            text: '🔎 All Users',
                            callback_data: "find"
                        },
                        {
                            text: "GOAL",
                            callback_data: "goal"
                        }

                    ],
                    [{
                            text: "🎮 GAME",
                            callback_data: "game"
                        },
                        {
                            text: "➕ Add new Team",
                            callback_data: "add_team"
                        }
                    ],
                    [{
                            text: "➕ Add Player to Team",
                            callback_data: "add_player"
                        },
                        {
                            text: "♣️ Teams",
                            callback_data: "teams"
                        }
                    ]
                ]
            }
        })
    } else {
        ctx.reply(`Assalomualaykum. Hush kelibsiz. Agar biz bilan birga bir ligada futbol o'ynamoqchi bo'lsangiz pastdagi "Ro'yxatdan o'tish" tugmasini bosing.`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        // {
                        //     text: '📝 Register',
                        //     callback_data: "registratsiya"
                        // },
                        {
                            text: "📑 Liga Table",
                            callback_data: "tablitsa"
                        }
                    ],
                    // [
                    //     {
                    //         text: '⚽️ Top Player',
                    //         callback_data: "popular"
                    //     },
                    //     {
                    //         text: "⚽️ Top Asist",
                    //         callback_data: "asists"
                    //     }
                    // ],
                    // [
                    //     {
                    //     text: '🔎 All Users',
                    //     callback_data: "find"
                    //     },
                    //     {
                    //         text: "♣️ Teams",
                    //         callback_data: "teams"
                    //     }
                    // ]
                ]
            }
        })
    }
}

module.exports = start