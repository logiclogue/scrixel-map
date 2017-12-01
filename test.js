const expect = require("chai").expect;
const scrixelMap = require(".");
const fs = require("fs");

describe("scrixelMap()", () => {
    context("level.png", () => {
        it("returns top right pixel to be blue", done => {
            scrixelMap("./level.png").then(imageObj => {
                console.log(JSON.stringify(imageObj));
                expect(imageObj[0][0]).to.equal(0x0000FFFF);

                done();
            }).catch(done);
        });
    });
});
