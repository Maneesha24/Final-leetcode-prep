/**
 * Implement the Solution class:
 * Solution() Initializes the object of the system.
 * String encode(String longUrl) Returns a tiny URL for the given longUrl.
 * String decode(String shortUrl) Returns the original long URL for the given
 * shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.
 * @param {string} longUrl
 * @return {string}
 */

 let urlObj = {};
 var encode = function(longUrl) {
    let key = `http://tinyurl.com/${Date.now().toString()}`;
    urlObj[key] = longUrl;
    return key;
};

var decode = function(shortUrl) {
    return urlObj[shortUrl];
};

module.exports = {decode, encode};