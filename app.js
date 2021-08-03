const express = require('express')
const exphbs  = require('express-handlebars')
const path = require('path')
const app = express()
const route = require('./src/mvc/routes/index')
const port = 3000

app.use('/', express.static(path.join(__dirname, 'src/public')))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src/mvc/views'));

route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})