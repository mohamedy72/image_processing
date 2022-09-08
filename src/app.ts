import express from 'express';
import path from 'path';

import processRouter from './routes/processingRoute';
import mainRouter from './routes/serverRoute';

const app = express();

app.use(express.static(path.resolve('./public/imgs')))

app.use('/', mainRouter);
app.use('/api/images', processRouter);

export default app;
