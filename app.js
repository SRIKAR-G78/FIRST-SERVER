const express=require("express");
const app= express();
app.listen(5466,()=>{
    console.log("server is started");
    
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/project.html')
})
app.use(express.static(__dirname + '/public'))
