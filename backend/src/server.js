import express from "express"
import dotenv from "dotenv"
import { ENV } from "./lib/env.js"
import path from "path"
import { fileURLToPath } from "url"
import { connectDB } from "./lib/db.js"

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")))

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"))
  })
}

app.listen(ENV.PORT || 3000, ()=>{
    console.log("port is up on ", ENV.PORT || 3000)
    connectDB()
})