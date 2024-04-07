import express from 'express'
import { config } from 'dotenv'
config()

const app = express()
const PORT = 3000


app.listen(PORT, ()=>console.log(`Server running on ${PORT}`))