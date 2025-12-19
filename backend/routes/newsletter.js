const express = require('express');
const router = express.Router();
const controller = require('../controllers/newsletterController');
const auth = require('../middleware/authMiddleware');

// @route   GET /api/newsletter
// @desc    Get all subscribers (Admin)
// @access  Private
router.get('/', auth, controller.getSubscribers);

// @route   POST /api/newsletter
// @desc    Subscribe to newsletter
// @access  Public
router.post('/', controller.subscribe);

// @route   DELETE /api/newsletter/:id
// @desc    Delete a subscriber
// @access  Private
router.delete('/:id', auth, controller.deleteSubscriber);

module.exports = router;
