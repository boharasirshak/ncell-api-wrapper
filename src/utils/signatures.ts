/**
 * Encodes a string to base64 format
 * @param {string} string The string to encode to base64
 * @returns base64 encoded string
 */
module.exports.base64Encode = function base64Encode(text: string) {
  return Buffer.from(text).toString("base64");
};

/**
 * Decoded the given base64 string to normal ascii string
 * @param {string} b64String The base64 data to decode
 * @returns ASCII string decoded from the base64 string
 */
module.exports.base64Decode = function base64Decode(b64String: string) {
  return Buffer.from(b64String, "base64").toString("ascii");
};