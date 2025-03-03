import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../db/orm.js';
import User from './User.js'; // Import User model

const Post = sequelize.define(
    'Post',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        author_id: {
            // Foreign key referencing User
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // Table name in DB
                key: 'id',
            },
            onDelete: 'CASCADE', // If user is deleted, delete their posts
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        cover: {
            type: DataTypes.TEXT, // Assuming this stores a URL or file path
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    },
    {
        tableName: 'posts',
        timestamps: false,
    }
);

// Define the relationship: Each Post belongs to a User
Post.belongsTo(User, { foreignKey: 'author_id', as: 'author' });

// A User can have multiple Posts
User.hasMany(Post, { foreignKey: 'author_id', as: 'posts' });

export default Post;
