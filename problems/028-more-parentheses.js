/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    if (value === "") return false;

    const char = value.split("");
    let stack = [];
    let open = ["{", "(", "<"];
    let close = ["}", ")", ">"];
    let openIndex;
    let closeIndex;

    for (let i = 0; i < char.length; i++) {
        openIndex = open.indexOf(char[i]);
        if (openIndex !== -1) {
            stack.push(openIndex);
            continue;
        }
        closeIndex = close.indexOf(char[i]);
        if (closeIndex !== -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) return false;
        }
    }
    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }
}

module.exports = parentheses;
