const express = require('express');
const app = express();
const route = require('./routes');

route(app)

app.listen(9900, () => console.log('Server is running on port 8080'));
