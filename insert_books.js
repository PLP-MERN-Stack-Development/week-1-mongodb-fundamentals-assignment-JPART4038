// insert_books.js

use('plp_bookstore'); // Select your database (only needed if you're running through mongosh directly)

db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 12.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 25.00,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 16.20,
    in_stock: true,
    pages: 320,
    publisher: "Penguin"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 9.99,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 30.00,
    in_stock: false,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Self-help",
    published_year: 2012,
    price: 14.95,
    in_stock: true,
    pages: 371,
    publisher: "Random House"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 10.99,
    in_stock: false,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 22.00,
    in_stock: true,
    pages: 443,
    publisher: "Harvill Secker"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 18.00,
    in_stock: true,
    pages: 499,
    publisher: "Farrar, Straus and Giroux"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 8.99,
    in_stock: false,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  }
])
