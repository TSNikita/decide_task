/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    if (list[0].gender === "Female" && list.length === 1) return undefined;

    for (let i = 1; i < list.length; i++) {
        if (list[i].gender === "Male" && list.length > 1) {
            let maxIndex = list.reduce(
                (acum, curr, i) => (list[acum].age > curr.age ? acum : i),
                0
            );
            return maxIndex + 1;
        } else {
            return 1;
        }
    }
}

module.exports = census;
