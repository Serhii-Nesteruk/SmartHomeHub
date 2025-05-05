import express, {Application} from "express";
import path from "path";

export function middlewaresConfiguration(app: Application): void {
    const pathToPublic = path.join(__dirname, "..", "..", "public");

    app.use(express.static(pathToPublic));
    app.use(express.json());
}