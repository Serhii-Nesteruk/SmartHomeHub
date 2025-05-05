import express, {Response, Request, NextFunction, Router} from 'express';

export default function mainRouter() : Router {
    const router = Router();

    router.get(
        '/',
        async (req: Request, res: Response, next: NextFunction) : Promise<void> => {

        }
    );

    return router;
}