import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig.js";

const { DataTypes } = Sequelize;


const User = myDb.define(
    "userlist",
    {
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false,
            validate:{
                notEmpty: true
            }
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
                    msg: 'Lastname must contain letters'
                },
                len: {
                    args: [3, 10],
                    msg: 'lastname must contain letters between 3 and 10 characters'
                }
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Username already in use'
            },
            validate: {
                is: {
                    ///(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{6,8}).*$/i,
                    args: /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{6,8}).*$/i,
                    msg: 'Username must have upper or lower letters with numbers without any space between 6 to 8 characters'
                }
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
                },
                is: {
                    args: /^\d{10}$/i,
                    msg: 'phone number must be 10 digits'
                },
            }
        },
        Dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: {
                    args: true,
                    msg: 'Date must be valid date'
                },
            }
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: 'Please enter your gender'
                },
            }
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-zA-Z0-9\s,'-]*$/i,
                    msg: 'Address must be like eg. cape town, 69-B'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userRole: {
            type: DataTypes.STRING,
            allowNull: false
        },
        terms: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refresh_token: {
            type: DataTypes.TEXT,
            allowNull: true
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


