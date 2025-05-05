// src/utils/sql-executer.ts
import path from 'path';
import { promises as fs } from 'fs';
import { createPool } from '../config/db';

const pool = createPool();

async function checkFileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath, fs.constants.R_OK);
        return true;
    } catch {
        return false;
    }
}

interface SqlExecutorOptions {
    baseDir?: string;
}

/**
 * Reads a SQL file and executes each query.
 * @param fileName - the SQL file path or name
 * @param options - optional settings (e.g. custom baseDir)
 */
export default async function sqlExecutor(
        fileName: string,
    options: SqlExecutorOptions = {}
): Promise<void> {
    const baseDir = options.baseDir ?? process.cwd();
    const filePath = path.isAbsolute(fileName)
        ? fileName
        : path.resolve(baseDir, fileName);

    if (!(await checkFileExists(filePath))) {
        throw new Error(`Failed to execute sql file: ${filePath}`);
    }

    const fileContent = await fs.readFile(filePath, 'utf8');
    const queries = fileContent
        .split(';')
        .map(q => q.trim())
        .filter(q => q.length > 0);

    for (const query of queries) {
        await pool.query(query);
    }
}
