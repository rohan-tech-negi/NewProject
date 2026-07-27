import express from "express"
import dotenv from "dotenv"
import { ENV } from "./lib/env.js"
import path from "path"


dotenv.config()



const app = express()

const __direname = path.resolve()

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

if(ENV.NODE_ENV === "prodution"){
  app.use(express.static(path.join(__direname,"../frontend/dist")))
}


app.listen(ENV.PORT, ()=>{
    console.log("port is up on ", ENV.PORT)
})