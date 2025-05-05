import dotenv from 'dotenv';
import path from 'path';
const envPath = path.resolve(__dirname, '../../.env.test');
dotenv.config({ path: envPath });

import { UserRepository } from '../repositories/UserRepository';
import { createPool } from '../config/db';

describe('User Repository', () => {
    const pool = createPool();
    const repo = new UserRepository();

    beforeAll(async () => {
        await pool.query('TRUNCATE TABLE users CASCADE');
    });
    afterAll(async () => {
        await pool.end();
    });

    it('Creates a new user', async () => {
        const user = await repo.create('test', 'test@gmail.com', '123456');

        expect(user).toBeDefined();

        const exists = await repo.exists('test');
        expect(exists).toBe(true);
    });

    it('Doesnt create user with error', async () => {
        const user = await repo.create('', '', '');
        expect(user).toBeNull();
    });

    it('Doesnt create user with same username and email', async () => {
        const user = await repo.create('test', 'test@gmail.com', '123456');
        expect(user).toBeNull();
    })

    it('Bad credentials', async() => {
        const status = await repo.validateCredentials('test', 'bad_password');
        expect(status).toBe(false);
    });

    it('Correct credentials', async() => {
        const status = await repo.validateCredentials('test', '123456');
        expect(status).toBe(true);
    });
})