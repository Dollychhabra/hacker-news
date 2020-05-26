import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import template from './template';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'src/components')));

app.get('/', (req, res) => {
  const component = ReactDOMServer.renderToString(<App />);
  console.log(component);
  res.send(
    template({
      body: component,
      title: 'Hacker News App',
    }),
  );
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
