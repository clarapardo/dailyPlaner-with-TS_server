# daily planer

*This is the server side code, find the client side code [here](https://github.com/clarapardo/dailyPlaner-with-TS_client)*
 <br>

## SERVER ROUTES

| METHOD | URL | DESCRIPTION |
| GET | /api/all | Retrieves all the stored tasks |
| POST | /api/add | Retrieves a task from the client and sends it to the server |
| PUT | /api/update:id | Retrieves a task from the client and update it |
| DELETE | /api/delete/:id | Retrieves a task from the client and deletes it

## API
You can test the API running a command line and executing a Postman collection. You can read further information in the **API testing documentation**

 <br>
<details>
    <summary><h2>DB</h2></summary>
    <h5>All the tasks are being stored in an external database: [external database](https://tasksplaner.herokuapp.com/).</h5>
     <br>
    <h4>DB task model</h4>
    - `taskName: String`
    - `deadline: Date`
    - `description: String`
    - `category; { type: String, enum: ['health', 'social', 'work', 'workout', 'other'] }`
    - `status: { type: String, enum: [ 'toDo', 'completed' ], default: 'toDo' }`<p>
     <br>
    <h4>Testing the DB</h4>
    | If the app responses with ... | then the task ... |
    | ... a 200 status code | ... was stored correctly |
    | ... a 500 status code | ... was unable to be sent |
 </details>
