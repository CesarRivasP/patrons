const express = require('express');
const axios = require('axios');
const { get } = require('./handlers');
const app = express();
const port = 3000;

app.get('/', get(axios));

app.listen(port, () => console.log(`Example run in port ${port}`));