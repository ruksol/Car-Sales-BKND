import {config} from "dotenv";

config();

export const MONGO_DB_CONNECTION = process.env.MONGO_DB_CONNECTION || "mongodb+srv://ruksol2021:p3ELBU32di77bjiS@cluster0.zelgbq2.mongodb.net/";