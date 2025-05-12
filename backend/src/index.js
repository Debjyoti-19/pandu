import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
import userRoute from './routes/user.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/user', userRoute)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
    connectDB();
})