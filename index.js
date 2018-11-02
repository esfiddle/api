const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;


app.use('/fiddles', require('./server/routes/fiddle.ts'));



//const routes = require('../server/routes');


//const path = require('path');
//const http = require("http");
//require('dist/index.js');

//app.use('/', routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
