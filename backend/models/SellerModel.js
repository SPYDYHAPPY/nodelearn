import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig.js";

const { DataTypes } = Sequelize;

const SellerUser = myDb.define('Sellerlist',
    {
        id: {
            type: DataTypes.INTEGER.ZEROFILL,
            primaryKey: true,
            autoIncrement: true,
        },
        sid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false,
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
        username: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: {
                    //["^[a-zA-Z0-9]*$",'i']
                    args: true,
                    msg: 'Username must be contain letters and numbers without any space'
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
            allowNull: false
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

(async () => {
    await myDb.sync();
})();