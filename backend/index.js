import express from "express"
import dotenv from "dotenv"
import dbConnect from "./utils/dbConfig.js"




const app = express()
dotenv.config()

dbConnect()


app.get("/", (req, res) => {
    res.status(200).send({
        success: true,
        message: "Server is running"
    })
})


app.listen(5000, () => {
    console.log(`Server is running on port 500`);
    
})