const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactController');
const auth = require('../middleware/authMiddleware');

// @route   GET /api/contacts
// @desc    Get all contacts (Admin)
// @access  Private
router.get('/', auth, controller.getContacts);

// @route   POST /api/contacts
// @desc    Submit contact form
// @access  Public
router.post('/', controller.submitContact);

// @route   DELETE /api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/:id', auth, controller.deleteContact);

module.exports = router;
