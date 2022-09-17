import request from 'supertest';
import app from '../app';
import resizeImage from '../utils/resizeImage';

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
  it('throws an error when user enters non-jpg file', async () => {
    let err = 'We only process JPG Files.';
    try {
      await resizeImage('fjord.png', 200, 200);
    } catch (error) {
      err = error.message;
    }
    expect(err).toBe('We only process JPG Files.');
  });
});
