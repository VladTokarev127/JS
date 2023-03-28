/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const arr = [
	{
		carBrand: 'asdasd',
		price: 10000,
		isAvailableForSale: true
	},
	{
		carBrand: 'asdasd',
		price: 10000,
		isAvailableForSale: false
	},
	{
		carBrand: 'asdasd',
		price: 20000,
		isAvailableForSale: true
	},
];

const newObj = {
	carBrand: 'asdasd',
	price: 20000,
	isAvailableForSale: true
};

arr.push(newObj)

console.log(newObj);