📄 Paste this entire content into your README.md file:
markdown
Copy
Edit
# 📚 PLP MongoDB Fundamentals Assignment

This project demonstrates a basic and advanced understanding of MongoDB, including database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## 🚀 Project Overview

- **Database:** `plp_bookstore`
- **Collection:** `books`
- **Tools Used:** MongoDB Community Edition / Atlas, MongoDB Shell (mongosh), MongoDB Compass
- **Languages:** JavaScript (for scripts)

---

## 🧩 Files Included

| File              | Description |
|-------------------|-------------|
| `insert_books.js` | Script to populate the `books` collection with 10+ sample book documents |
| `queries.js`      | All MongoDB queries for CRUD, advanced filtering, aggregation, and indexing |
| `screenshot.png`  | Screenshot of MongoDB Compass or Atlas showing the `plp_bookstore` database |
| `README.md`       | Instructions and project summary |

---

## 📦 Setup Instructions

1. **Ensure MongoDB is Installed**  
   Use either local MongoDB Community Edition or a free MongoDB Atlas cluster.

2. **Insert Book Data**
   Run the following command in your terminal to insert the data into the database:

   ```bash
   mongosh < insert_books.js
Run All Queries
Run the queries file in mongosh:

bash
Copy
Edit
mongosh < queries.js
Verify Data (Optional)
Open MongoDB Compass or connect to Atlas to view the data under the plp_bookstore database and books collection.

🧪 Features Demonstrated
✅ Task 2: CRUD Operations
Find books by genre, author, or year

Update and delete book records

✅ Task 3: Advanced Queries
Filtering with multiple conditions

Field projection

Sorting

Pagination using skip() and limit()

✅ Task 4: Aggregation Pipelines
Average book price per genre

Most prolific author

Books grouped by publication decade

✅ Task 5: Indexing
Indexes on title, and a compound index on author + published_year

Query optimization using .explain("executionStats")

👤 Author
Patrick Muniu
PLP MERN Stack Development – Week 1 MongoDB Fundamentals Assignment
