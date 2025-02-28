const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
    workTittle: String,
    taskTittle:{
        type: String,
        required:true,
    },
    assignee:{
        type: String,
        required:true,
    },
    deadline:{
        type: Data,
        required:true,
    },
    priority:{
        type: String,
        default: "normal",
        enum: ["normal","low","high","urgent","abandoned"],
    },
},{
    timestamps:true,
}
);
const Task=mongoose.model("tasks",taskSchema);
module.exports=Task;