import mongoose from "mongoose";

const connectMongoDB = async() => {
    try{
 await mongoose.connect(process.env.MOGODBURI);
console.log("connected");
    }
    catch (error) {
        console.log(error);
    }
}


export default connectMongoDB;