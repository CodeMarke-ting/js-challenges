// // accessor and data
// // get and set
// const user = {
//   firstName: "Royal",
//   lastName: "Khamoyev",
//   age: 24,
//   address: {
//     city: "LA",
//     state: "California",
//   },
//   get sayName() {
//     let message = "hello";
//     return `${message} Hi I am ${this.firstName} ${this.lastName}`;
//   },
//   set setName(firstName1 = "") {
//     this.firstName = firstName1;
//     // this.lastName = lastName1;
//   },
// };

// console.log(user.sayName);
// // user.setName = "Shalala";

// console.log(user);

// for (let field in user) {
//   console.log(field);
//   console.log(user[field]);
// }

// // user.firstName = "yusuf";
// // console.log(user.address);
// // console.log(user.address.city);

// let newUser = { ...user };

// user.age = 64;
// user.address.city = "Colorado";

// console.log(user);
// console.log(newUser);

// console.log({} == {}); //true
// console.log("" == ""); //true
// console.log([] == {}); //false

// // malloc

// // garbage collection
// // global variable, global, object, local scope primitive variables

// function test(boy, girl) {
//   boy.sister = girl;
//   girl.brother = boy;

//   return {
//     family: {
//       boy,
//       girl,
//     },
//   };
// }

// console.log();

// const family = test(
//   {
//     name: "Jake",
//   },
//   {
//     name: "Jane",
//   }
// );

// family.boy = null;

// const { firstName: name, lastName: surName } = user;
// console.log(name, surName);

// const admin = {
//   loggedIn: false,
//   id: 122,
//   privilige: "full user",
// };

// const newAdmin = Object.create(admin);

// // admin.id = 111;

// console.log(admin);

// console.log(newAdmin);

// console.log(Object.entries(admin));

// // console.log(Object.keys(admin));

// Object.keys(admin).forEach((key) => {
//   console.log(key);
// });

// Object.seal(admin);

// admin.id = 100;

// admin.name = "Farid";

// console.log(admin);

// console.log("id" in admin);
// console.log(admin.hasOwnProperty("id"));

const dog1 = {
  breed: "samoyed",
  age: 1,
  name: "Luna",
};

console.log(dog1);

// function Dog(breed = "", age = "", name = "") {
//   (this.breed = breed), (this.age = age);
//   this.name = name;
// }

// // prototype extend

// Dog.prototype.getName = function () {
//   return `${this.name}`;
// };

// const dog = new Dog("samoyed", 1, "Luna", "adadasd");
// const dog2 = new Dog("beagle", 2, "Jake");
// console.log(dog2);
// console.log(dog);

// dog2.setBreed = function (breed) {
//   this.breed = breed;
// };

// // dog2.setBreed("asdadas");

// // console.log(dog2);

// console.log(dog.getName());

// console.log(dog.hasOwnProperty("name"));
// // console.log(dog.includes("name"));

// console.log(Array.prototype);
// console.log(Number.prototype);
// console.log(String.prototype);

// console.log((12.2).toFixed());

class Dog {
  temp = 0;
  constructor(breed, age, name) {
    (this.breed = breed), (this.age = age);
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const dog = new Dog("samoyed", 1, "Luna");
console.log(dog);

// create, JSON

const dog2 = Object.create(dog);
console.log(dog2);
console.log(dog2.getName());

const dog3 = Object.create(dog2);

console.log(dog3);

const str = JSON.stringify(dog);

const raw = JSON.parse(str);

console.log(str);

console.log(raw);

const arr = [1, 2, 3, 4, 10, 23, 122, 43, 25];

const newArr = arr.filter((digit) => digit > 20);
console.log(newArr);

// callback - element, index, arr

Array.prototype.myFilter = function (callback) {
  let newArr = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      newArr.push(this[index]);
    }
  }

  return newArr;
};

console.log(
  arr.myFilter((digit, index) => {
    console.log(index);
    return digit > 10;
  })
);
