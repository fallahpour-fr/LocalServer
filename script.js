const express = require("express");
const fileUpload = require("express-fileupload");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");
const app = express();
const cors = require("cors");
const FormData = require('form-data');
const { request, response } = require("express");
const bodyParser = require('body-parser')
var upload = multer();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//EJS
app.set("view engine", "ejs");

app.use(express.static("./public"));

app.listen(3030, () => console.log("listening to 3030"));
app.use(fileUpload());
app.use(cors());
// app.use(express.static("public"));
app.use(
  express.json({
    limit: "1mb",
  })
);


app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));
app.use(upload.array()); 
app.use(express.static('public'));


let users = [];
let posts = [];

// const storage = multer.diskStorage({
//   destination: "./public/upload",
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.filename + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
// }).single("myImage");

app.post("/upload", (request, response) => {
  // upload(request, response, (err) => {
  //   console.log(request.file)
  // });

  // if (req.files === null) {
  //   return res.status(400).json("No file uploaded");
  // }
  console.log(request.body);
  // const file = request.files.file;

  // file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
  //   if (err) {
  //     return  response.status(500).send(err);
  //   }

  //    response.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  // });
});

app.post("/signin/users", (request, response) => {
  console.log(request.body.values);
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === request.body.values.username &&
      users[i].password === request.body.values.password
    ) {
      response.send({
        status: "you signed up before, welcome to home page",
        data: request.body.values,
        enter: "Ok",
        usersData: users,
        token: "580e486e9bb666b9ea4a6",
      });
      return;
    }
  }
  // response.send({
  //   status: "you signed up before, welcome to home page",
  //   enter: "Ok",
  //   user: {
  //     name: "Farzaneh Fallahpur",
  //     email: "farzanehhh@gmail.com",
  //     id: 3030,
  //   },
  //   token: '580e486e9bb666b9ea4a6',
  // });
  response
    .status(400)
    .send("you did not sign up before pls go to regestered page ");
});

app.post("/signup/users", (request, response) => {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === request.body.username &&
      users[i].password === request.body.password
    ) {
      response
        .status(400)
        .send("you signed up before , pls go to sign in page ");
      return;
    }
  }

  users.push(request.body);
  response.send({
    status: "you sign up,welcom to home page",
    data: request.body,
    enter: "ok",
    token: "580e486e9bb666b9ea4a6",
  });
  console.log(users);
});

app.get("/users/profile", (request, response) => {
  // console.log(request.headers);

  let token = request.headers.authorization;
  if (token !== "580e486e9bb666b9ea4a6") {
    console.log("token :", token);
    response.status(401).json("Can not Found user , please go to login page .");
    return;
  }
  response.send({
    message: "users was successful",

    user: {
      name: "Farzaneh Fallahpour",
      email: "farzanehhh@gmail.com",
      id: 3030,
      posts: posts,
    },
  });
});

app.post("/createpost", (request, response) => {
  // console.log(request.body.values);

  posts.push(request.body.values);

  response.send({
    message: "data save successful !",
  });
});

app.post("/post", (request, response) => {
  // console.log(request.body.id);
  // console.log(posts);
  let id = request.body.id;

  let post = posts.filter((item) => {
    item.id !== id;
  });
  console.log(post);

  response.send({
    posts: posts,
  });
});

app.post("/postdata", (request, response) => {
  // console.log(request.body.Id);
  let Id = request.body.Id;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === Number(Id)) {
      response.send({
        post: posts[i],
      });
    }
    return;
  }
  response.status(404).json("Post is not exist");
});

app.post("/profileData", (request, response) => {
  let id = request.body.id;
  // console.log(id);

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === Number(id)) {
      response.send({
        user: users[i],
      });
    }
    return;
  }

  response.status(404).json("User does not found");
});

app.post("/profileEdited", (request, response) => {
  let id = request.body.id;
  // console.log(id);
  let value = request.body.values;
  console.log(value);

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === Number(id)) {
      users[i].age = value.age;
      users[i].website = value.website;
      users[i].introduction = value.introduction;
    }
  }

  console.log(users);
});
