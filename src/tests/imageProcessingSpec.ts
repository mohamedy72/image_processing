import request from 'supertest';
import app from '../app';
import resizeImage from '../utils/resizeImage';
import fs from 'fs/promises';
import path from 'path';

/**
 * @description Testing img processing endpoint
 */
describe('Test our image processing endpoint', () => {
  it('returns a status code of 404 if no queries passed', async () => {
    const res = await request(app).get('/api/images');
    expect(res.status).not.toBe(200);
  });

  it('returns image if we passed 3 query strings', async () => {
    const res = await request(app).get(
      '/api/images?filename=fjord.jpg&width=200&height=200'
    );
    expect(res.headers['content-type']).toEqual('image/jpg');
  });
});

describe('Testing the resizing functionality', () => {
  it('generates a new resized image and file is wrote to resized folder', async () => {
    await resizeImage('icelandwaterfall.jpg', 200, 200);
    const pathToEditedImg = `${path.resolve(
      './'
    )}/public/imgs/resized/icelandwaterfall-200-200.jpg`;

    let errHasOcurred: string | null;

    try {
      await fs.access(pathToEditedImg);
      errHasOcurred = null;
    } catch (err) {
      errHasOcurred = err;
    }

    expect(errHasOcurred).toBeNull();
  });
});
