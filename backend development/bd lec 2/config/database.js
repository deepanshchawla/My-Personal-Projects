const mongoose = require("mongoose");

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("db connection is successful");
    }).catch((err)=>{
        console.log("db not connected and end up giving error as: ", err);
        console.error();
        process.exit(1);
    });
}

module.exports = dbConnect; 