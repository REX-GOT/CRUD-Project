const express = require('express');
const router = express.Router();
const Task = require('../models/task.model');
const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/task.controller');

// GET all Route
router.get("/", getAllTasks);

// GET Route with query by id
router.get('/:id', getTaskById);

// POST Task
router.post('/', createTask);

// PUT Route with query by id
router.put('/:id', updateTask);

// DELETED Route
router.delete('/:id', deleteTask);

module.exports = router;