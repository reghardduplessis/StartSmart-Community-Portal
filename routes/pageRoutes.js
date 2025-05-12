// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const { events } = require('../public/data/events');

router.get('/', (req, res) => {
    res.render('./pages/home');
});

router.get('/about', (req, res) => {
    res.render('./pages/about', {team: req.app.locals.team});
});

router.get('/events', (req, res) => {
    res.render('./pages/events', { events });
});

router.get('/contact', (req, res) => {
    res.render('./pages/contact');
});

router.get('/thankyou', (req, res) => {
    res.render('./pages/thankyou');
});

module.exports = router;
