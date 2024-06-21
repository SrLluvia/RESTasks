/* NPM IMPORTS */
const express = require('express');
//Parse incoming requests to JSON
const bodyParser = require('body-parser');
//Enable CORS(Cross-Origin Resource Sharing) requests
const cors = require('cors');
//Allows to define local variables in .env
const dotenv = require('dotenv');

/* LOCAL IMPORTS */
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});