const mongoose=require("mongoose");
const connectoDB=async()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017");
    console.log("connected to database");
}catch(err){
    console.log("not connected");
}};
connectoDB();