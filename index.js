const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Connected to database"))
.catch((error)=>console.error("Error connecting to database",error))

app.get('/',(req,res)=>{
  res.send("API is running")
})

app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`)
})