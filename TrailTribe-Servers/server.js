require('dotenv').config();
// postgres Database here

//get all needed components
const webPush = require('web-push');
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const http = require('http');

// listen to curl request

const server = http.createServer((req, res) => {
    if(req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {body += chunk.toString(); });

        req.on('end', () => {
            console.log('recieved from bash: ', body)
            req.end('data recieved by node!')
        })
    }
});

//Vapid Keys here
webPush.setVapidDetails(
    'mailto:malyendf@gmail.com',
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
);

const app = express();
app.use(cors());
app.use(express.json());

//user Subscription

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/', (req, res) => {
    console.log("We recieved: ", req.body)

    res.send("We recieved a new update!")
})


//Bottom of everything
app.listen(8080, '0.0.0.0', () => {
    console.log('Server is running on ')
})