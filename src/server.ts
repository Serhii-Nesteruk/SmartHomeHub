import { PORT } from './config/config';
import { createApp } from './app';

declare global {
    namespace Express {
        interface Request {
            user? : {
                username: string;
                [key: string]: any;
            }
        }
    }
}

async function main() {
    const app = await createApp();
    app.listen(PORT, () =>
        console.log(`Server is working on port ${PORT}`)
    );
}

main().catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
});
