import { Sequelize } from "sequelize";


const myDb = new Sequelize('shopapp', 'root', 'deba',{
    dialect: 'mysql',
    dialectOptions: {
        host: 'localhost',
        port: 3308
    }
})

export default myDb