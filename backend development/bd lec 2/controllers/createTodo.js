const Todo = require("../models/Todo");

//define route handler
//ye controller kisi path se mapped tha
//hum iss controller pr tabhi aye hai jab vo path hit hua hoga
exports.createTodo = async(req,res)=>{
    try{
        // extract title and desc from the request
        const {title, description} = req.body;
        // create a new todo object and insert it into the db
        const response = await Todo.create({title,description});
        // send a json response with 
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry creted successfully"
            }
        )
    }
    catch(err){
        console.log(err);
        //server side error thats why your request cannot be completed
        res.status(500).json(
            {
                success:false,
                data:"internal server side error due to a bug or due to infrastructure",
                message:err.message
            }
        );
    }
}