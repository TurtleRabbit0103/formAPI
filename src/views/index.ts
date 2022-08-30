import express from 'express';

// project imports

export default async ({ app }: { app: express.Application }) => {
  app.get('/', (request: any, response: any) => {
    response.render('app', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com',
    });
  });

  app.post('/', (request: any, response: any) => {
    response.render('addUser.ejs', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com',
    });
  });

  return app;
};
