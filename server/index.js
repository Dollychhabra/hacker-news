import express from 'express';
import path from 'path';

import template from './template';
import serverSideRendering from './server';
import { INTERNAL_SERVER_ERROR } from './constants';

import initialState from './initialState';
import ServiceUtil from '../src/commons/utils/ServiceUtil';
import { buildUrl } from '../src/commons/utils/url';
import { HOME_PAGE_TAG } from '../src/commons/constants';
import apis from '../src/commons/constants/api.services';

const app = express();

// hide powered by express
app.disable('x-powered-by');

// Resolves static resources path
app.use('/static', express.static(path.resolve(__dirname, '../build/static')));

app.use('/images', express.static(path.resolve(__dirname, '../build/images')));

app.use(
  '/manifest.json',
  express.static(path.resolve(__dirname, '../build/manifest.json')),
);

app.use(
  '/favicon.ico',
  express.static(path.resolve(__dirname, '../build/favicon.ico')),
);

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SSR running on port ${PORT}`);
});

// server renders home page
app.get('/', (req, res) => {
  const params = req.query || {};
  const url = buildUrl({
    pathName: apis.search,
    query: {
      tags: HOME_PAGE_TAG,
      ...params,
    },
  });

  ServiceUtil.fetch(url).then(
    (response) => {
      initialState.homePageData.data = response;

      const { preloadedState, content } = serverSideRendering(initialState);

      const templateHtml = template(content, preloadedState);

      return res.send(templateHtml);
    },
    (err) => {
      return res.status(INTERNAL_SERVER_ERROR).send(err);
    },
  );
});
