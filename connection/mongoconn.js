const mongoose = require('mongoose')

async function main(){
 
  const URI =  `mongodb+srv://navinujuri:navinujuri5@insta.tminbpf.mongodb.net/instadb?retryWrites=true&w=majority`
// await mongoose.connect('mongodb://localhost:27017/mydb')
mongoose.set('strictQuery', false)
 await mongoose.connect(URI,(err)=>{
    if (err)
    { 
       console.log('connection failed with atlas cluster')
    }
    else{
        console.log('connection sucess with atlas cluster')
    }
})
}
module.exports = main
