import {User, UserRepository} from "../repositories/UserRepository";
import { jwt } from '../config/authenticateToken';
import { JWT_SECRET } from "../config/config";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(username: string, email: string, password: string) : Promise<string | null | undefined> {
        if (await this.userRepository.exists(username)) {
            return null;
        }
        const user = this.userRepository.create(username, email, password);
        if (!user) {
            return null;
        }

        return jwt.sign(
            { username }, JWT_SECRET, { expiresIn: '1h' }
        );
    }

    async login(username: string, pass: string) : Promise<string | null | undefined> {
        if (!await this.userRepository.exists(username)) {
            return null;
        }

        if (!await this.userRepository.validateCredentials(username, pass)) {
            throw new Error('Invalid Credentials');
        }

        return jwt.sign(
            { username }, JWT_SECRET, { expiresIn: '1h' }
        );
    }
}
