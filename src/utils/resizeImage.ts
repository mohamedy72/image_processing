import { Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs/promises'

async function resizeImage(
    filename: string,
    width: number,
    height: number,
    res?: Response,
): Promise<void> {
    try {
        const imgName = `${filename.replace(".jpg", "")}-${width}-${height}.jpg`
        const pathToFullImg = `${path.resolve('./')}/public/imgs/full/${filename}`;
        const pathToEditedImg = `${path.resolve('./')}/public/imgs/resized/${imgName}`;

        const editedImgsDir = await fs.readdir(`${path.resolve('./')}/public/imgs/resized`);

        //  If image already exists in 'resized folder' just send it without re-processing
        if (editedImgsDir.includes(imgName)) {
            res?.status(200).header("Content-Type", "image/jpg").sendFile(pathToEditedImg);
        } else {
            await sharp(pathToFullImg).resize(+width, +height).toFile(pathToEditedImg)
            res?.status(200).header("Content-Type", "image/jpg").sendFile(pathToEditedImg)
        }

    } catch (error) {
        res?.status(404).send(`An error occured: ${error}`);
    }
}

export default resizeImage;
