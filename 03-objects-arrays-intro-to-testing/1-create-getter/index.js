/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathToValue = path.split('.');
  return function (obj) {
    let value = obj;
    for (let key of pathToValue) {
      if (value && value.hasOwnProperty(key)) {
        value = value[key];
      } else {
        return;
      }
    }
    return value;
  };
}
