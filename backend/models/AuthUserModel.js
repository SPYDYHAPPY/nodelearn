import { Sequelize } from "sequelize";
import myDb from "../config/dbconfig.js";

const { DataTypes } = Sequelize;

const Authuser = myDb.define(
    'authusers',
    {
        auth_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false
        },
        auth_firstname: {
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
        auth_lastname: {
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
        auth_username: {
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
        auth_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'email id already in use',
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: 'email format is not valid',
                }
            }
        },
        auth_phone: {
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
            },
        },
        auth_dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: {
                    args: true,
                    msg: 'Date must be a valid date'
                }
            }
        },
        auth_gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: 'Please enter your gender'
                },
            }
        },
        auth_role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: 'Please enter your role'
                },
            }
        },
        auth_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    //^[_A-z0-9]*((-|\s)*[_A-z0-9])*$
                    //(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}
                    args: /^[a-zA-Z0-9\s,'-]*$/i,
                    ///^[A-z0-9]*((-|\s)*[A-z0-9])*$/i,
                    msg: 'Address must not contain like /_@'
                }
            }
        },
        auth_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        refresh_token:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
)

export default Authuser;

