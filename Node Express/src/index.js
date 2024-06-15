import connectDB from "./db/index.js";
import app from "./app.js";
//require("dotenv").config({path: './.env'});

import dotenv from "dotenv";
dotenv.config({path: './.env'});

const port = process.env.PORT || 3000

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`App is listening on port ${port}`)
    
    })
})
.catch((error)=>{
    console.log("error connecting to mongoDB",error);
})





