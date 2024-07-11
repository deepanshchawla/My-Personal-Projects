const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log("Tserver started at port 3000");
})

//jab bhi server pr iss link pr aao ge tab tumbe server se response mile ga as specified
app.get("/", (request, response)=>{
    response.send("hello");
})

app.post("/api/cars", (request,response)=>{

    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully");
})
 
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("connection failed with error: ", err);
});