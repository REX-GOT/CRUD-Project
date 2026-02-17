const mongoose = require('mongoose');
const type = require('node:os');

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;