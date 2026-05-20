# Todo App CRUD API

This repository contains a simple Node.js and Express backend for managing todo items. Todo data is stored in `data/TodoItem.json`, so no external database is required.

## Tech Requirements

- Node.js
- npm
- Express.js
- dotenv
- uuid
- Local JSON file storage

## How To Use This Repo

1. Open a terminal in the backend folder:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

3. Optional: create a `.env` file to set the server port:

```env
PORT=8080
```

4. Start the server:

```bash
node index.js
```

5. Open the health route in a browser or API client:

```text
http://localhost:8080/
```

The API base URL is:

```text
http://localhost:8080/api/user
```

Use Postman, Thunder Client, curl, or any API client to test the routes below.

## Functionality

- POST: create a new todo item
- GET: retrieve all todo items
- GET: retrieve a specific todo item by ID
- GET: retrieve completed todo items
- PATCH: update a specific todo item by ID
- DELETE: delete a specific todo item by ID

## Todo Item Properties

- `id`: a unique identifier for the todo item
- `title`: a string representing the title of the todo item
- `description`: a string representing the description of the todo item
- `status`: a boolean indicating whether the todo item is completed
- `priority`: a string representing the priority level of the todo item
- `schedule`: a date/time value for when the todo item is due

## Create A New Todo Item

- Endpoint: `/api/user/createTask`
- Method: `POST`
- Request body:

```json
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": false,
  "priority": "medium",
  "schedule": "2024-07-01T10:00:00Z"
}
```

Example response:

```json
{
  "item": {
    "id": "generated-id",
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "status": false,
    "priority": "medium",
    "schedule": "2024-07-01T10:00:00Z"
  },
  "message": "Task created successfully"
}
```

Possible status codes:

- `200 OK`: todo item created successfully
- `400 Bad Request`: required fields are missing
- `500 Internal Server Error`: server error

## Retrieve All Todo Items

- Endpoint: `/api/user/getAllTasks`
- Method: `GET`

Example response:

```json
{
  "message": "Tasks fetched successfully",
  "data": [
    {
      "id": "1",
      "title": "Buy groceries",
      "description": "Milk, Bread, Eggs",
      "status": false,
      "priority": "medium",
      "schedule": "2024-07-01T10:00:00Z"
    }
  ]
}
```

Possible status codes:

- `200 OK`: todo items retrieved successfully
- `500 Internal Server Error`: server error

## Retrieve A Specific Todo Item By ID

- Endpoint: `/api/user/getTask/:id`
- Method: `GET`

Example response:

```json
{
  "message": "Task fetched successfully",
  "data": {
    "id": "1",
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "status": false,
    "priority": "medium",
    "schedule": "2024-07-01T10:00:00Z"
  }
}
```

Possible status codes:

- `200 OK`: todo item retrieved successfully
- `400 Bad Request`: ID is missing
- `404 Not Found`: todo item does not exist
- `500 Internal Server Error`: server error

## Retrieve Completed Todo Items

- Endpoint: `/api/user/getCompletedTask`
- Method: `GET`

Example response:

```json
{
  "message": "Completed Tasks fetched successfully",
  "data": [
    {
      "id": "1",
      "title": "Buy groceries",
      "description": "Milk, Bread, Eggs",
      "status": true,
      "priority": "medium",
      "schedule": "2024-07-01T10:00:00Z"
    }
  ]
}
```

Possible status codes:

- `200 OK`: completed todo items retrieved successfully
- `500 Internal Server Error`: server error

## Update A Specific Todo Item By ID

- Endpoint: `/api/user/updateTask/:id`
- Method: `PATCH`
- Request body:

```json
{
  "title": "Buy groceries and snacks",
  "description": "Milk, Bread, Eggs, Chips"
}
```

Example response:

```json
{
  "message": "Task updated successfully",
  "data": {
    "id": "1",
    "title": "Buy groceries and snacks",
    "description": "Milk, Bread, Eggs, Chips",
    "status": false,
    "priority": "medium",
    "schedule": "2024-07-01T10:00:00Z"
  }
}
```

Possible status codes:

- `200 OK`: todo item updated successfully
- `400 Bad Request`: ID is missing
- `404 Not Found`: todo item does not exist
- `500 Internal Server Error`: server error

## Delete A Specific Todo Item By ID

- Endpoint: `/api/user/deleteTask/:id`
- Method: `DELETE`

Example response:

```json
{
  "message": "Todo item deleted successfully",
  "data": []
}
```

Possible status codes:

- `200 OK`: todo item deleted successfully
- `400 Bad Request`: ID is missing
- `404 Not Found`: todo item does not exist
- `500 Internal Server Error`: server error
