const express = require('express')
require('dotenv').config();

const port = process.env.PORT || 8000;
const app = new express();
app.get('/', (req, res) => {
    res.send('Hi!');
});

app.listen(port, () => {
    console.log(`server ready in ${port}`);
});
