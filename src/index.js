const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

app.use('/api', require('./routes/routes'));

app.get('*', (req, res) => {
  res.json({});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
