# Node.js Express Backend with PostgreSQL

## Project Overview

This is a simple backend API built with Node.js and Express, using PostgreSQL as the database. It provides CRUD operations for managing posts.

## Features

-   Retrieve all posts
-   Retrieve a single post by ID
-   Create a new post
-   Update an existing post by ID
-   Delete a post by ID

## Technologies Used

-   Node.js
-   Express.js
-   PostgreSQL
-   pg (Node.js PostgreSQL client)

## Folder Structure

src/
++++controllers/userController.js
++++controllers/postController.js
++++models/User.js
++++models/Post.js
++++routes/userRoutes.js
++++routes/postRoutes.js
++++db/orm.js # Sequelize initialization
index.js

## Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up your PostgreSQL database and create a `.env` file with the following variables:

    ```sh
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    DB_PORT=5432
    ```

4. Run database migrations if necessary.

## Usage

### Start the server

```sh
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Get all posts

```http
GET /posts
```

### Get a post by ID

```http
GET /posts/:id
```

### Create a new post

```http
POST /posts
```

**Request Body:**

```json
{
    "title": "Post Title",
    "content": "Post content"
}
```

### Update a post by ID

```http
PUT /posts/:id
```

**Request Body:**

```json
{
    "title": "Updated Title",
    "content": "Updated content"
}
```

### Delete a post by ID

```http
DELETE /posts/:id
```

## License

This project is licensed under the MIT License.

## Author

Alireza
Spencer
Timur
Rajvi
