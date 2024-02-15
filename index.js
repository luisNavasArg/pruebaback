require("dotenv").config();
const connectDB = require('./config/db');
const cors = require("cors")
const express = require("express");
const port =8080 || process.env.PORT;

const wordsRoute = require("./routes/wordsRoute")

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/words" , wordsRoute);

app.listen(port, ()=>{
  console.log(`Corriendo en el puerto ${port}`)
})