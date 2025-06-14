# 👥 User Management API

This is a simple RESTful API built with Node.js and Express.js for managing users. It supports creating, reading, updating, deleting, and overriding user data — all stored in memory (no database used).

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name


2. Installdependencies 
    npm install
3. Start the development server:
    npm start
    The server runs at http://localhost:5000 by default.

### 🌐 API Documentation
- All endpoints are prefixed with: /users

    ✅ GET /users
        Fetch all users.

        Response:

        Status: 200 OK

        Body: Array of user objects
    ✅ POST /users
        Create a new user.

        Request Body:
            {
                "firstName": "John",
                "lastName": "Doe",
                "age": 28
            }

        Response:

            Status: 201 CREATED

            Message: User with the username John added successfully
    ✅ GET /users/:id
Get a single user by ID.

Response:

Status: 200 OK

Body: User object

Error:

404 NOT FOUND if user does not exist

✅ DELETE /users/:id
Delete a user by ID.

Response:

Status: 200 OK

Message: User with ID :id deleted successfully

Error:

404 NOT FOUND if user does not exist

✅ PATCH /users/:id
Update part of a user’s data.

Request Body: (any combination of fields)
{
  "firstName": "Jane"
}

Response:

Status: 200 OK

Message: User with ID :id updated

Error:

404 NOT FOUND if user does not exist

✅ PUT /users/:id
Override a user’s data (all fields required).

Request Body:

{
  "firstName": "Jane",
  "lastName": "Smith",
  "age": 30
}
Response:

Status: 200 OK

Message: User with ID :id overridden

Error:

400 BAD REQUEST if any field is missing

404 NOT FOUND if user does not exist



🛠 Tools & Technologies Used
Node.js

Express.js

UUID for unique ID generation

Example (cURL):

curl http://localhost:5000/users
🌐 API Documentation
All endpoints are prefixed with /users.

📥 POST /users
Create a user.

Request Body:

{
  "firstName": "John",
  "lastName": "Doe",
  "age": 25
}
Success:

201 Created

{
  "message": "User with the username John added successfully"
}
Error (400):

{ "error": "Missing required fields" }
📤 GET /users
Get all users.

Success:

200 OK → List of users

📤 GET /users/:id
Get a specific user by ID.

Success:

200 OK

Error (404):

{ "error": "User not found" }
❌ DELETE /users/:id
Delete a user by ID.

Success:

200 OK

{ "message": "User with ID :id deleted successfully" }
Error (404):

{ "error": "User not found" }
🔁 PATCH /users/:id
Update part of a user’s info.

Request Body Example:

{
  "age": 30
}
Success:

200 OK

Error (404):

{ "error": "User not found" }
🔁 PUT /users/:id
Override all of a user's data.

Request Body:

{
  "firstName": "Jane",
  "lastName": "Doe",
  "age": 32
}
Success:

200 OK

Error (400):

{ "msg": "No firstName" }
Error (404):

{ "error": "User not found" }
