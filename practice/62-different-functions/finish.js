/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// firstFunction(1, 2)

// Можем переназначить функцию firstFunction, можем вызвать функцию перед объявлением
function firstFunction(a, b) {
  return a + b
}

// firstFunction = 123

// Не можем переназначить функцию secondFunction, т.к. она объявлена через const
const secondFunction = function (a, b) {
  return a + b
}
