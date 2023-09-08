import express from "express";

import car from "./car.api";

const router = express.Router();

router.use("/car", car);

export default router;