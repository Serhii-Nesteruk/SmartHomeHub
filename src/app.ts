import express, { Application } from 'express';
import path from 'path';
import sqlExecutor from './utils/sql-exec';
import { middlewaresConfiguration } from './config/midlewares';

export async function createApp(): Promise<Application> {
    const app = express();

    await sqlExecutor('schema.sql', { baseDir: path.join(__dirname, '..') });

    middlewaresConfiguration(app);

    const mainRouter = (await import('./routes/main')).default();
    app.use(mainRouter);

    const authRouter = (await import('./routes/auth')).default();
    app.use(authRouter);

    return app;
}
