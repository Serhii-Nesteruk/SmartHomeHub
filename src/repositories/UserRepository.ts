import { BaseRepository } from './BaseRepository';
import bcrypt from 'bcrypt';
import { createPool } from '../config/db';
import {Query} from "pg";

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export class UserRepository extends BaseRepository<User> {
    constructor() {
        super(createPool(), 'users');
    }

    async exists(username: string): Promise<boolean> {
        try {
            const query = `SELECT * FROM ${this.table} WHERE username = $1`;
            const { rowCount } = await this.pool.query(query, [username]);
            if (!rowCount) {
                return false;
            }
            return rowCount > 0;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async create(username: string, email: string, password: string): Promise<User | null> {
        if (!username || !email || !password) {
            return null;
        }

        try {
            const saltRounds = Number(process.env.SALT_ROUNDS || 10);
            const query = `INSERT INTO ${this.table} (username, email, password) VALUES ($1, $2, $3)`;
            const hash = bcrypt.hashSync(password, saltRounds);
            const { rows } = await this.pool.query(query, [username, email, hash]);
            return rows[0] ?? null;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async validateCredentials(username: string, pass: string) : Promise<boolean> {
        try {
            const query = `SELECT password FROM ${this.table} WHERE username = $1`;
            const { rows } = await this.pool.query(query, [username]);
            if (!rows.length) {
                return false;
            }
            return bcrypt.compare(pass, rows[0].password);
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}
