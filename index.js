const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')


//Configuração do Body-parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//Configuração Ejs
app.set('view engine', 'ejs')


//Configuração arquivos estaticos (Css, BootStrap)
app.use(express.static('public'))

//Rota principal
app.get('/', (req , res)=>{
    res.render('index.ejs')
})


//Rota home
app.get('/home', (req , res)=>{
    res.send('<h1>Pagina Home está acessada</h1>')
})

//Rota animes

app.get('/animes', (req, res)=>{
    res.render('animes')
})


//iniciando o servidor
app.listen(port , ()=>{
    console.log('Servidore está online!')
})