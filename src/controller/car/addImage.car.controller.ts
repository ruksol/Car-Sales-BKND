import {Request, Response} from "express";
import {Mloop, loop} from "../../utils/db_functions/help"
import carModel from "../../model/car.model";

export const addImage = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        if(req.method === "POST"){
            if(req.files) {
                const files = req.files;
                const urls = await loop(files);

                const verifyItem = await carModel.findOne({_id: id});
                if(!verifyItem) {
                    return res.status(404).json({
                        message: "car not found",
                        status: false,
                    });
                }
                
                let url = {}

                const filesarray = verifyItem.files;
                filesarray.push(urls);
                verifyItem.save();
                return res.status(201).json({
                    success: true,
                    message: "image added successfully",
                });
            }
        } else {
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        })
    }
}