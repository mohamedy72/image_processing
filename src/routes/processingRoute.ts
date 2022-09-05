import express from 'express';


const processImage = express.Router()


processImage.route("/").get(processImage)

export default processImage