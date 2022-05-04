//index.js
const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())

const port = process.env.PORT || 8081; //! schimbat portul din 8080 in 8081

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});