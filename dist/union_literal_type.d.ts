type NumString = number | string;
type CombineExpectedResultType = 'expect-num' | 'expect-str';
declare function combineValues(input1: NumString, input2: NumString, expectedResultType: CombineExpectedResultType): string | number;
declare const combineNumbers: string | number;
declare const combineStrNumbers: string | number;
declare const combineWords: string | number;
