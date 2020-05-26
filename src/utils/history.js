// eslint-disable-next-line import/no-mutable-exports
let history;

if (typeof document !== 'undefined') {
  // eslint-disable-next-line global-require
  const { createBrowserHistory } = require('history');

  history = createBrowserHistory();
}

export default history;
