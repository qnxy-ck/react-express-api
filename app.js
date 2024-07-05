const express = require('express');
const app = express();
const route = require('./routes');

route(app)

app.listen(80, () => console.log('Server is running on port 8080'));
