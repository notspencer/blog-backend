import User from '../models/User.js';

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { lastName, firstName, email, passwordHash } = req.body;
        const user = await User.create({
            lastName,
            firstName,
            email,
            passwordHash,
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a user
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ error: 'User not found' });
        }
        const updatedUser = await User.findByPk(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
