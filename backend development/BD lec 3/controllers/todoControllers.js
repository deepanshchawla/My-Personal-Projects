const todomodel = require("../models/todomodel");

const createTodo = async(req,res)=>{
    try{
        const {title,description} = req.body;

        //create a new todo instance and insert it into the database
        const response = await todomodel.create({title,description});
        res.status(200).json(
            { 
                success:true,
                data:response,
                message:"entry created successfully"
            }
        );
    }
    catch(err){
        console.log(err);
        res.status(500).json(
            {
                success:true,
                data:err,
                message:"entry was unable to get completed"
            }
        )
    }
}

const deleteTodo = async(req,res)=>{
    try{
        const response = await todomodel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:true,
            message:"the deelete request was completed successfully",
            data:response
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            data:err,
            message:"this request was not completed"
        });
    }
}
const updateTodo = async(req,res)=>{
    try{
        const {title, description} = req.body;
        const response = await todomodel.findByIdAndUpdate(
            {
                _id:id
            },
            {
                title,description,updatedAt:Date.now
            }
        );

        res.status(200).json({
            status:true,
            message:"the find request was completed successfully",
            data:response
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            data:err,
            message:"this request was not completed"
        });
    }
}

const readTodo = async(req,res)=>{
    try{
        // const {title} = req.body;
        const response = await todomodel.findById(req.params.id);
        res.status(200).json({
            status:true,
            message:"the read request was completed successfully",
            data:response
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            data:err,
            message:"this request was not completed"
        });
    }
}

module.exports = {createTodo,updateTodo,deleteTodo,readTodo};