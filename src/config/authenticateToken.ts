import jwt, {JwtPayload} from 'jsonwebtoken';
import { JWT_SECRET } from './config';
import {Request, Response, NextFunction} from 'express';

function getTokenFromRequest(req: Request): string | null | undefined {
    let token = req.cookies?.token as string ?? undefined;

    const authHeader = req.headers['authorization'];
    if (typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }

    return token;
}

export const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void =>  {
    const token = getTokenFromRequest(req);
    if (!token) {
        res.status(401).json({error: 'Token not found'});
        return;
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(403).json({error: err});
            return;
        }
        req.user = (decoded as JwtPayload & {username: string});
        next();
    });
}

export { jwt };