const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

//GET (/)
router.get('/', taskController.getAllTasks);

module.exports = router;