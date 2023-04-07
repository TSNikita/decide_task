/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    let count = 0;

    if (value === "") return false;

    for (let i in value) {
        if (value[i] === "(") {
            count++;
        } else if (value[i] === ")") {
            count--;
        }
        if (count < 0) return false;
    }

    const result = count > 0 ? false : true;
    return result;
}

module.exports = parentheses;
