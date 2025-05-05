import {Router, Request, Response, NextFunction} from "express";
import {UserService} from "../services/UserService";

export default function authRouter() {
    const router = Router();
    const userService = new UserService();

    router.post('/login', async(req: Request, res: Response) => {
        const { username, pass } = req.body;

        if (!username || !pass) {
            return void res.status(401).json({error: 'Username and Password is required'});
        }

        const token = await userService.login(username, pass);
        if (!token) {
            return void res.status(401).json({error: 'Failed to login'});
        }

        res.cookie('token', token, { httpOnly: true });
        res.status(201).json({message: 'Login successful', token: token});
    });

    router.post('/register', async(req: Request, res: Response) => {
        if (!req.body) {
            return void res.status(401).json({error: 'Failed to register'});
        }

        const { username, email, pass } = req.body;

        if (!username || !pass || !email) {
            return void res.status(401).json({error: 'Username, Email and Password is required'});
        }

        const token = await userService.register(username, email, pass);

        if (!token) {
            return void res.status(401).json({error: 'Failed to register user'});
        }

        res.cookie('token', token, { httpOnly: true });
        res.status(201).json({message: 'Registration successful', token: token});
    });

    return router;
}