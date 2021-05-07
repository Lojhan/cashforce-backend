const path = require('path')
const cors = require('cors')
const express = require('express')

var app = express()

app.use(cors({origin: '*', optionsSuccessStatus: 200}))
const port = process.env.PORT || 3000;

app.use(require('./app/routes/orders.route'))


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
