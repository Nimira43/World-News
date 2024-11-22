const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.port 
app.get('/', (req,res) => res.send('World News'))
app.listen(port, () => console.log(`Server is listening on Port ${port}`))