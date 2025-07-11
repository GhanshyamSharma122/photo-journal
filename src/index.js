import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
    path: './.env'
})


app.on("error", (error) => {
    console.log("error starting the server")
    throw error
})

app.listen(process.env.PORT || 8000, () => {
    console.log("server is running at port:", process.env.PORT)
})


