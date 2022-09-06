import { NextFunction, Request, Response } from 'express';
import sharp from 'sharp';


const projectDir = process.cwd()
console.log(projectDir);

async function processImage(req: Request, res: Response, next: NextFunction) {
    const { filename, width, height } = req.query
    const inputDir = `${projectDir}/public/imgs/full/${filename}`
    const outputDir = `${projectDir}/public/imgs/thumb/new-${filename}`
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;

    try {
        // I need 3 queries -> filename (must end in jpg) - width - height
        await sharp(inputDir).
            resize({ width: +width, height: +height }).toFormat("jpeg", { mozjpeg: true }).toFile(outputDir)

        res.status(200).send("image is generated")
        next()

    } catch (err) {
        next(err)
    }
}

export default processImage