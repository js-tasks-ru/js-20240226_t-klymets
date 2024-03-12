/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
const SORTING_ORDER = {
  asc: 'asc',
  desc: 'desc'
};
export function sortStrings(arr, param = SORTING_ORDER.asc) {
  const sortingOrder = param === SORTING_ORDER.asc ? 1 : -1;
  return [...arr].sort((a, b) => sortingOrder * a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }));
}
