const moongose = require('mongoose')
moongose.connect('mongodb+srv://zokir:1234@cluster0.qjy31.mongodb.net/telegram', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(
    () => {
    console.log('Conected to MongoDB...')
    }
) 
.catch((err) => {
    console.log('The are some error to connecting Database:', err)
})

const players = new moongose.Schema({
    name: String,
    user_id: String,
    number: Number,
    team_id: String,
    golas: [{
        type: Date
    }],
    asists: [{
        type: Date
    }]
})

const teams = new moongose.Schema({
    name: String,
    players: [String],
    wins: [{
        type: Date
    }],
    loses: [{
        type: Date
    }],
    draws: [{
        type: Date
    }],
    point: Number,
})



module.exports = {
    teams,
    players
}