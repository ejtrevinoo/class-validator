"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayMaxSize = exports.arrayMaxSize = exports.ARRAY_MAX_SIZE = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
exports.ARRAY_MAX_SIZE = 'arrayMaxSize';
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function arrayMaxSize(array, max) {
    return array instanceof Array && array.length <= max;
}
exports.arrayMaxSize = arrayMaxSize;
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function ArrayMaxSize(max, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.ARRAY_MAX_SIZE,
        constraints: [max],
        validator: {
            validate: (value, args) => arrayMaxSize(value, args.constraints[0]),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + '$property must contain not more than $constraint1 elements', validationOptions),
        },
    }, validationOptions);
}
exports.ArrayMaxSize = ArrayMaxSize;
//# sourceMappingURL=ArrayMaxSize.js.map