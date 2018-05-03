const express = require('express');
const bodyParser = require('body-parser');

const ShoeRouter = require('./routes/shoe.router');

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('up and running on port', PORT);
})

app.use('/shoe', ShoeRouter);