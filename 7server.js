const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const users = [];
const SECRET = "mysecretkey";

// Register
app.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  users.push({ username: req.body.username, password: hashed });
  res.send("User registered");
});

// Login
app.post("/login", async (req, res) => {
  const user = users.find(u => u.username === req.body.username);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    const token = jwt.sign({ username: user.username }, SECRET);
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Middleware
function auth(req, res, next) {
  const token = req.headers["authorization"];
  try {
    jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(403).send("Forbidden");
  }
}

// Protected route
app.get("/private", auth, (req, res) => res.send("Secret data"));

app.listen(3000, () => console.log("Auth server running on port 3000"));

//JWT Authentication System (Node.js + Express)
//Minimal Code (server.js):