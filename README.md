<img src="https://res.cloudinary.com/clarapardo/image/upload/v1656966557/daily_planer_woj7pg.png" alt="PANG" width="200px"/>

[Client side code](https://github.com/clarapardo/dailyPlaner-with-TS_client).
 <br>

This **single page application** (SPA) project has been developed for the purpose of learning TypeScript, both in client and in server. 

#### Want to take a look? [here](https://dailyplaner.netlify.app/)


---
### About *daily planer*
It's a to-do-list platform.
It allows you to browse through the days and view the corresponding tasks - marking them as completed, or deleting them.




--- 
<details>
    All the tasks are being stored in an external database: [external database](https://tasksplaner.herokuapp.com/).
    <summary><h2>DB</h2></summary>
    <h4>DB task model</h4>
    `taskName: String,
    deadline: Date,
    description: String,
    category; { type: String, enum: ['health', 'social', 'work', 'workout', 'other'] },
    status: { type: String, enum: [ 'toDo', 'completed' ], default: 'toDo' }`<p>
     <br>
    <h4>Testing the DB</h4>
    | If the app responses with ... | then the task ... |
    | --- | --- |
    | ... a 200 status code | ... was stored correctly |
    | ... a 500 status code | ... was unable to be sent |
 </details>

 ## SERVER ROUTES

| METHOD | URL | DESCRIPTION |
| --- | --- | --- |
| GET | /api/all | Retrieves all the stored tasks |
| POST | /api/add | Retrieves a task from the client and sends it to the server |
| PUT | /api/update:id | Retrieves a task from the client and update it |
| DELETE | /api/delete/:id | Retrieves a task from the client and deletes it
