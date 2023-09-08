import { Request, Response } from "express";
import { showSingle } from "../../utils/db_functions/car.db";

export const deleteImage = async (req: Request, res: Response) => {
    const {carId, id} = req.params

    try {
        if(req.method === 'DELETE') {
            const verifyItem = await showSingle(carId);
            if(!verifyItem) {
                return res.status(404).json({
                    message: "car not found",
                    status: false
                })
            }

            const filesarray = verifyItem.files
            const newfilesarray = filesarray.filter((image) => 
                image.id !== "Images/" + id
            )
            verifyItem.files = newfilesarray
            verifyItem.save()
            return res.status(201).json({
                success: true,
                message: "image deleted successfully",
            })
        } else {
            return res.status(405).json({
                err: `${req.method} method not allowed`
            })
        }
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error
        })
    }
}