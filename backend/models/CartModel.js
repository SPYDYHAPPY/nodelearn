import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig.js";

const { DataTypes } = Sequelize;

const Cartitems = myDb.define(
    'Cartitems',
    {
        cid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        uid: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUUID: {
                    args: 4,
                    msg: 'UUID must be valid user'
                }
            }
        },
        sid: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUUID: {
                    args: 4,
                    msg: 'UUID must be valid seller'
                }
            }
        },
        fullname: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: ["^[a-zA-Z ]*$", 'i'],
                    msg: 'Fullname must be contain letters only'
                }
            },
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Please enter a valid email address'
                },
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric:
                {
                    args: true,
                    msg: 'phone number should contain number only'
                }
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pr_id: {
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
