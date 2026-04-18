require('dotenv').config();
// postgres Database here

//get all needed components
const webPush = require('web-push');
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');

//Vapid Keys here

const app = express();
app.use(cors());
app.use(express.json());

//user Subscription

app.get('/', (req, res) => {
    res.send('Hello World')
})

//Bottom of everything
app.listen(8080, '0.0.0.0', () => {
    console.log('Server is running on')
})