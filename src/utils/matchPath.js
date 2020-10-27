import { pathToRegexp } from 'path-to-regexp';

export const matchPath = (pathname, options = {}) => {
  const { path, exact = false } = options;

  return pathToRegexp(path, [], { end: exact }).test(pathname);
};
