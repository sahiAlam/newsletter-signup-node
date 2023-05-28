const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const PORT = 3000 || process.env.PORT;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// get request
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

// post request
app.post("/", (req, res) => {
  const firstName = req.body.inputFirstName;
  const lastName = req.body.inputLastName;
  const email = req.body.inputEmail;

  console.log(firstName, lastName, email);
  res.sendFile(__dirname + "/success.html");
});

app.post("/success", (req, res) => {
  res.redirect("/");
});

// server running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
