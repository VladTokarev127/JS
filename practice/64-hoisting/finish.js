/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a = 5
const b = 10

if (b > a) {
  let c = 2
  c = a + b + c
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  console.log(c)
  // 17
}

console.log(c) // Переменная не объявлена, т.к. находится внутри блока if. Исправить можно, если использовать var, в таком случае компилятор JS при находении переменной вне блока объявления, поднимит объявление в глобальную зону видимости
// Uncaught ReferenceError: c is not defined
