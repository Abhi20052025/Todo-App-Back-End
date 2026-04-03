# 🚀 Todo App Backend

This is the backend of a Todo Application built using Node.js and Express.js. It provides RESTful APIs to manage tasks, including creating, reading, updating, and deleting todos. MongoDB is used as the database, while Mongoose helps define schemas and interact with the database efficiently.

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Middleware (for validation & error handling)

## ⚙️ Features

* Create a new todo
* Get all todos
* Update todo status (completed/pending)
* Delete a todo
* Input validation
* Error handling middleware

## 📁 Project Structure

```
Todo-App-Back-End/
│
├── models/
├── routes/
├── controllers/
├── config/
├── server.js
├── package.json
```

## 🔗 API Endpoints

* GET /api/todos → Get all todos
* POST /api/todos → Create a todo
* PUT /api/todos/:id → Update a todo
* DELETE /api/todos/:id → Delete a todo

## ▶️ How to Run Server

1. Install dependencies:

```
npm install
```

2. Start server:

```
npm start
```

OR (for development with nodemon):

```
npm run dev
```

## 🌐 Server Running

Server will run on:

```
http://localhost:5000
```

## 🔐 Environment Variables (.env)

Create a `.env` file and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```


✨ This backend ensures clean structure, scalability, and efficient data handling using modern MERN stack practices.
