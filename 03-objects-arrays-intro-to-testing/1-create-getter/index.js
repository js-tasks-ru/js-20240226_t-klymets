/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathToValue = path.split('.');
  const getValue = (obj, i = 0) => {
    if (obj && typeof obj === 'object' && i < pathToValue.length) {
      return getValue(obj[pathToValue[i]], ++i);
    }
    return obj;
  };
  return getValue;
}
