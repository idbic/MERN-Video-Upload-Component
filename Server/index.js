import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './Routes/users.js'
import commentRoute from './Routes/comments.js'
import videoRoute from './Routes/videos.js'
import authRoute from './Routes/authentication.js'

const app = express()
const PORT = 5500
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=>{console.log('connected to DB!')}).catch((error)=> {throw error})
}
app.use(express.json())
app.use('/api/users', userRoute)
app.use('/api/comments', commentRoute)
app.use('/api/videos', videoRoute)
app.use('/api/authentication', authRoute)

app.listen(PORT,()=>{ 
    connect();
    console.log('connected to your moms port @', PORT)
 })