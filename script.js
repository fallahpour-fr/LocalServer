const express = require("express");
const app = express();
const cors = require("cors");

app.listen(3030, () => console.log("listening to 3030"));

app.use(cors());
// app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
let users = [];

app.post("/signin/users", (request, response) => {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === request.body.username &&
      users[i].password === request.body.password
    ) {
      response.send({
        status: "you signed up befor, welcome to home page",
        data: request.body,
        enter: "Ok",
        usersData:users,
      });
      return;
    }
  }

  response.status(400).send({
    status: "you did not sign up before pls go to regestered page ",
    data: request.body,
    params: request.query,
  });
});

app.post("/signup/users", (request, response) => {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username === request.body.username &&
        users[i].password === request.body.password
      ) {
        response.status(400).send([{
          status: "you signed up before , pls go to sign in page ",
          data: request.body,
          params: request.query,
        }]);
        return;
      }
    }

    users.push(request.body);
    response.send([{
      status: "you sign up,welcom to home page",
      data: request.body,
      enter: "ok",
    }]);
  console.log(users);
});

// app.get("/signin/users", (request, response) => {
//   console.log(request.body);
//   // response.send({
//   //     status:'nothing',
//   //     data:request.body,
//   //     params:request.query
//   // })
//   response.status(400).send({
//     status: "nothing",
//     data: request.body,
//     params: request.query,
//   });
// });

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
