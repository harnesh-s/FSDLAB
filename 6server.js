const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://<username>:<password>@cluster.mongodb.net/test");

const BookSchema = new mongoose.Schema({ title: String });
const Book = mongoose.model("Book", BookSchema);

// CREATE
app.post("/books", async (req, res) => {
  const book = new Book({ title: req.body.title });
  await book.save();
  res.json(book);
});

// READ
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// UPDATE
app.put("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true });
  res.json(book);
});

// DELETE
app.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(3000, () => console.log("MongoDB API running on port 3000"));

//MongoDB Integration and CRUD Operations
//Minimal Code (server.js with MongoDB)://