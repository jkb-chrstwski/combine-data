import { randomInt } from "mathjs";
import { combine } from "./index";

describe('common', () => {
    it('should combine', () => {
        for (let g = 0; g < 100; g++) {
            const x1 = randomInt(3, 7);
            const params = [];
            let count = 1;
            for (let i = 0; i < x1; i++) {
                const x2 = randomInt(3, 10);
                const param = [];
                const x3 = randomInt(15, 100);
                const x4 = randomInt(2, 10);

                for (let j = 0; j < x2; j++) {
                    param.push(x3 + j * x4);
                }
                params.push(param);
                count *= param.length;
            }
            const combinations = combine(params);
            expect(combinations.length).toEqual(count);
        }
    });
})