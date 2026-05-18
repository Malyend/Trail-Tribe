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

//Vapid Keys here
webPush.setVapidDetails(
    'mailto:malyendf@gmail.com',
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
);

const corsConfig = {
    origin: ['https://malyend.github.io/Trail-Tribe/', 'http://localhost/5500'],
    methods: ['GET','POST','DELETE', 'PUT'],
    allowedHeaders: ("Contact-Type", "Authorisation"),
    Credentials: true
};

const logRequests = (req, res, next) => {
    console.log(`${req.method}, ${req.path} - ${new Date().toISOString()}`)
    next()
};

const app = express();
app.use(cors(corsConfig));
app.use(express.json());
app.use(logRequests);


const port = process.env.PORT || 8080;

//user Subscription (for notifications/ Authentication)

//routes

app.get('/api/news.json', (req, res) => {
    const news = require('./news.json');
    res.json(news);
})

app.post('/contact', (req, res, next) => {
    const {name, email, message} = req.body

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New message recieved from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    }

    Transponder.sendMail(mailOptions, (error, info) => {
        if(error){
            res.status(500).json({ message: 'Failed' })
        } else{
            res.status(200).json({ message: 'success' })
        }
    })
})



//Bottom of everything
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`)
})