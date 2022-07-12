const express = require("express")

const router = express.Router()
const grottes = require('../datas/grottes.json')

router.get("/", (req, res) => {
    res.status(200).json(grottes)
})

router.get("/:id", (req, res) => {
    // console.log("*******", req.params);

    const {id} =req.params
    const grotteId = grottes[id -1]
    console.log('giddddddddddddddd',grotteId);
    res.status(200).json(grotteId)
})

module.exports = router