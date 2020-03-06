const request = require('supertest');
const server = require('../api/server');

describe('authRouter.js', () => {

    describe('POST /api/auth/register', () => {
        // http status code
        it('should return 400 with no information passed', async () => {
            const res = await request(server).post('/api/auth/register');
            expect(res.status).toBe(400);
        })
        // format of the data (JSON)
        it('should return JSON', async () => {
            const res = await request(server).post('/api/auth/register');
            expect(res.type).toBe('application/json');
        })
    })

    describe('POST /api/auth/login', () => {
        // http status code
        it('should return 400 with no information passed', async () => {
            const res = await request(server).post('/api/auth/login');
            expect(res.status).toBe(400);
        })
        // format of the data (JSON)
        it('should return JSON', async () => {
            const res = await request(server).post('/api/auth/login');
            expect(res.type).toBe('application/json');
        })
    })

})