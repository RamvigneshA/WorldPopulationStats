const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(cors());


app.get('/try', (req, res) => {
  const fetchData = async() => {
    const response = await axios.get('https://api.worldbank.org/v2/country/cn?format=json')
    const data = await response.data;
    res.send(data)
  }
  fetchData();
})

app.listen(3000, () => {
  console.log('backend server!!')
})