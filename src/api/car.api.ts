import express from "express";
import { 
    create,
    update,
    addImage,
    deleteImage,
    getCars,
    showCars,
    deleteCar
} from "../controller/car/index.car.controller";
import { upload } from "../config/mutler"

const router = express.Router();

router.post("/create", upload.array("files", 10), create);
router.post("/add-image/:id", upload.array("files", 10), addImage);
router.delete("/delete-image/:carId/:id", deleteImage);
router.get("/get", getCars);
router.get("/show/:id", showCars);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteCar);

export default router;

