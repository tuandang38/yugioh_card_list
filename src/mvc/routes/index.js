const cardListRoute = require('./card_list')
const homeRoute = require('./home')
const loginRoute = require('./login')
const registerRoute = require('./register')

function route(app){
    app.use('/register',registerRoute)
    app.use('/login',loginRoute)
    app.use('/card_list',cardListRoute)

    app.use('/',homeRoute)
}
module.exports = route