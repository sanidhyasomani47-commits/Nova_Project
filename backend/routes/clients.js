const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');
const auth = require('../middleware/authMiddleware');

// @route   GET /api/clients
// @desc    Get all clients
// @access  Public
router.get('/', controller.getClients);

// @route   POST /api/clients
// @desc    Add a new client
// @access  Private
router.post('/', auth, controller.createClient);

// @route   PUT /api/clients/:id
// @desc    Update a client
// @access  Private
router.put('/:id', auth, controller.updateClient);

// @route   DELETE /api/clients/:id
// @desc    Delete a client
// @access  Private
router.delete('/:id', auth, controller.deleteClient);

module.exports = router;
