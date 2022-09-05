import express from 'express';
import mainRouter from './routes/appRoute';

const app = express();

app.use('/home', mainRouter)

export function sumTwo(num1: number, num2: number): number {
  return num1 + num2;
}


export default app