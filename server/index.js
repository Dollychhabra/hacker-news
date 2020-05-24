import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const app = express();
console.log('inside server.js');

app.use('/static', express.static(path.resolve(__dirname, 'src/components')));

app.get('/', (req, res) => {
  const component = ReactDOMServer.renderToString(<App />);
  res.send(component);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
