const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

//dummy data
const dogs = ['german shephard', 'weener dog', 'shitsu','husky','pitbull']


app.get('/dogs', function(req,res){
    res.status(200).send(dogs)

})
 

app.listen(4500, function(){
    console.log('Server is up on 4500')
})