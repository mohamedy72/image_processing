import { NextFunction, Request, Response } from 'express';
import resizeImage from '../../utils/resizeImage';




async function processImage(req: Request, res: Response, next: NextFunction) {
    const { filename, width, height } = req.query;
    if (!filename || !width || !height) {
        return res.status(404).send("Please enter a valid values")
    }
    resizeImage(filename as string, +width, +height)
    next()
}

export default processImage;
