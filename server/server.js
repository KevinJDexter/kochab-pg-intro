const express = require('express');

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log('up and running on port', PORT);
})

app.get('/shoe', (req, res) => {
  res.send([{ name: 'nike tennis shoe', cost: '100' },
  { name: 'adidas tennis shoe', cost: '99' }
  ]);
})