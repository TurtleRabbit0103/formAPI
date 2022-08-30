import dotenv from 'dotenv';

dotenv.config();

export default {
    system: {
        name: process.env.APP_NAME,
        env: process.env.APP_ENV,
        port: process.env.APP_PORT,
        key: process.env.APP_KEY,
        url: process.env.APP_URL,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        algorithm: process.env.JWT_ALGORITHM,
    },
    logging: {
        channel: process.env.LOG_CHANNEL,
        level: process.env.LOG_LEVEL,
    },
    schema: {
        dialect: process.env.DB_CONNECTION,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    auth: {
        secret: process.env.APP_SECRET,
        expiresIn: process.env.SESSION_DURATION,
    },
    mail: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_ENCRYPTION,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
        from_address: process.env.MAIL_FROM_ADDRESS,
        from_name: process.env.MAIL_FROM_NAME,
    },
    socket: {
        port: process.env.SOCKET_PORT,
    },
    api: {
        prefix: '/bonk-rest',
    }
};
