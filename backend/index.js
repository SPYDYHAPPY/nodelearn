import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';
import UserRoute from "./routes/UserRoute.js";
import AuthuserRoute from "./routes/AuthuserRoute.js";

dotenv.config({ path: './.env' })

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(UserRoute, AuthuserRoute);

app.listen(5000, () => console.log('server is running smoothly.......'))