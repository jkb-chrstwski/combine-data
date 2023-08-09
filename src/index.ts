export function combine(params: any[][]): any[][] {
    const combinations: any[] = [];
    const currentCombination = params.map(() => null);
    combineRecursively(0, currentCombination);
    function combineRecursively(paramsIndex: number, combination: any[]) {
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