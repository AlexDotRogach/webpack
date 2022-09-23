import './task2.css';
console.log('work in second');
const { check, fizz, buzz } = require('./setting').default;

// Потрібно написати функцію, що
// виводить у консоль числа від 1 до n, де n
// - це ціле число, яка функція приймає
// як параметр, з такими умовами:
// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizz buzz замість чисел, кратних як 3, і 5.

function showFizzBuzz(n) {
  for (let i = 0; i < n; i += 1) {
    switch (true) {
      case !(i % 3):
        fizz(i);
        break;
      case !(i % 5):
        buzz(i);
        break;
      default:
        check(i);
        break;
    }

    // if (i % 3 === 0) {
    //   fizz(i);
    //   continue;
    // }

    // if (i % 5 === 0) {
    //   buzz(i);
    //   continue;
    // }

    // checkValue(i);
  }
}

showFizzBuzz(10);
