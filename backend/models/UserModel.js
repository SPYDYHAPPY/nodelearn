import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig.js";

const { DataTypes } = Sequelize;

let timestamp = new Date();


const User = myDb.define(
    "userlist",
    {
        id: {
            type: DataTypes.INTEGER.ZEROFILL,
            primaryKey: true,
            autoIncrement: true,
        },
        uid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: {
                args: true,
                msg: 'Username is available in this id'
            },
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: {
                    args: true,
                    msg: 'Username must contain alpha and numeric characters'
                },
            },
            unique: {
                args: true,
                msg: 'Username already in use'
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Not a valid email id'
                }
            },
            unique: {
                args: true,
                msg: 'Email address already in use'
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
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
            }
        },
        Dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: {
                    args: true,
                    msg: 'Date must be valid'
                },
                // isBefore: {
                //     args: timestamp.setFullYear(timestamp.getFullYear() - 18),
                //     msg: 'your age should be greater than 18 years'
                // }
            }
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        terms: {
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

export default User;

(async () => {
    await myDb.sync();
})();
