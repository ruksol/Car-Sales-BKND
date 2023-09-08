import carModel from "../../model/car.model";

export async function getAll() {
    try {
        const items = await carModel.find();
        return items;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}

export async function showSingle(id: string) {
    try {
        const item = await carModel.findById(id);
        return item;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}