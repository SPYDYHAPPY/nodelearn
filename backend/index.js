import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';
import UserRoute from "./routes/UserRoute.js";
import AuthuserRoute from "./routes/AuthuserRoute.js";
import ProductsRoute from "./routes/ProductRoute.js";
import SellersRoute from "./routes/SellerRoute.js";

dotenv.config({ path: './.env' })

const app = express();
const port = 5000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(UserRoute, AuthuserRoute, ProductsRoute, SellersRoute);

app.listen(port, () => console.log('server is running at ' + `http://localhost:${port}`))