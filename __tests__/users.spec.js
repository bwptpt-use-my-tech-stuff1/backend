const request = require('supertest');
const server = require('../api/server');

describe('protectedRouter.js', () => {

    describe('GET /api/protected/users', () => {
        // http status code
        it('should return 403 with no information passed', async () => {
            const res = await request(server).get('/api/protected/');
            expect(res.status).toBe(403);
        })
        // format of the data (JSON)
        it('should return JSON', async () => {
            const res = await request(server).get('/api/protected');
            expect(res.type).toBe('application/json');
        })
    })

})