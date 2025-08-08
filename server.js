import express from 'express';
import sum from './sum.js'
const app=express();

const port=7070;

app.listen(port,()=>{
    console.log("listening on port 7070");
})

app.get("/home",(req,res)=>{
    // res.json({
    //     msg:"it's working"
    // })
    res.send("It's working");
})

app.get("/getsum/:a/:b",(req,res)=>{
    let {a,b}=req.params
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    })
})