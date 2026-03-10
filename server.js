const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const body_parser = require('body-parser')
const db_connect = require('./utils/db')

dotenv.config()
app.use(body_parser.json())

const port = process.env.PORT 
if (process.env.MODE === 'production') {
  app.use(cors())
} else {
  app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000']
  }))
}

app.use('/', require('./routes/authRoutes'))
app.get('/', (req, res) => res.send('World News'))

db_connect()

app.listen(port, () => console.log(`Server is listening on Port ${port}`))