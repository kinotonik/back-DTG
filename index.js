const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const grottes =require("./routes/grottes")
const ciel =require("./routes/ciel")

const app = express()
PORT = 4402

//middleware => entre l'arrivée de la req
app.use(cors()) // ici porte ouvert !
app.use(morgan('dev'))
app.use("/grottes", grottes)
app.use("/ciel", ciel)
//middleware => ...et la reception de la req

app.get("/", (req,res) => {
    res.send("je suis dans le /")
})


app.listen(PORT, () => console.log(`connect au server http://localhost:${PORT}`))