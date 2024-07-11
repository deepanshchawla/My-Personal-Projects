const mongoose = require("mongoose");

const todoModelSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            maxLength:50,
            required:true,
        },
        description:{
            type:String,
            maxLength:50,
            required:true,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now
        }
    }
);

module.exports = mongoose.model("Todo", todoModelSchema);