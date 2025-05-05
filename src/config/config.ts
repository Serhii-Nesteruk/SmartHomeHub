import dotenv from 'dotenv';
dotenv.config();

export const PORT                       = Number(process.env.PORT || 5000);
export const DB_USER                      = process.env.DB_USER!;
export const DB_PASS                      = process.env.DB_PASS!;
export const JWT_SECRET                  = process.env.JWT_SECRET!;