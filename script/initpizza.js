const mongoose = require("mongoose");
const pizzaModel = require("../models/pizzaModel");
const dotenv = require("dotenv");
dotenv.config();


// Sample pizza data
const pizzas = [
  {
    name: "Margherita",
    varients: ["Small", "Medium", "Large"],
    prices: [
        { Small: 100 },
        { Medium: 200 },
        { Large: 300 },
    ],
    category: "Classic",
    image: "path/to/margherita.jpg",
    description: "Classic Margherita Pizza with tomato, mozzarella, and basil.",
  },
  {
    name: "Pepperoni",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { Small: 100 },
      { Medium: 200 },
      { Large: 300 },
    ],
    category: "Meat Lovers",
    image: "path/to/pepperoni.jpg",
    description: "Pepperoni Pizza with classic tomato sauce and mozzarella.",
  },
  // Pizza 3
  {
    name: "Vegetarian",
    varients: ["Small", "Medium", "Large"],
    prices: [
        { Small: 100 },
        { Medium: 200 },
        { Large: 300 },
    ],
    category: "Vegetarian",
    image: "path/to/vegetarian.jpg",
    description: "Vegetarian Pizza with fresh veggies and mozzarella.",
  },
  // Pizza 4
  {
    name: "BBQ Chicken",
    varients: ["Small", "Medium", "Large"],
    prices: [
        { Small: 100 },
        { Medium: 200 },
        { Large: 300 },
    ],
    category: "Specialty",
    image: "path/to/bbq-chicken.jpg",
    description: "BBQ Chicken Pizza with barbecue sauce, chicken, and red onions.",
  },
  // Add 9 more pizzas with similar structure...
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to the database');

    // Insert the initial recipes into the database
    await pizzaModel.insertMany(pizzas);
  })
  .then(() => {
    console.log('Initial pizzas inserted.');
  })
  .catch((err) => {
    console.error('Error inserting initial pizzas:', err);
  })
  .finally(() => {
    // Close the database connection when done
    mongoose.connection.close();
  });

