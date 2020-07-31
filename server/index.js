const express = require('express');
const ctrl = require('./controller.js');
const app = express();
const port = 5000;

app.use(express.json());


//-----Endpoints-----//
app.get("/api/events", ctrl.getEvents)

// app.post("/api/todos", ctrl.addTodo)
// app.delete("/api/todos/:id", ctrl.deleteTodo)
// app.put("/api/todos/complete/:id", ctrl.completeTodo)


app.listen(port, () => console.log(`Server listening on port: ${port}`));