/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    const dateSplit = date.split(".").reverse();

    const dateInput = new Date(dateSplit);

    let dateDay = dateInput.setDate(dateInput.getDate() + 14);
    const resultDate = new Date(dateDay);
    return resultDate.toLocaleDateString();
}

module.exports = vacation;
