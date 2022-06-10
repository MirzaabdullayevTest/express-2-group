const express = require("express"); // function
const app = express(); // object
const path = require("path");

const port = 3000;

const books = ["Harry potter", "Fact fullnes", "Atomic habits"];

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   res.write("<h1>HEllo / page</h1>");
  //   res.end()
  res.send("Hello");
});

app.get("/api/books", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"), (err) => {
//     if (err) console.log(err);
//   });
    res.send(books);
});

// app.post("/add/book", (req, res) => {
//   books.push(req.body);
//   console.log(books);
//   res.send(req.body);
// });

// Get /api/lessons // 2 ta + 1 + 1
// Post /api/add/lesson // {type, author, duration}

app.listen(port, () => {
  console.log("Server listening port: " + port);
});
