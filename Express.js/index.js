import express from "express"
import bodyParser from "body-parser"


const app =express()

app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
res.send("<h1>hello</h1>")
})


app.listen(5000,()=>{
    console.log("server is ready")
})
