const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');
const auth = require('../middleware/authMiddleware');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', controller.getProjects);

// @route   POST /api/projects
// @desc    Add a new project
// @access  Private
router.post('/', auth, controller.createProject);

// @route   PUT /api/projects/:id
// @desc    Update a project
// @access  Private
router.put('/:id', auth, controller.updateProject);

// @route   DELETE /api/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/:id', auth, controller.deleteProject);

module.exports = router;
