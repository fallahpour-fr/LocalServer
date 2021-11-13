const { request, response } = require("express");
const express = require("express");
const app = express();
const cors=require('cors')

app.listen(3030, () => console.log('listening to 3030'))

app.use(cors())
app.use(express.static("public"));
app.use(express.json({limit:'1mb'}));
let users=[]

app.post('/api/users' , (request,response)=>{
    console.log(request.body)
    users.push(request.body.username)
    response.send({
        status:'nothing',
        data:request.body
    })
})

app.get('/api/users' , (request,response)=>{
    console.log(request.body)
    
    response.send({
        status:'nothing',
        data:users
    })
})

app.get('/api' , (request,response)=>{
    console.log(request.body)
    // response.send({
    //     status:'nothing',
    //     data:request.body,
    //     params:request.query
    // })
  response.status(400).send({
        status:'nothing',
        data:request.body,
        params:request.query
    })
})