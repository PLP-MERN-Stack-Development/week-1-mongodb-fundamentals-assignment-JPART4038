// queries.js

// 1. Find all books in a specific genre
// Replace "Fiction" with any genre you want to search
db.books.find({ genre: "Fiction" })

// 2. Find books published after a certain year
// Replace 2010 with the year you want
db.books.find({ published_year: { $gt: 2010 } })

// 3. Find books by a specific author
// Replace "Paulo Coelho" with the author's name
db.books.find({ author: "Paulo Coelho" })

// 4. Update the price of a specific book
// Replace "The Alchemist" with the book title, and 19.99 with the new price
db.books.updateOne(
  { title: "The Alchemist" },
  { $set: { price: 19.99 } }
)

// 5. Delete a book by its title
// Replace "Clean Code" with the book title you want to delete
db.books.deleteOne({ title: "Clean Code" })
