import express, { NextFunction, Request, Response } from 'express';

// project imports

export default async ({ app }: { app: express.Application }) => {
    
    app.get('/index', (request, response) => {
        response.render('app', {
          subject: 'EJS template engine',
          name: 'our template',
          link: 'https://google.com'
        });
      });

      app.post('/index', (request, response) => {
        response.render('addUser.ejs', {
          subject: 'EJS template engine',
          name: 'our template',
          link: 'https://google.com'
        });
      });
    return app;
}