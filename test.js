const expect = require("chai").expect;
const scrixelMap = require(".");
const fs = require("fs");

describe("scrixelMap()", () => {
    context("level.png", () => {
        const levelPromise = scrixelMap("./level.png");

        it("returns top right pixel to be blue", done => {
            levelPromise.then(imageObj => {
                expect(imageObj[0][0]).to.equal(0x0000FFFF);

                done();
            }).catch(done);
        });
    });
});
