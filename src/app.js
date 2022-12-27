const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 3000


//Public Static Path 
const staticPath = path.join(__dirname, '../public');
const staticPartials = path.join(__dirname, '../partials')
app.use(express.static(staticPath))


//set Template Engine
app.set('view engine', 'hbs')
hbs.registerPartials(staticPartials)


//Routing Page
app.get('/', (req, res) => {
    // res.render('index.hbs')
    res.render('index')
})


app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/weather', (req, res) => {
    res.render('weather')
})


app.get('*', (req, res) => {
    res.render('404error')
})




app.listen(port, () => {
    console.log('Server started on port 3000')
})