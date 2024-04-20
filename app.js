const express =require('express')
const cors =require('cors')
const movieRoute = require('./Routes/movieRoute')
const mongoose = require("mongoose");
require("dotenv").config();

const app = express()


app.use(cors())
app.use(express.json())
const uri = process.env.MONGOURI;


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB database connection established successfully.");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});


app.use(movieRoute)
app.get('/tesxt',(req,res)=>{
    
   res.json(


data

)
})


app.listen(5000,()=>{
    console.log('listen in port 8000')
})
