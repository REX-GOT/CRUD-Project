const User = require('../models/userPost.model');

// GET all User
module.exports.getAllUsers = async(req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// GET Route with query by id
module.exports.getUserById = async(req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// POST Route User
module.exports.createUser = async(req, res) => {
    try {
        const userId = await User.create(req.body);
        res.status(201).json(userId);

        const postUser = await User.findById(userId._id);
        res.status(200).json(postUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// PUT Route with query by id
module.exports.updateUser = async(req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);

        if (!user) {
            return res.status(404).json({ message: `User with id ${id} not found` });
        }

        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// DELETE Route with query by id
module.exports.deleteUser = async(req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);

        if (!user) {
            return res.status(404).json({ message: `User with id ${id} not found` });
        }

        const deletedUser = await User.findById(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};