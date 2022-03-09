/**
 * @author maneeshavenigalla
 * Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image. 
 * To flip an image horizontally means that each row of the image is reversed.
 * To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    image.map(row => row.reverse());

    for(let i = 0; i < image.length; i++) {
        for(let j = 0; j < image[0].length; j++) {
            if(image[i][j] == 0) {
                image[i][j] = 1;
            } else {
                image[i][j] = 0;
            }
        }
    }

    return image;
};

module.exports = flipAndInvertImage;