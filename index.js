const {
    Telegraf
} = require('telegraf')
const {
    teams,
    players
} = require('./models/db')
const mongoose = require('mongoose')
const config = require('config')
const ask = require('./models/ask')
const start = require('./models/start')
const check = require('./models/check')
const insert = require('./models/insert')
const cancel = require('./models/cancel')
const find = require('./models/find')
const createTeam = require('./models/createTeam')
const addPlayer = require('./models/add_player')
const select = require('./models/select')
const addToTeam = require('./models/add_toTeam')
const team_list = require('./models/teams')
const asist = require('./models/asist')
const goals = require('./models/goals')
const score = require('./models/score')
const goal = require('./models/goal')
const game = require('./models/game')
const draw = require('./models/draw')
const loser = require('./models/loser')
const winer = require('./models/winer')
const asistant = require('./models/asistent')
const calc = require('./models/calc')
const withFunc = require('./models/with')
const without = require('./models/without')
const Player = mongoose.model("Player", players)
const bot = new Telegraf(config.get('token'))
const Team = mongoose.model("Team", teams)
var new_user = []
var regstrat = 0
var num = 0
var first = 0

bot.start(async(ctx) => {
    const players = await Player.find()
    console.log(players)
    start(ctx)

})

bot.on('text', async(ctx) => {
    ctx.forwardMessage(-487158001)
    if (first) {
        first = 0
        var add = new Team ({
            name: ctx.message.text,
        })
        await add.save()
            .then( () => {
                ctx.reply('Jamoa yaratildi.')
            })
            .catch( (e) => {
                ctx.reply(e.message)
            })
    }else {
        let {
            f_new_user,
            f_num,
            f_regstrat
        } = ask(ctx, new_user, num, regstrat)
        num = f_num
        regstrat = f_regstrat
        new_user = f_new_user
    }
})


bot.on("callback_query", async (ctx) => {
    // console.log(ctx.callbackQuery.data)
    if (ctx.callbackQuery.data == 'registratsiya') {
        regstrat = check(ctx, Player, regstrat)
    } else if (ctx.callbackQuery.data == 'done') {
        insert(ctx, new_user, Player, bot)
    } else if (ctx.callbackQuery.data == 'breake') {
        cancel(ctx)
    }else if (ctx.callbackQuery.data == 'asists') {
        asist(ctx, Player, Team)
    } else if (ctx.callbackQuery.data == 'find') {
        find(ctx, Player)
    }else if ( ctx.callbackQuery.data == 'popular'){
        goals(ctx, Player, Team)
    }else if ( ctx.callbackQuery.data == 'add_team') {
        first++
        createTeam(ctx)
    }else if ( ctx.callbackQuery.data == 'tablitsa') {
        score(ctx, Player, Team)
    } else if ( ctx.callbackQuery.data == 'teams') {
        team_list(ctx, Player, Team)
    } else if ( ctx.callbackQuery.data == 'goal' ) {
        goal(ctx, Player, Team)
    }else if ( ctx.callbackQuery.data == 'game' ){
        game(ctx,Player,Team)
    }else if ( ctx.callbackQuery.data == 'with' ){
        withFunc(ctx, Player, Team)
    }else if ( ctx.callbackQuery.data == 'without' ){
        without(ctx, Player, Team)
    }else if ( ctx.callbackQuery.data == 'add_player') {
        addPlayer(ctx, Team)
    } else if ( ctx.callbackQuery.data.split('_')[0] == 'team') {
        select(ctx, Player, Team)
    } else if ( ctx.callbackQuery.data.split('_')[0] == 'player') {
        addToTeam(ctx, Player, Team)
    } else if ( ctx.callbackQuery.data.split('_')[0] == 'goalkipper') {
        asistant(ctx, Player, Team)
    } else if ( ctx.callbackQuery.data.split('_')[0] == 'asistant') {
        calc(ctx, Player, Team)
    } else if ( ctx.callbackQuery.data.split('_')[0] == 'draw') {
        draw(ctx, Player, Team)
    } else if ( ctx.callbackQuery.data.split('_')[0] == 'winer') {
        winer(ctx, Player, Team)
    } else if ( ctx.callbackQuery.data.split('_')[0] == 'loser') {
        loser(ctx, Player, Team)
    }
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))