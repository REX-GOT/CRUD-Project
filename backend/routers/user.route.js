const express = require('express');
const router = express.Router();
const User = require('../models/userPost.model');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/user.controller');

// GET all Route
router.get("/", getAllUsers);

// GET Route with query by id
router.get('/:id', getUserById);

// POST Route
router.post('/', createUser);

// PUT Route with query by id
router.put('/:id', updateUser);

// DELETE Route with query by id
router.delete('/:id', deleteUser);

module.exports = router;