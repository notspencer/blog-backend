import { Sequelize } from 'sequelize';
import 'dotenv/config';

// Use the connection string from your Neon dashboard
const connectionString = process.env.PG_URI;

// Initialize Sequelize with the connection string
const sequelize = new Sequelize(connectionString);

export default sequelize;
