// require("dotenv").config();
// const express = require("express");
// const app = express();

// function successApplog(){
//     console.log("App is running successfully");
// }

// app.listen(process.env.PORT,successApplog);


// guess ab mere pass sab kuch tayaar hai ab mujhe sab dena hai 
//create a server
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// mujhe yahan pr ek middleware ki jrurat ki need hogi
app.use(express.json());

// importing the routes for todo api
const todoRoutes = require("./routes/todos")
app.use("/api/v1", todoRoutes)

app.listen(PORT,()=>{
    console.log(`Server is started at: ${PORT}`);
})

//connect the db
const dbConnect = require("./config/database")
dbConnect();

// default route
app.get("/", (req,res)=>{
    res.send('<h1>this is homepage baby</h1>')
})