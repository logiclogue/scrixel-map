const Jimp = require("jimp");
const _ = require("lodash");

// String -> [[Int]]
function scrixelMap(filePath) {
    return new Promise((resolve, reject) => {
        Jimp.read(filePath).then(image => {
            const value = _
                .range(image.bitmap.width)
                .map(x => _.range(image.bitmap.height))
                .map((column, x) => column.map(y => image.getPixelColor(x, y)));

            resolve(value);
        }).catch(reject);
    });
}

module.exports = scrixelMap;
