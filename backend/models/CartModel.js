import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig.js";

const { DataTypes } = Sequelize;

const Cartitems = myDb.define(
    'Cartitems',
    {
        cartId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        sellerId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            validate: {
                isUUID: {
                    args: 4,
                    msg: 'UUID must be valid seller'
                }
            }
        },
        productId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUUID: {
                    args: 4,
                    msg: 'UUID must be valid user'
                }
            }
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
        pr_price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: {
                    args: true,
                    msg: 'Price must be a decimal value'
                },
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    args: true,
                    msg: 'Only Interger Value allowed'
                }
            }
        },
        cart_total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: {
                    args: true,
                    msg: 'Total must be a decimal value'
                },
            },
        },
        on_confirm: {
           type: DataTypes.BOOLEAN,
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
)

export default Cartitems;
