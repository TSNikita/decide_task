/**
 * Для того чтобы выходить в Интернет, каждому компьютеру присваивается так называемый IP-адрес.
 * Он состоит из четырех целых чисел в диапазоне от 0 до 255, разделенных точками.
 * В следующих трех строках показаны три правильных IP-адреса:
 *  127.0.0.0
 *  192.168.0.01
 *  255.000.255.0255
 *
 * Напишите функцию isIpValid(address) опредяляющую является ли переданная строка правильным IP-адресом.
 *
 * Пример:
 *
 * isIpValid('127.0.0.1') === true
 * isIpValid('127.0.0.0255') === true
 * isIpValid('127.0.256.0255') === false
 * isIpValid('Hello world') === false
 *
 * @param {string} address
 * @returns {boolean}
 */
function isIpValid(address) {
    const splitAddress = address.split(".");

    const result = [];

    for (let i = 0; i < splitAddress.length; i++) {
        const num = Math.trunc(splitAddress[i]);
        if (splitAddress.length > 4) result.push(false);
        if (num < 0) result.push(false);
        if (num <= 255) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    const res = result.includes(false);
    return !res;
}

module.exports = isIpValid;
