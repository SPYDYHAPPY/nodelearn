import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';
//import SequelizeStore from "connect-session-sequelize";
import cookieParser from "cookie-parser";
import session from "express-session";
import myDb from "./config/dbconfig.js"
import UserRoute from "./routes/UserRoute.js";
import AuthuserRoute from "./routes/AuthuserRoute.js";
import ProductsRoute from "./routes/ProductRoute.js";
import SellersRoute from "./routes/SellerRoute.js";
import Usercart from "./routes/CartRoute.js";

dotenv.config();

const app = express();

// const sessionStore = SequelizeStore(session.Store);
// const store = new sessionStore({
//     db: myDb
// });

try {
    await myDb.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

//(async () => {
//    await myDb.sync();
//})();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    //store: store,
    cookie: {
        secure: 'auto'
    }
}));

const port = process.env.APP_PORT

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(UserRoute, AuthuserRoute, ProductsRoute, SellersRoute, Usercart);

//store.sync();

app.listen(port, () => console.log('server is running at ' + `http://localhost:${port}`))