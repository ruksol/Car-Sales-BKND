import carModel from "../../model/car.model";
import {Request, Response} from "express";
import {Mloop} from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
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

    try {
        if(req.method === "POST") {
            if(req.files) {
                const files = req.files;
                const urls = await Mloop(files);

                const car = await new carModel({
                    name: name,
                    category: category,
                    price: price,
                    model: model,
                    year: year,
                    mileage: mileage,
                    engineType: engineType,
                    engineSize: engineSize,
                    transmission: transmission,
                    bodyType: bodyType,
                    color: color,
                    tags: tags,
                    condition: condition,
                    location: location,
                    contactPhone: contactPhone,
                    files: urls,
                });

                car.save();
                return res.status(201).json({
                    success: true,
                    message: "car created successfully",
                    car,
                })
            } else {
                const car = await new carModel({
                    name: name,
                    category: category,
                    price: price,
                    model: model,
                    year: year,
                    mileage: mileage,
                    engineType: engineType,
                    engineSize: engineSize,
                    transmission: transmission,
                    bodyType: bodyType,
                    color: color,
                    tags: tags,
                    condition: condition,
                    location: location,
                    contactPhone: contactPhone,
                });

                car.save();
                return res.status(201).json({
                    success: true,
                    message: "car created successfully",
                    car,
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
        });
    }
};