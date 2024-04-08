import express from 'express'
import { config } from 'dotenv'
import { noteRouter } from './routes'
config()

const app = express()
app.use(express.json())
app.use('api', noteRouter)
const PORT = 3000


app.listen(PORT, ()=>console.log(`Server running on ${PORT}`))