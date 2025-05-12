/*
app.js
This is the main file for the Community Portal Website application.
It sets up the server, middleware, and routes. It also handles the contact form submission 
and stores the data.
*/ 

// Load Modules and specify the port
const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");
const app = express();
const port = 3000;

// CONTACT FORM CODE - START
app.use(express.urlencoded({ extended: true }));

const contacts = [];

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  contacts.push({ name, email, message });
  console.log(contacts);
  res.redirect('/thankyou');
});
// CONTACT FORM CODE - END

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pageRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
