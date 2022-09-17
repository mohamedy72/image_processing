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
