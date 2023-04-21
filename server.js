const express = require('express');
const app = express();

const fs = require('fs')

app.get('/', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        if(err) throw err;
        const dataJson = JSON.parse(data);
        res.json(dataJson) 
    })
})

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening: ${port}`);
});