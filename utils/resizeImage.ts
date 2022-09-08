import { NextFunction, Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';

function resizeImage(filename: string, width: number, height: number) {
    return async function (req: Request, res: Response, next: NextFunction) {

        try {
            const pathToFullImg = `${path.resolve('./')}/public/imgs/full/${filename}`;
            const pathToEditedImg = `${path.resolve('./')}/public/imgs/resized/new-${filename}`;
            if (!filename && !width && !height) {
                res.status(404).send("Please provide valid values to the URL")
                next()
            }
            await sharp(pathToFullImg).resize(+width, +height).toFile(pathToEditedImg)
            res.status(200).sendFile(pathToEditedImg)

        } catch (error) {
            res.status(404).send(`Error occured: ${error}`)
        }
    }
}

export default resizeImage