// function isHappy(n) {
//   const memo = [];

//   while (n !== 1) {
//     if (memo.includes(n)) {
//       break;
//     }
//     memo.push(n);
//     n = calculate(n);
//   }

//   return n === 1;
// }

// function calculate(n) {
//   let sum = 0;
//   n = n.toString().split("");
//   n.forEach((digit) => {
//     sum += Math.pow(digit, 2);
//   });
//   return sum;
// }

// console.log(isHappy(19));
// //2 - 4, 16, 37, 58, 89, 145, 42, 20, 4
// console.log(isHappy(2));
// console.log(isHappy(3));
// console.log(isHappy(13));
// console.log(isHappy(5));

// // Math
// console.log(Math);
// console.log(Math.pow(10, 3));
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(26));
// // console.log(30 ** (1 / 3));
// console.log(Math.abs(-110));
// console.log(Math.min(10, 20, 3, -2));
// console.log(Math.max(10, 20, 3, -2));
// console.log(Math.floor(10.99999));
// console.log(Math.ceil(10.1));

// console.log(Math.round(10.5));
// console.log(Math.random());
// console.log(Math.random() * 10);
// const random = Math.floor(Math.random() * 10);
// console.log(random);

// function randomFunc(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(randomFunc(10, 20));

// console.log(Math.PI);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let acc = 0;
// for (let i = 0; i < arr.length; i++) {
//   let curr = arr[i];
//   acc += curr;
// }

// console.log(acc);

// const sum = arr.reduce((acc, curr) => acc + curr, 10);
// console.log(sum);

// ============= OBJECTS =======================
// string, number, null, undefined, boolean
// object
// object literal

// let race = "Middle Asian";

// const abs = "Keanu Revees";

// const address = {
//   city: "USA",
//   postalCode: 1001,
// };

// const obj = {
//   age: 30,
//   "logged In": false,
//   race,
//   address,
// };

// console.log(obj);
// console.log(typeof obj);
// console.log(obj.fullName);
// console.log(obj.age);
// console.log(obj["logged In"]);

// obj.occupation = "Actor";
// // delete obj.occupation

// // obj.fullName = null;

// console.log(obj);

// console.log(obj.fullName);

// delete obj.age;

// console.log(obj);

// obj[abs] = null;

// console.log(obj);

// console.log(obj.address.city);

// console.log(obj.state); //undefined

// // optianl chaining
// console.log(obj.state?.contact);

// pass by value
// let user = "Balaca Yusuf";
// let writer = user;

// user = "Royal";

// console.log(user);
// console.log(writer);

// pass by reference

// let user = {
//   name: "Alpacino",
// };

// let contact = { contact: "Dunya" };

// let admin;

// console.log(user);
// console.log(admin);
// console.log(contact);
// // user.name = "Robert De Niro";

// user = contact;
// admin = user;

// console.log(user);
// console.log(contact);
// console.log(admin);
