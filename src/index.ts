import express, { Application } from 'express';

// project imports
import config from '@bonk-config/index';
import loaders from '@bonk-loaders/index';
import logger from '@bonk-core/logger';

const app: Application = express();

const startServer = async () => {
    await loaders({ expressApp: app });

    app.listen(config.system.port, () => {
        logger.info(`Your server is ready on ${config.system.url}:${config.system.port}`);
    }).on("error", (err: any) => {
        logger.error(err);
    });
}

startServer();
