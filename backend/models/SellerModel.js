import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig";

const { DataTypes } = Sequelize;

const SellerUser = myDb.define('Sellerlist',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sid: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        freezeTableName: true,
    }
);

export default SellerUser;

async () => {
    await myDb.sync();
};