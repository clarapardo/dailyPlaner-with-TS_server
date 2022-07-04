# DB
All the tasks are being stored in an external database: [external database](https://tasksplaner.herokuapp.com/).

## DB task model
* `taskName: String`
* `deadline: Date`
* `description: String`
* `category; { type: String, enum: ['health', 'social', 'work', 'workout', 'other'] }`
* `status: { type: String, enum: [ 'toDo', 'completed' ], default: 'toDo' }`

## Testing the DB
| If the app responses with ... | then the task ... |
| ... a 200 status code | ... was stored correctly |
| ... a 500 status code | ... was unable to be sent |

