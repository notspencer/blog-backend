import express from 'express';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import './db/orm.js'; // Import for side effects (to connect to the database)
import cors from 'cors';

// Create an express app
const app = express();
app.use(cors());
// Set a port from the environment variable or default to 8080
const port = process.env.PORT || 8080;

// Middleware to parse JSON
app.use(express.json());

// // Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
