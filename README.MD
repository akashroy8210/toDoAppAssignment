# Todo App Curd

## Functionality in this App
- POST: create a new todo item
- GET: retrieve all todo items
- GET: retrieve a specific todo item by ID
- PATCH: update a specific todo item by ID
- DELETE: delete a specific todo item by ID

## Each todo item has the following properties:
- `id`: a unique identifier for the todo item
- `title`: a string representing the title of the todo item
- `description`: a string representing the description of the todo item
- `status`: a boolean indicating whether the todo item is completed or not
- `priority`: a string representing the priority level of the todo item (e.g., "low", "medium", "high")
- `schedule`: a timestamp indicating when the todo item is due
- `createdAt`: a timestamp indicating when the todo item was created
- `updatedAt`: a timestamp indicating when the todo item was last updated


## POST (CREATE A NEW TODO ITEM)
- Endpoint: `/api/users/createTask`
- Method: POST
- Request Body:
```json
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": false,
  "priority": "medium",
  "schedule": "2024-07-01T10:00:00Z"
}
```
-ERROR RESPONSE:
```json
{
  "error": "Title is required."
}
{
    "error": "Description is required.",
}
{
    "error": "Priority must be one of 'low', 'medium', or 'high'.",
}
{
        "error": "Schedule must be a valid ISO 8601 date string."
}
```
-ERROR STATUS CODE:
- 400 Bad Request: If the request body is missing required fields or contains invalid data.
- 500 Internal Server Error: If there is an issue with the server while processing the request.
- 200 Created: If the todo item is successfully created.

## GET (RETRIEVE ALL TODO ITEMS)
- Endpoint: `/api/users/getAllTasks`
- Method: GET
- Response Body:
```json
[
  {
    "id": "1",
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "status": false,
    "priority": "medium",
    "schedule": "2024-07-01T10:00:00Z",
    "createdAt": "2024-06-01T12:00:00Z",
    "updatedAt": "2024-06-01T12:00:00Z"
  },
  {
    "id": "2",
    "title": "Finish project report",
    "description": "Complete the final report for the project",
    "status": false,
    "priority": "high",
    "schedule": "2024-07-05T17:00:00Z",
    "createdAt": "2024-06-02T09:30:00Z",
    "updatedAt": "2024-06-02T09:30:00Z"
  }
]
```
-ERROR RESPONSE:
```json
{
  "error": "Unable to Fetch Todo Items."
}
```
-ERROR STATUS CODE:
- 500 Internal Server Error: If there is an issue with the server while processing the request
- 200 OK: If the request is successful and the todo items are retrieved.

## GET (RETRIEVE A SPECIFIC TODO ITEM BY ID)
- Endpoint: `/api/users/getTask/:id`
- Method: GET
- Response Body:
```json
{
  "id": "1",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": false,
  "priority": "medium",
  "schedule": "2024-07-01T10:00:00Z",
  "createdAt": "2024-06-01T12:00:00Z",
  "updatedAt": "2024-06-01T12:00:00Z"
}
```
-ERROR RESPONSE:
```json
{
  "error": "Todo item with ID 1 not found."
}
```
-ERROR STATUS CODE:
- 404 Not Found: If a todo item with the specified ID does not exist.
- 500 Internal Server Error: If there is an issue with the server while processing the request.
- 200 OK: If the request is successful and the todo item is retrieved.

## GET (RETRIEVE TODO ITEMS BY COMPLETED STATUS)
- Endpoint: `/api/users/getTasksByStatus?completed=true`
- Method: GET
- Response Body:
```json
[
  {
    "id": "1",
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "status": true,
    "priority": "medium",
    "schedule": "2024-07-01T10:00:00Z",
    "createdAt": "2024-06-01T12:00:00Z",
    "updatedAt": "2024-06-01T12:00:00Z"
  }
]
```
-ERROR RESPONSE:
```json
{
  "error": "Unable to Fetch Todo Items by Status."
}
```
-ERROR STATUS CODE:
- 500 Internal Server Error: If there is an issue with the server while processing the request
- 200 OK: If the request is successful and the todo items are retrieved based on their completed status.


## PATCH (UPDATE A SPECIFIC TODO ITEM BY ID)
- Endpoint: `/api/users/updateTask/:id`
- Method: PATCH
- Request Body:
```json
{
  "title": "Buy groceries and snacks",
  "description": "Milk, Bread, Eggs, Chips",
}
```
-ERROR RESPONSE:
```json
{
  "error": "Todo item with ID 1 not found.",
    "error": "Title is required.",
    "error": "Description is required."
}
```
-ERROR STATUS CODE:
- 404 Not Found: If a todo item with the specified ID does not exist.
- 400 Bad Request: If the request body is missing required fields or contains invalid data.
- 500 Internal Server Error: If there is an issue with the server while processing the request
- 200 OK: If the request is successful and the todo item is updated.

## DELETE (DELETE A SPECIFIC TODO ITEM BY ID)
- Endpoint: `/api/users/deleteTask/:id`
- Method: DELETE
- Response Body:
```json
{
  "message": "Todo item with ID 1 has been deleted."
}
```
-ERROR RESPONSE:
```json
{
  "error": "Todo item with ID 1 not found.",
  "error": "Unable to delete the todo item."
}
```
-ERROR STATUS CODE:
- 404 Not Found: If a todo item with the specified ID does not exist.
- 500 Internal Server Error: If there is an issue with the server while processing the request.
- 200 OK: If the request is successful and the todo item is deleted.

