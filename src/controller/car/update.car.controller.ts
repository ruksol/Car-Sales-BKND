import carModel from "../../model/car.model";
import { Request, Response } from "express";
import { showSingle } from "../../utils/db_functions/car.db";

export const update = async (req: Request, res: Response) => {
    const {
        name,
        category,
        price,
        model,
        year,
        mileage,
        engineType,
        engineSize,
        transmission,
        bodyType,
        color,
        tags,
        condition,
        location,
        contactPhone,
    } = req.body;

    const {id} = req.params
    const updateData = {
        name,
        category,
        price,
        model,
        year,
        mileage,
        engineType,
        engineSize,
        transmission,
        bodyType,
        color,
        tags,
        condition,
        location,
        contactPhone,
    }

    const car = await showSingle(id)

    try {
        if(req.method !== "PUT"){
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }

        if(!car) {
            return res.status(404).json({
                success: false,
                message: "car not found",
            });
        }

        car.updateOne(updateData, {useFindAndModify: false}).then((data) => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot update car with id=${id}. Maybe car was not found!`,
                });
            } else {
                return res.status(201).json({ message: "car updated successfully" });
            }
        });
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message
        })
    }
}