import express from "express"
import dotenv from "dotenv"
import { ENV } from "./lib/env.js"


dotenv.config()



const app = express()


app.listen(ENV.PORT, ()=>{
    console.log("port is up on 3000")
})