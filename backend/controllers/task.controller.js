const Task = require('../models/task.model');

// GET all Task
module.exports.getAllTasks = async(req, res) => {
    try {
        const task = await Task.find({});
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// GET Route with query by id
module.exports.getTaskById = async(req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// POST Route Task
module.exports.createTask = async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);

        const postTask = await Task.findById(task._id);
        res.status(200).json(postTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// PUT Route with query by id
module.exports.updateTask = async(req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(task);

        if (!task) {
            return res.status(404).json({ message: `Task with id ${id} not found` });
        }

        const updatedTask = await Task.findById(id);
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// DELETED Route
module.exports.deleteTask = async(req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByIdAndDelete(id);
        res.status(200).json(task);

        if (!task) {
            return res.status(404).json({ message: `Task with id ${id} not found` });
        }

        const updatedTask = await Task.findById(id);
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};