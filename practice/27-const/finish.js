/** ЗАДАЧА 27 - Const
 *
 * Ответьте на следующие вопросы:
 *   1. Почему после 13 строки не выдается ошибка?
 *   2. Почему после строки 18 генерируется TypeError?
 *
 * Измените одну строку кода, чтобы эта ошибка исчезла.
 * Не меняйте строки 13, 18
 */

// const arr = [1, 2] // <-- Объявление переменной используя const

let arr = [1,2]

arr.push(3) // Массив ссылочный тип данных. Сохраняется ссылка на объект, но меняется сам объект в памяти

console.log(arr)
// [1, 2, 3]

arr = [1, 2, 3, 4] // Попытка присвоить переменной новое значение объявленной через const
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

console.log(arr)
// [1, 2, 3, 4]
