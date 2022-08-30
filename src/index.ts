import express, { Application, Request, Response } from 'express';
import loaders from './loader';
import mysql from 'mysql2'

const app: Application = express();

const startServer = async () => {
    await loaders({ expressApp: app });

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "test_schema"
    });
      
    con.connect(function(err) {
      if (err) throw err;
        console.log("Connected!");
    });

    app.listen(3307, () => {
        console.log(`Pearlite KL Server Up!`);
    }).on("error", (err: any) => {
        console.error(err);
    });
}

startServer();