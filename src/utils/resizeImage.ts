import { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs/promises'

async function resizeImage(
    filename: string,
    width: number,
    height: number,
    req: Request,
    res: Response
) {
    try {
        const pathToFullImg = `${path.resolve('./')}/public/imgs/full/${filename}`;
        const pathToEditedImg = `${path.resolve(
            './'
        )}/public/imgs/resized/new-${filename}`;
        const editedImgsDir = await fs.readdir(`${path.resolve('./')}/public/imgs/resized`);
        const editedImgMetadata = await sharp(pathToEditedImg).metadata()

        if (!editedImgsDir.includes(`new-${filename}`)) {
            await sharp(pathToFullImg).resize(+width, +height).toFile(pathToEditedImg)
            res.status(200).sendFile(pathToEditedImg)
        }
        if (pathToEditedImg && editedImgMetadata.width === width && editedImgMetadata.height === height) {
            res.status(200).sendFile(pathToEditedImg);
        } else {
            await sharp(pathToFullImg).resize(+width, +height).toFile(pathToEditedImg)
        }

    } catch (error) {
        res.status(404).send(`An error occured: ${error}`);
    }
}

export default resizeImage;
