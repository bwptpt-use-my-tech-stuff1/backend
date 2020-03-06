const request = require('supertest');
const server = require('../api/server');

describe('rentalsRouter.js', () => {

    describe('GET /api/protected/rentals', () => {
        // http status code
        it('should return 403 with no information passed', async () => {
            const res = await request(server).get('/api/protected/rentals');
            expect(res.status).toBe(403);
        })
        // format of the data (JSON)
        it('should return JSON', async () => {
            const res = await request(server).get('/api/protected/rentals');
            expect(res.type).toBe('application/json');
        })
    })

    describe('POST /api/proteted/rentals', () => {
        it('should return 403 with no information passed', async () => {
            const res = await request(server).post('/api/protected/rentals');
            expect(res.status).toBe(403);
        })
        // format of the data (JSON)
        it('should return JSON', async () => {
            const res = await request(server).post('/api/protected/rentals');
            expect(res.type).toBe('application/json');
        })
    })

})