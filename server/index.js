const express = require('express');
const api=require("./routes/api");
const port = 3000

const app = express();

app.get('/', (request, response) => {
    response.send('Hello World!')
  })
  app.use('/api',api);
  app.get('/',function (request, response) {
      response.send('server est pret a tourner')
  })
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  