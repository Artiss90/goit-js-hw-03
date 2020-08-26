// Задача 3 - 3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function (employees) {
  const arrWorkers = Object.entries(employees);
  const taskWorker = Object.values(employees);
  const niceWorker = Math.max(...taskWorker);
  let result = '';
  for (let i = 0; i < arrWorkers.length; i += 1) {
    if (taskWorker[i] == niceWorker) {
      result += Object.keys(employees)[i];
      return result;
    }
  }
  return result;
  //Альтернатива
  //   const entries = Object.entries(employees);
  //   let result = '';
  //   let maxValue = 0;
  //   for (const [name, value] of entries) {
  //     if (value > maxValue) {
  //       maxValue = value;
  //       result = name;
  //     }
  //   }
  //   return result;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
// console.log(findBestEmployee(zero));
// let zero = {};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
