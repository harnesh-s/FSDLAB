//RESTful API Development with Node.js & Express
const express = require("express");
const app = express();
app.use(express.json());

let books = [{ id: 1, title: "Book One" }];

// GET all books
app.get("/books", (req, res) => res.json(books));

// POST new book
app.post("/books", (req, res) => {
  const newBook = { id: books.length + 1, title: req.body.title };
  books.push(newBook);
  res.json(newBook);
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (book) { book.title = req.body.title; res.json(book); }
  else res.status(404).send("Not found");
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.send("Deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));
