import Post from '../models/Post.js';

// Get all posts
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({ include: 'author' });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a post by ID
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, { include: 'author' });
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { title, content, cover, author_id } = req.body;
        const post = await Post.create({ title, content, cover, author_id });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a post
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Post.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ error: 'Post not found' });
        }
        const updatedPost = await Post.findByPk(id, { include: 'author' });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
