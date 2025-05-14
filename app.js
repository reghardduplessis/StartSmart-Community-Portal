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
const contactRoutes = require("./routes/contactRoutes");
const { name } = require("ejs");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Loads the array data from data/about.js.
const teamMembers = require("./public/data/about").teamMembers;
//making the array team members available to all templates but with the name team
app.locals.team =teamMembers;


app.use("/", pageRoutes);
app.use("/", contactRoutes);
// server listener code
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


