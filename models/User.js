import { DataTypes } from 'sequelize';
import sequelize from '../db/orm.js';
//Since users table was created manually in the database , Sequelize will use it as long as the
//  structure matches the model definition. In this case, Sequelize doesn't need to sync anything; 
// it just maps the User model to the existing users tabl
//Therefore, in the following, the user.sync is removed
const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        password_hash: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
    },
    {
        tableName: 'users',
        timestamps: false,
    }
);

export default User;
