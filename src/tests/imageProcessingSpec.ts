import request from 'supertest';
import app from '../app';


/**
 * @description Testing img processing endpoint
 */
describe('Test our image processing endpoint', () => {
    it('returns a status code of 404 if no queries passed', async () => {
        const res = await request(app).get('/api/images');
        expect(res.status).not.toBe(200);
    });

    it("returns image if we passed 3 query strings", async () => {
        const res = await request(app).get("/api/images?filename=fjord.jpg&width=200&height=200");
        expect(res.headers['content-type']).toEqual("image/jpg")
    })
});