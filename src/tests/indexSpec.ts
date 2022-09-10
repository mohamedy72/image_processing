/**
 * Imports
 */
import request from 'supertest';
import app from '../app';

/**
 * @description Testing the server
 */
describe('Test our web server', () => {
  it('returns a status code of 200 upon doing GET request', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});

/**
 * @description Testing img processing endpoint
 */
describe('Test our image processing endpoint', () => {
  it('returns a status code of 404 if no queries passed', async () => {
    const res = await request(app).get('/api/images');
    expect(res.status).not.toBe(200);
  });
});

