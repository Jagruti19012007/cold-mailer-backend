
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async()=>{
    try
    {
        const connection = await mongoose.connect(process.env.mongo_url)
        console.log("Mongodb Connected")
    }
    catch(e){
        console.log(e.message)

    }
}
export default connectDB;