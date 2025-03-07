import express from 'express';
import cors from 'cors'; // Import CORS
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import './db/orm.js'; // Import for side effects (to connect to the database)

// Create an express app
const app = express();

// Enable CORS for all routes
// app.use(cors()); // Allows all origins (you can specify a specific one if needed)

app.use(
    cors({
        origin: 'http://localhost:5173', // Allow only frontend requests
        methods: 'GET,POST,PUT,DELETE', // Allow specific methods
        allowedHeaders: 'Content-Type,Authorization', // Allow headers needed for requests
    })
);
// Set a port from the environment variable or default to 8080
const port = process.env.PORT || 8080;

// Middleware to parse JSON
app.use(express.json());

// // Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
