import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.json({ status: 'success' })
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))