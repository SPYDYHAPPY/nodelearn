import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig";

const { DataTypes } = Sequelize;


const AllProducts = myDb.define('Allproducts',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pr_id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        pr_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
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

export default AllProducts;

async () => {
    await myDb.sync();
};