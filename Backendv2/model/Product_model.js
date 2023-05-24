import { Sequelize} from "sequelize";
import myDb from "../db/dbconfig.js";

const { DataTypes } = Sequelize;

const AllProducts = myDb.define(
  "storeproducts",
  {
    id: {
      type: DataTypes.INTEGER.ZEROFILL,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      },
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      },
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      },
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      allowNull: false,
    },
    height: {
      type: DataTypes.BIGINT,
      validate: {
        isNumeric: true,
      },
      allowNull: false,
    },
    width: {
      type: DataTypes.BIGINT,
      validate: {
        isNumeric: true,
      },
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      validate: {
        isDecimal: true,
      },
      allowNull: false,
    },
    rating: {
      type: DataTypes.DOUBLE,
      validate: {
        isDecimal: true,
      },
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      },
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    }
  },
  {
    freezeTableName: true,
  }
);

export default AllProducts;
