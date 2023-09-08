import carModel from "../../model/car.model";
import { getAll, showSingle } from "../../utils/db_functions/car.db";
import { Request, Response } from "express";

export const getCars = async (req: Request, res: Response) => {
    const items = await getAll();
    return res.status(200).json(items.reverse())
}

export const showCars = async (req: Request, res: Response) => {
    const {id} = req.params;

    const car = await showSingle(id);

    try {
        return res.status(200).json(car)
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
};