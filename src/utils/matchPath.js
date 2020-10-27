import { pathToRegexp } from 'path-to-regexp';

export const matchPath = (pathname, options = {}) => {
  const { path } = options;

  return pathToRegexp(path, [], { end: false }).test(pathname);
};
