import express from 'express';

import processImage from './routes/processingRoute';
import mainRouter from './routes/serverRoute';

const app = express();

app.use('/', mainRouter)
app.use('/api/images', processImage)



export default app