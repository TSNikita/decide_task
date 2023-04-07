/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color, opacity) {
    color = color.trim();
    // console.log(color);

    color = color[0] === "#" ? color.substr(1) : color;
    var bigint = parseInt(color, 16),
        h = [];
    if (color.length === 3) {
        h.push((bigint >> 4) & 255);
        h.push((bigint >> 2) & 255);
    } else {
        h.push((bigint >> 16) & 255);
        h.push((bigint >> 8) & 255);
    }
    h.push(bigint & 255);
    if (arguments.length === 2) {
        h.push(opacity);
        return "rgb(" + h.join(", ") + ")";
    } else {
        return "rgb(" + h.join(", ") + ")";
    }
}

module.exports = hexToRgb;
