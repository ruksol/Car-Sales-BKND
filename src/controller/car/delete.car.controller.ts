import { Request, Response } from "express";
import carModel from "../../model/car.model";

export const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await carModel.deleteOne({_id: id});

        return res.status(200).json({
            success: true,
            message: "car deleted successfully",
        });
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message
        });
    }
}