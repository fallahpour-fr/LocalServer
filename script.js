const { request, response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");

app.listen(3030, () => console.log("listening to 3030"));

app.use(cors());
// app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
let users = [];

app.post("/signin/users", (request, response) => {
  console.log(request.body);

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === request.body.username &&
      users[i].password === request.body.password
    ) {
      response.send({
        status: "you signed up",
        data: request.body,
      });
    }
  }

  response.send("you didnt sign up");
});

app.post("/signup/users/", (request, response) => {
  //   console.log(request.body);
  if (users.length !== 0) {
    for (let i = 0; i < users.length; i++) {
     if (
        users[i].username === request.body.username &&
        users[i].password === request.body.password
      ) {
        response.send({
          status: "you have regestered befor , show error moudal",
          data: request.body,
        });
      }else{
        users.push(request.body)
        response.send({
          status: "you sign up,go to home page",
          data: request.body,
        });
      }
    }
  }else{
      users.push(request.body)
      response.send({
        status: "you sign up,go to home page",
        data: request.body,
      });
  }
  console.log(users);
});

// app.get('/signup/users/' , (request,response)=>{
//     console.log(request.body)
//    console.log(users)
// response.send({
//     data:request.body,
//     users:users
// })
// })

// app.get('/api' , (request,response)=>{
//     console.log(request.body)
//     // response.send({
//     //     status:'nothing',
//     //     data:request.body,
//     //     params:request.query
//     // })
//   response.status(400).send({
//         status:'nothing',
//         data:request.body,
//         params:request.query
//     })
// })
