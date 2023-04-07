/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
  const str = value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "").split(" ");

  const anagram1 = [];
  const anagram2 = [];

  for (let i = 0; i < str.length; i++) {
    const sortStr = str[i].toLocaleLowerCase().split("").sort().join("");
    for (let j = i + 1; j < str.length; j++) {
      if (sortStr === str[j].toLowerCase().split("").sort().join("")) {
        anagram1.push(str[i]);
        anagram2.push(str[j]);
      }
    }
  }

  const result = anagram1.concat(anagram2).join(" ");
  return result;
}

module.exports = searchAnagrams;
