const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config();

const port =  process.env.PORT

const bodyParser = require("body-parser")

const { connection } = require("./config/db.js");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Inicio')
})

app.use(require('./routes/routes.js'));

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`)
})

app.use(bodyParser.json());
app.use("/Documentos", express.static("Documentos"));