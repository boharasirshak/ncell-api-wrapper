/**
 * Checks if the passes jsonString is valid JSON or not
 * @param {string} jsonString The json string to test
 * @returns true it valid jsonString else false
 */
export var isValidJson = (jsonString: string): boolean => {
  try {
    var obj = JSON.parse(jsonString);
    if (obj && typeof obj === "object") {
      return true;
    }
  } catch (e) {}
  return false;
};

/**
 * Checks if the passed string is numberic or not
 * @param {string} str The string you want to test
 * @returns true if str is numeric otherwise false
 */
export var isNumeric = (str: string): boolean => {
  return !isNaN(parseInt(str)) && !isNaN(parseFloat(str));
}
