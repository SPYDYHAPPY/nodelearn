import { Sequelize } from "sequelize";


const myDb = new Sequelize('storeapp', 'root', '2129',{
    dialect: 'mysql',
    dialectOptions: {
        host: 'localhost',
        port: 3306
    }
})


export default myDb