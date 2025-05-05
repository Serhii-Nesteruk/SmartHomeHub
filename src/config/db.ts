import { Pool } from 'pg';

export const createPool = () =>
    new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),
    });
