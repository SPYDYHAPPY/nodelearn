import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig.js";

const { DataTypes } = Sequelize;

const SellerUser = myDb.define(
    'Sellerlist',
    {
        sid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: 'firstname must contain letters'
                },
                len: {
                    args: [3, 10],
                    msg: 'firstname must contain letters between 3 and 10 characters'
                }
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: 'lastname must contain letters'
                },
                len: {
                    args: [3, 10],
                    msg: 'lastname must contain letters between 3 and 10 characters'
                }
            }
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    //["^[a-zA-Z0-9]*$",'i']
                    args: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$",
                    msg: 'Username must be contain atleast one uppercase, one number and one special letter without any space'
                }
            },
            unique: {
                args: true,
                msg: 'Username already in use'
            },
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Please enter a valid email address'
                },
            },
            unique: {
                args: true,
                msg: 'Email address already in use'
            },
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: 'phone number already in use'
            },
            validate: {
                isNumeric:
                {
                    args: true,
                    msg: 'phone number should contain number only'
                }
            },
            allowNull: false
        },
        Dob: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: {
                    args: true,
                    msg: 'Date must be valid'
                },
            },
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

export default SellerUser;

