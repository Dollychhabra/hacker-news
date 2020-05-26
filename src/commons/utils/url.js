/**
 *
 * @param {Object} query - Object of query params
 * @returns {String}
 */
export const createQueryParamsUrl = (query = {}) => {
  const queryParams = [];

  const keys = Object.keys(query);

  for (let i = 0, l = keys.length; i < l; i += 1) {
    const value = `${query[keys[i]]}`;
    queryParams.push(`${keys[i]}=${value}`);
  }

  return queryParams.join('&');
};

/**
 *
 * @param {Object} options - Url options
 * @returns {String} - Url
 * @description - Creates a url with query params
 */
export const buildUrl = options => {
  if (typeof options === 'object') {
    const { pathName, query } = options;

    let url = pathName;

    if (typeof query === 'object') {
      url += `?${createQueryParamsUrl(query)}`;
    }
    return url;
  }

  return options;
};

export const extractDomainFromUrl = (url = '') => {
  const nonEmptyUrl = url || '';
  const urlParts = nonEmptyUrl
    .replace('http://', '')
    .replace('https://', '')
    .split(/[/?#]/);
  return urlParts[0];
};
