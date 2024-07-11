const mongoose = require("mongoose");

const dbConnection = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Database connection is successful")
    }).catch((err)=>{
        console.err(err)
        process.exit(1);
    });
}
module.exports = dbConnection;