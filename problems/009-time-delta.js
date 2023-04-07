/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    const timeOne = x
        .split(":")
        .reverse()
        .reduce((acum, p, i) => {
            return acum + p * Math.pow(60, i);
        }, 0);

    const timeTwo = y
        .split(":")
        .reverse()
        .reduce((acum, p, i) => {
            return acum + p * Math.pow(60, i);
        }, 0);

    const timeDifference = timeTwo - timeOne;
    return timeDifference;
}

module.exports = getTimeDelta;
