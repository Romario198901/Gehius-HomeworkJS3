//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

/*const fruts = [
  { id: 0, name: "Apple" },
     { id: 1, name: "Tomat" },
 { id: 2, name: "Cherry" }, 
   { id: 3, name: "Orange" },
];
const frutsNames = fruts.map(fruit => fruit.name);
console.log(frutsNames);*/



//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for
//for (let i = 2; i <= 10; i++) {
//  if (i % 2 === 0) {
//    console.log(i);
//  }
//}
//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }
//let a = 0;
//while(a < 5) {
//  console.log ('цифра' + ' ' + a++);
//}

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
/*while (true) {
  let userInput = prompt("Будь ласка, введіть число більше за 100:");
  if (userInput === null || userInput === "") {
      console.log("Ввід скасовано.");
      break;
  }
  let number = Number(userInput);
  if (!isNaN(number)) {
      if (number > 100) {
          console.log("Дякуємо! Ви ввели число більше за 100.");
          break;
      } else {
          console.log("Число повинно бути більше за 100. Спробуйте ще раз.");
      }
  } else {
      console.log("Це не число. Будь ласка, введіть число більше за 100.");
  }
}*/
//  -- 5 --
// Вирахуйте середній вік

 /*const girls = [
   { age: 23, name: "Оля" },
   { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
   { age: 20, name: "Катя" },
 ];
const ages = girls.map(num => num.age);
const red = ages.reduce((sum, item) => sum + item) /ages.length;
console.log(red);*/
