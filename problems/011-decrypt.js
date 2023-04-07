/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    secret = secret.toLocaleLowerCase();
    let splitSecret = secret.split("");
    let char = 0;
    let result = "";

    splitSecret.forEach((item) => {
        if (item !== " ") {
            if (item !== "z") {
                char = item.charCodeAt() + 1;
            } else char = item.charCodeAt() - 25;
            result += String.fromCharCode(char);
        } else {
            result += item;
        }
    });

    return result;
}

module.exports = decrypt;
