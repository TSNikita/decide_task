/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */

const rle = (value) => {
    if (value === "") return "";
    if (value === "false") return "false";

    const splittedStr = value.split("");

    let resultStr = "";
    let currLetter = "";
    let currLetterCounter = 0;

    const appendCurrToResult = () => {
        resultStr =
            resultStr +
            (currLetterCounter > 1 ? currLetterCounter : "") +
            currLetter;
    };

    splittedStr.forEach((item) => {
        if (item === currLetter) {
            currLetterCounter++;
        } else {
            appendCurrToResult();

            currLetter = item;
            currLetterCounter = 1;
        }
    });

    appendCurrToResult();

    return resultStr;
};

module.exports = rle;
