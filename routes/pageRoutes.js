// routes/pageRoutes.js

const express = require("express");
const router = express.Router();
const { events } = require("../public/data/events");

// Home page route

router.get("/", (req, res) => {
  const today = new Date();
  const upcomingEvents = events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 2);

  res.render("./pages/home", {
    title: "Welcome to Our Vibrant and Ever-Growing Community Portal!",
    welcomeParagraph:
      "We are absolutely thrilled to have you join us on this exciting journey of connection, collaboration, and celebration! Dive into a rich and engaging experience where you can explore a diverse array of upcoming events, discover the inspiring stories and passion behind our dedicated team, and stay fully immersed in all the dynamic happenings within our bustling community. Whether you’re here to learn something new, forge meaningful connections, share your unique talents, or simply soak in the energy of our collective spirit, there’s a place for everyone in our inclusive hub. Get ready to engage, contribute, and be a part of something truly special. Join us today and let’s build an unforgettable community experience together!",
    upcomingEvents,
  });
});

router.get("/about", (req, res) => {
  res.render("./pages/about", { team: req.app.locals.team, title: "About" });
});

router.get("/events", (req, res) => {
  res.render("./pages/events", { events, title: "Events" });
});

router.get("/contact", (req, res) => {
  res.render("./pages/contact", { title: "Contact" });
});

router.get("/thankyou", (req, res) => {
  res.render("./pages/thankyou", { title: "Thank you" });
});

module.exports = router;
