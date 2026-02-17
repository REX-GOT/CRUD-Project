const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/user.route');
const taskRouter = require('./routers/task.route');
const PORT = 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// @ Routers
app.use('/api/users', userRouter);

app.use('/api/tasks', taskRouter);

// GET Route
app.get('/', (req, res) => {
    res.send('Hello from server.js! This is the backend of the MERN stack application.');
});

// Listen
app.listen(PORT, () => {
    console.log(`[nodemon] Server is running on PORT ${PORT}`);
    console.log(`[server] http://localhost:${PORT}`);
});

mongoose.connect("mongodb+srv://lang:XBIwKpsSWwY4WTdV@crud.b3wxdhl.mongodb.net/crud").then(() => {
    console.log("[DataBase] Connected to MongoDB");
}).catch((err) => {
    console.log("[ERROR] Error connecting to MongoDB: ", err);
});
