/**
 * Fix the types and add any missing types then run:
 *      npx ts-node exercise-2.ts
 *
 * Instructions:
 * - Make sure none of the types use "any"
 * - Fix any resulting errors
 *
 * To test your changes, if you see "It compiled" in the terminal it worked
 */

/**
 * 1
 */
function isFruit(item: any): any {
    const knownFruit = ['apple', 'orange', 'kiwi', 'banana'];
    if (typeof item === 'number') {
        console.log(`${item} is not a known fruit`);
        return false;
    } else if (typeof item === 'string') {
        console.log(`${item} is a known fruit`);
        return knownFruit.indexOf(item) !== -1;
    }
    return false;
}
console.log(1);
isFruit('apple');
isFruit(2022);
isFruit('March');

/**
 * 2
 */
function convertStringToNumber(inputString: any): any {
    if (typeof inputString === 'number') {
        console.log(`${inputString} already is a number`);
        return inputString;
    }
    if (typeof inputString === 'string') {
        const toNumber = Number(inputString);
        if (!isNaN(toNumber)) {
            console.log(`${inputString} as a number: ${toNumber}`);
            return toNumber;
        }
    }
    console.log(`Couldn't convert ${inputString} to number`);
}

console.log(2);
convertStringToNumber('Hello world');
convertStringToNumber('Two');
convertStringToNumber(5);
convertStringToNumber('2');


/**
 * 3
 */
const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten(array: any) {
    const flattened = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            flattened.push(...element);
        } else {
            flattened.push(element);
        }
    }

    return flattened;
}
const flattenedNumbers = flatten(numbers);
console.log(`Flattened numbers: ${flattenedNumbers}`);

console.log('It compiled');
