import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig";

const { DataTypes } = Sequelize;

const Cartitems = myDb.define(
    'Cartitems',
    {
        cid: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        uid: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            references : {
                model : 'User',
                key: 'uid'
            }
        },
        fullname: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false ,
            validate: {
                isEmail: true,
            }
        },
        phone: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
            }
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
            validate: {
                isNumeric: true,
            }
        },
        createdAt: { 
            type: DataTypes.DATEONLY,
            allowNull: false 
        },
        updatedAt: { 
            type: DataTypes.DATEONLY,
            allowNull: false 
        },
    }, 
    {
        freezeTableName: true,
    }
)

export default Cartitems;

async () => {
    await myDb.sync();
};