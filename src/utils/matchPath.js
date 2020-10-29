import { pathToRegexp } from 'path-to-regexp';

export const matchPath = (pathname, options = {}) => {
  const { path, exact = false } = options;
  const keys = [];
  const match = pathname.match(pathToRegexp(path, keys, { end: exact }));

  if (!match) {
    return null;
  }

  const [url, ...values] = match;
  const isExact = pathname === url;

  if (exact && !isExact) {
    return null;
  }

  const params = keys.reduce((result, key, index) => {
    return { ...result, [key.name]: values[index] };
  }, {});

  return { path, url: path === '/' && url === '' ? '/' : url, isExact, params };
};
