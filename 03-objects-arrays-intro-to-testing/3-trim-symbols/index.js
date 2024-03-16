/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

  if (size === undefined) {
    return string;
  }

  let newString = '';
  let counter = 0;
  let prevValue;

  for (let char of string) {

    if (prevValue && prevValue === char && counter === size) {
      continue;
    }

    if (prevValue && prevValue !== char) {
      counter = 0;
    }

    if (counter < size) {
      newString += char;
      counter++;
    }

    prevValue = char;
  }

  return newString;
}
