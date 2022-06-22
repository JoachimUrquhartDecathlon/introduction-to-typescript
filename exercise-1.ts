/**
 * Fix the types/errors in the code, add any missing types and then run:
 *      npx ts-node exercise-1.ts
 *
 * To test your changes and check the console for your answers
 */

/**
 * 1
 */
const isDone: boolean = 'true';
console.log(1, `isDone is ${isDone}`);

/**
 * 2
 */
const yourName = '';
function greeter(name) {
    return `Hello ${name}!`;
}
console.log(2, `${greeter(yourName)}`);

/**
 * 3
 */
let pi = '3.14159';
let tau = pi * 2;
console.log(3, `${tau} is ${pi} times two.`)

/**
 * 4
 */
const scores = [9.8, 9.9, 9.6, 7.2];

function averageScore(scores) {
    const averageScore = (scores.reduce((acc, score) => (acc + score)) / scores.length).toFixed(2);;
    return `The average score is ${averageScore}`;
}
console.log(4, averageScore(scores));

console.log('It compiled');