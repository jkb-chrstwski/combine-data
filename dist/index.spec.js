"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mathjs_1 = require("mathjs");
const index_1 = require("./index");
describe('common', () => {
    it('should combine', () => {
        for (let g = 0; g < 100; g++) {
            const x1 = (0, mathjs_1.randomInt)(3, 7);
            const params = [];
            let count = 1;
            for (let i = 0; i < x1; i++) {
                const x2 = (0, mathjs_1.randomInt)(3, 10);
                const param = [];
                const x3 = (0, mathjs_1.randomInt)(15, 100);
                const x4 = (0, mathjs_1.randomInt)(2, 10);
                for (let j = 0; j < x2; j++) {
                    param.push(x3 + j * x4);
                }
                params.push(param);
                count *= param.length;
            }
            const combinations = (0, index_1.combine)(params);
            expect(combinations.length).toEqual(count);
        }
    });
});
