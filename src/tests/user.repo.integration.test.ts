import dotenv from 'dotenv';
import path from 'path';
const envPath = path.resolve(__dirname, '../../.env.test');
dotenv.config({ path: envPath });

import request from 'supertest';
import { UserRepository } from '../repositories/UserRepository';
import { createPool } from '../config/db';
import { createApp } from "../app";
import {Application} from "express";

describe('User API (integration)', () => {
    const pool = createPool();
    let app: Application;
    const repo = new UserRepository();

    beforeAll(async () => {
        app = await createApp();
        await pool.query('TRUNCATE TABLE users CASCADE');
    });
    afterAll(async () => {
        await pool.end();
    });
/* TODO:
    describe('POST /login', async () => {

    });*/

    describe('POST /register', () => {
        beforeAll(async () => {
            await request(app)
                .post('/register')
                .send({username: 'test', email: 'test@gmail.com', pass: '123456'})
                .expect(201);
        });

        it('Create new user -> 201 + JWT token', async () => {
            const res = await request(app)
                .post('/register')
                .send({username: 'test2', email: 'test2@gmail.com', pass: '123456'})
                .expect(201);

            expect(res.body).toHaveProperty('token');

            const exists = await repo.exists('test2');
            expect(exists).toBe(true);
        });

        it('Returns error for bad request', async() => {
            await request(app)
                .post('/register')
                .send({username: 'test', email: 'test@gmail.com'})
                .expect(401);
        });

        it('Returns error if request body is empty', async() => {
            await request(app)
                .post('/register')
                .send({})
                .expect(401);
        });

        it('Returns error fields in request body is empty', async() => {
            await request(app)
                .post('/register')
                .send({username:'', email:'', pass:''})
                .expect(401);
        })

        it('Returns error when user already exists', async() => {
            await request(app)
                .post('/register')
                .send({username: 'test', email: 'test@gmail.com', pass: '123456'})
                .expect(401);
        })
    });

});