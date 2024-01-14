const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/', (req, res) => {
    const p = parseFloat(req.query.p)
    const t = parseFloat(req.query.t)
    const r = parseFloat(req.query.r)
    const interest = (p * t * r) / 100;
    const total = p + interest;
    res.status(200).json({
        total: total,
        interest: interest
    })
})

app.listen(3000)
