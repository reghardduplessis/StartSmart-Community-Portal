const express = require('express');
const router = express.Router();


// CONTACT FORM CODE - START
router.use(express.urlencoded({ extended: true }));

const contacts = [];

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  contacts.push({ name, email, message });
  console.log(contacts); //logs the inputted contact information for testing
  res.redirect('/thankyou');
});
// CONTACT FORM CODE - END

module.exports = router;