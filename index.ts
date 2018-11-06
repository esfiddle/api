const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use('/fiddles', require('./server/routes/fiddle.ts'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
