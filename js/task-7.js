// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка.Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзакций всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const resultObject = { amount: amount, type: type };
    // console.log(account.transactions.push(resultObject));
    // console.log(resultObject);
    return account.transactions.push(resultObject);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
      
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзакции по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};

// TEST ...................................
console.log(account);
console.log(account.createTransaction(200, 'deposit'));

console.log(account.deposit(50));
//Счет пополнен на 50
console.log(account.withdraw(22));
//Со счета снято 22
console.log(account.getBalance());
// Баланс: 28
console.log(account.withdraw(7));
// Со счета снято 7
console.log(account.getTransactionDetails(2));
// { id: 2, type: "withdraw", amount: 7 }
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// Транзакций deposit на сумму 50
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
//Транзакций withdraw на сумму 29
