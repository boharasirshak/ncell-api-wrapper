import { isNumeric } from './validators';

/**
 * Formats the number to match the ncell api format
 * @param {string} number The number to be formatted
 * @returns formatted number
 */
export var formatNumber = (num: string): string => {
  num = num.replace("+", "").replace("-", "").replace(" ", "");
  if (num.startsWith("977")) {
    num = num.replace("977", "");
  }
  if (!isNumeric(num)) {
    throw new Error(`Argument 'number' is not a valid number.`);
  }
  return num;
};
