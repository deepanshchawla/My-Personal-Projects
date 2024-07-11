const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();
const port = process.env.PORT || 4000;

const todoRoutes = require("./routes/todopaths");
app.use("/api/v1", todoRoutes);

app.listen(port,(req,res)=>{
    console.log("Application is running successfully");
    console.info(`Server started successfully at ${port}`);
});

const dbConnect = require("./config/databaseconnection");
dbConnect();

app.get("/", (req,res)=>{
    res.send("This is a web page baby");
    console.log("This is a webpage baby");
});