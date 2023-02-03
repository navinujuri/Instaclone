const express=require('express')
let app=express()
const port = 5000 || process.env.PORT
const instaroutes=require('./routes/instaroutes')
const cors=require('cors')

//connection to db 
const conn=require('./connection/mongoconn.js')
conn();

//middlewares
app.use("/",instaroutes)
app.use(cors());
// 

app.get("*", (req, res) => {
    res.status(404).send("API IS NOT FOUND");
})




app.listen(port,()=>{
    console.log('server is up at 5000')
})
