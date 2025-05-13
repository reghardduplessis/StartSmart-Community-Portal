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

//creating array to store team members name, role and image
const teammembers = [
  {name:'Reghard du Plesis', role:'Documentation Manager', image: '/images/reggie.jpg'},
  {name:'Chad Clifton', role:'Team Leader', image: '/images/chad.jpg'},
  {name:'Zander Lindeque', role:'Data Manager', image: '/images/zander.jpg'},
  {name:'Christopher Wawa', role:'Frontend Developer', image: '/images/chris.jpg'},
  {name:'Grace Kangausaru', role:'Backend Developer', image: '/images/grace.jpg'},
];

//making the array team members available to all templates but with the name team
app.locals.team =teammembers;


app.use("/", pageRoutes);
app.use("/", contactRoutes);
// server listener code
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


