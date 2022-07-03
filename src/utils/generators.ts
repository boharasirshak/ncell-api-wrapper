/**
 * Generates random device id / MAC address
 * @returns device id
 */
export var genDeviceId = (): string => {
  return "XXXXXXXXXXXX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
};

/**
 * Get current ISO timestamp in formatted way
 * @returns current time in [YYYY-mm-DD HH:MM:SS] format
 */
export var currentTime = (): string => {
  return new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");
};

/**
 * Generates a unique request id based on current unix timestamp
 * @returns request id
 */
export var genReqId = (): string => {
  return Date.now() + "NCELL" + genRandomNums(1111, 9999);
};

/**
 * Generates a unique transaction id based on current timestamp
 * @returns transaction id
 */
export var genTransId = (): string => {
  return `1${Date.now() / 1000}`.replace(".", "");
};

/**
 * Generates a random number between min & max value
 * @param {integer} min Minimum value
 * @param {integer} max Maximum value
 * @returns number
 */
function genRandomNums(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
