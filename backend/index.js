const express = require('express')
const app = express();
const port = process.env.PORT || 8080;
const cors = require ('cors')

app.use(express.json());
app.use(cors());
const products = require("./products");

app.get('/', (req, res) => {
  res.send('Welcome to ScandiWeb Store')
});
app.get('/products', (req, res) => {
    res.send(products);
});
  
app.listen(port, () => {
  console.log(`Server running on port ${port}!`)
});
