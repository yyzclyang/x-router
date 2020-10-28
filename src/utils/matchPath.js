import { pathToRegexp } from 'path-to-regexp';

export const matchPath = (pathname, options = {}) => {
  const { path, exact = false } = options;
  let keys = [];
  const match = pathname.match(pathToRegexp(path, keys, { end: exact }));
  if (match) {
    const [, ...values] = match;
    const params = keys.reduce((result, key, index) => {
      return { ...result, [key.name]: values[index] };
    }, {});

    return [true, params];
  } else {
    return [false, {}];
  }
};
