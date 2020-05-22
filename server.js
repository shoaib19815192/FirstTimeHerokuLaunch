const express=require('express')
const app=express()

const PORT=process.env.PORT || 4444

app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

app.listen(PORT,()=>{
    console.log(`server started at https://localhost:${PORT}`)
})