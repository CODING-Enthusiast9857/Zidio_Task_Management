const express = require('express');
const router = express.Router();
const { createTask, getTasks, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createTask);  // Protected route
router.get('/', authMiddleware, getTasks);    // Protected route
router.delete('/:id', authMiddleware, deleteTask);  // Protected route

module.exports = router;
