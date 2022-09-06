import express from 'express';
import processImage from '../controllers/processController';


const processRouter = express.Router()


processRouter.route("/").get(processImage)

export default processRouter