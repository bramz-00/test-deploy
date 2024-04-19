const express =require('express')


const app = express()

app.get('/',(req,res)=>{
   res.json({
    lname:'Braham',
    fname:'Zakaria',
    birth:'15-07-2000',
    job:'Software Engineer',   })
})


app.listen(5000,()=>{
    console.log('listen in port 8000')
})
