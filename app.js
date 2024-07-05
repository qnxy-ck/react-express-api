const express = require('express');
const app = express();
const route = require('./routes');
const PORT = process.env.PORT || 9900;


route(app)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
