const express =require('express')
const cors =require('cors')


const app = express()


app.use(cors())
app.use(express.json())

app.get('/test',(req,res)=>{
    const data= { lname:'Braham',
    fname:'Zakaria',
    birth:'15-07-2000',
    job:'Software Engineer',}
   res.json({
   
data:data

})
})


app.listen(5000,()=>{
    console.log('listen in port 8000')
})
