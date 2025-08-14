import mongoose from 'mongoose'
const  connectDB = async() =>
{
    try {
        mongoose.connection.on('connected',()=> console.log("database connected"))
await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`, {
  serverSelectionTimeoutMS: 30000
});
    }
    catch(error)
    {
        console.log(error.message);
    }
}
export default connectDB