import {uploads} from "../../config/cloudinary"
import fs from "fs"

export async function loop(Ifiles) {
    const uploader = async (path) => await uploads(path, "Images");

    try {
        let urls;
        const {path} = Ifiles[0];
        const newPath = await uploader(path);
        urls = newPath;
        return urls;
    } catch (error) {
        console.error("Error retrieving folders", error);
        throw error;
    }
}

export async function Mloop(Ifiles) {
    const uploader = async (path) => await uploads(path, "Images");

    try {
        const urls = []
        for (const file of Ifiles) {
            const {path} = file;
            const newPath = await uploader(path);
            urls.push(newPath)
        }
        return urls
    } catch (error) {
        console.error("Error retreiving folders", error);
        throw error;
    }
}