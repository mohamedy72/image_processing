import { Request, Response } from 'express';

export default function handleHome(req: Request, res: Response): void {
  res.status(200).send('App is working - Image');
}
