const obj = {
  data: [
    {
      id: 2,
      description: "Sweet and savory sauces relishes spreads and seasonings",
      name: "Condiments",
    },
    {
      id: 1,
      description: "Soft drinks coffees teas beers and ales",
      name: "Beverages",
    },
    {
      id: 3,
      description: "Desserts candies and sweet breads",
      name: "Confections",
    },
    {
      id: 4,
      description: "Cheeses",
      name: "Dairy Products",
    },
    {
      id: 5,
      description: "Breads crackers pasta and cereal",
      name: "Grains/Cereals",
    },
    {
      id: 6,
      description: "Prepared meats",
      name: "Meat/Poultry",
    },
    {
      id: 7,
      description: "Dried fruit and bean curd",
      name: "Produce",
    },
    {
      id: 8,
      description: "Seaweed and fish",
      name: "Seafood",
    },
  ],
  getRandom: function (message) {
    console.log(message);
    const sum = () => {
      console.log(this);
    };

    sum();

    const index = Math.floor(Math.random() * this.data.length);
    return this.data[index];
  },
};

console.log(obj.getRandom());

// function calculate(getRandom) {
//   return getRandom();
// }

const func = obj.getRandom.bind(obj, "message");

// calculate(func);

let newObj = {
  data: ["a", "b", "c"],
};

console.log(obj.getRandom.call(newObj, ["hello"]));
