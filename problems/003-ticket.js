/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const num = number.split("");
    const num1 = num.slice(0, 3);
    const num2 = num.slice(3, 6);

    function Total(sumNumber) {
        const totalSumm = sumNumber.map(Number).reduce((a, b) => a + b);
        return totalSumm;
    }

    const totalSum1 = Total(num1);
    const totalSum2 = Total(num2);

    const result = totalSum1 === totalSum2 ? true : false;
    return result;
}

module.exports = checkTicket;
