import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

//routes
import userRoutes from './Routes/userRoutes.js'

//cnnection to our db
import connection from './DB/connection.js'
connection();

//cors
import cors from 'cors'

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));
//define routes after defining these two middlewares or else we will get undefined from req.body
app.use('/users',userRoutes)

app.listen(process.env.PORT,()=> console.log(`Server running on port : ${process.env.PORT}`))