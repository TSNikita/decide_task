/**
 * Одной банки с краской хватает на покраску 16 квадратных метров стен офиса.
 *
 * Напишите функцию repair(width, length, height) вычисляющую минимальное количество банок краски,
 * необходимых для покраски стен в офисе. Размерами дверей и окон можно пренебречь.
 *
 * Пример:
 *
 * repair(1, 1, 3) === 1
 * repair(4, 4, 3) === 3
 * repair(4, 4, 4) === 4
 *
 * @param {number} width – ширина офиса
 * @param {number} length - длина офиса
 * @param {number} height - высота стен в офисе
 * @returns {number}
 */
function repair(width, length, height) {
    const square = width * length * height;
    const window = 48;
    const division = 16;

    if (square < 16) return 1;
    if (square >= 160) {
        const result = (square - window) / division;
        return result;
    } else {
        const result = square / division;
        return result;
    }
}

module.exports = repair;
