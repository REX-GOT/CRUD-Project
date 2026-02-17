const express = require('express');
const userRouter = require('./routers/user.route');
const taskRouter = require('./routers/task.route');
const connectDB = require('./db/db');
const PORT = 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// @ Routers
app.use('/api/users', userRouter);

app.use('/api/tasks', taskRouter);

// @ DataBase & Server
connectDB().then(() => {
    // Listen
    app.listen(PORT, () => {
        console.log(`[nodemon] Server is running on PORT ${PORT}`);
        console.log(`[server] http://localhost:${PORT}`);
    });
});

// Browser
app.get('/', (req, res) => {
    res.send('Hello from server.js! This is the backend of the MERN stack application. 404');
});