import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import apiRouter from './routes/apiRouter'
import httpErrorMiddleware from './middlewares/httpErrorMiddleware'
import cors from 'cors'

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', apiRouter)
app.use(httpErrorMiddleware)

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))