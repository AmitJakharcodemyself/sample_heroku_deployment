const express=require('express')
const app=express()

const port=precess.env.PORT || 4444
app.get('/',function(req,res){
    res.send('Hello World')
})
app.listen(port,function(){
    console.log(`server is started at ${port}`)
})
