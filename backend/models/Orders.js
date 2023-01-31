import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig";

const { DataTypes } = Sequelize;

const Orders = myDb.define(
    'Orders',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        oid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cid: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Cartitems',
                key: 'cid'
            }
        },
        uid: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'User',
                key: 'uid'
            }
        },
        fullname: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false 
        },
        phone: { 
            type: DataTypes.STRING,
            allowNull: false 
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_price: {
            type: DataTypes.STRING,
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
)

export default Orders;

