import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoute from './routes/user.route.js'
import productRoute from './routes/product.route.js'

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRoute)
app.use('/product', productRoute)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
    connectDB();
})