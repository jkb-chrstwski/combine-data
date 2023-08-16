"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = void 0;
function combine(params) {
    const combinations = [];
    const currentCombination = params.map(() => null);
    combineRecursively(0, currentCombination);
    function combineRecursively(paramsIndex, combination) {
        if (paramsIndex >= params.length) {
            combinations.push([...combination]);
            combination = params.map(() => null);
            return;
        }
        const paramsArray = params[paramsIndex];
        for (let i = 0; i < paramsArray.length; i++) {
            const param = paramsArray[i];
            combination[paramsIndex] = param;
            combineRecursively(paramsIndex + 1, combination);
        }
    }
    return combinations;
}
exports.combine = combine;
