const express = require('express');
const router = express.Router();
const gallerySchema = require('../models/Services');
const Contact = require('../models/Contact.js');

router.post('/contact', async (req, res) => {
  const contact = new Contact(req.body);
  console.log(contact);
  await contact.save();
  console.log(contact);
})


module.exports = router;
