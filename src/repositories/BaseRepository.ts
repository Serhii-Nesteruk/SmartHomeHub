import { Pool } from 'pg';

export abstract class BaseRepository<T> {
    protected pool: Pool;
    protected table: string;

    protected constructor(pool: Pool, table: string) {
        this.pool = pool;
        this.table = table;
    }

    async findAll(): Promise<T[]> {
        const { rows } = await this.pool.query(`SELECT * FROM ${this.table}`);
        return rows;
    }

    async findById(id: number): Promise<T> {
        const { rows } = await this.pool.query(`SELECT * FROM ${this.table} WHERE id=$1`, [id]);
        return rows[0];
    }

    async delete(id: number): Promise<T> {
        const { rows } = await this.pool.query(`DELETE FROM ${this.table} WHERE id=$1}`, [id]);
        return rows[0];
    }
}