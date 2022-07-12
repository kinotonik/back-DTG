const express = require("express")

const router = express.Router()


router.get("/", (req, res) => {
    res.send("je suis dans le ciel !")
})

module.exports = router