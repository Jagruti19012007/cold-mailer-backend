import express from 'express'
import connectDB from '../config/db.js'
import authRoutes from '../routes/auth.routes.js'
import fileRoutes from '../routes/file.routes.js'
import mailRoutes from '../routes/mail.routes.js'
const app = express()
const port = 5000
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/files', fileRoutes)
app.use('/api/mail', mailRoutes)


connectDB()
app.get('/', (req, res)=>{
    res.send("Coldmailer API is running")
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
