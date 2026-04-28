require('dotenv').config();
// postgres Database here

//get all needed components
const webPush = require('web-push');
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const http = require('http');
const nodemailer = require('nodemailer');

// need to create a Transponder
const Transponder = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

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

const port = process.env.PORT || 10000;

//user Subscription


app.get('/api/news.json', (req, res) => {
    const news = require('./news.json');
    res.json(news);
})

app.post('/contact', (req, res) => {
    const {username, email, message} = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'thetrailtribeyt@gmail.com',
        subject: `new message from ${username}`,
        text: `Email: ${email}\n\nmessage: ${message}`
    };

    Transponder.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        res.status(500).json({ success: false });
    } else {
        res.status(200).json({ success: true });
    }
})
})



app.post('/', (req, res) => {
    console.log("We recieved: ", req.body)

    res.send("We recieved a new update!")
})


//Bottom of everything
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`)
})