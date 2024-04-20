const express =require('express')
const cors =require('cors')


const app = express()


app.use(cors())
app.use(express.json())

app.get('/test',(req,res)=>{
    const data= [
        {
          "Title": "The Lion King",
          "Year": "2019",
          "Runtime": "118 min",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
        },
        {
          "Title": "Mowgli: Legend of the Jungle",
          "Year": "2018",
          "Runtime": "104 min",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
        },
        {
          "Title": "Doctor Strange",
          "Year": "2016",
          "Runtime": "115 min",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {
          "Title": "John Wick",
          "Year": "2014",
          "Runtime": "101 min",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
        },
    
      ]
   res.json({
   
data

})
})


app.listen(5000,()=>{
    console.log('listen in port 8000')
})
