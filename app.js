// app.js

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");
const { name } = require("ejs");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const teammembers = [
  {name:'Reghard du Plesis', role:'', image: '/images/reggie.jpg'},
  {name:'Chad Clifton', role:'Team Leader', image: '/images/chad.jpg'},
  {name:'Zander Lindeque', role:'Data ', image: '/images/zander.jpg'},
  {name:'Christopher Wawa', role:'Frontend Developer', image: '/images/chris.jpg'},
  {name:'Grace Kangausaru', role:'Backend Developer', image: '/images/grace.jpg'},
];

app.locals.team =teammembers;

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
