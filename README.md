# daily planer

*This is the server side code ~ client side code [here](https://github.com/clarapardo/dailyPlaner-with-TS_client)*.
 <br>

This *single page application* (SPA) project has been developed for the purpose of learning TypeScript, both in client and in server. 

#### Want to take a look? [Click here](https://dailyplaner.netlify.app/)

<hr>

---
### About *daily planer*
It's a to-do-list platform.
It allows you to browse through the days and view the corresponding tasks - marking them as completed, or deleting them.



<hr><hr>
--- 
<details>
    All the tasks are being stored in an external database: [external database](https://tasksplaner.herokuapp.com/).
    <summary><h2>DB</h2></summary>
    <h4>DB task model</h4>
    <p>- ``taskName: String``</p>
    <p>- ``deadline: Date``</p>
    <p>- ``description: String``</p>
    <p>- ``category; { type: String, enum: ['health', 'social', 'work', 'workout', 'other'] }``</p>
    <p>- ``status: { type: String, enum: [ 'toDo', 'completed' ], default: 'toDo' }``<p>
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
