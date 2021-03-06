const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')

app.use(express.json())


require('./models/home')
const Home = mongoose.model('Home')

require('./models/orcamento')
const Orcamento = mongoose.model('Orcamento')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors())
    next();
})

mongoose.connect('mongodb://localhost:27017/celke', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Executando...')
}).catch(err => {
    console.log(err)
})


app.get('/home', async (req, res) => {
    await Home.findOne({})
        .then(home => {
            return res.json({
                error: false,
                home: home
            })
        }).catch(err => {
            return res.status(400).json({
                error: true,
                message: "Nenhum registro encontrado"
            })
        })
})

app.post('/home', async (req, res) => {
    const dados = {
        "topTitulo": "Temos a solução que sua empresa precisa.",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "Orçamento",
        "topLinkBtn": "http://localhost:3000/orcamento",
        "serTitulo": "Serviços",
        "serSubtitulo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu est mattis, ornare felis eu, fermentum ipsum. Suspendisse mollis diam a est pellentesque imperdiet sit amet et ligula. Donec volutpat est urna, pellentesque bibendum mi dapibus ac.",
        "serUmIcone": "cogs",
        "serUmTitulo": "Engenharia",
        "serUmDesc": "Donec eu est mattis, ornare felis eu, fermentum ipsum. Suspendisse mollis diam a est pellentesque imperdiet sit amet et ligula",
        "serDoisIcone": "code",
        "serDoisTitulo": "Desenvolvimento",
        "serDoisDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu est mattis, ornare felis eu, fermentum ipsum. Suspendisse",
        "serTresIcone": "network-wired",
        "serTresTitulo": "Deployer",
        "serTresDesc": "Fermentum ipsum. Suspendisse mollis diam a est pellentesque imperdiet sit amet et ligula. Lorem ipsum dolor sit amet",
    }

    const homeExists = await Home.findOne({})
    if (homeExists) {
        return res.status(400).json({
            error: true,
            message: "Página Home já possui registros no banco de dados"
        })
    }

    await Home.create(dados, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro ao cadastrar conteúdo da página Home"
        })
    })
    return res.json({
        error: false,
        message: "Conteúdo da página Home cadastrado com sucesso"
    })

})

app.post('/orcamento', async (req, res) => {

    // await sleep(2000)
    // function sleep(ms) {
    //     return new mongoose.Promise((resolve) => {
    //         setTimeout(resolve, ms)
    //     })
    // }
    await Orcamento.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro ao enviar solicitação de Orcamento"
        })
    })
    return res.json({
        error: false,
        message: "Solicitação de Orçamento enviada com sucesso"
    })

})

app.listen(3001, () => console.log("Servidor Executando... porta:3001"))