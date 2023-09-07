import {connect, set} from "mongoose";
import { MONGO_DB_CONNECTION } from "../config/config";

(async () => {
    try {
        set("strictQuery", false);
        const db = await connect(MONGO_DB_CONNECTION);
        console.log("MongoDB connected to", db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();