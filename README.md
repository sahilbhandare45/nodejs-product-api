# 🏷️ Node.js Product API

A RESTful API built by **Sahil Bhandare** using **Node.js** and **Express.js** to manage product data. This project demonstrates how to set up a basic API with in-memory data handling — ideal for learning backend fundamentals or as a prototype for larger applications.

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v14+ recommended)
- npm (comes with Node.js)

### 🔧 Installation & Setup

```bash
git clone https://github.com/sahilbhandare45/nodejs-product-api.git
cd nodejs-product-api
npm install
npm start
```
Server will run at:
👉 http://localhost:3000

---
🔌 API Endpoints
---
📄 GET /products
Returns the full list of products.

➕ POST /products
Adds a new product.

❌ DELETE /products/:id
Deletes a product by ID.

---
🧰 Built With
---
⚙️ Node.js – JavaScript runtime

🚀 Express.js – Web framework

🧠 In-memory array – Used for temporary product storage (no DB)

---
✅ Features Implemented
---
 Basic RESTful routing (GET, POST, DELETE)

 JSON body parsing

 Minimal and clean project structure

 Manual ID management (auto-incremented)

---
🎯 Planned Improvements
---
🔧 Functional Enhancements
---
 ~ Add PUT /products/:id to update products

 ~ Add input validation (e.g., for name and price fields)

 ~ Add persistent storage (MongoDB, SQLite, or JSON file)

 ~ Add auto-generated product IDs (e.g., UUID)

 ~ Add pagination and search filtering

---
💡 Developer Experience
---
 ~ Add logging (with Morgan or Winston)

 ~ Add custom error handling middleware

 ~ Add unit & integration tests (Jest / Supertest)

 ~ Add Swagger (OpenAPI) documentation

