import express from 'express';
import handleHome from '../controllers/appController';

const mainRouter = express.Router()

mainRouter.route('/').get(handleHome)

export default mainRouter