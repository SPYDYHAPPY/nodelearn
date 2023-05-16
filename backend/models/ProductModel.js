import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig.js";
import Myuser from '../models/UserModel.js';

const { DataTypes } = Sequelize;


const AllProducts = myDb.define(
    'Allproducts',
    {
        productId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: {
                args: true,
                msg: 'Username is available in this id'
            },
            allowNull: false
        },
        productTitle: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[a-zA-Z\s]*$/,
                    msg: 'Title must be contain letters only'
                }
            },
            allowNull: false,
        },
        productType: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[a-zA-Z]*$/,
                    msg: 'Type must be contain letters without any space'
                }
            },
            allowNull: false,
        },
        productCategory: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[a-zA-Z]*$/,
                    msg: 'Category must be contain letters without space'
                }
            },
            allowNull: false,
        },
        productDescription: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[a-zA-Z0-9 ]*$/,
                    msg: 'In description only alphabet and number allowed'
                }
            },
            allowNull: false,
        },
        productImagefile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productPrice: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: {
                    args: true,
                    msg: 'Price must be a decimal value'
                },
            },
            allowNull: false,
        },
        productRating: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: {
                    args: true,
                    msg: 'Rating must be a decimal value'
                },
            },
            allowNull: false,
        },
        userID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            validate:{
                notEmpty: true
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
);

Myuser.hasMany(AllProducts);
AllProducts.belongsTo(Myuser, {foreignKey: 'userID'});
    

export default AllProducts;
