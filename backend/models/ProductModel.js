import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig.js";

const { DataTypes } = Sequelize;


const AllProducts = myDb.define('Allproducts',
    {
        id: {
            type: DataTypes.INTEGER.ZEROFILL,
            primaryKey: true,
            autoIncrement: true,
        },
        pr_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: {
                args: true,
                msg: 'Username is available in this id'
            },
            allowNull: false
        },
        pr_title: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[a-zA-Z\s]*$/,
                    msg: 'Title must be contain letters only'
                }
            },
            allowNull: false,
        },
        pr_type: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[a-zA-Z]*$/,
                    msg: 'Type must be contain letters without any space'
                }
            },
            allowNull: false,
        },
        pr_category: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[a-zA-Z]*$/,
                    msg: 'Category must be contain letters without space'
                }
            },
            allowNull: false,
        },
        pr_description: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[a-zA-Z0-9 ]*$/,
                    msg: 'In description only alphabet and number allowed'
                }
            },
            allowNull: false,
        },
        pr_filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_price: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: {
                    args: true,
                    msg: 'Price must be a decimal value'
                },
            },
            allowNull: false,
        },
        pr_rating: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: {
                    args: true,
                    msg: 'Rating must be a decimal value'
                },
            },
            allowNull: false,
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

export default AllProducts;

(async () => {
    await myDb.sync();
})();