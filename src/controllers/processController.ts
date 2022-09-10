import { Request, Response } from 'express';
import resizeImage from '../utils/resizeImage';

function processImage(req: Request, res: Response) {
    const { filename, width, height } = req.query;
    if (!filename || !width || !height) {
        res
            .status(404)
            .send(
                `<h1 class="Error">Missing URL queries, Please check if you passed a Filename - Width and height!</h1>`
            );
    } else {
        resizeImage(filename as string, +width, +height, req, res);
    }
}

export default processImage;
