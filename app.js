const express =require('express')


const app = express()

app.get('/',(req,res)=>{
   res.json({
    message:'Yes'
   })
})


app.listen(5000,()=>{
    console.log('listen in port 8000')
})