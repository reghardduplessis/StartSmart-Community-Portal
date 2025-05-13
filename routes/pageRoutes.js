// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const { events } = require('../public/data/events');

router.get('/', (req, res) => {
    res.render('./pages/home', { title: "Home" });
});

router.get('/about', (req, res) => {
    res.render('./pages/about', {team: req.app.locals.team, title: "About" });
});

router.get('/events', (req, res) => {
    res.render('./pages/events', { events ,title: "Events" });
});

router.get('/contact', (req, res) => {
    res.render('./pages/contact', { title: "Contact" });
});

router.get('/thankyou', (req, res) => {
    res.render('./pages/thankyou', { title: "Thank you" });
});

module.exports = router;
