import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path'

// project imports
import routes from '@bonk-rest/index'
import config from '@bonk-config/index';


// project imports

export default async ({ app }: { app: express.Application }) => {
    
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

  
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json({ limit: '50mb' }));
    app.set('view engine', 'ejs');
    app.set('views', path.join(process.cwd(), '/src', 'views'));

    // static files
    app.use(express.static(process.cwd() + '/src/public/'));

    // For /api prefix
    app.use(config.api.prefix, routes());
    // app.use(routes());

    /// error handlers
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err.name === "UnauthorizedError") {
            res.status(401).send("invalid token...");
        } else {
            next(err);
        }
    });

    // Return the express app
    return app;
}